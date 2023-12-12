
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  
  private apiUrl = environment.apiUrl;
  constructor(private _http: HttpClient) { }


  public getAllChambres(){
    return this._http.get(this.apiUrl+"/chambre/affichertout");
  }

  public addChambre(chambre:any){
    return this._http.post(this.apiUrl+"/chambre/ajouterchambre",chambre);
  }
  public updateChambre(chambre:any){
    return this._http.put(this.apiUrl+"/chambre/upadtechambre",chambre);
  }

  public getChambreById(idChambre: number) {
    return this._http.get(`${this.apiUrl}/chambre/afficherchambre/${idChambre}`);
  }

  public deleteChambre(chambre:any){
    console.log(chambre);
    return this._http.delete(this.apiUrl+"/chambre/removechambre/"+chambre.idChambre);
  }
  
  affecterBlocAChambre(
    idBloc: number,
    numChambre: number
  ): Observable<any> {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });

    let httpParams = new HttpParams();
    httpParams = httpParams.set("idBloc", idBloc.toString());
    httpParams = httpParams.set("numChambre", numChambre.toString());

    const params = { params: httpParams };

    return this._http.post(`${this.apiUrl}/chambre/affecter`, null, {
      headers: headers,
      params: httpParams,
    });
  }

}
