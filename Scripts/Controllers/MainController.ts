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

        findContactById(id: number) {
            var result = {
                contact: null,
                index: null
            };

            for (var i = 0; i < this.$scope.contacts.length; i++) {
                if (this.$scope.contacts[i].id === id) {
                    result.contact = this.$scope.contacts[i];
                    result.index = i;
                    return result;
                }
            }
            return null;
        }

        delete(id: number) {
            var result = this.findContactById(id);
            if (!result)
                return;
            var consent = confirm("Are you sure you want to delete '" + result.contact.name + "' (id: " + result.contact.id + ") ?");
            if (!consent)
                return;

            this.$scope.working = true;
            this.$http.delete("/api/contacts" + "/" + result.contact.id).then(() => {
                this.$scope.contacts.splice(result.index, 1);
                this.$scope.working = false;
            }, errorResponse => {
                this.$scope.working = false;
                alert("could not delete contact :( code: " + errorResponse.status);
            });
        }

        newValid() {
            return this.$scope.newContact != null && this.$scope.newContact.name != null && this.$scope.newContact.email != null;
        }
    }
}