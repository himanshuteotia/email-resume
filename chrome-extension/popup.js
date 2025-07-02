document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        func: () => window.getSelection().toString(),
      },
      (selection) => {
        if (selection && selection[0] && selection[0].result) {
          document.getElementById('to').value = selection[0].result;
        }
      }
    );
  });

  document.getElementById('email-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const to = document.getElementById('to').value;
    const subject = document.getElementById('subject').value;
    const body = document.getElementById('body').value;
    const resume = document.getElementById('resume').files[0];

    const formData = new FormData();
    formData.append('to', to);
    formData.append('subject', subject);
    formData.append('body', body);
    if (resume) {
      formData.append('resume', resume);
    }

    const status = document.getElementById('status');
    status.textContent = 'Sending...';

    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        status.textContent = 'Email sent successfully!';
        // Optionally, save the email to the database
        fetch('http://localhost:3000/save-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: to })
        });
      } else {
        status.textContent = 'Error: ' + data.message;
      }
    })
    .catch(error => {
      console.error('Error:', error);
      status.textContent = 'An error occurred.';
    });
  });
});