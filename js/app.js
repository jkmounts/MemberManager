console.log("app.js connected");

const addMemberForm = document.querySelector('#addMember');
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = e.target.querySelector("input[name='name']").value;
    let email = e.target.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    console.log(member);
});