class User {

    constructor(name, gender, birt, country, email, password, photo, admin) {

        this._name = name;
        this._gender = gender;
        this._birt = birt;
        this._country = country;
        this._email = email;
        this._password = password;
        this._photo = photo;
        this._admin = admin;
        this._register = new Date();

    }
    get register() {
        return this._register;
    }

    get name(){
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender) {
        this._gender = gender;
    }

    get birt(){
        return this._birt;
    }

    set birt(birt) {
        this._birt = birt;
    }

    get country(){
        return this._country;
    }

    set country(country) {
        this._country = this.country;
    }

    get email(){
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get password(){
        return this._password;
    }

    set password(password) {
        this._password = password;
    }

    get photo(){
        return this._photo;
    }

    set photo(photo) {
        this._photo = photo;
    }

    get admin(){
        return this._admin;
    }

    set admin(admin) {
        this._admin = admin;
    }

}