import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'displayRow'})
export class displayRowPipe implements PipeTransform
{
  transform(data , info) {
      var tempData = data;
      var identifier = info.identifier;

      identifier.forEach(element => {
          tempData = tempData[element];
      });

      if( (<Object>info).hasOwnProperty('displayType') )
      {
        switch(info.displayType){
            case 'image':
                    tempData = "<img src=" + tempData + ">";
                break;
        }
      }

    return tempData;
  }
}