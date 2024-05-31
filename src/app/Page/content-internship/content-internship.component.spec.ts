import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInternshipComponent } from './content-internship.component';

describe('ContentInternshipComponent', () => {
  let component: ContentInternshipComponent;
  let fixture: ComponentFixture<ContentInternshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentInternshipComponent]
    });
    fixture = TestBed.createComponent(ContentInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
