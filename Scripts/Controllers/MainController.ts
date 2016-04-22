module AngularTypeScript {

    export class MainController {

        constructor(
            private $scope: IMainScope,
            private $http: ng.IHttpService) {

            $scope.vm = this;
            $scope.contacts = [];
            this.reload();
        }

        onCreate() {
            var contact = this.$scope.newContact;
            this.$http.put<number>("/api/contacts", contact)
                .then(r => {
                    contact.id = r.data;
                    this.$scope.contacts.push(contact);
                    this.$scope.newContact = new Contact();
                }, e => { alert('eroare'); });
        }

        reload() {
            this.$http.get<Contact[]>("/api/contacts")
                .then(r => {
                    this.$scope.contacts = r.data;
                }, e => { alert('eroare'); });
        }
    }
}