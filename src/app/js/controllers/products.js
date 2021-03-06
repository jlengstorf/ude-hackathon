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
        },
        attiphone = {
      "name": "Apple - iPhone 5s 16GB Cell Phone - Gold (AT&T)",
      "largeFrontImage": "http://img.bbystatic.com/BestBuy_US/images/products/1755/1755302_sa.jpg",
      "topViewImage": null,
      "backViewImage": null,
      "leftViewImage": null,
      "shortDescription": "4-inch Retina displayA7 chip with M7 motion coprocessorTouch ID fingerprint sensorNew 8MP iSight camera with True Tone flash1080p HD video recordingFaceTime HD camera",
      "longDescription": "The highly advanced iPhone 5s features the A7 chip with 64-bit architecture, the Touch ID fingerprint sensor, a new 8MP iSight camera, a new FaceTime HD camera, ultrafast LTE wireless, iOS 7, and iCloud. Yet it's as thin and light as ever.",
      "sku": 1755302,
      "height": "4.87\"",
      "width": "2.31\"",
      "depth": "0.30\"",
      "weight": "3.95 oz."
    };

    // Determines whether to show a single monster or a list of all
    if (typeof $routeParams.product_id!=='undefined') {
      var product_id = $routeParams.product_id;
      
      // Changes the title
      title = 'Product ' + product_id;
      
      $scope.product = products[product_id];
        $scope.attiphone = attiphone;
    } else {
      $scope.products = products;
    }

    $scope.Page = Page;
    Page.setTitle(title);
    
  });
