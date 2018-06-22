import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditrepComponent } from './editrep.component';

describe('EditrepComponent', () => {
  let component: EditrepComponent;
  let fixture: ComponentFixture<EditrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
