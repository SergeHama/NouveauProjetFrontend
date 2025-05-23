import {Component, OnInit} from '@angular/core';
import {TICKETS, VOYAGES} from "../../../model/data";
import {ApplicationService} from "../../service/application.service";
import {NgClass} from "@angular/common";
import {NgxPaginationModule} from "ngx-pagination";
import {TypeBillet} from "../../../model/interfaces";
import {tick} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-ticket',
  imports: [
    NgClass,
    NgxPaginationModule,
    FormsModule
  ],
  templateUrl: './ticket.component.html',
  standalone: true,
  styleUrl: './ticket.component.css'
})
export class TicketComponent  implements OnInit{

   protected tickets  : TypeBillet[] = TICKETS ;

   protected libelle : string = "";



  protected entete : string[] = ["No", "libelle du type de billet" , "Prix" , "Actions"];
  protected prix:  number=  0 ;


  constructor(protected service : ApplicationService){

  }

  ngOnInit(): void {
  }

  pageChanged($event: number) {

  }

  delete(idVoyage: any) {

  }

  modifier(t: any) {
    this.onUpdating = !this.onUpdating ;
    t.nom_pays = this.libelle ;
    t.nom_ville = this.prix ;
  }


  protected currentPage!: string | number;
  protected onUpdating : boolean  =   false;
  protected view: boolean = false

  protected indexedLocation !: number

  indexLocationFunction(t:TypeBillet){
    this.indexedLocation = t.idTypeBillet ;
    this.libelle = t.libelleTypeBillet ;
    this.prix = t.prixTypeBillet;
  }

  listenUpdate(t: TypeBillet) {
    this.onUpdating = !this.onUpdating;
    this.libelle = t.libelleTypeBillet ;
    this.prix = t.prixTypeBillet ;
  }
}
