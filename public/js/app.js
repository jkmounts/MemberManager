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
    console.log(data);
}