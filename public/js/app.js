console.log("app.js connected");

const addMemberForm = document.querySelector('#addMember');
addMemberForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addMembertoDB(e);
});

async function addMembertoDB(e) {
    // Create member object with values from form on page
    let name = e.target.querySelector("input[name='name']").value;
    let email = e.target.querySelector("input[name='email']").value;
    let member = new Member(name, email);
    
    const options = {
        method: 'POST',
        body: JSON.stringify(member),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch('/api', options);
    const json = await response.json();
    console.log(json);
}