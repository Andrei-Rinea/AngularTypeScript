module AngularTypeScript {

    export class MainController {

        constructor(
            private $scope: IMainScope,
            private $http: ng.IHttpService) {

            $scope.vm = this;
            $scope.orderPredicate = "id";
            this.reload();
        }

        onCreate() {
            var contact = this.$scope.newContact;
            this.$scope.working = true;
            this.$http.put<number>("/api/contacts", contact)
                .then(r => {
                    this.$scope.working = false;
                    contact.id = r.data;
                    this.$scope.contacts.push(contact);
                    this.$scope.newContact = new Contact();
                }, e => {
                    this.$scope.working = false;
                    alert('eroare');
                });
        }

        reload() {
            this.$scope.loading = true;
            this.$scope.working = false;

            this.$http.get<Contact[]>("/api/contacts")
                .then(r => {
                    this.$scope.loading = false;
                    this.$scope.contacts = r.data;
                }, e => {
                    this.$scope.loading = false;
                    alert('eroare');
                });
        }

        newValid() {
            return this.$scope.newContact != null && this.$scope.newContact.name != null && this.$scope.newContact.email != null;
        }
    }
}