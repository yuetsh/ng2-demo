/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from 'angular2/core';

interface Hero {
    id: number,
    name: string,
    details: [{ address: string, number: number, name: string }]
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
        <ol>
            <li *ngFor="#detail of hero.details">
                <span class="red">{{detail.number}}</span>
                <b>{{detail.name}}</b>
                {{detail.address}}
            </li>
        </ol>
	`,
    styles: [`
        .red {
            color: red;
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
                address: '黄浦区',
                number: 8000,
                name: '上海'
            },
            {
                address: '东城区',
                number: 8010,
                name: '北京'
            }
        ]
    };
}
