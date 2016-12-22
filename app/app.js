/**
 * Created by behoh on 22/12/2016.
 */
var app = angular.module("app",[]);

app.run(function($rootScope) {
    $rootScope.autor = "Ninguém";
});

app.controller("MyController", function ($scope, $http, $rootScope) {
    $scope.helloWorld = "Hello World!";
    $scope.languages = ["javacript", "php", "pyton", "java", "scala"];

    $scope.autor = "JoaoM";
});

app.directive('helloWorld', function () {
    return {
        restrict: "AECM",
        replace: "true",
        template: '<h3>Hello World!!</h3>'
    };
});

app.directive("superman", function () {
    return {
        restrict: "E",
        link: function (element, attr) {
            alert("Ao resgate!");
        }
    };
});

app.directive("languages", function () {
    return {
        restrict: "E",
        template: "<ul><li ng-repeat='l in languages'>{{ l }}</li>"
    };
});

app.directive("btn", function(){
    return {
        restrict: 'A',
        priority: 1,
        link: function(scope, element, attrs) {
            element.addClass('btn');
            element.text('btn');
        }
    };
});

app.directive("primary", function(){
    return {
        restrict: 'A',
        priority: 0,
        link: function(scope, element, attrs) {
            if (element.hasClass('btn')) {
                element.addClass('btn-primary');
                element.text('btn-primary');
            }
        }
    };
});

app.directive("comScopeFalse", function(){
    return {
        restrict: 'E',
        scope: false,
        template: 'Autor: {{$parent.autor}}'
    };
});

app.directive("comScopeTrue", function(){
    return {
        restrict: 'E',
        scope: true,
        template: 'Autor: {{$parent.autor}}'
    };
});

app.directive("powerSwitch", function () {
    return {
        restrict: "A",
        controller: function ($scope, $element, $attrs) {
            $scope.state = true;

            $scope.toggle = function () {
                $scope.state = !$scope.state;
            }
        },
        link: function ($scope, element, attrs) {
            angular.element(this).click();
        }
    };
});

/**
 *  restrict:
 *
 *  -> A: via atributo
 *  -> C: via classe
 *  -> M: via comentário
 *  -> E: via elemento
 *
 * **/
