import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linker'
})
export class LinkerPipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      let urlRegex = /(https?:\/\/[^\s]+)/g;
      return value.replace(urlRegex, function(url) {
        return `<a href='${url}'>${url}</a>` ;
      })
    }
    console.log('bad value');
    return value;
  }
}
