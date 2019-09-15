import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; //conectarse a un servicio y obtener errores de http
import { Observable, throwError } from 'rxjs';                        // observables y erroes de observables
import { catchError, tap, map } from 'rxjs/operators';      //capturar errores 
@Injectable({
  providedIn: 'root'
})
export class CountryService {
urlPaises = 'https://restcountries.eu/rest/v2/region/Americas';
  constructor(public http: HttpClient) { }  //aqui depende de los snippet los metodos son de color amarrillo 
  obtenerPaises():Observable<any[]>{
return this.http.get<any[]>(this.urlPaises).pipe(tap(resultado =>
  console.log(JSON.stringify(resultado)), catchError(this.handleError)
));
  }
  handleError(err: HttpErrorResponse){
    let mensajeError = '';
    if(err.error instanceof ErrorEvent){
      mensajeError = 'ocurrio un error' + err.error.message;
    }
    else{
      mensajeError = 'servidor respondio: ' + err.status + 'mensaje' + err.message;
    }
    console.log(mensajeError);
    return throwError(mensajeError);
  }
}
