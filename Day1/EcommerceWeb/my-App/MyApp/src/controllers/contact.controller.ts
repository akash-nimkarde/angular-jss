import { IScopeCustom } from "../interfaces/iscope.interface";
export class ContactController{
    constructor($scope: IScopeCustom){
        $scope['vm'] = this;
    } 
    // myApp.controller("ContactController", function($scope) {
    //     $scope.contact = {};
    //     $scope.successMessage = "";
    
    //     $scope.submitForm = function() {
    //         if ($scope.contact.name && $scope.contact.email && $scope.contact.message) {
    //             $scope.successMessage = "Thank you for reaching out! We'll get back to you soon.";
    //             $scope.contact = {}; // Reset form after submission
    //         }
    //     };
    // });
    
}