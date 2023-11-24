import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  constructor(private _http: HttpClient) { }

  url:string="http://localhost:8081/universite";

  public getAllUniversities(){
    return this._http.get(this.url+"/afficheruniversites");
  }

  public getUniversiteById(id:number){
    return this._http.get(`${this.url}/retrieveUniversityById/${id}`); 
  }


  public addUniversity(universite:any){
    return this._http.post(this.url+"/ajouteruniversite",universite);
  }
  public updateUniversity(universite:any){
    return this._http.put(this.url+"/modifieruniversite",universite);
  }

  public deleteUniversity(universite:any){
    console.log(universite);
    return this._http.delete(this.url+"/deleteUniversite",{ body: universite });
  }

}
