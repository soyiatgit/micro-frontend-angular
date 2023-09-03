import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibSharedUiService } from 'lib-shared-ui';
import { Observable, fromEvent } from 'rxjs';

interface Character {
  name: string;
  code: string;
}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  user$: Observable<string>;
  characters: Character[] | undefined;

  selectedCharacter: string = '';

  constructor(private _service: LibSharedUiService, private _router: Router) {
    this.user$ = this._service.comm$;
    this.characters = [
      { name: 'Iron Man', code: 'IM' },
      { name: 'Captain America', code: 'CA' },
      { name: 'Wonder Woman', code: 'WM' },
      { name: 'Thor', code: 'TH' },
      { name: 'Spider Man', code: 'SM' }
    ];
  }

  ngOnInit() {
    // console.log('DetailComponent', this._service.getCurrentUser());
  }

  onContinueClick() {
    console.log('DetailComponent', this.selectedCharacter);
    this._service.setSelectedCharacter(this.selectedCharacter);
    const event = new CustomEvent('detailContinueClick');
    dispatchEvent(event);
  }


}
