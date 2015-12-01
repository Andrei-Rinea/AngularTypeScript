/// <reference path="GlobalConfiguration.ts"/>
/// <reference path="Controllers/MainController.ts"/>
/// <reference path="Services/ContactRepo.ts"/>

module AngularTypeScript {

    var app = angular.module("app", []);
    app.value("globalConfiguration", new GlobalConfiguration("/api/contact"));
    app.service("apiService", ContactRepo);
    app.controller("MainController", MainController);

}