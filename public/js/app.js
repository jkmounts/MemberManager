const memberList = document.querySelector('#memberList');
getMembers();
newMemberFormListener();

async function getMembers() {
    const response = await fetch('/api');
    const data = await response.json();
    data.forEach(member => {
        createMemberDiv(member, memberList);
    });
    createEditHandlers();
}

function newMemberFormListener() {
    const newMemberForm = document.querySelector('#addMember');
    newMemberForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createMember(e.target);
        refreshMembers();
        e.target.reset();
    });
}

function createMember(form) {
    let name = form.querySelector("input[name='name']").value;
    let email = form.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    member.addToDB();
}

function refreshMembers() {
    memberList.innerHTML = '';
    getMembers();
}

function createMemberDiv(member, mainDiv) {
    // Create div for storing individual members
    const div = document.createElement('div');  
    div.id = member._id;
    div.className = 'member';

    // Create p for storing member name
    const name = document.createElement('p');
    name.textContent = member.name;
    name.classList = 'name';

    // Create p for storing member email
    const email = document.createElement('p');
    email.textContent = member.email;
    email.classList = 'email';

    // Create edit button
    const button = document.createElement('button');
    button.textContent = 'Edit';
    button.classList = 'edit';

    // Append name and email to created div and new div to the dom
    div.append(name, email, button);
    mainDiv.append(div);
}

// Function to add event listener to edit buttons on page
function createEditHandlers() {
    const editButtons = document.querySelectorAll('#memberList button');
    editButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if (e.target.className === 'edit') {
                allowEdit(e.target);
            } else if (e.target.className === 'save') {
                saveEdits(e.target);
            }
        })       
    })
}

// Turns member information into editable
function allowEdit(button) {
    const memberDivToEdit = button.parentElement;
    const nameElement = memberDivToEdit.querySelector('.name');
    const nameValue = nameElement.textContent;
    const emailElement = memberDivToEdit.querySelector('.email');
    const emailValue = emailElement.textContent;
    nameElement.innerHTML = `<input type="text" value="${nameValue}"></input>`;
    emailElement.innerHTML = `<input type="text" value="${emailValue}"></input>`;
    button.textContent = 'Save';
    button.classList = 'save';
}

function saveEdits(button) {
    const memberDivSelected = button.parentElement;
    const memberId = memberDivSelected.id;
    const nameElement = memberDivSelected.querySelector('.name');
    const emailElement = memberDivSelected.querySelector('.email');
    const updatedName = nameElement.querySelector('input').value;
    const updatedEmail = emailElement.querySelector('input').value;
    updateEntry(memberId, updatedName, updatedEmail);
    nameElement.innerHTML = updatedName;
    emailElement.innerHTML = updatedEmail;
    button.textContent = 'Edit';
    button.classList = 'edit';
}

async function updateEntry(id, newName, newEmail) {
    const options = {
        method: 'PUT',
        body: JSON.stringify({name: newName, email: newEmail, _id: id}),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch('/api', options);
    console.log(response);
}