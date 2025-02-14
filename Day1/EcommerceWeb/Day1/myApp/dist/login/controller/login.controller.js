"use strict";
loginApp.controller("LoginController", function ($scope) {
    //User Credentials
    $scope.user = {
        email: "",
        pass: ""
    };
    $scope.users = [
        { email: "akash@gmail.com", pass: "pass1" },
        { email: "akshay@gmail.com", pass: "pass2" },
        { email: "chandrashekhar@gmail.com", pass: "pass3" },
    ];
    //validation function for login
    $scope.onValidate = function () {
        console.log("onValidate executed");
        if ($scope.user.email === "akash@gmail.com" && $scope.user.password === "pass1") {
            alert("Hi, Login Successful!");
        }
        else {
            alert("Invalid Credentials!");
        }
    };
});
