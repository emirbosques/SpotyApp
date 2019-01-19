import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer  } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer:DomSanitizer ){ }

  transform( value: string, url: string): any {
    const URL = 'https://open.spotify.com/embed/track/';
    const URI = value.substr(14);
    return this.domSanitizer.bypassSecurityTrustResourceUrl( URL + URI );
  }


}
