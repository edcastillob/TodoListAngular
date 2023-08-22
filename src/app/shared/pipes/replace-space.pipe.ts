import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace'
})
export class ReplaceSpacePipe implements PipeTransform {

  transform(value: string, args: string): string {
    return value.split(' ').join(args).toLocaleLowerCase();
  }

}
 