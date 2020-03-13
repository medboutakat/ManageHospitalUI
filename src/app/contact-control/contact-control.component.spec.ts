import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactControlComponent } from './contact-control.component';

describe('ContactControlComponent', () => {
  let component: ContactControlComponent;
  let fixture: ComponentFixture<ContactControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
