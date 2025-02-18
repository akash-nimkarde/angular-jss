
var LoginController = /** @class */ (function () {
    function LoginController($scope, $window, authService) {
        this.$scope = $scope;
        this.$window = $window;
        this.authService = authService;
        this.user = { name: "", email: "", password: "", mobile: "", address: "", country: "" };
        this.message = null;
        $scope.vm = this;
    }
    LoginController.prototype.login = function () {
        var authenticatedUser = this.authService.login(this.user.email, this.user.password);
        if (authenticatedUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(authenticatedUser));
            localStorage.setItem('loggedInUserId', authenticatedUser.id);
            this.$window.location.href = "#!/products";
            this.$window.location.reload();
        }
        else {
            this.message = "Invalid Email or Password!";
        }
    };
    LoginController.prototype.register = function () {
        this.message = this.authService.register(this.user);
        if (this.message === "Registration successful!") {
            this.$window.location.href = "#!/login";
        }
    };
    LoginController.$inject = ['$scope', '$window', 'AuthService'];
    return LoginController;
}());
angular.module('myApp').controller('LoginController', LoginController);
