import {NgModule } from '@angular/core';
import {MatButtonModule } from '@angular/material/button';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule } from '@angular/material/tooltip';

const MaterialComponents= [
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatBadgeModule,
  MatSelectModule,
  MatDividerModule,
  MatExpansionModule,
  MatTooltipModule
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
