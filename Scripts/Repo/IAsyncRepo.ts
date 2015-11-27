module AngularTypeScript {

    export interface IAsyncRepo<T> {

        setCallback(callback: IAsyncRepoCallback<T>);
        get(): void;
        create(t: T);
        update(t: T);
        delete(t: T);
    }
}