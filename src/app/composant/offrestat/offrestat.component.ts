import { Component, OnInit,Input } from '@angular/core';
import { StatoffreService } from 'src/app/services/statoffre.service';
@Component({
  selector: 'app-offrestat',
  templateUrl: './offrestat.component.html',
  styleUrls: ['./offrestat.component.css']
})
export class OffrestatComponent implements OnInit {
 @Input() offrestat : any=[];
  constructor(private ostServ : StatoffreService) { }

  ngOnInit(): void {
    const success = (response: any ='' )=> {
      this.offrestat = response["data"];
    this.offrestat = this.offrestat.map((item: any='')=>{
        item.show = false;
        return item;
      })
      // redirection
   };
    const error = (response: any ='' ) => {
    // this.error_msg = 'Erreur connexion';
    console.log("erreur");
    };
    this.ostServ.getStat().subscribe(success,error);
  }

}
