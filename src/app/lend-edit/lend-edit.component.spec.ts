import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LendEditComponent } from './lend-edit.component';

describe('LendEditComponent', () => {
  let component: LendEditComponent;
  let fixture: ComponentFixture<LendEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LendEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LendEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
