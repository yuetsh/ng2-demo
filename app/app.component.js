/// <reference path="../typings/angular2/angular2.d.ts" />
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Tour of Heroes';
                    this.hero = {
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
                    this.hero2 = {
                        id: 1,
                        name: 'Windstorm',
                        details: [
                            {
                                address: '某某区',
                                number: 8000,
                                name: '西安市'
                            },
                            {
                                address: '东城区',
                                number: 8810,
                                name: '北京市'
                            }
                        ]
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>{{title}}</h1>\n\t\t<h2>{{hero.name}} details!</h2>\n        <div>\n            <label>name: </label>\n            <div><input [(ngModel)]=\"hero2.name\" placeholder=\"name\"></div>\n        </div>\n        <ul>\n            <li *ngFor=\"#detail of hero2.details\">\n                <span class=\"red padding\">{{detail.number}}</span>\n                {{detail.address}}\n                <b>{{detail.name}}</b>\n            </li>\n        </ul>\n\t",
                        styles: ["\n        .red {\n            color: red;\n        }\n        .padding {\n            padding-right: 10px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map