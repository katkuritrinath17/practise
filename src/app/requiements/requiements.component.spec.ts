import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiementsComponent } from './requiements.component';

describe('RequiementsComponent', () => {
  let component: RequiementsComponent;
  let fixture: ComponentFixture<RequiementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
