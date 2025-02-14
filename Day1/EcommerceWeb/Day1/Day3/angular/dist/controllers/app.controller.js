var MyController = /** @class */ (function () {
    function MyController($scope) {
        this.$scope = $scope;
        this.message = 'Welcome to My new Angular js app!';
        this.users = [
            { name: 'Akshay Surwase', email: 'akshaysurwase@gmail.com' },
            { name: 'Lakhan Chavan', email: 'lakhanchavan@gmail.com' },
            { name: 'Chandrashekhar Ambulge', email: 'chandrashekharambulge@gmail.com' }
        ];
        $scope['vm'] = this;
    }
    MyController.$inject = ['$scope'];
    return MyController;
}());

//angular.module('myApp').controller('MyController', MyController);
