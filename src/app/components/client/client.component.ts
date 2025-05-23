import { Component, OnInit } from '@angular/core';
import {VOYAGES} from "../../../model/data";
import {ApplicationService} from "../../service/application.service";
import {NgClass} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {Client} from "../../../model/interfaces";

@Component({
    selector: 'app-client',
  imports: [
    NgClass,
    NgxPaginationModule
  ],
    standalone : true ,
    templateUrl: './client.component.html',
    styleUrl: './client.component.css'
})
export class ClientComponent implements  OnInit{

  protected  selection : string = "" ;
  entete:  string[]=["No" , "Nom" , "Prenom" , "Date de naissance","Email" , "Sexe" , "Phone" , "Action"];
  currentPage:  number = 0 ;
  clients : Client[] = [];




  constructor( protected service : ApplicationService){}


  ngOnInit(): void {

  }


  modifier(t: any) {

  }

  delete(idClient: string) {

  }

  pageChanged($event: number) {

  }
}
