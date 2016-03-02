// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', [
  'ionic',
  'starter.controllers',
  'starter.services',
  'ngCordova',
  'utilitiesModule'
])
.run(function($ionicPlatform, $ionicPopup) {
  $ionicPlatform.ready(function() {
    $ionicPlatform.registerBackButtonAction(function () {
        var confirmPopup = $ionicPopup.confirm({
         template: 'Are you sure you want to exit?',
         buttons: [
          { text: 'No' },
          {
            text: '<b>Yes</b>',
            type: 'button-assertive',
            onTap: function(e) {
              navigator.app.exitApp();
            }
          },
        ]
       });
    }, 101);

    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    ionic.Platform.fullScreen();
  });
});