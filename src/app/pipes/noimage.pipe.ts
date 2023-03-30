import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any): string {

    if ( !images ) {

        return 'assets/img/icons/noimage.png'
      
    }

    if ( images != '') {

      return 'peliculassearch.urlimg';
      
  } else {

    return 'assets/img/icons/noimage.png'
  }

    return null;
  }

}
