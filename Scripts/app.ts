/// <reference path="Controllers/MainController.ts"/>
/// <reference path="Services/ApiService.ts"/>

module AngularTypeScript {

    var app = angular.module("app", []);
    app.service("apiService", ApiService);
    app.controller("MainController", MainController);

}