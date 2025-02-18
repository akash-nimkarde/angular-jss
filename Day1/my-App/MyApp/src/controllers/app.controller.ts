
import { IScopeCustom } from "../interfaces/iscope.interface";



export class MyFirstController{
    name!: string;
    user = {
        "email":"akash@gmail.com",
        "password":"akash"
    };
    users = [
        {
            "email":"alex@gmail.com",
            "password":"alex1005"
        },
        {
            "email":"tom@gmail.com",
            "password":"tom"
        },
    ]
    onValidate(){
        if(this.user.email === "akash@gmail.com" && this.user.password === "akash"){
            console.log("Welcome");
        }else{
            console.log("Invalid");
        }
    }

    constructor($scope: IScopeCustom){
        $scope['vm'] = this;
    }
}