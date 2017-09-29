import { Component, OnChanges } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  onSubmitValue: string;

  // Displays error message only on focus out
  constructor(fb: FormBuilder) {
    this.form = new FormGroup({
      name: new FormControl('', {
        validators: Validators.minLength(3),
        updateOn: 'blur' // Can also possible to have updateOn: 'submit'
      })
    });
  }

  onSubmit() {
    this.onSubmitValue = this.form.value;
  }
}
