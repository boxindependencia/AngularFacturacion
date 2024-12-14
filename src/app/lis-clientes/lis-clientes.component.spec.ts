import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisClientesComponent } from './lis-clientes.component';

describe('LisClientesComponent', () => {
  let component: LisClientesComponent;
  let fixture: ComponentFixture<LisClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LisClientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
