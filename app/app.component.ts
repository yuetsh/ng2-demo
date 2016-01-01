/// <reference path="../typings/angular2/angular2.d.ts" />

import {Component} from 'angular2/core';

interface Hero {
    id: number,
    name: string
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
	`,
    styles: [`
        
    `]
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public heros = HEROES;
}

const HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];
