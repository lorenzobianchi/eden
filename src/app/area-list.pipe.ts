import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaList'
})
export class AreaListPipe implements PipeTransform {

  transform(areaItems): any {
    const areas = [];
    areaItems.forEach(areaItem => {
      if (areas.indexOf(areaItem.area) <= -1) {
        areas.push(areaItem.area);
      }
    });
    return areas.join(', ');
  }

}
