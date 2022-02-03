import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linker'
})
export class LinkerPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      console.log(value.toLowerCase())
      return value.toLowerCase()
    }
    console.log('bad value')
    return value;
  }

}
