var ProductCatalogController = /** @class */ (function () {
    function ProductCatalogController($scope, productService, location) {
        this.productService = productService;
        this.location = location;
        this.products = [];
        this.getProductsData();
        $scope['vm'] = this;
    }
    ProductCatalogController.prototype.getProductsData = function () {
        var _this = this;
        this.productService.getProductsData().
            then(function (response) {
            _this.products = response.data;
        })
            .catch(function (error) {
            console.error('Error loading products:', error);
        });
    };
    ProductCatalogController.prototype.onAddCart = function (product) {
        var cartData = this.productService.getCartProducts();
        var temp = cartData ? JSON.parse(cartData) : [];
        if (product) {
            temp.push(product);
            this.productService.addProductToCart(temp);
            alert("Product added Successfully");
            // this.location.path("/shoppingcart");
        }
    };
    ProductCatalogController.$inject = ['$scope', 'ProductService', '$location'];
    return ProductCatalogController;
}());