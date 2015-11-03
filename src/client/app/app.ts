/**
 * Created by DavidD on 3/11/15.
 */
import {bootstrap,Component, View} from 'angular2/angular2'

@Component({
    selector: 'app',
    template: `<h1>{{name}}</h1>`
})
export class App {

    name: string;

    constructor(){
        this.name = 'PDF Test'
    }
}

bootstrap(App);