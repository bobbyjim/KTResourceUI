import { Injectable              } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService          } from './message.service';
import { Avd                     } from './avd';
import { Observable, of          } from 'rxjs';
import { catchError, map, tap    } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class KtModelService {

  private ktUrl = 'http://localhost:8000/avds';  // URL to REST API

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** Log a message with the MessageService */
  private log(message: string) {
    this.messageService.add(`ModelService: ${message}`);
  }

  /** GET AVD by id. Will 404 if id not found */
  getAvd(id: string): Observable<Avd> {
    const url = `${this.ktUrl}/${id}`;
    return this.http.get<Avd>(url).pipe(
      tap(_ => this.log(`fetched AVD id=${id}`)),
      catchError(this.handleError<Avd>(`getAvd id=${id}`))
    );
  }

  /** GET from the server */
  getAvds(): Observable<Avd[]> {
    return this.http.get<Avd[]>(this.ktUrl)
      .pipe(
        tap(avds => this.log('fetched AVDs:' + JSON.stringify(avds))),
        catchError(this.handleError('getAvds', []))
      );
  }

  /** PUT: update to the server */
/*  updateHero (hero: Avd): Observable<any> {
    return this.http.put(this.ktUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }*/

  /** POST: add a new hero to the server */
/*  addHero (hero: Avd): Observable<Avd> {
    return this.http.post<Avd>(this.ktUrl, hero, httpOptions).pipe(
      tap((hero: Avd) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Avd>('addHero'))
    );
  }*/

  /** DELETE: delete from the server */
  deleteAvd (avd: Avd | string): Observable<Avd> {
    const id = typeof avd === 'string' ? avd : avd.avd_id;
    const url = `${this.ktUrl}/${id}`;

    return this.http.delete<Avd>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted AVD id=${id}`)),
      catchError(this.handleError<Avd>('deleteAvd'))
    );
  }

  /* GET whose name contains search term */
  searchAvds(term: string): Observable<Avd[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Avd[]>(`${this.ktUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found AVDs matching "${term}"`)),
      catchError(this.handleError<Avd[]>('searchAvds', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
