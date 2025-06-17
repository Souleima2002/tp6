import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnseignantComponentComponent } from './enseignant-component.component';

describe('EnseignantComponentComponent', () => {
  let component: EnseignantComponentComponent;
  let fixture: ComponentFixture<EnseignantComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnseignantComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnseignantComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
