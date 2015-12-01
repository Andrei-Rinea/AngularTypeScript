module AngularTypeScript {

    export class ContactRepo implements IAsyncRepo<Contact> {

        private callback: IAsyncRepoCallback<Contact>;

        constructor(
            private $http: ng.IHttpService,
            private globalConfiguration: GlobalConfiguration) { }

        setCallback(callback: IAsyncRepoCallback<Contact>) {
            this.callback = callback;
        }

        get(): void {
            this.callback.onBeforeCall(RepoOperation.Get);
            this.$http.get<Contact[]>(this.globalConfiguration.getApiUrl()).then(r => {
                this.callback.onGotData(r.data);
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Get, null, true));
            }, () => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Get, null, false));
            });
        }

        create(t: Contact) {
            this.callback.onBeforeCall(RepoOperation.Create);
            this.$http.post<number>(this.globalConfiguration.getApiUrl(), t).then(r => {
                t.id = r.data;
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Create, t, true));
            }, () => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Create, t, false));
            });
        }

        update(t: Contact) {
            this.callback.onBeforeCall(RepoOperation.Update);
            this.$http.put(this.globalConfiguration.getApiUrl() + "/" + t.id, t).then(() => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Update, t, true));
            }, () => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Update, t, false));
            });
        }

        delete(t: Contact) {
            this.callback.onBeforeCall(RepoOperation.Delete);
            this.$http.delete(this.globalConfiguration.getApiUrl() + "/" + t.id).then(() => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Delete, t, true));
            }, () => {
                this.callback.onCallCompleted(new RepoOperationEvent(RepoOperation.Delete, t, false));
            });
        }
    }
}