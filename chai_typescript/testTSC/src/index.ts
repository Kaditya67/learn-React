class User {
    email: string
    name: string
    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const user = new User("aditya@gmail.com", "adi")

class myUser {
    constructor(public email: string, private name: string) {
        this.email = email;
        this.name = name;
    }
}