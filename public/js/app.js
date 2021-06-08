console.log("app.js connected");

const addMemberForm = document.querySelector('#addMember');
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createMember(e);
});

function createMember(e) {
    // Create member object with values from form on page
    let name = e.target.querySelector("input[name='name']").value;
    let email = e.target.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    member.addToDB();
}

async function getMembers() {
    const response = await fetch('/api');
    const data = await response.json();
    data.forEach(member => {
        const memberList = document.querySelector('#memberList');
        const li = document.createElement('li');  
        li.textContent = `${member.name}, ${member.email}`;
        memberList.append(li);
    });
}