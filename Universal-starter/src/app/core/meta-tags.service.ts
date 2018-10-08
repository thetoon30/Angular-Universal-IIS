import { Meta, Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';

@Injectable()
export class MetaTagsService {
    homeUrl = 'http://localhost:4000';

    constructor( 
        private meta: Meta,
        private title: Title,
      ) { }

    setMeta(title: string, desc: string, image: string, url: string) {
        this.title.setTitle( title + ' - Universal' );
        this.meta.addTags([
          { name: 'description', content: desc },
          { property: 'og:url', content: this.homeUrl + url },
          { property: 'og:type', content: 'website'},
          { property: 'og:title', content: title},
          { property: 'og:description', content: desc },
          { property: 'og:image', content: image },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: title },
          { name: 'twitter:image', content: image },
        ]);
    }

    removeMeta() {
        this.meta.removeTag("name='description'");
        this.meta.removeTag("property='og:url'");
        this.meta.removeTag("property='og:type'");
        this.meta.removeTag("property='og:title'");
        this.meta.removeTag("property='og:description'");
        this.meta.removeTag("property='og:image'");
        this.meta.removeTag("name='twitter:card'");
        this.meta.removeTag("name='twitter:title'");
        this.meta.removeTag("name='twitter:image'");
    }
}