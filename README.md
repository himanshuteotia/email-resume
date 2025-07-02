# Resume Email Sender Chrome Extension

This project consists of a Chrome Extension and a Node.js backend to facilitate sending emails with pre-filled content and optional resume attachments.

## Features

**Chrome Extension:**
- Automatically detects selected email addresses on a webpage.
- Provides a popup form to compose emails with:
  - "To" field (auto-filled with selected email, editable)
  - "Subject" field (predefined, editable)
  - "Body" field (predefined, editable)
  - Option to upload a PDF resume.
- Displays success/failure messages after sending.

**Backend (Node.js + Express + MongoDB):**
- Saves selected email addresses to a MongoDB database with a timestamp.
- Handles email sending with attachments using Nodemailer.
- Supports a default resume if no file is uploaded from the frontend.
- All communication between the Chrome extension and backend is via fetch requests.

## Tech Stack

- **Chrome Extension:** Manifest V3, HTML, CSS, JavaScript (no frameworks)
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), Nodemailer, Multer

## Setup and Installation

### 1. Backend Setup

1.  **Navigate to the `backend` directory:**
    ```bash
    cd backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env` file in the `backend` directory with the following content. **Replace `YOUR_GMAIL_APP_PASSWORD` with your actual Gmail App Password.**
    ```
    EMAIL_SERVICE=gmail
    EMAIL_USER=himanshuteotia7@gmail.com
    EMAIL_PASS=YOUR_GMAIL_APP_PASSWORD
    EMAIL_FROM=himanshuteotia7@gmail.com
    ```
    *Note: For `EMAIL_PASS`, it's highly recommended to use a [Gmail App Password](https://support.google.com/accounts/answer/185833?hl=en) if you have 2-Factor Authentication enabled on your Google account, as using your regular password is less secure and may not work.*

4.  **MongoDB:**
    Ensure you have MongoDB installed and running. The backend connects to `mongodb://localhost:27017/email-sender` by default.

5.  **Default Resume (Optional):**
    If you want to attach a default resume when none is uploaded from the extension, place your PDF file named `HIMANSHU_TEOTIA_RESUME.pdf` in the `backend/uploads/` directory.

6.  **Start the backend server:**
    ```bash
    npm start
    ```
    The server will run on `http://localhost:3000`.

### 2. Chrome Extension Setup

1.  **Open Chrome and go to Extensions:**
    Navigate to `chrome://extensions` in your browser.

2.  **Enable Developer Mode:**
    Toggle on the "Developer mode" switch in the top right corner.

3.  **Load the Extension:**
    Click on the "Load unpacked" button.

4.  **Select the Extension Directory:**
    Browse to the `chrome-extension` directory within this project and select it.

5.  **Pin the Extension (Optional):**
    For easy access, click the puzzle piece icon next to your profile avatar in Chrome, and then click the pin icon next to "Email Sender" to pin it to your toolbar.

## Usage

1.  **Select an Email:** On any webpage, select (highlight) an email address.
2.  **Open the Extension:** Click on the "Email Sender" extension icon in your Chrome toolbar.
3.  **Compose Email:** The popup form will appear with the selected email address pre-filled in the "To" field. You can edit the "To", "Subject", and "Body" fields.
4.  **Attach Resume (Optional):** Click "Choose File" to upload a PDF resume. If no file is chosen, the default resume (if configured in the backend) will be attached.
5.  **Send Email:** Click the "Send" button. A success or error message will be displayed in the popup.

## Project Structure

```
email-resume/
├── backend/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── uploads/
│       └── HIMANSHU_TEOTIA_RESUME.pdf (optional, default resume)
├── chrome-extension/
│   ├── background.js
│   ├── images/
│   │   ├── icon16.png
│   │   ├── icon48.png
│   │   └── icon128.png
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   └── style.css
└── README.md
```

## Contributing

Feel free to fork this repository and contribute! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
