module AngularTypeScript {

    export interface IMainScope extends ng.IScope {
        contacts: Contact[];
        loading: boolean;
        working: boolean;
        newContact: Contact;
        vm: MainController;
    }
}