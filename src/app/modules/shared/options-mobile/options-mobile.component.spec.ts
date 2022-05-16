import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsMobileComponent } from './options-mobile.component';

describe('OptionsMobileComponent', () => {
  let component: OptionsMobileComponent;
  let fixture: ComponentFixture<OptionsMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionsMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
