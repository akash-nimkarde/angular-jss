import * as angular from 'angular';
var AppController = /** @class */ (function () {
    function AppController($scope, $location) {
        var _this = this;
        this.$scope = $scope;
        this.$location = $location;
        this.$scope.showHeaderFooter = false; // Initialize variable
        this.$scope.$on('$routeChangeSuccess', function () {
            var currentPath = _this.$location.path();
            // this.$scope.showHeaderFooter = currentPath.startsWith('/product-catalog');
        });
    }
    AppController.$inject = ['$scope', '$location'];
    return AppController;
}());
export { AppController };
angular.module('ecomApp').controller('AppController', AppController);
