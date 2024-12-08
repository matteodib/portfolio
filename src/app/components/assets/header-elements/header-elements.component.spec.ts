import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElementsComponent } from './header-elements.component';

describe('HeaderElementsComponent', () => {
  let component: HeaderElementsComponent;
  let fixture: ComponentFixture<HeaderElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderElementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
