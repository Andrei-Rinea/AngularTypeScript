var AngularTypeScript;
(function (AngularTypeScript) {
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            $scope.vm = this;
        }
        MainController.prototype.onCreate = function () {
            alert(this.$scope.newContact.name);
        };
        return MainController;
    }());
    AngularTypeScript.MainController = MainController;
})(AngularTypeScript || (AngularTypeScript = {}));
/// <reference path="Controllers/MainController.ts"/>
var AngularTypeScript;
(function (AngularTypeScript) {
    var app = angular.module("app", []);
    app.controller("MainController", AngularTypeScript.MainController);
})(AngularTypeScript || (AngularTypeScript = {}));
var AngularTypeScript;
(function (AngularTypeScript) {
    var Contact = (function () {
        function Contact() {
        }
        return Contact;
    }());
    AngularTypeScript.Contact = Contact;
})(AngularTypeScript || (AngularTypeScript = {}));
//# sourceMappingURL=app.js.map