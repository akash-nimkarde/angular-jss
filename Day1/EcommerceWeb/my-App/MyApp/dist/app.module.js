
angular.module('myApp', ['ngRoute'])
    .service('ProductService', ProductService)
    .controller('MyFirstController', MyFirstController)
    .controller('ProductCatalogController', ProductCatalogController)
    .controller('ShoppingController', ShoppingController)
    .controller('LoginController', LoginController)
    .controller('HomeController', HomeController)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',  // Template for the home route
            controller: 'HomeController',  // Controller for the home route
            controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
          })
            .when('/cart', {
            templateUrl: 'views/shopping-cart.html', // Template for the home route
            controller: 'ShoppingController', // Controller for the home route
            controllerAs: 'shoppingControllerCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
        .when('/home', {
            templateUrl: 'views/home.html',  // Template for the home route
            controller: 'HomeController',  // Controller for the home route
            controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
          })
          .when('/about', {
            templateUrl: 'views/about.html',  // Template for the home route
            controller: 'HomeController',  // Controller for the home route
            controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
          })
          .when('/contact', {
            templateUrl: 'views/contact.html',  // Template for the home route
            controller: 'HomeController',  // Controller for the home route
            controllerAs: 'homeControllerCtrl'  // Use 'homeCtrl' as alias for the controller instance
          })
          .otherwise({
            redirectTo: "/"
        });
    }]);
