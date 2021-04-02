import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  voir : any='';
  message : string = "";
  constructor() { }

  ngOnInit(): void {
  }
  choose(input:any){
    this.voir = input;
    this.message = "you choosed "+input;
  }
}
