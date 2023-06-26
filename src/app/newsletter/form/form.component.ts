import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  newsletterForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newsletterForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.newsletterForm.invalid) {
      return;
    }

    // Perform the publish logic here
    const formData = this.newsletterForm.value;
    console.log('Publishing newsletter:', formData);

    // Reset the form
    this.newsletterForm.reset();
  }


}
