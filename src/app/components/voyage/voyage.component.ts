import {Component, OnInit} from '@angular/core';
import {NgClass} from "@angular/common";
import {ApplicationService} from "../../service/application.service";
import {NgxPaginationModule} from "ngx-pagination";
import {Voyage} from "../../../model/interfaces";
import {  VOYAGES} from "../../../model/data";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";



@Component({
  selector: 'app-voyage',
  imports: [
    NgClass,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule

  ],
  templateUrl: './voyage.component.html',
  standalone: true,
  styleUrl: './voyage.component.css'
})
export class VoyageComponent  implements  OnInit{
  protected entete: string[] = ["No" , "Nom du voyage" , "Date de départ"  ,"Actions"];
  voyages: Voyage[]= VOYAGES;
  protected  listVoyage : Voyage[]= [] ;


  protected  voyage  = {libelleVoyage : "" , dateVoyage : ""};

  currentPage: number = 0 ;
  protected  formVoyage = new FormGroup({
      libelleVoyage  : new FormControl( "" , [Validators.required , Validators.minLength(3) ]) ,
      dateVoyage : new FormControl("" , [Validators.required   ])

  });


  constructor(protected service : ApplicationService) {
  }
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const h  = String(today.getHours())
    const m = String(today.getMinutes());


    return `${year}-${month}-${day}`;
  }







  create(){
      this.voyage.libelleVoyage = String(this.formVoyage.controls.libelleVoyage) ;
      this.voyage.dateVoyage =  this.getTodayDate();
      this.service.createVoyage(this.formVoyage.getRawValue()).subscribe(data=>{
          console.log(data);
      })
  }


  listVoyageFunction(){
        this.service.listVoyage().subscribe(data=>{
            this.listVoyage = data ;
        })
  }
  resetView() {

  }

  ngOnInit(): void {
      this.voyage.dateVoyage = "" ;
      this.voyage.libelleVoyage = "" ;

        this.listVoyageFunction() ;
  }

  modifier(t: any) {

  }

  delete(id_essence: any) {

  }

  pageChanged($event: number) {
    this.currentPage = $event ;
  }

}
