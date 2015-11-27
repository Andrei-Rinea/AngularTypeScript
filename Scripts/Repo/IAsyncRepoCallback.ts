module AngularTypeScript {

    export interface IAsyncRepoCallback<T> {
        onBeforeCall(operation: RepoOperation);
        onGotData(data: T[]);
        onCallCompleted(event: RepoOperationEvent<T>);
    }
}