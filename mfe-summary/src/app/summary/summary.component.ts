import { Component } from '@angular/core';
import { LibSharedUiService } from 'lib-shared-ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  user$: Observable<string>;
  selectedCharacter$:Observable<any>;

  constructor(private _service: LibSharedUiService) {
    this.user$ = this._service.comm$;
    this.selectedCharacter$ = this._service.carComm$;
  }

}
