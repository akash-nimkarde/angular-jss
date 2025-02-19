
angular.module('myApp', ['ngRoute'])
    .service('ProductService', ProductService)
    .service('LoginService', LoginService)
    .controller('MyFirstController', MyFirstController)
    .controller('ProductCatalogController', ProductCatalogController)
    .controller('ShoppingController', ShoppingController)
    .controller('LoginController', LoginController)
    .controller('HomeController', HomeController)
    .controller('RegisterController', RegisterController)
    .controller('AboutController', AboutController)
    .controller('ContactController', ContactController)
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
            templateUrl: "views/home.html", // Template for the home route
            controller: 'HomeController', // Controller for the home route
            controllerAs: 'homeControllerCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/shoppingcart', {
            templateUrl: 'views/shopping-cart.html', // Template for the cart route
            controller: 'ShoppingController', // Controller for the cart route
            controllerAs: 'shoppingControllerCtrl' // Use 'cartCtrl' as alias for the controller instance
        })
            .when('/home', {
            templateUrl: 'views/home.html', // Template for the home route
            controller: 'HomeController', // Controller for the home route
            controllerAs: 'homeControllerCtrl' // Use 'homeCtrl' as alias for the controller instance
        })
            .when('/about', {
            templateUrl: 'views/about.html', // Template for the about route
            controller: 'AboutController', // Controller for the about route
            controllerAs: 'aboutControllerCtrl' // Use 'aboutCtrl' as alias for the controller instance
        })
            .when('/contact', {
            templateUrl: 'views/contact.html', // Template for the contact route
            controller: 'ContactController', // Controller for the contact route
            controllerAs: 'contactControllerCtrl' // Use 'contactCtrl' as alias for the controller instance
        })
            .when('/login', {
            templateUrl: 'views/login.html', // Template for the login route
            controller: 'LoginController', // Controller for the login route
            controllerAs: 'loginControllerCtrl' // Use 'loginCtrl' as alias for the controller instance
        })
            .when('/register', {
            templateUrl: 'views/register.html', // Template for the register route
            controller: 'RegisterController', // Controller for the register route
            controllerAs: 'registerControllerCtrl' // Use 'registerCtrl' as alias for the controller instance
        })
            .when('/product', {
            templateUrl: 'views/product.catalog.html', // Template for the product.catalog route
            controller: 'Product-CatalogController', // Controller for the product.catalog route
            controllerAs: 'product-CatalogControllerCtrl' // Use 'productCatalogCtrl' as alias for the controller instance
        })
            .otherwise({
            redirectTo: "/"
        });
    }]);
