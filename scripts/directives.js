/*

 */
TheApp.directive('scrollableElement', function(){
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs) {
            var eventToListenTo = attrs["scrollableElement"];
            scope.$on(eventToListenTo, function() {
                $(element)[0].scrollIntoView();
            });
        }
    };
});

TheApp.directive('contentRow', function($rootScope){
    return {
        restrict: 'C',
        scope: true,
        link: function(scope, element, attrs) {
            var button = $(element).children(".content-footer"),
                content = $(element).children(".content-bulk");
            scope.collapsed = true;
            $(button).on("click", function() {
                scope.$emit("collapseAll", element);
                scope.$apply(function() {
                    scope.collapsed = !scope.collapsed;
                });
            });
            $rootScope.$on("collapseAll", function(event, ele) {
                if(ele !== element) {
                    scope.$apply(function() {
                        scope.collapsed = true;
                    });
                }
            });
        }
    };
});
