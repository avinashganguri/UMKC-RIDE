import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshuttleComponent } from './addshuttle.component';

describe('AddshuttleComponent', () => {
  let component: AddshuttleComponent;
  let fixture: ComponentFixture<AddshuttleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshuttleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshuttleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
