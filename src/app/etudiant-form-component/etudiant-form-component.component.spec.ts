import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFormComponentComponent } from './etudiant-form-component.component';

describe('EtudiantFormComponentComponent', () => {
  let component: EtudiantFormComponentComponent;
  let fixture: ComponentFixture<EtudiantFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
