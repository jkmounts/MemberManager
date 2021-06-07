console.log("app.js connected");

const addMemberForm = document.querySelector('#addMember');
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addMembertoDB(e);
});

function addMembertoDB(e) {
    // Create member object with values from form on page
    let name = e.target.querySelector("input[name='name']").value;
    let email = e.target.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    member.addToDB();
}