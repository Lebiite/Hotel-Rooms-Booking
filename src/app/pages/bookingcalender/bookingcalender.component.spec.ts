import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingcalenderComponent } from './bookingcalender.component';

describe('BookingcalenderComponent', () => {
  let component: BookingcalenderComponent;
  let fixture: ComponentFixture<BookingcalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingcalenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
