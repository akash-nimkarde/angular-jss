import * as angular from "angular";
import { IScopeCustom } from "../interfaces/iscope.interface";
export class HomeController{
         static $inject = ['$scope','ProductService']
          constructor($scope: IScopeCustom){
              $scope['vm'] = this;
          } 
}

angular.module('myApp').controller('HomeController', HomeController);