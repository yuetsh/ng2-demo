System.register(["angular2/core"], function(exports_1) {
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
    var KeyUpComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            KeyUpComponent = (function () {
                function KeyUpComponent() {
                    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
                }
                KeyUpComponent.prototype.onKey = function (value) {
                    if (value) {
                        this.heroes.push(value);
                    }
                };
                KeyUpComponent = __decorate([
                    core_1.Component({
                        selector: 'keyup',
                        template: "\n        <input #box type=\"text\"\n            (keyup.enter)=\"onKey(box.value)\"\n            (blur)=\"onKey(box.value); box.value = ''\">\n        <button (click)=\"onKey(box.value)\">Add</button>\n        <ol>\n            <li *ngFor=\"#hero of heroes\">\n                {{hero}}\n            </li>\n        </ol>\n        ",
                    }), 
                    __metadata('design:paramtypes', [])
                ], KeyUpComponent);
                return KeyUpComponent;
            })();
            exports_1("KeyUpComponent", KeyUpComponent);
        }
    }
});
//# sourceMappingURL=keyup.components.js.map