module AngularTypeScript {
    export class RepoOperationEvent<T> {
        constructor(public operation: RepoOperation, public item: T, public success: boolean) { }
    }
}