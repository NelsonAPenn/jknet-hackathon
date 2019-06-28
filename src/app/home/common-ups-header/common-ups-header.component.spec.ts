import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonUpsHeaderComponent } from './common-ups-header.component';

describe('CommonUpsHeaderComponent', () => {
  let component: CommonUpsHeaderComponent;
  let fixture: ComponentFixture<CommonUpsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonUpsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonUpsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
