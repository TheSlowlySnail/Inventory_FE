import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendOverviewComponent } from './lend-overview.component';

describe('LendOverviewComponent', () => {
  let component: LendOverviewComponent;
  let fixture: ComponentFixture<LendOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
