import { fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

let source = fromEvent(document, 'mousemove')
                        .pipe(map((event: MouseEvent) => {
                            return {
                                x: event.clientX,
                                y: event.clientY
                            }
                        }), filter(el => {
                            return el.x > 600;
                        }));

source.subscribe(
    value => console.log(value),
    error => console.log(`error: ${error}`),
    () => console.log('Complete')
);