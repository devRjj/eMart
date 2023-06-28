import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
    this.dialog.open(DialogBoxComponent);
  }


}
