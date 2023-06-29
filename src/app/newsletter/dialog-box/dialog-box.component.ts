import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent {

  newsletterForm!: FormGroup;

  constructor(
    private fb: FormBuilder ,
    private dialogRef: MatDialogRef<DialogBoxComponent>,
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    this.newsletterForm = this.fb.group({
      email: ['', Validators.email]
    })
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  subscribe() {

    const header = new HttpHeaders().set('Content-Type', 'application/json')
    if(this.newsletterForm.valid) {
      this.http.post('http://localhost:3000/newsletter', this.newsletterForm.value, {headers: header}).subscribe(el => {
        console.log(el)
      },
      (error)=>{
        console.log("ye error hai", error.message)
      })
      // console.log(this.newsletterForm.get('email')?.value);
    }
  }

}
