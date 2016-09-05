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

TheApp.directive('contentRow', function(){
    return {
        restrict: 'C',
        scope: false,
        link: function(scope, element, attrs) {
            var button = $(element).children(".content-footer"),
                content = $(element).children(".content-bulk");
            $(button).on("click", function() {
                scope.$broadcast("collapseAll", element);
                content.removeClass("content-truncated");
                content.addClass("content");
            });
            scope.$on("collapseAll", function(event, ele) {
                if(ele !== element) {
                    content.addClass("content-truncated");
                    content.removeClass("content");
                }
            });
        }
    };
});
