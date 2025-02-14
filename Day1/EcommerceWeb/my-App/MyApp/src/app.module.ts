import * as angular from 'angular';
import 'angular-route';  // Import ngRoute for routing
import { MyFirstController } from './controllers/app.controller';
import { ProductCatalogController } from './controllers/product-catalog.controller';
import { ShoppingController } from './controllers/shopping.controller';
import { LoginController } from './controllers/login.controller';
import { ProductService } from './services/product.service';
import { HomeController } from './controllers/home.controller';

angular.module('myApp', ['ngRoute'])
.service('ProductService',ProductService)
.controller('MyFirstController',MyFirstController)
.controller('ProductCatalogController',ProductCatalogController)
.controller('ShoppingController',ShoppingController)
.controller('LoginController',LoginController)
.controller('HomeController',HomeController)
.config(['$routeProvider', ($routeProvider:any) => {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',  // Template for the home route
      controller: 'HomeController',  // Controller for the home route
      controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
    })
      .when('/cart', {
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
        controller: 'HomeController',  // Controller for the about route
        controllerAs: 'homeControllerCtrl'  // Use 'aboutCtrl' as alias for the controller instance
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',  // Template for the contact route
        controller: 'HomeController',  // Controller for the contact route
        controllerAs: 'homeControllerCtrl'  // Use 'contactCtrl' as alias for the controller instance
      })
      .otherwise({
        redirectTo: "/"
    });
  }]);
