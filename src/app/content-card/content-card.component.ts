import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  // Define 3 contentItems
  contentItem2:Content = {
    id: 1025,
    imageUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
    body: 'This is the body of the content item 2',
    type: 'news',
    tags: []
  }

  // let myContentList: ContentList;

  constructor() {
    // create an instance of your ContentList and add at least 3 valid items to it using the
    // ContentList's add function in the Content- card's constructor.
    // myContentList.add(contentItem2); or whatever your function is called
    
  }

  // getItems(){}
  // function will call contentList.get (the function that returns Content[])
  processContent (content: Content):void {
    console.log(content.body);
  }

  ngOnInit(){
  //called after the constructor and called after the first ngOnChanges()
    this.content = {
      id: 0,
      imageUrl:
      'https://angular.io/assets/images/logos/angular/angular .png',
      body: 'This is the body of the content',
      type: 'news',
      tags: []
    };
  }
}
