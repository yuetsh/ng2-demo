/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from 'angular2/core';

interface Hero {
    id: number,
    name: string,
    details: [{ address: string, port: number }]
}

@Component({
    selector: 'my-app',
    template: `
		<h1>{{title}}</h1>
		<h2>{{hero.name}} details!</h2>
        <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" placeholder="name"></div>
        </div>
        <ul>
            <li *ngFor="#detail of hero.details">
                <span class="red padding">{{detail.port}}</span>{{detail.address}}
            </li>
        </ul>
	`,
    styles: [`
        .red {
            color: red;
        }
        .padding {
            padding-right: 10px;
        }
    `]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm',
        details: [
            {
                address: 'yangzhou',
                port: 8000
            },
            {
                address: 'nanjing',
                port: 8810
            }
        ]
    };
}
