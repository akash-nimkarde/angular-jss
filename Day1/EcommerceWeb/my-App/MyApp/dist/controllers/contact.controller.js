var ContactController = /** @class */ (function () {
    function ContactController($scope) {
        $scope['vm'] = this;
    }
    return ContactController;
}());

angular.module('myApp').controller('ContactController', ContactController);