import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilatatorsComponent } from './facilatators.component';

describe('FacilatatorsComponent', () => {
  let component: FacilatatorsComponent;
  let fixture: ComponentFixture<FacilatatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilatatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilatatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
