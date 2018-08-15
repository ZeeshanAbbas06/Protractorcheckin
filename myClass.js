class User{
    constructor(firstname, lastname, credit){
    
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    
    }
    getFullName(){

        var fullname = `${this.firstname} ${this.lastname} is the name`;
        return fullname;

    }
    
}
    
    
    var john = new User("john", "anderson", 34);
    
    console.log(john)
    console.log(john.getFullName());


