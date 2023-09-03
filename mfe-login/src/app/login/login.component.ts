import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LibSharedUiService } from 'lib-shared-ui';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _service: LibSharedUiService, private _router: Router) {
  }

  value: string = '';

  login() {
    console.log('LoginComponent', this.value);
    this._service.loginUser(this.value);

    const event = new CustomEvent('loginSuccess');
    dispatchEvent(event);
  }
}
