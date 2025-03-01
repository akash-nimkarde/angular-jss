import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing
import { MyFirstController } from './controllers/app.controller';
import { ProductCatalogController } from './controllers/product-catalog.controller';
import { ShoppingController } from './controllers/shopping.controller';
import { LoginController } from './controllers/login.controller';
import { ProductService } from './services/product.service';
import { HomeController } from './controllers/home.controller';
import {RegisterController} from './controllers/register.controller';
import { AboutController } from './controllers/about.controller';
import {ContactController} from './controllers/contact.controller';
import { LoginService } from './services/login.services';




angular.module('myApp', ['ngRoute'])
.service('ProductService',ProductService)
.service('LoginService', LoginService)
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)
.controller('ShoppingController',ShoppingController)
.controller('LoginController',LoginController)
.controller('HomeController',HomeController)
.controller('RegisterController',RegisterController)
.controller('AboutController',AboutController)
.controller('ContactController',ContactController)
.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
    .when('/', {
      templateUrl: "views/home.html",  // Template for the home route
      controller: 'HomeController',  // Controller for the home route
      controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
      .when('/shoppingcart', {
        templateUrl: 'views/shopping-cart.html',  // Template for the cart route
        controller: 'ShoppingController',  // Controller for the cart route
        controllerAs: 'shoppingControllerCtrl'  // Use 'cartCtrl' as alias for the controller instance
      })
      .when('/home', {
        templateUrl: 'views/home.html',  // Template for the home route
        controller: 'HomeController',  // Controller for the home route
        controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
      })
      .when('/about', {
        templateUrl: 'views/about.html',  // Template for the about route
        controller: 'AboutController',  // Controller for the about route
        controllerAs: 'aboutControllerCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',  // Template for the contact route
        controller: 'ContactController',  // Controller for the contact route
        controllerAs: 'contactControllerCtrl'  // Use 'contactCtrl' as alias for the controller instance
      })
      .when('/login', {
        templateUrl: 'views/login.html',  // Template for the contact route
        controller: 'LoginController',  // Controller for the contact route
        controllerAs: 'loginControllerCtrl'  // Use 'contactCtrl' as alias for the controller instance
      })
      .when('/register', {
        templateUrl: 'views/register.html',  // Template for the contact route
        controller: 'RegisterController',  // Controller for the contact route
        controllerAs: 'registerControllerCtrl'  // Use 'contactCtrl' as alias for the controller instance
      })
      .when('/product', {
        templateUrl: 'views/product.catalog.html',  // Template for the contact route
        controller: 'Product-CatalogController',  // Controller for the contact route
        controllerAs: 'product-CatalogControllerCtrl'  // Use 'contactCtrl' as alias for the controller instance
      })
      .otherwise({
        redirectTo: "/"
    });

   
  }]);
