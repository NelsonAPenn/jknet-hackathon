import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EAMListComponent } from './eamlist.component';

describe('EAMListComponent', () => {
  let component: EAMListComponent;
  let fixture: ComponentFixture<EAMListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EAMListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EAMListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
