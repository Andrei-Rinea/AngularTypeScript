module AngularTypeScript {

    export class MainController {

        constructor(
            private $scope: IMainScope,
            private $http: ng.IHttpService) {

            $scope.vm = this;
        }

        onCreate() {
            var contact = this.$scope.newContact;
            this.$http.put<number>("/api/contacts", contact)
                .then(r => {
                    contact.id = r.data;
                    // inserare in lista dupa ce o facem functionala
                    this.$scope.newContact = new Contact();
                }, e => {
                    alert('eroare');
                });
        }
    }
}