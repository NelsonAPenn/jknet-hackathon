import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WingButtonComponent } from './wing-button.component';

describe('WingButtonComponent', () => {
  let component: WingButtonComponent;
  let fixture: ComponentFixture<WingButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WingButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
