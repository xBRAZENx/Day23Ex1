import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {

  transform(num1:number): number {
    return (num1+(0.1*num1)+(0.05*num1)+(0.03*num1))
    
  }

}
