import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-create-cat',
  templateUrl: './create-cat.component.html',
  styleUrls: ['./create-cat.component.scss']
})
export class CreateCatComponent implements OnInit
{
 
  CategoryForm!:FormGroup;
  selectedId: string | null = null;

 isUpdate: boolean = false;

 constructor( private router:Router,private fb:FormBuilder,private http:ServiceService,
  public dialog:  MatDialog,private route: ActivatedRoute) {
   }

ngOnInit(): void 
{
  this.createFormStructure();

  this.selectedId = this.route.snapshot.paramMap.get("id");
  console.log("selected Id", this.selectedId);

  if(this.selectedId)
    {
      this.isUpdate = true;
       alert("Do you Want to Edit Category..? ");
      this.getListforUpdation();
    }
 }

 getListforUpdation()
 {
  const endpoint="Categories/"+this.selectedId;
  this.http.getDataFromServer(endpoint).subscribe((res:any)=>
  {
  //  console.log(res);
   this.CategoryForm.patchValue(res);

  })
}

createFormStructure()
{
    this.CategoryForm = this.fb.group(
      {
      'category':this.fb.control(''),
      'description':this.fb.control('')
      }) 
}  


Submit()
{
  if(this.selectedId ==null)
  {
    this.saveData();
  }
  else
  {
    this.updateData();
 }
}

saveData()
{
   console.log(this.CategoryForm.value);
 
  if(this.CategoryForm.valid)
  {
    const body=this.CategoryForm.value;

   this.http.saveDataToServer("Categories",body).subscribe((res:any)=>
   {
     console.log(res);
     alert("Category Created Sucessfully" );
     this.router.navigate(['/categories/main']);
    },error=>{  })
   
  }
} 


  updateData()
  {
    const endPoint = "Categories/" + this.selectedId;

    this.http.UpdateDataToserver(endPoint, this.CategoryForm.value).subscribe((resp: any) =>
    {
      // console.log(resp);
      alert("Category Getting Updated SuccessFully...!");
      
      this.router.navigate(['/categories/main']);
    },
      error => 
      {
        console.log("Category not getting updated");
      })
  }

}


 



