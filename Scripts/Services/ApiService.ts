module AngularTypeScript {

    export class ApiService implements IRepo<Contact> {

        constructor(private $http: ng.IHttpService) { }
        
    }
}