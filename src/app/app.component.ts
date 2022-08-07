import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private menu: MenuController,private router: Router) {}
  openMenu() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  closeMenu(){
    this.menu.close('first');
  }
  goTo(path: string){
    this.router.navigateByUrl(path);
    this.closeMenu();
  }
}