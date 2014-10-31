'use strict';

angular.module('udeHackathon')
  .controller('ProductCtrl', function ($scope, $routeParams, Page) {

    var title = 'Select a Product',

        // FIXME This should be in a database for production
        products = {
          1: {
            name: 'Product One',
            bestbuy_id: 1234,
            autodesk_file: '/path/to/file'
          },
          2: {
            name: 'Product Two',
            bestbuy_id: 1235,
            autodesk_file: '/path/to/file'
          }
        };

    // Determines whether to show a single monster or a list of all
    if (typeof $routeParams.product_id!=='undefined') {
      var product_id = $routeParams.product_id;
      
      // Changes the title
      title = 'Product ' + product_id;
      
      $scope.product = products[product_id];
    } else {
      $scope.products = products;
    }

    $scope.Page = Page;
    Page.setTitle(title);
    
  });
