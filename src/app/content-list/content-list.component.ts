import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  // Define your array of content here so the variable is available in content-list.comp....html
  name: string;
  myContentArray: Content[];
  contentItem = {
    id: 0,
    imageUrl:
    'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content',
    type: 'news',
    tags: []
  };

  contentItem4 = {
    id: 0,
    imageUrl:
    'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content This is the body of the content This is the body of the content',
    type: 'news',
    tags: []
  };

  contentItem2 = {
    id: 1,
    imageUrl:
    'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content item 2',
    type: 'old',
    tags: []
  };

  contentItem3 = {
    id:2,
    imageUrl:
    'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content item 2',
    tags: []
  };

  ngOnInit(){
    this.myContentArray = [this.contentItem, this.contentItem2, this.contentItem3, this.contentItem4]
  }
}
