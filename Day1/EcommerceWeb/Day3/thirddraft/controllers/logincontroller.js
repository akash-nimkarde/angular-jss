
authApp.controller("LoginController", function($scope) {
    // User credentials
    $scope.user = {
        email: "",
        pass: ""
    };

    $scope.users=[
        {email: "akash@gmail.com",pass: "pass1"},
        {email: "chandrashekhar@gmail.com",pass: "pass1"},
        {email: "akshay@gmail.com",pass: "pass1"}
        ];

    // validation function for login
    $scope.onValidate = function() {
        console.log("onvalidate executed");
        if ($scope.user.email === "akash@gmail.com" && $scope.user.password === "akash") {
            alert("Hi from Angular - Login Successful!");
        } else {
            alert("Invalid Credentials");
        }
    };
});
