import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvdSearchComponent } from './avd-search.component';

describe('AvdSearchComponent', () => {
  let component: AvdSearchComponent;
  let fixture: ComponentFixture<AvdSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvdSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvdSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
