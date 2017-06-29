webpackJsonp([1,5],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return OpenPickerAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FileSelectedAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LoadFileAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return OpenFileAction; });
var actionTypes = {
    OPEN_PICKER: '[Book] Open picker',
    FILE_SELCTED: '[Book] File selected',
    LOAD_FILE: '[Book] Load file',
    OPEN_FILE: '[Book] Open file',
};
var OpenPickerAction = (function () {
    function OpenPickerAction() {
        this.type = actionTypes.OPEN_PICKER;
    }
    return OpenPickerAction;
}());
var FileSelectedAction = (function () {
    function FileSelectedAction() {
        this.type = actionTypes.FILE_SELCTED;
    }
    return FileSelectedAction;
}());
var LoadFileAction = (function () {
    function LoadFileAction(payload) {
        this.payload = payload;
        this.type = actionTypes.LOAD_FILE;
    }
    return LoadFileAction;
}());
var OpenFileAction = (function () {
    function OpenFileAction(payload) {
        this.payload = payload;
        this.type = actionTypes.OPEN_FILE;
    }
    return OpenFileAction;
}());
//# sourceMappingURL=book.actions.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__voice_voice_service__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__google_drive_google_drive_service__ = __webpack_require__(557);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__voice_voice_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__google_drive_google_drive_service__["a"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return services; });



var services = [
    __WEBPACK_IMPORTED_MODULE_0__voice_voice_service__["a" /* VoiceService */],
    __WEBPACK_IMPORTED_MODULE_1__google_drive_google_drive_service__["a" /* GoogleDriveService */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-root',
            template: __webpack_require__(624),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book_component__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__ = __webpack_require__(555);
/* unused harmony reexport AppComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__book_book_component__["a"]; });





/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_3__not_found_not_found_component__["a" /* NotFoundComponent */],
    __WEBPACK_IMPORTED_MODULE_2__book_book_component__["a" /* BookComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 409;


/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(499);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);






var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var makeVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* enableProdMode */])();
}
var bootstrapApp = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (!__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    if (false) {
        hmrBootstrap(module, bootstrapApp);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrapApp();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_app_app_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__containers__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__containers_reducers__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__containers_book_book_effects__ = __webpack_require__(552);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* NgModule */])({
            declarations: __WEBPACK_IMPORTED_MODULE_10__containers__["a" /* default */].concat(__WEBPACK_IMPORTED_MODULE_9__components__["a" /* default */]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_12__containers_reducers__["a" /* appReducer */]),
                __WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension(),
                __WEBPACK_IMPORTED_MODULE_13__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_14__containers_book_book_effects__["a" /* BookEffects */]),
            ],
            providers: __WEBPACK_IMPORTED_MODULE_11__services__["a" /* services */].slice(),
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__containers_app_app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers__ = __webpack_require__(360);
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
        path: 'book',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["c" /* BookComponent */],
    },
    {
        path: 'book/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["c" /* BookComponent */],
    },
    // {
    //   path: 'book/:id/:paragraph',
    //   component: BookComponent,
    // },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__containers__["d" /* NotFoundComponent */]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=app.routing.module.js.map

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__svg_svg_component__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__paragraph_paragraph_component__ = __webpack_require__(549);
/* unused harmony reexport SvgComponent */
/* unused harmony reexport ParagraphComponent */



/* harmony default export */ __webpack_exports__["a"] = [
    __WEBPACK_IMPORTED_MODULE_0__svg_svg_component__["a" /* SvgComponent */],
    __WEBPACK_IMPORTED_MODULE_1__paragraph_paragraph_component__["a" /* ParagraphComponent */],
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        this.read = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.activeChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    ParagraphComponent.prototype.readThis = function () {
        this.read.emit(this.index);
    };
    ParagraphComponent.prototype.setActive = function () {
        this.activeChange.emit(this.index);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-paragraph',
            template: __webpack_require__(623),
            styles: [__webpack_require__(615)]
        }), 
        __metadata('design:paramtypes', [])
    ], ParagraphComponent);
    return ParagraphComponent;
}());
//# sourceMappingURL=paragraph.component.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(376);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Input */])(), 
        __metadata('design:type', String)
    ], SvgComponent.prototype, "src", void 0);
    SvgComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-svg',
            template: "<span [innerHtml]=\"html\"></span>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* ElementRef */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _c) || Object])
    ], SvgComponent);
    return SvgComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=svg.component.js.map

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_actions__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookComponent = (function () {
    function BookComponent(route, store, router, drive, voice) {
        var _this = this;
        this.route = route;
        this.store = store;
        this.router = router;
        this.drive = drive;
        this.voice = voice;
        this.playNext = function () {
            if (_this.active + 1 >= _this.book.length) {
                return;
            }
            _this.speek(_this.active + 1);
        };
        this.setActive = function (index) {
            _this.active = index;
            // document.querySelector(`.p-${this.active}`).scrollIntoView();
            // this.ref.detectChanges();
        };
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.take(1).subscribe(function (params) {
            if (params['id']) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__book_actions__["d" /* LoadFileAction */](params['id']));
            }
            else {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__book_actions__["e" /* OpenPickerAction */]());
            }
        });
        this.store.select('book').subscribe(function (state) {
            _this.book = state.book;
            // this.active = state.active;
        });
    };
    BookComponent.prototype.speek = function (index) {
        this.setActive(index);
        this.voice.say({
            text: this.book[index],
            ended: this.playNext,
            started: null,
        });
    };
    BookComponent.prototype.stop = function () {
        this.voice.stop();
    };
    BookComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-book',
            template: __webpack_require__(625),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* GoogleDriveService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services__["b" /* GoogleDriveService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["c" /* VoiceService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services__["c" /* VoiceService */]) === 'function' && _e) || Object])
    ], BookComponent);
    return BookComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_actions__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BookEffects = (function () {
    function BookEffects(actions$, router, drive) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.drive = drive;
        this.$selectFile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__book_actions__["a" /* actionTypes */].OPEN_PICKER)
            .switchMap(function () { return _this.drive.open()
            .do(function (file) { return _this.router.navigate(['/book', file.id]); })
            .map(function () { return new __WEBPACK_IMPORTED_MODULE_4__book_actions__["b" /* FileSelectedAction */](); }); });
        this.$loadFile = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__book_actions__["a" /* actionTypes */].LOAD_FILE)
            .map(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["b" /* toPayload */])
            .switchMap(function (id) {
            return _this.drive.getFileInner(id)
                .map(function (book) { return new __WEBPACK_IMPORTED_MODULE_4__book_actions__["c" /* OpenFileAction */](book); });
        });
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Effect */])(), 
        __metadata('design:type', Object)
    ], BookEffects.prototype, "$selectFile", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["c" /* Effect */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"]) === 'function' && _a) || Object)
    ], BookEffects.prototype, "$loadFile", void 0);
    BookEffects = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["d" /* Actions */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__ngrx_effects__["d" /* Actions */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_services__["b" /* GoogleDriveService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services__["b" /* GoogleDriveService */]) === 'function' && _d) || Object])
    ], BookEffects);
    return BookEffects;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=book.effects.js.map

/***/ }),

/***/ 553:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book_actions__ = __webpack_require__(155);
/* unused harmony export initialState */
/* harmony export (immutable) */ __webpack_exports__["a"] = bookReducer;

var initialState = {
    book: null,
};
function bookReducer(state, action) {
    if (state === void 0) { state = initialState; }
    var actions = (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_0__book_actions__["a" /* actionTypes */].OPEN_PICKER] = function () { return Object.assign({}, state, { book: null }); },
        _a[__WEBPACK_IMPORTED_MODULE_0__book_actions__["a" /* actionTypes */].OPEN_FILE] = function () { return Object.assign({}, state, { book: action.payload.split('\n') }); },
        _a
    );
    return actions[action.type] ? actions[action.type]() : state;
    var _a;
}
//# sourceMappingURL=book.reducer.js.map

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(76);
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
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.openBook = function () {
        this.router.navigate(['book']);
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-home',
            template: __webpack_require__(626),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
            selector: 'alice-not-found',
            template: __webpack_require__(627),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_environments_environment__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__ = __webpack_require__(620);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_reducer__ = __webpack_require__(553);
/* harmony export (immutable) */ __webpack_exports__["a"] = appReducer;





var reducers = {
    book: __WEBPACK_IMPORTED_MODULE_4__book_book_reducer__["a" /* bookReducer */]
};
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_2_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* combineReducers */])(reducers);
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* combineReducers */])(reducers);
function appReducer(state, action) {
    return __WEBPACK_IMPORTED_MODULE_0_environments_environment__["a" /* environment */].production
        ? productionReducer(state, action)
        : developmentReducer(state, action);
}
//# sourceMappingURL=reducers.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_conf_config__ = __webpack_require__(559);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleDriveService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleDriveService = (function () {
    function GoogleDriveService(http) {
        var _this = this;
        this.http = http;
        this.apiKey = __WEBPACK_IMPORTED_MODULE_3_conf_config__["a" /* default */].apiKey;
        this.clientId = __WEBPACK_IMPORTED_MODULE_3_conf_config__["a" /* default */].clientId;
        this.file = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.open = function () { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].fromPromise(_this.doAuth(true)
            .then(_this.showPicker)
            .then(_this.getFile)); };
        this.getFileInner = function (id) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
            headers.append('Authorization', "Bearer " + gapi.auth.getToken().access_token);
            return _this.http.get("https://www.googleapis.com/drive/v3/files/" + id + "?alt=media", { headers: headers }).map(function (res) { return res.text(); });
        };
        this.showPicker = function () { return new Promise(function (resolve) {
            var accessToken = gapi.auth.getToken().access_token;
            _this.picker = new google.picker.PickerBuilder()
                .addView(google.picker.ViewId.DOCUMENTS)
                .setAppId(_this.clientId)
                .setOAuthToken(accessToken)
                .setCallback(function (data) {
                if (data[google.picker.Response.ACTION] !== google.picker.Action.PICKED) {
                    return;
                }
                resolve(data);
            })
                .build()
                .setVisible(true);
        }); };
        this.getFile = function (data) { return new Promise(function (resolve) {
            var file = data[google.picker.Response.DOCUMENTS][0];
            var fileId = file[google.picker.Document.ID];
            var request = gapi.client.drive.files.get({ fileId: fileId });
            request.execute(resolve);
        }); };
        this.pickerApiLoaded = function () { };
        this.doAuth = function (immediate) {
            if (gapi.auth.getToken()) {
                return Promise.resolve();
            }
            return new Promise(function (resolve) {
                gapi.auth.authorize({
                    client_id: _this.clientId + '.apps.googleusercontent.com',
                    scope: 'https://www.googleapis.com/auth/drive.readonly',
                    immediate: immediate
                }, resolve);
            });
        };
        gapi.client.setApiKey(this.apiKey);
        gapi.client.load('drive', 'v2', function () { return _this.doAuth(false); });
        google.load('picker', '1', { callback: this.pickerApiLoaded });
    }
    GoogleDriveService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], GoogleDriveService);
    return GoogleDriveService;
    var _a;
}());
//# sourceMappingURL=google-drive.service.js.map

/***/ }),

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], VoiceService);
    return VoiceService;
}());
//# sourceMappingURL=voice.service.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
    apiKey: 'AIzaSyD7YwJHTsQS-YJqARHL6mKht1Zm-bJ7-jc',
    clientId: '203925229590-2gjhgrp0dp1eeatje9s8gq0id6e5s91r',
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 615:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  position: relative;\n  padding-right: 50px;\n  min-height: 40px; }\n  :host.active .index {\n    background-color: #6c93f3; }\n\n.index {\n  position: absolute;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  width: 30px;\n  height: 30px;\n  right: 5px;\n  top: 0;\n  font-size: 18px;\n  cursor: pointer;\n  padding: 5px;\n  border-radius: 50%;\n  background-color: #eee;\n  transition: .3s background-color; }\n  .index:hover {\n    background-color: #6c93f3; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 617:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ".container {\n  max-width: 600px;\n  margin: auto; }\n\n.stop {\n  height: 40px;\n  width: 40px;\n  position: fixed;\n  background-color: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  font-size: 12px;\n  top: 10px;\n  right: 10px;\n  border-radius: 50%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 618:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, ".book {\n  position: absolute;\n  height: 200px;\n  width: 200px;\n  background-color: #f44242;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  border-radius: 50%;\n  color: #fff;\n  font-size: 24px;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 619:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 623:
/***/ (function(module, exports) {

module.exports = "<p (click)=\"readThis()\">\n  <ng-content></ng-content>\n</p>\n\n<div class=\"index\" (click)=\"setActive()\">{{ index }}</div>\n"

/***/ }),

/***/ 624:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 625:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"book\">\n  <alice-paragraph\n    *ngFor=\"let p of book; let i = index\"\n    [index]=\"i\"\n    [ngClass]=\" { 'active': i == active }\"\n    (read)=\"speek($event)\"\n    (activeChange)=\"setActive($event)\"\n    [class]=\"'p-' + i\"\n  >\n    {{ p }}\n  </alice-paragraph>\n</div>\n\n<div class=\"stop\" (click)=\"stop()\">Stop</div>\n"

/***/ }),

/***/ 626:
/***/ (function(module, exports) {

module.exports = "<div [routerLink]=\"['/book']\" class=\"book\">Open book</div>\n"

/***/ }),

/***/ 627:
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ 887:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(410);


/***/ })

},[887]);
//# sourceMappingURL=main.bundle.js.map