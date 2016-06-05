'use strict';

angular.module('myApp.art', ['ngRoute', 'ngAnimate', 'ngTouch'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/art', {
    templateUrl: 'art/art.html',
    controller: 'artCtrl'
  });
}])

.controller('artCtrl', function($scope) {
    // initial image index
    
            // Set of Photos

    $scope.photos = [
        {src: 'images/cwlogo.jpg', desc: 'Image 01'},
        {src: 'images/gallery/2.jpg', desc: 'Image 02', summary:'This is a summary'},
        {src: 'images/gallery/3.jpg', desc: 'Image 03', summary:'This is a summary'},
        {src: 'images/gallery/4.jpg', desc: 'Image 04', summary:'This is a summary' },
        {src: 'images/gallery/5.jpg', desc: 'Image 05', summary:'This is a summary'},
        {src: 'images/gallery/6.jpg', desc: 'Image 06', summary:'This is a summary'},
        {src: 'images/gallery/7.jpg', desc: 'Image 07', summary:'This is a summary'},
        {src: 'images/gallery/8.jpg', desc: 'Image 08', summary:'This is a summary'},
        {src: 'images/gallery/9.jpg', desc: 'Image 09', summary:'This is a summary'},
        {src: 'images/gallery/10.jpg', desc: 'Image 10', summary:'This is a summary'},
        {src: 'images/gallery/1.jpg', desc: 'Image 11', summary:'This is a summary'}

        ];
    $scope._Index = 0;
    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };
    // show prev image

    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };
    // show next image

    $scope.showNext = function () {
        
        
       $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
       
    };
    // show a certain image

    $scope.showPhoto = function (index) {
        
        $scope._Index = index;
        
        

 };

});
