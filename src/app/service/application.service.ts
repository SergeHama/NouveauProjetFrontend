import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Voyage} from "../../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {


  private BaseUrl = "http://localhost:8081/tg/voyage_pro/reservation/auth/";
  hide : string = "liste" ;

  constructor(private http : HttpClient) { }

  createVoyage(voyage :  any) : Observable<any>{
    return  this.http.post(this.BaseUrl+"voyage/create" , voyage);
  }

  listVoyage():Observable<any>{
    return this.http.get(this.BaseUrl+"voyage/all");
  }



}
