import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientTrainerListComponent } from './client-trainer-list.component';

describe('ClientTrainerListComponent', () => {
  let component: ClientTrainerListComponent;
  let fixture: ComponentFixture<ClientTrainerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientTrainerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientTrainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
