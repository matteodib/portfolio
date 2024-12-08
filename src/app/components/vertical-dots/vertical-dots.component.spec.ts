import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalDotsComponent } from './vertical-dots.component';

describe('VerticalDotsComponent', () => {
  let component: VerticalDotsComponent;
  let fixture: ComponentFixture<VerticalDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalDotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
