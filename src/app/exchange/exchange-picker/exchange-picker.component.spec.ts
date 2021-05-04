import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangePickerComponent } from './exchange-picker.component';

describe('ExchangePickerComponent', () => {
  let component: ExchangePickerComponent;
  let fixture: ComponentFixture<ExchangePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
