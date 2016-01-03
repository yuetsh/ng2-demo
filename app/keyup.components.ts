import {Component, OnInit} from "angular2/core";

@Component({
    selector: 'keyup',
    template: `
        <input #box type="text"
            (keyup.enter)="onKey(box.value)"
            (blur)="onKey(box.value); box.value = ''">
        <button (click)="onKey(box.value)">Add</button>
        <ol>
            <li *ngFor="#hero of heroes">
                {{hero}}
            </li>
        </ol>
        `,
})
export class KeyUpComponent {

    heroes:[string] = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];

    onKey(value:string) {
        if (value) {
            this.heroes.push(value);
        }
    }
}