import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    const resultArray: any[] = [];
    if(value.length === 0 || filterString === '' || propName === '') {
      return  value;
    }
    // resultArray = value.filter((item) => item[propName] === filterString);
    for(const item of value) {
      if(item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
