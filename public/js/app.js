console.log("app.js connected");

getMembers();

const addMemberForm = document.querySelector('#addMember');
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createMember(e);
    refreshMembers();
    e.target.reset();
});

function createMember(e) {
    // Create member object with values from form on page
    let name = e.target.querySelector("input[name='name']").value;
    let email = e.target.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    member.addToDB();
}

const memberList = document.querySelector('#memberList');

async function getMembers() {
    const response = await fetch('/api');
    const data = await response.json();
    data.forEach(member => {
        createMemberDiv(member, memberList);
    });
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

    // Append name and email to created div and new div to the dom
    div.append(name, email);
    mainDiv.append(div);
}