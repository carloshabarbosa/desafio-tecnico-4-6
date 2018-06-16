import { Component, OnInit, ViewChild, Inject, Input } from '@angular/core';

import { DataSource } from '@angular/cdk/table';
import { UsersItem } from '../user.model';
import { Observable } from 'rxjs';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsermodalDialog } from '../user-modal/usermodal.component';
import { UsersService } from '../users.service';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  dataSource = new UserDataSource(this.userService)
  displayedColumns = ['id', 'login'];
  constructor(private userService: UsersService, public dialog: MatDialog) { }

  ngOnInit() {
  }


  openDialog(row): void {
    let dialoRef = this.dialog.open(UsermodalDialog, {
      width: '800px',
      data: row
    })
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UsersService) {
    super();
  }
  
  connect(): Observable<UsersItem[]> {
    return this.userService.getUsers();
  }

  disconnect() {}
 
}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
