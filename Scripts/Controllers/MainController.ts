module AngularTypeScript {

    export class MainController {

        constructor(private $scope: IMainScope) {
            $scope.vm = this;
        }


        onCreate() {
            alert(this.$scope.newContact.name);
        }
    }
}