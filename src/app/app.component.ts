import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Scottys App';
  theme = 'Games';

  contentItem:Content = {
    id: 1024,
    body: 'This is the body of the content',
    type: 'news'
  }

  contentItem2:Content = {
    id: 1025,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content item 2',
    type: 'news'
  }

  processContent (content: Content):void {
    console.log(content.body);
  }
}
