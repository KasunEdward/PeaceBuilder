angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$translate,$rootScope) {
 //  var ctrl=this;
 //  $scope.language=null;
 //  $scope.languages=['en','sv'];
 // $scope.updateLanguage=function(language){
 //   $rootScope.var="kkkkkk";
 //   console.log($rootScope.var);
 //    $translate.use(language);
 //  }
  $translate.use($rootScope.language);
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
  $scope.languages=['en','sv'];
  $scope.updateLanguage=function(language){
    $rootScope.var="sv";
    console.log($rootScope.var);
    $translate.use(language);
  }
  $scope.settings = {
    enableFriends: true
  };

});
