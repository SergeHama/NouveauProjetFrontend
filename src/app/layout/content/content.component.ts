import { Component, OnInit } from '@angular/core';
import { ClientComponent } from "../../components/client/client.component";

@Component({
    selector: 'app-content',
    imports: [ClientComponent],
    templateUrl: './content.component.html',
    styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  ngOnInit(): void {
     
  }

}
