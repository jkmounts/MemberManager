console.log("Member.js Connected");

class Member {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    async addToDB() {
        const options = {
            method: 'POST',
            body: JSON.stringify(this),
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    }
}
