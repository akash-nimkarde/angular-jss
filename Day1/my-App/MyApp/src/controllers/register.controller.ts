import { User } from "../models/user.model";
import { LoginService } from "../services/login.services";

export class RegisterController{
    static $inject = ['LoginService'];
    user: User = {
        Id: "",
        Name: "",
        PhoneNumber: "",
        Password: "",
        Address: "",
        Email: ""
    }
    constructor(private authService: LoginService){
        
    }
    register(){
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        this.user.Id = users[users.length - 1]?.Id;
        users.push(this.user);
        this.authService.register(this.user);
    }
}