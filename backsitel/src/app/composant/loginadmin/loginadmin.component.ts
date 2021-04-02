import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from 'src/app/services/admin-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {
pseudo ='' ;
motDePasse ='';
message : any='';
  constructor(private adminServ : AdminServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  loginadmin () {
    const input = {
      pseudo : this.pseudo,
      motDePasse : this.motDePasse
    };
	console.log(input);
    try {
		this.adminServ.connexion(input);
		sessionStorage.setItem("session",this.adminServ.data);
		this.router.navigate(['Statistiques']);
      //redirection
    } catch (err) {
      this.message = err;
    }
	
  }
}
