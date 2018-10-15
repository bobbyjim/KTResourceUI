import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptureDetailComponent } from './capture-detail.component';

describe('CaptureDetailComponent', () => {
  let component: CaptureDetailComponent;
  let fixture: ComponentFixture<CaptureDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptureDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptureDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
