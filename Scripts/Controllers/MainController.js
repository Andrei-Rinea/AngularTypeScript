var AngularTypeScript;
(function (AngularTypeScript) {
    var MainController = (function () {
        function MainController($scope) {
            this.$scope = $scope;
            $scope.vm = this;
        }
        MainController.prototype.onCreate = function () {
            alert(':)');
        };
        return MainController;
    }());
    AngularTypeScript.MainController = MainController;
})(AngularTypeScript || (AngularTypeScript = {}));
//# sourceMappingURL=MainController.js.map