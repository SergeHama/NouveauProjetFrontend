import { Component, OnInit } from '@angular/core';
import { DatePipe, NgClass } from '@angular/common';
import { ApplicationService } from '../../service/application.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { Voyage } from '../../../model/interfaces';
import { VOYAGES } from '../../../model/data';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VoyageServiceService } from '../../service/voyage-service/voyage-service.service';

@Component({
  selector: 'app-voyage',
  imports: [NgClass, NgxPaginationModule, FormsModule, ReactiveFormsModule],
  templateUrl: './voyage.component.html',
  standalone: true,
  styleUrl: './voyage.component.css',
})
export class VoyageComponent implements OnInit {
  protected entete: string[] = [
    'No',
    'Nom du voyage',
    'Date de départ',
    'Actions',
  ];
  // voyages: Voyage[] = VOYAGES;
  protected listVoyage: Voyage[] = [];

  protected voyage = { libelleVoyage: '', dateVoyage: '', detailVoyage: '' };

  currentPage: number = 0;
  protected formVoyage = new FormGroup({
    libelleVoyage: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    detailVoyage: new FormControl('', [Validators.required]),
    dateVoyage: new FormControl('', [Validators.required]),
  });

  constructor(
    protected service: ApplicationService,
    private voyageService: VoyageServiceService
  ) {
    this.listVoyageFunction();
  }
  getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const h = String(today.getHours());
    const m = String(today.getMinutes());

    return `${year}-${month}-${day}`;
  }

  create() {
    //Pour quoi lire des elements et les initialiser si ce n'est pas les utiliser dans l'api
    // this.voyage.libelleVoyage = String(this.formVoyage.controls.libelleVoyage);
    // const date_init = new Date(String(this.formVoyage.controls.dateVoyage)); // lire la date
    // this.voyage.dateVoyage = date_init.toLocaleString();
    // this.voyage.detailVoyage = String(this.formVoyage.controls.detailVoyage);
    this.voyageService.createVoyages(this.formVoyage.getRawValue()).subscribe({
      next: (data) => {
        this.listVoyageFunction();
      },
    });
  }

  listVoyageFunction() {
    // this.service.listVoyage().subscribe(data=>{
    //     this.listVoyage = data ;
    // })

    this.voyageService.getAllVoyages().subscribe({
      next: (data) => {
        this.listVoyage = data;
      },
    });
  }
  resetView() {}

  ngOnInit(): void {
    this.voyage.dateVoyage = '';
    this.voyage.libelleVoyage = '';

    // this.listVoyageFunction();
  }

  modifier(t: any) {}

  delete(id_essence: any) {}

  pageChanged($event: number) {
    this.currentPage = $event;
  }
}
