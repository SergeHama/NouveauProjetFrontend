import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  imports: [
    NgClass,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  standalone: true,
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isSidebarOpen: boolean = true;

 /* constructor(protected sp : ServicePrincipal) {
  }*/

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen
  }

 /* changeComponent(views: string) {
    this.sp.views = views ;
  }*/

  ngOnInit(): void {
  }

}
