import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  create(cancha : any): Observable<{res:string}>{
    return this.http.post<{res:string}>(this.apiUrl+'/cancha/create',  cancha );
  }
  getCanchaById(id? : any){
    return this.http.get<any>(this.apiUrl+'/canchas/getAll/'+id);     
  }
}
