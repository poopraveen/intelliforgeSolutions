/**
 * Google Apps Script — Run this ONCE to set up the Leads sheet headers.
 *
 * Steps:
 *   1. Open your Google Sheet
 *   2. Extensions → Apps Script
 *   3. Paste this entire script, click Save, then Run "setupSheet"
 *   4. Grant permissions when prompted
 */
function setupSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Create "Leads" tab if it doesn't exist
  let sheet = ss.getSheetByName("Leads");
  if (!sheet) {
    sheet = ss.insertSheet("Leads");
  }

  // Set column headers in row 1
  const headers = [
    "Timestamp",
    "Full Name",
    "Email",
    "Phone",
    "Company Name",
    "Business Type",
    "Product Interest",
    "Message",
    "Status",          // New / Contacted / Demo Booked / Closed
  ];

  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  // Style the header row
  const headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setBackground("#6366f1");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(11);

  // Freeze header row
  sheet.setFrozenRows(1);

  // Auto-resize columns
  sheet.autoResizeColumns(1, headers.length);

  // Set column widths for readability
  sheet.setColumnWidth(1, 180);  // Timestamp
  sheet.setColumnWidth(2, 150);  // Name
  sheet.setColumnWidth(3, 200);  // Email
  sheet.setColumnWidth(8, 300);  // Message

  Logger.log("✅ Leads sheet ready! Share this sheet with your service account email.");
}
