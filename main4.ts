import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

let output = document.querySelector('#output');
let button = document.querySelector('#button');
let unsuscribe = document.querySelector('#unsuscribe');

var click = fromEvent(button, 'click');
var clickUnsuscribe = fromEvent(unsuscribe, 'click');

/*click.pipe(
    scan((acc:number, curr:any) => acc + 1, 0)
).subscribe(x => console.log(x));*/


/*function add() {
    let div = document.createElement('div');
    div.innerText = 'Prueba';
    output.appendChild(div);
}*/

/*let clickSubs = click.subscribe(
    event => add(),
    error => console.log(`Error: ${error}`),
    () => console.log('Complete')
);*/

/*clickUnsuscribe.subscribe(() => {
    clickSubs.unsubscribe();
});*/

