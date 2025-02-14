

interface ICustomScope extends angular.IScope {
  vm: any; 
}

export class MyController {
  static $inject = ['$scope'];
  message: string;
  users: Array<any>;

  constructor(private $scope: ICustomScope) {
    this.message = 'Welcome to Transflower TypeScript!';
    this.users=[
      { name: 'Ravi Tambade', email: 'ravi.tambade@transflower.in' },
      { name: 'Sameer Patil', email: 'sameer.patil@gmail.com' },
      { name: 'Manisha Pant', email: 'manisha.pant@gmail.com' }
    ];
    
    $scope['vm'] = this;
  }
}

//angular.module('myApp').controller('MyController', MyController);
import * as angular from "angular";
interface IcustomScope extends angular.IScope{
    vm:any;
}

export class LoginController{
    static $inject = ['$scope'];
    email: string;
    pass: string;

    constructor(private $scope: ICustomScope){
        this.email="";
        this.pass="";
    }

loginApp.controller("LoginController",function($scope){
    //User Credentials
    $scope.user={
        email:"",
        pass:""
    };

    $scope.users=[
        {email:"akash@gmail.com", pass: "pass1"},
        {email:"akshay@gmail.com", pass: "pass2"},
        {email:"chandrashekhar@gmail.com", pass: "pass3"},
    ];

    //validation function for login
    $scope.onValidate= function(){
        console.log("onValidate executed");
        if($scope.user.email ==="akash@gmail.com" && $scope.user.password==="pass1")
        {
            alert("Hi, Login Successful!");
        }
        else{
            alert("Invalid Credentials!");
        }
    }

});
}

