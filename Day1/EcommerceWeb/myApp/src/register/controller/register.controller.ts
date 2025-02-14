import * as angular from 'angular';

interface IUser {
  email: string;
  password: string;
}

export class RegisterController implements angular.IController {
  user: IUser = {
    email: '',
    password: ''
  };

  static $inject = ['$scope', '$http', '$state'];  // Inject necessary services

  constructor(private $scope: angular.IScope) {}

  // Register method to handle user registration
  register(): void {
    if (!this.user.email || !this.user.password) {
      alert('Please fill in both email and password!');
      return;
    }

    // Simulating saving user data (you can replace this with an actual API call)
    const userData = { email: this.user.email, password: this.user.password };
    console.log('User Data:', userData);

    // You could save the user data to localStorage or a database here
    localStorage.setItem('user', JSON.stringify(userData));  // Example of saving to localStorage

    // After registration, redirect user to login page or another page
    // For demonstration purposes, we'll just alert and reset the form
    alert('Registration successful for ' + this.user.email);
    
    // Optionally, redirect to the login page or home page
    // For example, if you use ui-router, you can change the state (route)
    // this.$state.go('login');  // Uncomment if using ui-router

    // Reset the form fields after successful registration
    this.user.email = '';
    this.user.password = '';
  }
}

// Register the controller with the AngularJS module
angular.module('MyApp').controller('RegisterController', RegisterController);