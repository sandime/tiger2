/**
 * Created by SHERRI on 3/27/15.
 */
var tigerApp = angular.module('tigerApp', ['ngRoute', 'ngAnimate'])
tigerApp.config(function($routeProvider, $locationProvider) {

    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : '/app/views/pages/home.html',
            controller: 'homeCtrl',
         //   controllerAs: 'home'
        })

        // login page
        .when('/login', {
            templateUrl : '/app/views/pages/login.html',
            controller  : 'loginCtrl',
       //     controllerAs: 'login'
        })

        // show all users
        .when('/about', {
            templateUrl: 'app/views/pages/about.html',
            controller: 'aboutCtrl',
       //     controllerAs: 'about'
        })

        // budget
        .when('/budget', {
            templateUrl: 'app/views/pages/getstarted.html',
            controller: 'getStartedCtrl',
      //      controllerAs: 'getStarted'
        })

        // page to edit a user
        .when('/contact', {
            templateUrl: 'app/views/pages/contact.html',
            controller: 'contactCtrl',
      //      controllerAs: 'contact'
        });
    //set app up to have pretty URLS
    $locationProvider.html5Mode(true);

});

 /*
    var vm = this;

    // create a bigMessage variable to display in our view
    vm.bigMessage = 'Smart money for creatives ...';
})

// home page specific controller
    .controller('homeCtrl', function() {

        var vm = this;

        vm.message = 'This is the home page!';
    })

    // login page specific controller
    .controller('loginCtrl', function() {

        var vm = this;

        vm.message = 'login';
    })

// about page controller
    .controller('aboutCtrl', function() {

        var vm = this;

        vm.message = 'about page';
    })


// contact page controller
    .controller('contactCtrl', function() {

        var vm = this;

        vm.message = 'Contact us';
    })
// budget page specific controller
    .controller('getStartedCtrl', function() {

        $scope.totalExpenses = function () {
            var rent = $scope.rent;
            var utilities = $scope.utilities;
            var autoPayment = $scope.autopayment;
            return rent + utilities + autoPayment;
        }

    });

*/
