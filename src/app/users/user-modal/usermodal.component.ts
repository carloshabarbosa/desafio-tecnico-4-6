import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

import { UsersComponent } from '../user-list/users.component';
import { UsersService } from '../users.service';



@Component({
    selector: 'usermodal',
    templateUrl: 'usermodal.component.html',
  })
export class UsermodalDialog {
  public repos: any[];

  constructor(
    public dialogRef: MatDialogRef<UsersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 

    }
    

  onNoClick(): void {
    this.dialogRef.close();
  }

}
