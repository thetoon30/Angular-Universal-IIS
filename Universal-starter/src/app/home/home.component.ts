import {Component, OnInit, OnDestroy } from '@angular/core';

import { MetaTagsService } from '../core/meta-tags.service';

@Component({
  selector: 'app-home',
  template: `<h3>{{ message }}</h3>`
})

export class HomeComponent implements OnInit, OnDestroy {
  public message: string;

  constructor(private metaTagsService: MetaTagsService) {

  }

  ngOnInit() {
    this.message = 'Hello';
    this.metaTagsService.setMeta('Home', 'Home', 'Home', '/Home');
  }

  ngOnDestroy() {
      this.metaTagsService.removeMeta();
  }
}
