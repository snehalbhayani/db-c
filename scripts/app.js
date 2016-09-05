var TheApp = angular.module('theApp', [
    'ui.router'
]);

TheApp.controller("Home", function(
    $rootScope,
    $scope,
    $log,
    $state
) {
    $log.debug('In the Home');
    $scope.state = $state.$current.name;
    $scope.viewContent = function() {
        $scope.$broadcast("ContentViewRequested");
    };
});
