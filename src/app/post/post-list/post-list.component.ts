import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  postDataSource = new MatTableDataSource<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    // this.getPost();
  }

  getPost() {
    this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => {
        this.postDataSource.data = data.items;
        console.log('data', this.postDataSource.data);
      });
  }
}
