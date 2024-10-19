import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyInputActionComponent } from './formly-input-action.component';

describe('FormlyInputActionComponent', () => {
  let component: FormlyInputActionComponent;
  let fixture: ComponentFixture<FormlyInputActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormlyInputActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyInputActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
