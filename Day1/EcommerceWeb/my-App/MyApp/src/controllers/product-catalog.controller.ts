import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";
export class ProductCatalogController{
    products: Product[] = [];
   static $inject = ['$scope','ProductService', '$location']
    constructor($scope: IScopeCustom,
        private productService: ProductService,
        private location: any
    ){
        this.getProductsData();
        $scope['vm'] = this;
    }
    getProductsData(){
       this.productService.getProductsData().
       then((response) => {
        this.products = response.data;
      })
      .catch((error) => {
        console.error('Error loading products:', error);
      });
    }

    onAddCart(product: Product){
      let cartData = this.productService.getCartProducts();
      var temp = cartData ? JSON.parse(cartData) : [];
      if(product){
        temp.push(product);
        this.productService.addProductToCart(temp);
        alert("Product added Successfully");
        // this.location.path("/shoppingcart");
      }
    }
}