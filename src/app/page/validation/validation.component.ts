import { Component, OnInit } from '@angular/core';
import { ValiderService } from 'src/app/services/valider.service';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  inwait : any=[];
  tovalid : any='';
  message : string = '';
  constructor(private valServ : ValiderService) { }

  ngOnInit(): void {
    const success = (response: any ='' )=> {
      this.inwait = response["data"];
      this.inwait = this.inwait.map((item :any='')=> {
        item.show = false;
        return item;
       })
      // redirection
  };
  this.valServ.getInWait().subscribe(success);
  }
  validation(input:any){
      //this.tovalid = input;
      const onSuccess = (response :any='') => {
        if (response['status'] == "200") {
          this.message = 'Validation ok';
        } else {
          this.message = "error";
        }
      }
      try{
        this.valServ.valider(input).subscribe(onSuccess);
      }catch(err){
       console.log("validation error"+err);
      }
  }

}
