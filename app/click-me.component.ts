/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from "angular2/core";

@Component({
    selector: 'click-me',
    template: `
    <button (click)="onClickMe()">Click Me!</button>
    {{clickMessage}}
    `
})

export class ClickMeComponent {
    clickMessage = '';

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }
}