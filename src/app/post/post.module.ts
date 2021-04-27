import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '@app/shared/shared-material.module';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';


@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    SharedMaterialModule
  ]
})
export class PostModule { }
