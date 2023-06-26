import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllproductserviceService } from 'src/app/shared/services/allproductservice.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit{
  selectedId:string|null=null;
  addproducts!:FormGroup;
  isUpdate: boolean = false;
  DateCreate=new Date()
    constructor(private el:FormBuilder,private psotdata:AllproductserviceService,private route:ActivatedRoute,private router:Router,public dialog:  MatDialog,){}
    ngOnInit(): void {
     
      this.createproduct();
      this.selectedId = this.route.snapshot.paramMap.get("id");
      console.log("selected Id", this.selectedId);
    
      if(this.selectedId)
        {
          this.isUpdate = true;
           alert("Do you Want to Edit product. ");
          this.getListforUpdation();
        }
  
    }
    createproduct(){
      this.addproducts=this.el.group({
        productname:['',[]],
        Discription:['',[]],
        Category:['',[]],
        Brand:['',[]],
        Status:['',[]],
        Sizes:['',[]],
        Colors:['',[]],
        Tags:['',[]],
        ProductImage:['',[]],
        ProductCode:['',[]],
        ProductSKU:['',[]],
        Gender:['',[]],
        quantity:['',[]],
        RegualrPrice:['',[]],
        SalePrice:['',[]],
        Date:['',[]]
  
      })
    }
    SaveData(){
      if(this.addproducts.valid)
      {
        const body=this.addproducts.value;
    
       this.psotdata.PostDataToServer("product",body).subscribe((res:any)=>
       {
         console.log(res);
         alert("product Created Sucessfully" );
         this.router.navigate(['/product/product-list']);
        },error=>{  })
       
      }
    }
  
   getListforUpdation()
   {
    const endpoint="product/"+this.selectedId;
    this.psotdata.GetDataToServer(endpoint).subscribe((res:any)=>
    {
    //  console.log(res);
     this.addproducts.patchValue(res);
  
    })
  }
  
  
  
  
  Submit()
  {
    if(this.selectedId ==null)
    {
      this.SaveData();
    }
    else
    {
      this.updateData();
   }
  }
  
  
  
  
    updateData()
    {
      const endPoint = "product/" + this.selectedId;
  
      this.psotdata.UpdateDataToServer(endPoint, this.addproducts.value).subscribe((resp: any) =>
      {
        // console.log(resp);
        alert("product Getting Updated SuccessFully...!");
        
        this.router.navigate(['/product/product-list']);
      },
        error => 
        {
          console.log("product not getting updated");
        })
    }
  
  
  }