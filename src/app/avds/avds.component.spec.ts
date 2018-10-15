import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvdsComponent } from './avds.component';

describe('AvdsComponent', () => {
  let component: AvdsComponent;
  let fixture: ComponentFixture<AvdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
