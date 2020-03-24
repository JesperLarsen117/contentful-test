import { Component, OnInit } from '@angular/core';

import { ContentfulService } from './contentful.service';

import { Entry } from 'contentful';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // define private class properties
  private products: Entry<any>[] = [];

  constructor(private contentfulService: ContentfulService) { }

  // fetch data on init
  ngOnInit() {
    this.contentfulService.getProducts()
      .then(products => this.products = products);
  }
}
