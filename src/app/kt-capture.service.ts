import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Capture} from './capture';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class KtCaptureService {

  private ktUrl = 'http://localhost:8000/networkcaptures';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CaptureService: ${message}`);
  }

  getCapture(id: string): Observable<Capture> {
    const url = `${this.ktUrl}/${id}`;
    return this.http.get<Capture>(url).pipe(
      tap(_ => this.log(`fetched Capture id=${id}`)),
      catchError(this.handleError<Capture>(`getCapture id=${id}`))
    );
  }

  getCaptures(): Observable<Capture[]> {
    return this.http.get<Capture[]>(this.ktUrl)
      .pipe(
        tap( captures => this.log('fetched Captures:' + JSON.stringify(captures))),
        catchError(this.handleError('getCaptures', []))
      );
  }

  deleteCapture(capture: Capture | string): Observable<Capture> {
    const id = typeof capture === 'string' ? capture : capture.capture_id;
    const url = `${this.ktUrl}/${id}`;

    return this.http.delete<Capture>(url, httpOptions).pipe(
      tap( _ => this.log(`deleted Capture id=${id}`)),
      catchError(this.handleError<Capture>('deleteCapture'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error);

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
