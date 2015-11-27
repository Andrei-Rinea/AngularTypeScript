module AngularTypeScript {

    export class MainController {

        constructor(
            private $scope: IMainScope,
            private apiService: IRepo<Contact>) {
            
            $scope.text = "ssssupa";
            $scope.vm = this;
        }

        onClick(): void {
            //alert(`hello ${this.$scope.text}`);
            //this.apiService.do();
        }
    }
}