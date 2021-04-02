import { Component, OnInit , Input  } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-liste-offre-admin',
  templateUrl: './liste-offre-admin.component.html',
  styleUrls: ['./liste-offre-admin.component.css']
})
export class ListeOffreAdminComponent implements OnInit {

@Input() offres :any=[];
sansdetails : any=[];
error_msg : string = '';

  //listOffres(){
   
 // }
  constructor(private offreServ : OffreService,public router : Router) { }
  ngOnInit(): void {
    const success = (response: any ='' )=> {
      if (response['status'] == "200") {
        this.offres = response["data"];
        this.offres = this.offres.map((item :any='')=> {
          item.show = false;
          return item;
         })
      }else{
        console.log(response['message']);
      }
    };
    this.offreServ.getOffres().subscribe(success);
  }

  
}
