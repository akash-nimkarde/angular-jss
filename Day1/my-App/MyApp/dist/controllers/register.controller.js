var RegisterController = /** @class */ (function () {
    function RegisterController() {
        this.user = {
            Id: "",
            Name: "",
            PhoneNumber: "",
            Password: "",
            Address: "",
            Email: ""
        };
    }
    RegisterController.prototype.register = function () {
        var _a;
        var users = JSON.parse(localStorage.getItem("users") || "[]");
        this.user.Id = (_a = users[users.length - 1]) === null || _a === void 0 ? void 0 : _a.Id;
        if(!this.user.Id){
            this.user.Id = '0';
        }
        users.push(this.user);
        this.lo
    };
    return RegisterController;
}());
