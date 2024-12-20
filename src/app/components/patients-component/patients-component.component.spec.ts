import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsComponentComponent } from './patients-component.component';

describe('PatientsComponentComponent', () => {
  let component: PatientsComponentComponent;
  let fixture: ComponentFixture<PatientsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
