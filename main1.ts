import { from } from "rxjs";
import { filter } from "rxjs/operators";

let number = [1, 5, 10, 20];
let source = from(number);

source.subscribe(
    value => {
        console.log(`value: ${value}`);
    },
    error => {
        console.log(`Error: ${error}`);
    },
    () => {
        console.log('Complete');
    }
);