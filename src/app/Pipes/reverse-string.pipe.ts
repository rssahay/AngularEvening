import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {
revValue :string= '';
  transform(value: string, ...args: any[]): any {
    console.log("args check "+ args)
  this.revValue =   value.split('').reverse().join('');
    return this.revValue;
  }

}
