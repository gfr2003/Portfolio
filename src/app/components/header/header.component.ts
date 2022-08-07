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
  goTo(path: string){
    this.router.navigateByUrl(path);
  }
}
