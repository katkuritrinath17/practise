import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  constructor(private http:HttpClient) { }

  getServiceData(): Observable<any> {
    const url = 'https://api.myjson.com/bins/110x4a';
    return this.http.get<any>(url).pipe(map(res => res), catchError(this.handleError));
  }


  public handleError(error: HttpErrorResponse | any) {
    let errMsg: string;
    const body = error || '';
    errMsg = error.message ? error.message : error.toString();
    console.error(errMsg);
    return throwError(body);
  }
}
