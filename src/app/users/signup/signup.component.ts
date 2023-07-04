import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpUsers: HttpClient,
    // public dialogRef: MatDialogRef<SignupComponent>,
    // @Inject(MAT_DIALOG_DATA) public data:any
    ){}
  
  ngOnInit(): void {
    this.signUpformControls();

    // console.log('data received', this.data)
  }

  signUpformControls(){
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dateOfJoining: new Date().toISOString().slice(0, 10)
    })
  }

  // formData = {
  //   ...this.signUpForm.value,
  //   timestamp: new Date().toISOString()
  // }

  onSubmit(){
    if(this.signUpForm.valid){
      this.httpUsers.post('http://localhost:3000/users', this.signUpForm.value).subscribe((el:any)=>{
        console.log(el);
      })
      this.signUpForm.reset();
    }
  }

}
