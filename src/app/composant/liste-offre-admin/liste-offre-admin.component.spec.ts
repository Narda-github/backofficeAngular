import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOffreAdminComponent } from './liste-offre-admin.component';

describe('ListeOffreAdminComponent', () => {
  let component: ListeOffreAdminComponent;
  let fixture: ComponentFixture<ListeOffreAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOffreAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOffreAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
