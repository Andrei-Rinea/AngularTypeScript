module AngularTypeScript {

    export interface IMainScope extends ng.IScope {
        text: string;
        vm: MainController;
    }

}