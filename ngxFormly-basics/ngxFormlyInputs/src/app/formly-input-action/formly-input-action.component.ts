import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-input-action',
  templateUrl: './formly-input-action.component.html'
})
export class FormlyInputActionComponent {
  @Output() submit = new EventEmitter<string>();
  model: any = {};
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      key: 'inputField',
      type: 'input',
      templateOptions: {
        placeholder: 'Demand',
        required: true,
      },
    },
  ];

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.model.inputField);
      this.model.inputField = '';
    }
  }
}
