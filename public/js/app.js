const memberList = document.querySelector('#memberList');

// Function retrieves members from db and adds to page
async function getMembers() {
    const response = await fetch('/api');
    const data = await response.json();
    data.forEach(member => {
        createMemberDiv(member, memberList);
    });
}

getMembers();

const addMemberForm = document.querySelector('#addMember');
// Event Listener to create member when form is submitted and refersh page display
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createMember(e.target);
    refreshMembers();
    e.target.reset();
});

function createMember(form) {
    // Create member object with values from form on page
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
    const editButtons = document.querySelectorAll('button.edit');
    editButtons.forEach((button) => {
        button.addEventListener('click', (e) => allowEdit(e));
    })
}

// Turns member information into editable
function allowEdit(e) {
    if (e.target.className === 'edit') {
        const memberDivToEdit = e.target.parentElement;
        const nameElement = memberDivToEdit.querySelector('.name');
        const nameValue = nameElement.textContent;
        const emailElement = memberDivToEdit.querySelector('.email');
        const emailValue = emailElement.textContent;
        nameElement.innerHTML = `<input type="text" value="${nameValue}"></input>`;
        emailElement.innerHTML = `<input type="text" value="${emailValue}"></input>`;
        e.target.textContent = 'Save';
        e.target.classList = 'save';
    }
}