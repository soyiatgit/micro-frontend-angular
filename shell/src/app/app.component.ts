import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-shell-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(private _router: Router){}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/home' },
      { label: 'Login', icon: 'pi pi-fw pi-sign-in', routerLink: '/login/login-page' },
      { label: 'Detail', icon: 'pi pi-fw pi-info-circle', routerLink: '/detail/detail-page' },
      { label: 'Summary', icon: 'pi pi-fw pi-id-card', routerLink: '/summary/summary-page' },
    ];

    this.activeItem = this.items[0];

    fromEvent(window, 'detailContinueClick').subscribe(e => {
      this._router.navigate(['/summary/summary-page']);
    });

    fromEvent(window, 'loginSuccess').subscribe(e => {
      this._router.navigate(['/detail/detail-page']);
    })
  }
}
