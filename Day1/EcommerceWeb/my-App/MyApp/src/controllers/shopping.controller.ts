import { IScopeCustom } from "../interfaces/iscope.interface";
import { Product } from "../models/product.model";
import { ProductService } from "../services/product.service";

export class ShoppingController{
      products: Product[] = [];
         static $inject = ['$scope','ProductService']
          constructor($scope: IScopeCustom,
              private productService: ProductService
          ){
              this.getCartData();
              $scope['vm'] = this;
          } 

          
          getCartData() {
            let cartData = this.productService.getCartProducts();
            this.products = cartData ? JSON.parse(cartData) : [];
        }
        
          removeFromCart(product: Product){
            this.products = this.products.filter(o => o.id != product.id);
        
            if(product){
              this.productService.addProductToCart(this.products);
              //alert("Product added Successfully");
              // this.location.path("/shoppingcart");
            }
          }
}