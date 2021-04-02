import { Component, OnInit } from '@angular/core';
import { StatcliService } from 'src/app/services/statcli.service';
@Component({
  selector: 'app-clientstat',
  templateUrl: './clientstat.component.html',
  styleUrls: ['./clientstat.component.css']
})
export class ClientstatComponent implements OnInit {
  clistat :any=[];
  constructor(private cliserv : StatcliService) { }

  ngOnInit(): void {
    const success = (response: any ='' )=> {
      this.clistat = response["data"];
    this.clistat = this.clistat.map((item: any='')=>{
        item.show = false;
        return item;
      })
      // redirection
   };
    const error = (response: any ='' ) => {
    // this.error_msg = 'Erreur connexion';
    console.log("erreur");
    };
    this.cliserv.getStat().subscribe(success,error);
  }

}
