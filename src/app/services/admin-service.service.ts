import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_url } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  urlAPI = '';
  statue = '';
  message ='';
  data : any;
  constructor(private http : HttpClient) { }

  connexion (input:any='') {
	const errors = (response: any) => {
		if(response.status == "500"){
			this.message  =  response.message;
		}
    };
    const success = (response: any) =>{
		if(response.status == "200"){
			this.message = response.message;
			this.data = response.data;
		}
    }
    this.urlAPI = base_url+'Admin_log';
	console.log(this.urlAPI);
    return this.http.post(this.urlAPI,input).subscribe(success, errors);
  }
  
}
