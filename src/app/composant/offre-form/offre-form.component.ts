import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OffreService } from 'src/app/services/offre.service';
@Component({
  selector: 'app-offre-form',
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css']
})
export class OffreFormComponent implements OnInit {
  erreur : any='';
  //idoffre | intitule | validite | unitetemps | cout |
  //A passerpour la table offre
  nomOffre: string ='';
  cout = 0;
//  categs: any=[];
  validite : string='';
  uniteTemps : string = '';
  qteVoixInt : any;
  qteVoixExt: any;
  qteVoixMixte: any;
  unitVI : string='';
  unitVE : string='';
  unitVM : string='';
  nbSmsI : any;
  nbSmsE : any;
  nbSmsM : any;
  qteNet : any;
  siteAcces : string='';
  ////////prendre via services
  uniTemps:any=[];
  uniVoix:any=['Ar/s','min','Ar'];
  sites:any=[];
  message: string = '';
  
  /*//A passer pour la description offre
  tabledesc : string='';
  oper : string ='';
  tarification : string='';
  qte = 0.0;
  */
  constructor(private offreServ : OffreService) { }

  ngOnInit(): void {
    const success = (response: any ='' )=> {
      if(response['status'] == "200"){
        this.uniTemps = response["data"];
        this.uniTemps = this.uniTemps.map((item: any='')=>{
          item.show = false;
          return item;
          })
      }
   };
   const error = (response: any ='' ) => {
      console.log("erreur initialisation unite temps");
      this.erreur = "erreur initialisation unite temps";
    };
    const successSite = (response: any ='' )=> {
      if(response['status'] == "200"){
        this.sites = response["data"];
        this.sites = this.uniTemps.map((item: any='')=>{
          item.show = false;
          return item;
          })
      }
   };
   const errorSite = (response: any ='' ) => {
      console.log("erreur initialisation site");
      this.erreur = "erreur initialisation site";
    };
   this.offreServ.getUnitTemps().subscribe(success,error);
   this.offreServ.getSites().subscribe(successSite,errorSite);
  }
  //qtevoixint | qtevoixext | qtevoixmixte | unitvi | unitve | unitvm | nbsmsi | nbsmse | nbsmsm | qtenet | siteacces
  creerOffre(){
    const input = {
      intitule : this.nomOffre,
      validite : this.validite,
      uniteTemps : this.uniteTemps,
      cout : this.cout,
      qteVoixInt : this.qteVoixInt,
      qteVoixExt : this.qteVoixExt,
      qteVoixMixte : this.qteVoixMixte,
      unitVI : this.unitVI,
      unitVE : this.unitVE,
      unitVM : this.unitVM,
      nbSmsI : this.nbSmsI,
      nbSmsE : this.nbSmsE,
      nbSmsM : this.nbSmsM,
      qteNet : this.qteNet,
      siteAcces : this.siteAcces
    };
   
    const onSuccess = (response :any='') => {
      if (response['status'] == "200") {
        this.message = 'Ajout ok';
      } else {
        this.message = "Some error";
      }
    }
    try{
      this.offreServ.newOffre(input).subscribe(onSuccess);
    }catch(err){
      this.erreur = err;
    }
  }
}
