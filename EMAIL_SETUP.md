# Email Collection Setup with Google Sheets

## Steps to Configure Email Collection:

### 1. Create a New Google Sheet
- Go to [Google Sheets](https://sheets.google.com)
- Create a new spreadsheet
- Name it "Dropout Hacks - Email Notifications"
- Add headers in the first row: `Email` (A1) and `Timestamp` (B1)

### 2. Set Up Google Apps Script
1. In your Google Sheet, click **Extensions > Apps Script**
2. Delete any default code and paste this:

```javascript
function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    // Append email and timestamp to sheet
    sheet.appendRow([data.email, data.timestamp]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Deploy > New deployment**
4. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
5. Configure:
   - Description: "Email Collection Endpoint"
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Click **Deploy**
7. Copy the **Web app URL** (it will look like: `https://script.google.com/macros/s/.../exec`)

### 3. Configure Your Project
1. Create a `.env.local` file in your project root
2. Add this line with your Web app URL:
```
NEXT_PUBLIC_EMAIL_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

### 4. Restart Your Dev Server
```bash
npm run dev
```

### 5. Export Emails as CSV
- In your Google Sheet, go to **File > Download > Comma-separated values (.csv)**
- Your emails will be exported with timestamps!

## Security Note
The Apps Script is set to "Anyone" access because it's a public form. The sheet itself remains private to your Google account.
