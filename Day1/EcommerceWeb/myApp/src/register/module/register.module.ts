import * as angular from 'angular'; // Import AngularJS
import { RegisterController } from '../controller/register.controller'; // Import the RegisterController

// Define the register module
const registerModule = angular.module('ecommerceApp.register', [])

  // Register the RegisterController with this module
  .controller('RegisterController', RegisterController);

export default registerModule;
var registerApp=angular.module("registerapp",[]);