import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';



import {NavBarComponent} from "./layout/nav-bar/nav-bar.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {BodyApplicationComponent} from "./layout/body-application/body-application.component";

@Component({
  selector: 'app-root',
  imports: [SidebarComponent, NavBarComponent, BodyApplicationComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'agenceVoyage';
}
