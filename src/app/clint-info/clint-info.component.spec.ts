import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClintInfoComponent } from './clint-info.component';

describe('ClintInfoComponent', () => {
  let component: ClintInfoComponent;
  let fixture: ComponentFixture<ClintInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClintInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClintInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
