import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ValiderService {
  urlAPI : any='';
  constructor(private http : HttpClient) { }
  getInWait(){
    this.urlAPI = base_url+"DepotAttente";
    return this.http.get(this.urlAPI);
  }
  valider(idMvt:any=''){
    this.urlAPI = base_url+"ValidationDepot";
    console.log(this.urlAPI);
    return this.http.put(this.urlAPI,idMvt);
  }
}
