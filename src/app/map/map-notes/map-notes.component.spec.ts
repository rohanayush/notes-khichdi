import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapNotesComponent } from './map-notes.component';

describe('MapNotesComponent', () => {
  let component: MapNotesComponent;
  let fixture: ComponentFixture<MapNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
