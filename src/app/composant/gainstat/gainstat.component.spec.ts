import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GainstatComponent } from './gainstat.component';

describe('GainstatComponent', () => {
  let component: GainstatComponent;
  let fixture: ComponentFixture<GainstatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GainstatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GainstatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
