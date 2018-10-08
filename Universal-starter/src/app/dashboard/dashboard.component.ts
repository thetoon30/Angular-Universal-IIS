import { Component, OnInit, OnDestroy } from '@angular/core';

import { MetaTagsService } from '../core/meta-tags.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.template.html'
})

export class DashboardComponent implements OnInit, OnDestroy {

  constructor(private metaTagsService: MetaTagsService) {

  }

  ngOnInit() {
      this.metaTagsService.setMeta('Dashboard', 'Dashboard', 'Dashboard', '/Dashboard');
  }

  ngOnDestroy() {
      this.metaTagsService.removeMeta();
  }
}
