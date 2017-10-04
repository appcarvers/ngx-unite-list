import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FakedataService{

    baseUrl = "https://reqres.in/api";

    constructor(private _httpClient : HttpClient){}

    getUsers(page? : number){

        var getUsersUrl = this.baseUrl + "/users?per_page=2";

        getUsersUrl = page && page > 1 ? getUsersUrl + '&page=' + page : getUsersUrl;

        return this._httpClient.get(getUsersUrl);
    }
}