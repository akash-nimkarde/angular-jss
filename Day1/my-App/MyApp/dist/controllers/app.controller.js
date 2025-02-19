var MyFirstController = /** @class */ (function () {
    function MyFirstController($scope) {
        this.user = {
            "email": "akash@gmail.com",
            "password": "akash"
        };
        this.users = [
            {
                "email": "alex@gmail.com",
                "password": "alex1005"
            },
            {
                "email": "tom@gmail.com",
                "password": "tom"
            },
        ];
        $scope['vm'] = this;
    }
    MyFirstController.prototype.onValidate = function () {
        if (this.user.email === "akash@gmail.com" && this.user.password === "akash") {
            console.log("Welcome");
        }
        else {
            console.log("Invalid");
        }
    };
    return MyFirstController;
}());
