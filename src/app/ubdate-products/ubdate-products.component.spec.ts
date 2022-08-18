import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbdateProductsComponent } from './ubdate-products.component';

describe('UbdateProductsComponent', () => {
  let component: UbdateProductsComponent;
  let fixture: ComponentFixture<UbdateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbdateProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbdateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
