//angular js application Module and controller

var product = angular.module("transflower", []);


app.controller("ProductController", function($scope) {
    // User credentials
    $scope.product = {
        productId: "",
        productName: "",
        productPrice:"",
        productDescription:""
    };

    $scope.products=[
        {productId: "1",productName: "Book",productPrice:"50",productDescription:"It is a good Book"},
        {productId: "2",productName: "Pen",productPrice:"10",productDescription:"It is a blue Pen"},
        {productId: "3",productName: "Pencil",productPrice:"5",productDescription:"It is a good pencil"},
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
