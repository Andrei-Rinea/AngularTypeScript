/// <reference path="Entity.ts"/>

module AngularTypeScript {

    export class Contact extends Entity<number> {
        name: string;
        email: string;

        newName: string;
        newEmail: string;
    }
}