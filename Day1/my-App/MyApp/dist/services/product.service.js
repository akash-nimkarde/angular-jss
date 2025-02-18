var ProductService = /** @class */ (function () {
    function ProductService($http, location) {
        this.$http = $http;
        this.location = location;
        this.products = [];
    }
    ProductService.prototype.getProductsData = function () {
        return this.$http.get("./product.data.json");
    };
    ProductService.prototype.getCartProducts = function () {
        console.log(sessionStorage.getItem('cartProducts'));
        return sessionStorage.getItem('cartProducts');
    };
    ProductService.prototype.addProductToCart = function (product) {
        console.log("product", product);
        this.products.push(product);
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    };
    ProductService.$inject = ['$http', '$location'];
    return ProductService;
}());
