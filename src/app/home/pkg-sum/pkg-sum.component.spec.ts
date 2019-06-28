import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PkgSumComponent } from './pkg-sum.component';

describe('PkgSumComponent', () => {
  let component: PkgSumComponent;
  let fixture: ComponentFixture<PkgSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PkgSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PkgSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
