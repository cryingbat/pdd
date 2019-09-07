import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "appAgo" })
export class AgoPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      const date = Math.floor(+new Date() - +new Date(value));
      if (date < 30) {
        return "刚刚";
      }
      const unitJson = {
        年: 3600 * 24 * 365,
        月: 3600 * 24 * 12,
        周: 3600 * 24 * 7,
        天: 3600 * 24,
        小时: 3600,
        分钟: 60,
        秒: 1
      };
      let counter = 0;
      for (const unitKey in unitJson) {
        if (unitJson.hasOwnProperty(unitKey)) {
          const unitVal = unitJson[unitKey];
          const counter = Math.floor(date / unitVal);
          if (counter > 0) {
            return `${counter} ${unitKey}前`;
          }
        }
      }
    } else {
      return value;
    }
  }
}
