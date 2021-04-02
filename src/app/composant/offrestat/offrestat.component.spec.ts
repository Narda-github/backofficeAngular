import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrestatComponent } from './offrestat.component';

describe('OffrestatComponent', () => {
  let component: OffrestatComponent;
  let fixture: ComponentFixture<OffrestatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffrestatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffrestatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
