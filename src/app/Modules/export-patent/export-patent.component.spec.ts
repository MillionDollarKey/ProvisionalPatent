import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPatentComponent } from './export-patent.component';

describe('ExportPatentComponent', () => {
  let component: ExportPatentComponent;
  let fixture: ComponentFixture<ExportPatentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPatentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPatentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
