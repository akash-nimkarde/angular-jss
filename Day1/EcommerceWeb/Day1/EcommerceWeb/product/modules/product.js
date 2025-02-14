//angular js application Module and controller

var app = angular.module("transflower", []);
app.controller("ProductController", function($scope) {
    // User credentials
    $scope.product = {
        productImage:"",
        productId: "",
        productName: "",
        productPrice:"",
        productDescription:""
    };

    $scope.products = [
        {productId: "1",productName: "Book",productPrice:"50",productDescription:"It is a good Book"},
        {productId: "2",productName: "Pen",productPrice:"10",productDescription:"It is a blue Pen"},
        {productId: "3",productName: "Pencil",productPrice:"5",productDescription:"It is a good pencil"},
        ];

    // validation function for login
    $scope.addProduct = function() {
        console.log("Product added");
        alert("Product Added Successfully");
    };
});
