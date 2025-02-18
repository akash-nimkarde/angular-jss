import angular from "angular";
import { Product } from "../models/product.model";

export class ProductService {

    static $inject = ['$http', '$location'];
    products: any = [];

    constructor(private $http: angular.IHttpService, private location:any) {

    }

    public getProductsData(): angular.IHttpPromise<Product[]> {
        return this.$http.get("./product.data.json");
    }
    public getCartProducts() {
        console.log(sessionStorage.getItem('cartProducts'))
        return sessionStorage.getItem('cartProducts');
    }
    public addProductToCart(product: any){
        console.log("product", product)
        this.products.push(product);
        sessionStorage.setItem('cartProducts', JSON.stringify(product));
    }
}
