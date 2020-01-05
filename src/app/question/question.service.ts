
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(
    private http: HttpClient
  ) {}

  getQuestionData(){
    let data = this.http.get(
        "https://gist.githubusercontent.com/valen214/" +
        "66eafdef48f4507f6509b86a86c01f8e/raw/questions.json", {
        responseType: "json"
    }).pipe(
        retry(3),
        catchError(this.handleError)
    ).pipe(tap(
        data => console.log("questions.json", data),
        error => console.error("questions.json", error)
    ));
    console.log(data);
    return data;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}