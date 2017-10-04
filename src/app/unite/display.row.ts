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
@Pipe({
  name: 'displayDataTableRow',
  pure : false
})
export class displayRowPipe implements PipeTransform
{
  transform(data , info) {
      var mainData= data;
      var tempData = data;
      var identifier = info['identifier'];
      var identifierCombo = info['identifierCombo'];
      var temStr = '';

      if (identifier)
      {
        identifier.forEach(element => {
            tempData = tempData[element];
        });
      }
      else if(identifierCombo)
      {
        identifierCombo.forEach(element => {
            element.forEach(ele =>{
                tempData = tempData[ele];
            });

            temStr += tempData + ' ';
            tempData = mainData;
        });

        tempData = temStr.trim();
      }

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