angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$translate,$rootScope,$state,$cordovaGeolocation) {
  $translate.use($rootScope.language);
  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }, function(error){
    console.log("Could not get location");
  });
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope,$translate,$rootScope) {
  var ctrl=this;
  $scope.language=null;
  $scope.languages=['en','si','ta'];
  $scope.updateLanguage=function(language){
    $rootScope.var=language;
    console.log($rootScope.var);
    $translate.use(language);
  }
  $scope.settings = {
    enableFriends: true
  };

})

  .controller('LangCtrl', function($scope,$translate,$rootScope) {
  var ctrl=this;
  $scope.language=null;
  $scope.languages=['en','si','ta'];
  $scope.updateLanguage=function(language){
    $rootScope.var=language;
    console.log(language);
    $translate.use(language);
  }
  $scope.settings = {
    enableFriends: true
  };

});
