import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name : 'phonePipe'
})
export class PhonePipe implements PipeTransform{
    transform(value: any) {
        return "("+value.substr(0,3)+") "+value.substr(3,3)+"-"+value.substr(6,9)
    }

}