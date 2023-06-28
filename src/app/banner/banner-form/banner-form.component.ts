import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-banner-form',
  templateUrl: './banner-form.component.html',
  styleUrls: ['./banner-form.component.scss']
})
export class BannerFormComponent {
  subCategary!:FormGroup;

  constructor(private fb:FormBuilder){

  }
  ngOnInit(): void {
    this.CreateSubCategary();
  }
  CreateSubCategary(){
    this.subCategary=this.fb.group({
      "Heading": ['',[Validators.required]],
      "Primary_Button_Text": ['',[Validators.required]],
      "primary_button_link": ['',[Validators.required]],
      "secondary_button_text": ['',[Validators.required]],
      "secondary_button_link": ['',[Validators.required]],
      "Description":['',[]],
      "image": ['',[Validators.required]]
    });
  }

  AddSubCategary(){
    console.log(this.subCategary.value);
    alert("Create Successfully..");
    
  }
}
