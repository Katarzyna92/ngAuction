import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importowanie modułów AM
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // eksportowanie modułów AM aby używać ich w innych modułach aplikacji
  exports:[MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatCardModule, BrowserAnimationsModule]
})
export class AuctionMaterialModule { }
