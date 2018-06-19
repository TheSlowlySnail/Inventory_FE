import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendsOverviewAllComponent } from './lends-overview-all.component';

describe('LendsOverviewAllComponent', () => {
  let component: LendsOverviewAllComponent;
  let fixture: ComponentFixture<LendsOverviewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendsOverviewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendsOverviewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
