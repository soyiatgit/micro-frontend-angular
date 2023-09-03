import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSharedUiComponent } from './lib-shared-ui.component';

describe('LibSharedUiComponent', () => {
  let component: LibSharedUiComponent;
  let fixture: ComponentFixture<LibSharedUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibSharedUiComponent]
    });
    fixture = TestBed.createComponent(LibSharedUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
