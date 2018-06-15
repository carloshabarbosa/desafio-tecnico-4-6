import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from './users.service';
import { DataSource } from '@angular/cdk/table';
import { UsersItem } from './user.model';
import { Observable } from 'rxjs';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  dataSource = new UserDataSource(this.paginator, this.userService)
  displayedColumns = ['id', 'login'];
  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

}

export class UserDataSource extends DataSource<any> {
  constructor(private paginator: MatPaginator,private userService: UsersService) {
    super();
  }
  
  connect(): Observable<UsersItem[]> {
    
    console.log(this.paginator)
    return this.userService.getUsers();
  }

  disconnect() {}
 
}


/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
