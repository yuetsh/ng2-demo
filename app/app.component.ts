import {Component} from 'angular2/core';
// import {Hero} from './hero'
interface Hero {
	id: number,
	name: string
}

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<h2>My favorite hero is {{hero.name}}</h2>
	`
})

export class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}
