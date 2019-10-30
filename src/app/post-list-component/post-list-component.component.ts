import { Component, OnInit, Input} from '@angular/core';
import { AppComponent } from '../app.component';
import { Post } from '../utils/Post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponent implements OnInit {


  posts: Post[];


  constructor( private app: AppComponent) { }

  ngOnInit() {
    this.posts = this.app.getPosts();
  }

}
