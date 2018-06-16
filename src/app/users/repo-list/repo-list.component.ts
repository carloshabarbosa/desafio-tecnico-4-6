import { Component, OnInit, Input } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css']
})
export class RepoListComponent implements OnInit {
  @Input()
  userName: string;

  dataSource: RepoDataSource
  displayedColumns = ['id', 'name', 'clone_url'];
  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.dataSource = new RepoDataSource(this.userService, this.userName)
  }

}

export class RepoDataSource extends DataSource<any> {
  constructor(private userService: UsersService, 
  private userName: string) {
    super();
  }
  
  connect(): Observable<any> {
    var teste = this.userService.getUserPublicRepositories(this.userName);
    console.log(teste);
    return this.userService.getUserPublicRepositories(this.userName);
  }

  disconnect() {}
 
}