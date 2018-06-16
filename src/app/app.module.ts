import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule, MatPaginatorModule, MatSortModule, MatTreeModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/user_list/users.component';

import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from  '@angular/material/dialog';

import { UsermodalDialog } from './users/user_modal/usermodal.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsermodalDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule, 
    HttpClientModule,
    MatDialogModule, 
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents:[UsermodalDialog],
  
})
export class AppModule { }

