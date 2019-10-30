import { Component } from '@angular/core';
import { Post } from './utils/Post';


const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim elit ac justo lobortis ultricies.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts: Post[] = [
    new Post('Mon premier post', lorem, 2, new Date('October 17, 2018 03:24:00')),
    new Post('Mon deuxième post', lorem, -1, new Date('October 18, 2018 03:24:00')),
    new Post('Encore un post', lorem, 0)
  ];

  getPosts() {
    return this.posts;
  }

}
