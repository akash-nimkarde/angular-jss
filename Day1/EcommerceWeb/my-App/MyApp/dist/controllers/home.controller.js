var HomeController = /** @class */ (function () {
    function HomeController($scope) {
        $scope['vm'] = this;
    }
    HomeController.$inject = ['$scope', 'ProductService'];
    return HomeController;
}());

angular.module('myApp').controller('HomeController', HomeController);