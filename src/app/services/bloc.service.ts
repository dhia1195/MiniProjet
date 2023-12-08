import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bloc } from '../models/bloc';

@Injectable({
  providedIn: 'root'
})
export class BlocService {
  private apiUrl = environment.BaseUrl;
  constructor(private _http: HttpClient) {}
  
  
  getAllBlocs(): Observable<Bloc[]> {
    return this._http.get<Bloc[]>(`${this.apiUrl}/AllBlocs`);
  }
  fetchBlocById(idBloc: number):Observable<Bloc> {
    return this._http.get<Bloc>(`${this.apiUrl}/getBloc/${idBloc}`);
  }
  addBloc(blocData: Bloc | { nomBloc: string; nomFoyerBloc: string; capaciteBloc: number }): Observable<Bloc> {
    return this._http.post<Bloc>(`${this.apiUrl}/addBloc`, blocData);
  }
  
  updateBloc(bloc: Bloc ): Observable<Bloc>  {
    return this._http.put<Bloc>(`${this.apiUrl}/updateBloc`,bloc);
  }
  deleteBloc(idBloc: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/removeBloc/${idBloc}`);
  }

  
  getBlocIdByNom(nomBloc: string): Observable<number> {
    const url = `${this.apiUrl}/getBlocIdByNom/${nomBloc}`;
    return this._http.get<number>(url);
  }

  affecterBlocAFoyer(
    idFoyer: number,
    nomBloc: string
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    let httpParams = new HttpParams();
    httpParams = httpParams.set("idFoyer", idFoyer.toString());
    httpParams = httpParams.set("nomBloc", nomBloc);

    const params = { params: httpParams };

    return this._http.post(`${this.apiUrl}/affecter-foyer`, null, {
      headers: headers,
      params: httpParams,
    });
  }
}
