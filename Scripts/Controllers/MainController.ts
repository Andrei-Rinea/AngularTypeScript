module AngularTypeScript {

    export class MainController implements IAsyncRepoCallback<Contact> {

        constructor(
            private $scope: IMainScope,
            private apiService: IAsyncRepo<Contact>) {

            $scope.vm = this;
            apiService.setCallback(this);
            this.apiService.get();
        }

        onRefresh(): void {
            this.apiService.get();
        }

        onBeforeCall(operation: RepoOperation) {
            switch (operation) {
                case RepoOperation.Get:
                    this.$scope.loading = true;
                    break;
                default:
                    this.$scope.working = true;
                    break;
            }
        }

        onGotData(data: Contact[]) {
            this.$scope.contacts = data;
        }

        onCallCompleted(event: RepoOperationEvent<Contact>) {
            switch (event.operation) {
                case RepoOperation.Delete:
                    {
                        const index = this.$scope.contacts.indexOf(event.item);
                        this.$scope.contacts.splice(index, 1);
                        this.$scope.working = false;
                    }
                    break;
                case RepoOperation.Create:
                    {
                        const contact = this.$scope.newContact;
                        this.$scope.contacts.push(contact);
                        this.$scope.newContact = new Contact();
                    }
                    break;
                default:
                    {
                        this.$scope.loading = false;
                    }
                    break;
            }
        }

        delete(id: number) {
            const contacts = this.$scope.contacts;
            for (let i = 0; i < contacts.length; i++) {
                const contact = contacts[i];
                if (contact.id === id) {
                    this.apiService.delete(contact);
                    break;
                }
            }
        }

        create() {
            const contact = this.$scope.newContact;
            this.apiService.create(contact);
        }
    }
}