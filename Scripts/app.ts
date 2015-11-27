/// <reference path="GlobalConfiguration.ts"/>
/// <reference path="Controllers/MainController.ts"/>
/// <reference path="Services/ApiService.ts"/>

module AngularTypeScript {

    var app = angular.module("app", []);
    app.value("globalConfiguration", new GlobalConfiguration("/api/contact"));
    app.service("apiService", ApiService);
    app.controller("MainController", MainController);

}