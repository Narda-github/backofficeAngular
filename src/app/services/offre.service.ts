import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToolsService } from './tools.service';
import { base_url } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OffreService {
  urlAPI='';
  constructor(private http : HttpClient,private toolsServ : ToolsService) { }
  newOffre(input:any=''){
    const options = this.toolsServ.formOption();
    this.urlAPI =base_url+"CreationOffre";
    return this.http.post(this.urlAPI,input);
  }
  getOffres(){
    this.urlAPI =base_url+"nosOffres";
    return this.http.get(this.urlAPI);
  }
  getSites(){
    this.urlAPI =base_url+"sites";
    return this.http.get(this.urlAPI);
  }
  getUnitTemps(){
    this.urlAPI =base_url+"unitTemps";
    return this.http.get(this.urlAPI);
  }
  getOffresSansDet(){
    this.urlAPI =base_url+"OffresSansDetails";
    return this.http.get(this.urlAPI);
  }
}
