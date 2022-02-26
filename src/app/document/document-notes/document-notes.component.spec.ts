import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentNotesComponent } from './document-notes.component';

describe('DocumentNotesComponent', () => {
  let component: DocumentNotesComponent;
  let fixture: ComponentFixture<DocumentNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
