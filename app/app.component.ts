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
            <div><input [(ngModel)]="hero2.name" placeholder="name"></div>
        </div>
        <ul>
            <li *ngFor="#detail of hero2.details">
                <span class="red padding">{{detail.number}}</span>
                {{detail.address}}
                <b>{{detail.name}}</b>
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
                address: '黄浦区',
                number: 8000,
                name: '上海'
            },
            {
                address: '东城区',
                number: 8810,
                name: '北京'
            }
        ]
    };
}
