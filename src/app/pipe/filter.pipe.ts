import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string, key: string): any {
    if (!filterFiled || !key) {
      return list;
    }
    return list.filter( item => {
        return item[filterFiled].indexOf(key) >= 0;
    }
    );
  }

}
