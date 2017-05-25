webpackJsonp([1,5],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'alice-root',
            template: __webpack_require__(526),
            styles: [__webpack_require__(520)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__(462);
/* unused harmony reexport AppComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a"]; });




/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a" /* NotFoundComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__google_maps_google_maps_service__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__voice_voice_service__ = __webpack_require__(464);
/* unused harmony reexport GoogleMapsService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__voice_voice_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services; });



var services = [
    __WEBPACK_IMPORTED_MODULE_0__google_maps_google_maps_service__["a" /* GoogleMapsService */],
    __WEBPACK_IMPORTED_MODULE_1__voice_voice_service__["a" /* VoiceService */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 336;


/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(306);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_app_app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__containers__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: __WEBPACK_IMPORTED_MODULE_7__containers__["a" /* default */].concat(__WEBPACK_IMPORTED_MODULE_6__components__["a" /* default */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            ],
            providers: __WEBPACK_IMPORTED_MODULE_8__services__["a" /* services */].slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__containers_app_app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__(304);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* HomeComponent */],
    },
    {
        path: ':paragraph',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["b" /* HomeComponent */],
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["c" /* NotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_svg_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paragraph_paragraph_component__ = __webpack_require__(459);
/* unused harmony reexport SvgComponent */
/* unused harmony reexport ParagraphComponent */



/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__svg_svg_component__["a" /* SvgComponent */],
    __WEBPACK_IMPORTED_MODULE_1__paragraph_paragraph_component__["a" /* ParagraphComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParagraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParagraphComponent = (function () {
    function ParagraphComponent() {
        this.read = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
        this.activeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* EventEmitter */]();
    }
    ParagraphComponent.prototype.readThis = function () {
        this.read.emit(this.index);
    };
    ParagraphComponent.prototype.setActive = function () {
        this.activeChange.emit(this.index);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(), 
        __metadata('design:type', Number)
    ], ParagraphComponent.prototype, "index", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], ParagraphComponent.prototype, "read", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(), 
        __metadata('design:type', Object)
    ], ParagraphComponent.prototype, "activeChange", void 0);
    ParagraphComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'alice-paragraph',
            template: __webpack_require__(525),
            styles: [__webpack_require__(519)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphComponent);
    return ParagraphComponent;
}());
//# sourceMappingURL=paragraph.component.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SvgComponent = (function () {
    function SvgComponent(http, host, sanitizer) {
        this.http = http;
        this.host = host;
        this.sanitizer = sanitizer;
    }
    SvgComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.http.get(changes.src.currentValue)
            .map(function (r) { return r.text(); })
            .subscribe(function (svg) {
            _this.html = _this.sanitizer.bypassSecurityTrustHtml(svg);
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(), 
        __metadata('design:type', String)
    ], SvgComponent.prototype, "src", void 0);
    SvgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'alice-svg',
            template: "<span [innerHtml]=\"html\"></span>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _c) || Object])
    ], SvgComponent);
    return SvgComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=svg.component.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(http, ref, route, router, voice) {
        var _this = this;
        this.http = http;
        this.ref = ref;
        this.route = route;
        this.router = router;
        this.voice = voice;
        this.playNext = function () {
            if (_this.active + 1 >= _this.book.length) {
                return;
            }
            _this.speek(_this.active + 1);
        };
        this.setActive = function (index) {
            _this.active = index;
            document.querySelector(".p-" + _this.active).scrollIntoView();
            _this.ref.detectChanges();
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get((__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].production ? '/alice' : '') + '/assets/books/test.json')
            .subscribe(function (r) { return _this.initBook(r.json()); });
    };
    HomeComponent.prototype.initBook = function (book) {
        var _this = this;
        this.book = book;
        this.route.params.subscribe(function (params) {
            var active = Number(params['paragraph']);
            if (!active) {
                return;
            }
            _this.setActive(active);
            setTimeout(function () {
                var el = document.querySelector(".p-" + active);
                if (el) {
                    el.scrollIntoView();
                }
            }, 1000);
        });
    };
    HomeComponent.prototype.speek = function (index) {
        this.setActive(index);
        this.voice.say({
            text: this.book[index],
            ended: this.playNext,
            started: null,
        });
    };
    HomeComponent.prototype.stop = function () {
        this.voice.stop();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'alice-home',
            template: __webpack_require__(527),
            styles: [__webpack_require__(521)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ChangeDetectorRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ChangeDetectorRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* VoiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* VoiceService */]) === 'function' && _e) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
            selector: 'alice-not-found',
            template: __webpack_require__(528),
            styles: [__webpack_require__(522)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapsService = (function () {
    function GoogleMapsService() {
        var _this = this;
        this.key = 'AIzaSyAt-N-ptBqGUiJEZAHIHP15u3Zwg7arjPg';
        this.resolvePromise = null;
        this.initCallback = function () {
            _this.isReady = true;
            if (_this.resolvePromise) {
                _this.resolvePromise(google);
            }
        };
        this.updateLocation = function () {
            navigator.geolocation.getCurrentPosition(function (data) {
                _this.location = { lat: data.coords.latitude, lng: data.coords.longitude };
            });
            return _this;
        };
        this.createScript().updateLocation();
        setInterval(this.updateLocation, 30000);
    }
    GoogleMapsService.prototype.createScript = function () {
        var el = document.createElement('script');
        el.src = this.url;
        el.onload = this.initCallback;
        document.body.appendChild(el);
        return this;
    };
    GoogleMapsService.prototype.api = function () {
        var _this = this;
        return this.isReady
            ? Promise.resolve(google)
            : new Promise(function (r) { return _this.resolvePromise = r; });
    };
    Object.defineProperty(GoogleMapsService.prototype, "url", {
        get: function () {
            return "https://maps.googleapis.com/maps/api/js?key=" + this.key + "&libraries=places";
        },
        enumerable: true,
        configurable: true
    });
    GoogleMapsService.prototype.getLocation = function () {
        var _this = this;
        if (this.location) {
            return Promise.resolve(this.location);
        }
        return new Promise(function (resolve) {
            navigator.geolocation.getCurrentPosition(function (data) {
                _this.location = { lat: data.coords.latitude, lng: data.coords.longitude };
                resolve(_this.location);
            });
        });
    };
    GoogleMapsService.prototype.createMap = function (el, props) {
        var _this = this;
        if (props === void 0) { props = {}; }
        return new Promise(function (resolve) { return _this.api().then(function (g) {
            var defaults = {
                center: { lat: 50.4557292, lng: 30.514657600000003 },
                zoom: 3,
                mapTypeId: g.maps.MapTypeId.ROADMAP,
                zoomControl: true,
                mapTypeControl: false,
                scaleControl: true,
                streetViewControl: true,
                rotateControl: true
            };
            resolve(new g.maps.Map(el, _.extend(props, defaults)));
        }); });
    };
    GoogleMapsService.prototype.addMarker = function (map) {
        var _this = this;
        return new Promise(function (resolve) { return _this.api().then(function (g) {
            var handler = map.addListener('click', function (e) {
                var marker = new google.maps.Marker({
                    position: e.latLng,
                    map: map,
                    animation: g.maps.Animation.DROP,
                });
                g.maps.event.removeListener(handler);
                resolve(marker);
            });
        }); });
    };
    GoogleMapsService.prototype.drawPolygon = function (map) {
        var _this = this;
        var polygonProps = {
            strokeColor: '#000000',
            strokeOpacity: 0.9,
            strokeWeight: 3,
            fillColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
            editable: true,
        };
        return new Promise(function (resolve) {
            _this.api().then(function (g) {
                var poly = new g.maps.Polygon(polygonProps);
                poly.setMap(map);
                var handler = map.addListener('click', function (e) { return poly.getPath().push(e.latLng); });
                var stopDrawing = function () {
                    g.maps.event.removeListener(handler);
                    poly.setMap(null);
                    return {
                        coords: poly.getPath().getArray().map(function (c) { return ({ lat: c.lat(), lng: c.lng() }); }),
                    };
                };
                resolve(stopDrawing);
            });
        });
    };
    GoogleMapsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], GoogleMapsService);
    return GoogleMapsService;
}());
//# sourceMappingURL=google-maps.service.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VoiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VoiceService = (function () {
    function VoiceService() {
    }
    VoiceService.prototype.say = function (_a) {
        var _this = this;
        var text = _a.text, ended = _a.ended, started = _a.started;
        this.stop();
        this.element = document.createElement('audio');
        document.body.appendChild(this.element);
        this.element.src = this.getUrl(text);
        this.element.oncanplaythrough = function () {
            _this.element.play();
            if (started) {
                started();
            }
        };
        this.element.onended = function () {
            _this.stop();
            if (ended) {
                ended();
            }
        };
    };
    VoiceService.prototype.stop = function () {
        if (!this.element) {
            return;
        }
        this.element.pause();
        this.element.remove();
        this.element = null;
    };
    VoiceService.prototype.getUrl = function (text) {
        return "https://tts.voicetech.yandex.net/generate?text=" + encodeURIComponent(text) + "&format=mp3&lang=ru-RU&speaker=ermil&speed=1.1&emotion=good&key=eb4e0c54-b98f-4130-bcde-02998d05de2c";
    };
    VoiceService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], VoiceService);
    return VoiceService;
}());
//# sourceMappingURL=voice.service.js.map

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  padding-right: 50px;\n  min-height: 40px; }\n  :host.active .index {\n    background-color: #6c93f3; }\n\n.index {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 30px;\n  height: 30px;\n  right: 5px;\n  top: 0;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: #eee;\n  transition: .3s background-color; }\n  .index:hover {\n    background-color: #6c93f3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, ".container {\n  max-width: 600px;\n  margin: auto; }\n\n.stop {\n  height: 40px;\n  width: 40px;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 12px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 525:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"readThis()\">\n  <ng-content></ng-content>\n</p>\n\n<div class=\"index\" (click)=\"setActive()\">{{ index }}</div>\n"

/***/ }),

/***/ 526:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 527:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <alice-paragraph\n    *ngFor=\"let p of book; let i = index\"\n    [index]=\"i\"\n    [ngClass]=\" { 'active': i == active }\"\n    (read)=\"speek($event)\"\n    (activeChange)=\"setActive($event)\"\n    [class]=\"'p-' + i\"\n  >\n    {{ p }}\n  </alice-paragraph>\n</div>\n\n<div class=\"stop\" (click)=\"stop()\">\n  stop\n</div>\n"

/***/ }),

/***/ 528:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 548:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(337);


/***/ })

},[548]);
//# sourceMappingURL=main.bundle.js.map