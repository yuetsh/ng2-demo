import {Injectable} from "angular2/core";
import {HEROES} from "./mock-heroes";

@Injectable()

export class HeroService {
    getHeroes() {
        return Promise.resolve(HEROES);
        //return new Promise<Hero[]>(resolve =>
        //    setTimeout(()=>resolve(HEROES), 1000) // 1 seconds
        //);
    }
}