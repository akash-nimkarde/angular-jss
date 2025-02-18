var ShoppingController = /** @class */ (function () {
    function ShoppingController($scope, productService) {
        this.productService = productService;
        this.products = [];
        this.getCartData();
        $scope['vm'] = this;
    }
    ShoppingController.prototype.getCartData = function () {
        var cartData = this.productService.getCartProducts();
        this.products = cartData ? JSON.parse(cartData) : [];
    };
    ShoppingController.prototype.removeFromCart = function (product) {
        this.products = this.products.filter(function (o) { return o.id != product.id; });
        if (product) {
            this.productService.addProductToCart(this.products);
           // alert("Product added Successfully");
            // this.location.path("/shoppingcart");
        }
    };
    ShoppingController.$inject = ['$scope', 'ProductService'];
    return ShoppingController;
}());
