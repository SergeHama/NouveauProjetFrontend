import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voyage } from '../../../model/interfaces';

@Injectable({
  providedIn: 'root',
})
export class VoyageServiceService {
  private baseUrl = 'http://localhost:8081/api-voyages';
  constructor(private http: HttpClient) {}

  /**
   * Contacte l'api pour récupérer la liste des voyages
   */
  getAllVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.baseUrl + '/all', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Fonction de creation d'un voyage
   * @param voyage le voyage à enregistrer
   * @returns Retourne un objet validant si l'enregistrement est fait ou pas
   */

  createVoyages(voyage: Voyage) {
    return this.http.post(this.baseUrl + '/create-voyage', voyage, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
