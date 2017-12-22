import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSearchTrainerComponent } from './client-search-trainer.component';

describe('ClientSearchTrainerComponent', () => {
  let component: ClientSearchTrainerComponent;
  let fixture: ComponentFixture<ClientSearchTrainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientSearchTrainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientSearchTrainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
