import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerClientsListComponent } from './trainer-clients-list.component';

describe('TrainerClientsListComponent', () => {
  let component: TrainerClientsListComponent;
  let fixture: ComponentFixture<TrainerClientsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerClientsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerClientsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
