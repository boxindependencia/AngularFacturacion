import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisproductosComponent } from './lisproductos.component';

describe('LisproductosComponent', () => {
  let component: LisproductosComponent;
  let fixture: ComponentFixture<LisproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
