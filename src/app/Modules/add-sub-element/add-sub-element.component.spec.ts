import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubElementComponent } from './add-sub-element.component';

describe('AddSubElementComponent', () => {
  let component: AddSubElementComponent;
  let fixture: ComponentFixture<AddSubElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
