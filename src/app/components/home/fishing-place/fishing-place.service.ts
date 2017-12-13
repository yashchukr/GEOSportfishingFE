import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { FishType } from './fish-type';

@Injectable()
export class FishingPlaceService {

    //URLs for CRUD operations
    allDicfishTypesUrl = "http://localhost:8080/all-dicfishtypes";

  constructor(private http:Http) {
  }
    //Fetch all Fish Types
    getAllDicFishTypes(): Observable<FishType[]> {
        return this.http.get(this.allDicfishTypesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const body = res.json();
        return body;
    }

    private handleError (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}
