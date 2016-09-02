"use strict";

TheApp.config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {
    $httpProvider.defaults.headers.common = {
        "Content-Type": "application/json;charset=utf-8"
    };

    $stateProvider.state("app", {
        url: "/",
        templateUrl: "templates/app.html",
        abstract: true
    });
    $stateProvider.state("app.home", {});
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

TheApp.run(function(
    $rootScope,
    $state,
    $log
) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
        $log.debug("changing");
    });
    $state.go("app.home");
});
