module AngularTypeScript {

    export interface IAsyncRepo<T> {

        // TODO : Think if a promise object would make more sense
        setCallback(callback: IAsyncRepoCallback<T>);

        get(): void;
        create(t: T);
        update(t: T);
        delete(t: T);
    }
}