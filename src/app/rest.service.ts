import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient){

  }
  //CLAVE
  sendPost(body:FormData):Observable<any>{
    return this.http.post(`http://localhost:3000/upload`, body)
  }
  configURL='assets/config.json'
  recibir():Observable<any>{
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/infernape`)
  }
}
