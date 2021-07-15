# MemberManager
This is a project for my JavaScript course through Code Louisville. It is a simple browser application that allows users to add, edit, and delete names and emails stored in a database. I have used node, express, and NeDB to manage the database.

## Instructions
To run this app follow the instructions below:

[1] Clone this repo to your pc.
```
git clone https://github.com/jkmounts/MemberManager.git
```
[2] In your terminal, Run `npm install` in the root directory (MemberManager) to install all the needed node-modules.

[3] Start the server by running `node index.js` in your terminal. (Still from the root directory)

[4] Navigate to <http://localhost:3000/> in your browser.

[5] Begin adding and editing members in the browser. All changes will be stored in your local copy of the app.


---

## Requirements

I have met the following project requirements as outlined in the course syllabus:

- [X] Your application must have a responsive design through the use of media queries, Bootstrap, CSS Grid, Flexbox, and/or other similar approaches - we need to ensure that you can integrate your new JavaScript skills with your HTML/CSS skills you previously learned
  - [X] Use CSS FlexBox to make design responsive on all screensizes.
- [X] Project is uploaded to your GitHub repository and shows at minimum 5 separate commits
- [X] Project includes a README file
- [X] Read and parse an external file (such as JSON or CSV) into your application and display some data from that in your app
  - Added NeDB Database that app retrieves and displays information from
- [X] Create a form and save the values (on click of Submit button) to an external file 
  - Information submitted is stored in the database
- [X] Implement a regular expression (regex) to ensure a field either a phone number or an email address is always stored and displayed in the same format
  - Regex used to verify valid email and diable submission if it is invalid.
