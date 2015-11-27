module AngularTypeScript {

    export class Entity<TId> {
        id: TId;
        editing: boolean;
    }
}