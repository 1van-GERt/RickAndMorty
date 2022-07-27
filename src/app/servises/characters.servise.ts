import { Injectable } from '@angular/core';
import { APIServise } from './API.servise';

import { HttpClient } from '@angular/common/http';
import { Observable,
         Subject,       
    } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class CharactersServise{
    public pageStart: number = 1;
    public pageMax!: number;
    public pageNumber!: number; 

    constructor(
        public apiServise: APIServise,
    ){}



    getAllCharacters(pageNumber: number): Observable<any>{
        return this.apiServise.getAPI('https://rickandmortyapi.com/api/character/?page=' + pageNumber + '');
    }

    getCharacter(id:number): Observable<any>{
        return this.apiServise.getAPI('https://rickandmortyapi.com/api/character/' + id + '');
    }

    getCharacters(pageNumber: number, filterArgument: string, resourcesAdres: string): Observable<any>{
        return this.apiServise.getAPI('https://rickandmortyapi.com/api/' + resourcesAdres +'/?page=' + pageNumber + filterArgument +  '');
    }

}

