import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sub-categories-form',
  templateUrl: './sub-categories-form.component.html',
  styleUrls: ['./sub-categories-form.component.scss']
})
export class SubCategoriesFormComponent {
  CategoryForm!: FormGroup;
  selectedId: string | null = null;

  isUpdate: boolean = false;
  getmaincategorydata:any[]=[];
  constructor(private router: Router, private fb: FormBuilder, private http:HttpService,
    public dialog: MatDialog, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.createFormStructure();
    this.getmaincateries()
    this.selectedId = this.route.snapshot.paramMap.get("id");
    console.log("selected Id", this.selectedId);

    if (this.selectedId) {
      this.isUpdate = true;
      alert("Do you Want to Edit Category..? ");
      this.getListforUpdation();
    }
  }

  getListforUpdation() {
    const endpoint = "data/" + this.selectedId;
    this.http.getDataToServer(endpoint).subscribe((res: any) => {
      //  console.log(res);
      this.CategoryForm.patchValue(res);

    })
  }

  createFormStructure() {
    this.CategoryForm = this.fb.group(
      {
        "Sub_Categary_Name": ['', [Validators.required]],
      "Description": ['', [Validators.required]],
      "Parent_Categary": ['', [Validators.required]],
      "image": ['', [Validators.required]]
      })
  }


  Submit() {
    if (this.selectedId == null) {
      this.saveData();
    }
    else {
      this.updateData();
    }
  }

  saveData() {
    console.log(this.CategoryForm.value);

    if (this.CategoryForm.valid) {
      const body = this.CategoryForm.value;

      this.http.postDataToServer("data", body).subscribe((res: any) => {
        console.log(res);
        alert("Category Created Sucessfully");
        this.router.navigate(['/categories/sub']);
      }, error => {
        
      })

    }
  }


  updateData() {
    const endPoint = "data/" + this.selectedId;

    this.http.UpdateDataToServer(endPoint, this.CategoryForm.value).subscribe((resp: any) => {
      // console.log(resp);
      alert("Category Getting Updated SuccessFully...!");

      this.router.navigate(['/categories/sub']);
    },
      error => {
        console.log("Category not getting updated");
      })
  }
 getmaincateries(){
  this.http.getDataToServer("Categories").subscribe((res:any)=>{
  console.log("get main cateries",res)
  res.filter((el:any)=>{
    this.getmaincategorydata.push(el.category)
    
  }) 
   
  })
 }

}
