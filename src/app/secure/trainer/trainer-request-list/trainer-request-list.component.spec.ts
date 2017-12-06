import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerRequestListComponent } from './trainer-request-list.component';

describe('TrainerRequestListComponent', () => {
  let component: TrainerRequestListComponent;
  let fixture: ComponentFixture<TrainerRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainerRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainerRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
