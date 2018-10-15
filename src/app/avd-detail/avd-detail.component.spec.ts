import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvdDetailComponent } from './avd-detail.component';

describe('AvdDetailComponent', () => {
  let component: AvdDetailComponent;
  let fixture: ComponentFixture<AvdDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvdDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
