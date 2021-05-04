import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IExchangeResponse } from './exchange-response';
import { IExchangeSymbol } from './exchange-symbol';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  
  private APIURL = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) {}

   getSymbols(): Observable<IExchangeSymbol[]>{
     return this.http.get<IExchangeResponse>(`${this.APIURL}symbols`).pipe(
      map((response: IExchangeResponse) =>{
        return response.symbols;
      }),
      catchError(error =>{
        return throwError("Something went wrong");
      })
     );
   }

   convertCurrency(fromSymbol: string, toSymbol: string, amount: number): Observable<number>{
     return this.http.get<IExchangeResponse>(`${this.APIURL}convert?from=${fromSymbol}&to=${toSymbol}&amount=${amount}`).pipe(
       map((response: IExchangeResponse) =>{
         return response.result;
       }),
       catchError(error =>{
         return throwError("Something went wrong");
       })
     );
   }
}
