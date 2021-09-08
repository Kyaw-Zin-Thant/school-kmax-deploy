(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-promotion-promotion-module"],{

/***/ "EGnv":
/*!*******************************************************!*\
  !*** ./src/app/modules/promotion/promotion.module.ts ***!
  \*******************************************************/
/*! exports provided: PromotionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionModule", function() { return PromotionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "U9F8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/promotion/create/create.component */ "eOdn");
/* harmony import */ var _app_shared_basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/basic-components/basic-components.module */ "mHbn");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");










const routes = [
    {
        path: 'lists',
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
    },
    {
        path: 'create',
        component: _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
    },
    {
        path: 'edit/:promotionId',
        component: _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
        canActivate: [_app_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
    },
];
const comLists = [
    _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
];
class PromotionModule {
}
PromotionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PromotionModule });
PromotionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PromotionModule_Factory(t) { return new (t || PromotionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_shared_basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_6__["BasicComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PromotionModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_shared_basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_6__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]], exports: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _app_modules_promotion_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [comLists],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_shared_basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_6__["BasicComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                exports: [
                    comLists
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "U9F8":
/*!**********************************************************!*\
  !*** ./src/app/modules/promotion/list/list.component.ts ***!
  \**********************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/promotion.service */ "cdAh");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/dynamic-table/dynamic-table.component */ "1oe7");
/* harmony import */ var _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/pagination/pagination.component */ "LzDk");










function ListComponent_app_dynamic_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-table", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setfilter", function ListComponent_app_dynamic_table_3_Template_app_dynamic_table_setfilter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r0.promotionLists)("filter", ctx_r0.filter);
} }
function ListComponent_app_pagination_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ListComponent_app_pagination_4_Template_app_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pageChanges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberPerPage", ctx_r1.limit)("numberOfPages", ctx_r1.page)("totalCount", ctx_r1.totalCount);
} }
class ListComponent {
    constructor(_pService, _auth) {
        this._pService = _pService;
        this._auth = _auth;
        this.routeDirLists = {
            routeName: [],
            routeLink: []
        };
        this.tableHeader = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].startDate, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].endDate, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].name, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
        this.actionBtns = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].edit, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].delete, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].view];
        this.objectLabel = ["startDate", "endDate", "name"];
        this.filter = {};
        this.actionLinks = {
            editLink: "",
            detailLink: "",
            deleteLink: "promotions",
            idKeyname: "promotionId",
            isDetailModal: true,
        };
        this.limit = 10;
        this.page = 1;
        this.isAsc = true;
        this.promotionLists = {};
        this.isLoading = true;
    }
    ngOnInit() {
        this.currentUserRole = this._auth.currentUserValue.userType.toLowerCase();
        this.filter = {
            sortColumn: this.objectLabel[0],
            sortDirection: "asc",
            index: 0
        };
        this.promotionLists = null;
        this.isLoading = true;
        this.routeDirLists.routeName = [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Promotion];
        this.actionLinks.editLink = "kmax/promotion/edit";
        // this.actionLinks.detailLink =  "kmax/promotion/detail";
        this.getUserLists();
    }
    getUserLists() {
        this.subscription = this._pService.promotionList(this.searchData, this.page, this.limit, this.filter.sortColumn, this.filter.sortDirection)
            .subscribe(data => {
            let temp = {};
            temp.data = data.promotions;
            temp.tableHeader = this.tableHeader;
            temp.actionBtns = this.actionBtns;
            temp.objectLabel = this.objectLabel;
            temp.btnLink = this.actionLinks;
            this.promotionLists = temp;
            this.isLoading = false;
            this.searchData = null;
            this.totalCount = data.totalCount;
        });
    }
    search(val) {
        this.isLoading = true;
        this.searchData = val;
        setTimeout(() => {
            this.getUserLists();
        }, 200);
    }
    pageChanges(page) {
        this.isLoading = true;
        this.page = page;
        setTimeout(() => {
            this.getUserLists();
        }, 200);
    }
    onFilter(e) {
        this.isLoading = true;
        this.filter = e;
        this.getUserLists();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"])); };
ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 5, vars: 3, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [3, "searchEmit"], [3, "tableData", "filter", "setfilter", 4, "ngIf"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange", 4, "ngIf"], [3, "tableData", "filter", "setfilter"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function ListComponent_Template_app_search_box_searchEmit_2_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ListComponent_app_dynamic_table_3_Template, 1, 2, "app-dynamic-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ListComponent_app_pagination_4_Template, 1, 3, "app-pagination", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.promotionLists == null ? null : ctx.promotionLists.data);
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_4__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_5__["AppSearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_7__["DynamicTableComponent"], _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_8__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvbW90aW9uL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list',
                templateUrl: './list.component.html',
                styleUrls: ['./list.component.css']
            }]
    }], function () { return [{ type: _app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_2__["PromotionService"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "cdAh":
/*!****************************************************!*\
  !*** ./src/app/core/services/promotion.service.ts ***!
  \****************************************************/
/*! exports provided: PromotionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionService", function() { return PromotionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class PromotionService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _env_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    promotionList(searchData, page, limt, sortColumn, SortDirection) {
        console.log(this.baseUrl);
        let url;
        if (searchData)
            url = this.baseUrl + "/promotions?search=" + searchData;
        else
            url =
                this.baseUrl +
                    "/promotions?page=" +
                    page +
                    "&limit=" +
                    limt +
                    "&sortColumn=" +
                    sortColumn +
                    "&sortDirection=" +
                    SortDirection;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((obj) => obj || []));
    }
    createPromotion(promotion) {
        let url = this.baseUrl + "/promotions";
        var formData = new FormData();
        formData.append("name", promotion.name);
        formData.append("startDate", promotion.startDate);
        formData.append("endDate", promotion.endDate);
        formData.append("bannerImage", promotion.bannerImage);
        return this.http.post(url, formData);
    }
    editPromotion(promotion, promotionId) {
        let url = this.baseUrl + "/promotions/" + promotionId;
        var formData = new FormData();
        formData.append("name", promotion.name);
        formData.append("startDate", promotion.startDate);
        formData.append("endDate", promotion.endDate);
        formData.append("bannerImage", promotion.bannerImage);
        return this.http.put(url, formData);
    }
    getPromotionDetail(id) {
        let url = this.baseUrl + "/promotions/" + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((obj) => obj || {}));
    }
}
PromotionService.ɵfac = function PromotionService_Factory(t) { return new (t || PromotionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PromotionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PromotionService, factory: PromotionService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PromotionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "eOdn":
/*!**************************************************************!*\
  !*** ./src/app/modules/promotion/create/create.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _app_shared_models_promotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/models/promotion */ "t4oo");
/* harmony import */ var _app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/promotion.service */ "cdAh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */ "tPJG");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");














function CreateComponent_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.selectedFile.name);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateComponent {
    constructor(formBuilder, _Service, _router, _activeRoute, _auth) {
        this.formBuilder = formBuilder;
        this._Service = _Service;
        this._router = _router;
        this._activeRoute = _activeRoute;
        this._auth = _auth;
        this.submitted = false;
        this.routeDirLists = {
            routeName: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["AdminSideMenu"].Promotion, _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create],
            routeLink: ["kmax/promotion/lists"]
        };
    }
    ngOnInit() {
        this.promotionForm = this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            startDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            endDate: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
        this.checkAction();
    }
    checkAction() {
        this._activeRoute.params.subscribe(params => {
            this.promotionId = params.promotionId;
            if (this.promotionId) {
                this.getUserDetail();
            }
        });
    }
    getUserDetail() {
        this.subscription = this._Service.getPromotionDetail(this.promotionId)
            .subscribe((res) => {
            let promotion = res;
            this.selectedFile = promotion.bannerImage;
            this.promotionForm = this.formBuilder.group({
                name: [promotion.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                startDate: [promotion.startDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                endDate: [promotion.endDate, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.promotionForm.invalid)
            return;
        else {
            if (this.promotionId) {
                this.onUpdate();
            }
            else {
                this.onCreate();
            }
        }
    }
    getFinalData() {
        let promotion = new _app_shared_models_promotion__WEBPACK_IMPORTED_MODULE_3__["Promotion"]();
        promotion.name = this.promotionForm.value.name;
        promotion.startDate = this.promotionForm.value.startDate;
        promotion.endDate = this.promotionForm.value.endDate;
        promotion.bannerImage = this.selectedFile;
        return promotion;
    }
    onCreate() {
        let finalData = this.getFinalData();
        this.subscription = this._Service.createPromotion(finalData)
            .subscribe(() => {
            this.goBack();
        });
    }
    onUpdate() {
        let finalData = this.getFinalData();
        finalData._id = this.promotionId;
        this.subscription = this._Service.editPromotion(finalData, this.promotionId)
            .subscribe(() => {
            this.goBack();
            //this.userForm.reset()
        });
    }
    get f() { return this.promotionForm.controls; }
    goBack() {
        this._router.navigateByUrl('kmax/promotion/lists');
    }
    changeHandler(image) {
        console.log(image.target.files);
        this.selectedFile = image.target.files[0];
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_4__["PromotionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 36, vars: 14, consts: [[1, "h-100"], [1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [1, "main-content"], [1, "col-md-8", "mx-auto", 3, "formGroup"], [1, "container"], [1, "row"], [1, "col-md-12", "form-group"], ["type", "text", "formControlName", "name", "placeholder", "Enter your name", 1, "form-control", "input-style", 3, "ngClass"], [1, "col-md-6", "form-group"], ["type", "date", "formControlName", "startDate", "placeholder", "Enter your start date", 1, "form-control", "input-style", 3, "ngClass"], ["type", "date", "formControlName", "endDate", "placeholder", "Enter your end date", 1, "form-control", "input-style", 3, "ngClass"], ["class", "file-name", "class", "warning-txt", 4, "ngIf"], [1, "upload-wrapper"], [1, "img"], ["src", "assets/icons/fileupload.svg"], ["type", "file", "name", "myfile", "accept", "image/png, image/gif, image/jpeg", 3, "change"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "warning-txt"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-route-direction", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Banner Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateComponent_p_22_Template, 2, 1, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Upload Banner Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateComponent_Template_input_change_28_listener($event) { return ctx.changeHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "cancel-btn", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CreateComponent_Template_cancel_btn_onClick_31_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "primary-btn", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_primary_btn_click_34_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.promotionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.submitted && ctx.f.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.f.startDate.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.f.endDate.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedFile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnSize", "btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.promotionId ? "Update" : "Create");
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_10__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_11__["PrimaryBtnComponent"]], styles: [".upload-wrapper[_ngcontent-%COMP%] {\n    width: 100%;\n    background: linear-gradient(to right, #5C5656 67%, #F8F8F8 13%) top/25px 1px repeat-x, \n    linear-gradient(#5C5656 67%, #F8F8F8 13%) right/1px 22px repeat-y, \n    linear-gradient(to right, #5C5656 67%, #F8F8F8 13%) bottom/25px 1px repeat-x, \n    linear-gradient(#5C5656 67%, #F8F8F8 13%) left/1px 22px repeat-y;\n    height: 250px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    position: relative;\n    overflow: hidden;\n}\n\n\n\ninput[type=file][_ngcontent-%COMP%] {\n    font-size: 163px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    opacity: 0;\n}\n\n\n\n.upload-wrapper[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    color: #DD4B4A;\n    font-size: 16px;\n    font-weight: bold;\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9tb3Rpb24vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYOzs7b0VBR2dFO0lBQ2hFLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7QUFDZDs7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9tb3Rpb24vY3JlYXRlL2NyZWF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwbG9hZC13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1QzU2NTYgNjclLCAjRjhGOEY4IDEzJSkgdG9wLzI1cHggMXB4IHJlcGVhdC14LCAvKiB0b3AgKi9cbiAgICBsaW5lYXItZ3JhZGllbnQoIzVDNTY1NiA2NyUsICNGOEY4RjggMTMlKSByaWdodC8xcHggMjJweCByZXBlYXQteSwgLyogcmlnaHQgKi9cbiAgICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICM1QzU2NTYgNjclLCAjRjhGOEY4IDEzJSkgYm90dG9tLzI1cHggMXB4IHJlcGVhdC14LCAvKiBib3R0b20gKi9cbiAgICBsaW5lYXItZ3JhZGllbnQoIzVDNTY1NiA2NyUsICNGOEY4RjggMTMlKSBsZWZ0LzFweCAyMnB4IHJlcGVhdC15O1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuXG5pbnB1dFt0eXBlPWZpbGVdIHtcbiAgICBmb250LXNpemU6IDE2M3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4udXBsb2FkLXdyYXBwZXI+cHtcbiAgICBjb2xvcjogI0RENEI0QTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create',
                templateUrl: './create.component.html',
                styleUrls: ['./create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_core_services_promotion_service__WEBPACK_IMPORTED_MODULE_4__["PromotionService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "t4oo":
/*!********************************************!*\
  !*** ./src/app/shared/models/promotion.ts ***!
  \********************************************/
/*! exports provided: Promotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Promotion", function() { return Promotion; });
class Promotion {
}


/***/ })

}]);
//# sourceMappingURL=modules-promotion-promotion-module.346f9dfa3da84d0045fe.js.map