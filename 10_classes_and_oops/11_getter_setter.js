class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}maaz`
    }

    set password(value){
        this._password = value
    }
}

const maaz = new User("m@maaz.ai", "abc")
console.log(maaz.email);