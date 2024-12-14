import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarclienteComponent } from './ingresarcliente.component';

describe('IngresarclienteComponent', () => {
  let component: IngresarclienteComponent;
  let fixture: ComponentFixture<IngresarclienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarclienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarclienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
