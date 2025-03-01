import * as angular from 'angular';
import { LoginService } from '../services/login.services';

interface IAuthScope extends angular.IScope {
    vm: LoginController;
}

export class LoginController {
    static $inject = ['$scope', '$window', 'AuthService'];
    user: any;
    message: string | null;

    constructor(private $scope: IAuthScope, private $window: angular.IWindowService, private authService: LoginService) {
        this.user = { name: "", email: "", password: "", mobile: "", address: "", country: "" };
        this.message = null;
        $scope.vm = this; 
    }

    login(): void {
        const authenticatedUser = this.authService.login(this.user.email, this.user.password);
        if (authenticatedUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(authenticatedUser));
            localStorage.setItem('loggedInUserId', authenticatedUser.id);
            this.$window.location.href = "#!/products"; 
            this.$window.location.reload();
        } else {
            this.message = "Invalid Email or Password!";
        }

       
    }

    register(): void {
        this.message = this.authService.register(this.user);
        if (this.message === "Registration successful!") {
            this.$window.location.href = "#!/login";
        }
    }
}

angular.module('myApp').controller('LoginController', LoginController);
