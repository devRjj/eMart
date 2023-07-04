import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.scss']
})
export class NewsletterComponent implements OnInit{

  constructor(private dialog: MatDialog, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    setTimeout(() => {
      this.openDialog();
      this.cdr.detectChanges();
    }, 2000);
  }

  openDialog(): void {
    const config = new MatDialogConfig;
    config.position ={
      top: '50px',
      left: '550px'
    }
    this.dialog.open(DialogBoxComponent, config);
  }


}
