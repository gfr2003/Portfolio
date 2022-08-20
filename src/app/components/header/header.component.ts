import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  constructor(private menu: MenuController, private router: Router) {}

  ngOnInit() {}
  openMenu() {
    this.menu.open('first');
  }
  scrollTo(element: any): void {
    (document.getElementById(element) as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
