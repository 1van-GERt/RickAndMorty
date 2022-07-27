import {Injectable} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable,
         Subject,       
    } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class APIServise{

    constructor(
        private http: HttpClient,
    ){};

    getAPI(http: string): Observable<any>{
        console.log(http)
        return this.http.get('' + http + '')
    }


}