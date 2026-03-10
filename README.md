Portfolio link: https://stephen-semense.github.io/Semense-Web-Portfolio/

INTERACTIVE:

Scrolling - 
  When the user scrolls, the script detects which section element page the user is currently viewing and highlights the corresponding navigation link.

Web Dev & Frontend Dev. - 
  When the website finishes loading, the code waits for half a second. Then, it starts a typing effect on an element with the class .text. It types the words "Web Developer" and "Frontend Developer" one by one, like someone is typing them on the screen. The text appears and disappears letter by letter, and this keeps repeating again and again. It also shows a message in the browser’s console to let you know the typing animation has started.

Contanct Me Form

Note: Before starting, I created an account on EmailJS to use with a contact form. In EmailJS templates, {name} and {reply_to} are called template variables or placeholders. In the HTML form, you use them by giving your input fields a name attribute like this: < input type="text" name="name" placeholder="Your Name" required />. The value typed into this input is linked to the {name} variable in EmailJS. You can learn more at https://www.emailjs.com/.
1. Waits for the Page to Load
When the webpage is fully loaded, the code starts running.
2. EmailJS is Initialized
It connects to your EmailJS account using your user ID.
3. Gets the Current Time
The code gets the current time (like 4:05) and puts it into a hidden field in the form. This helps you know what time the message was sent.
4. Handles Form Submission
When someone fills out the contact form and clicks submit:
It stops the page from refreshing (default browser behavior).
It sends the form data (like name, email, message) using EmailJS.
5. Sends the Email to Me (stephensemense@gmail.com)
EmailJS takes the form data and uses your chosen template (template_ukf8pdo) and service (service_0gyk09r) to send an email to your email address, which you set up in EmailJS.
6. Shows a Message to the User
If the email is sent successfully it show this alert.
alert("Message sent successfully!") appears and the form clears.
If it fails it show this alert.
alert("Failed to send message. Please try again.") appears.

PROJECTS:

Watch 

  This watch creates a live digital clock that runs automatically when the page loads. It finds the HTML elements with the IDs hours, minutes, seconds, and ampm, which are used to show the current time. The updateTime function gets the current time, checks if it’s AM or PM, and converts the hour to 12-hour format. It makes sure hours, minutes, and seconds always have two digits (like 08 or 03) and updates the webpage with the current time. The function runs once right away and then continues to run every second using setInterval, so the clock always stays up to date.

To-Do List

  This project creates a basic to-do list. When the user types a task into the input box and clicks the "Add Task" button, the code checks if the input is not empty. If it’s empty, it shows an alert asking the user to enter something. If there is text, it creates a new list item ( < li > ) with the task. Clicking the task will toggle a "completed" style, which can be used to show the task is done (like crossing it out). Each task also gets a delete button ("X"), and clicking it will remove the task from the list. After adding the task, the input box is cleared so the user can enter a new one.





