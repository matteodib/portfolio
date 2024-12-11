import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeeComponent } from './resumee.component';

describe('ResumeeComponent', () => {
  let component: ResumeeComponent;
  let fixture: ComponentFixture<ResumeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
