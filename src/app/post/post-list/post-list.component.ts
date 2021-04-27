import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayColumns: string[] = ['id', 'title', 'user'];
  postDataSource = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    // fake api, change to real backend later
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        console.log('data', data);
        this.postDataSource.data = data;
        this.postDataSource.paginator = this.paginator;
        this.postDataSource.sort = this.sort;
      });
  }
}
