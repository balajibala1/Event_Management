import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbookeventComponent } from './viewbookevent.component';

describe('ViewbookeventComponent', () => {
  let component: ViewbookeventComponent;
  let fixture: ComponentFixture<ViewbookeventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbookeventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbookeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
