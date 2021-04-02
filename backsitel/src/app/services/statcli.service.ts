import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StatcliService {
  urlAPI=base_url+'StatistiqueClients/';
  constructor(private http : HttpClient) { }
  getStat(){
    return this.http.get(this.urlAPI);
  }
}
