import { Component, OnInit, OnDestroy } from '@angular/core';

import { MetaTagsService } from '../core/meta-tags.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.template.html'
})

export class AnotherComponent implements OnInit, OnDestroy {

  constructor(private metaTagsService: MetaTagsService) {

  }

  ngOnInit() {
      this.metaTagsService.setMeta('Another', 'Another', 'Another', '/Another');
  }

  ngOnDestroy() {
      this.metaTagsService.removeMeta();
  }
}