var TheApp = angular.module('theApp', [
    'ui.router',
    'ui.bootstrap'
]);

TheApp.controller("Home", function(
    $rootScope,
    $scope,
    $log,
    $state
) {
    $log.debug('In the Home');
});
