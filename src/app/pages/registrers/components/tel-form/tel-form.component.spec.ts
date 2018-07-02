import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelFormComponent } from './tel-form.component';

describe('TelFormComponent', () => {
  let component: TelFormComponent;
  let fixture: ComponentFixture<TelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
