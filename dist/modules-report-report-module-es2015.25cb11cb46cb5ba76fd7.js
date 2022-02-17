(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-report-report-module"],{

/***/ "2ltc":
/*!*****************************************!*\
  !*** ./src/app/shared/models/report.ts ***!
  \*****************************************/
/*! exports provided: Report */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Report", function() { return Report; });
class Report {
}


/***/ }),

/***/ "2xrB":
/*!*************************************************************************!*\
  !*** ./src/app/modules/report/report-create/report-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: ReportCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportCreateComponent", function() { return ReportCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _model_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @model/report */ "2ltc");
/* harmony import */ var _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/report.service */ "ZPyn");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/file-upload/file-upload.component */ "a+6p");
/* harmony import */ var _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/basic-components/cancel-btn/cancel-btn.component */ "tPJG");
/* harmony import */ var _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/basic-components/primary-btn/primary-btn.component */ "X68Z");















function ReportCreateComponent_p_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "*You need to upload file.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class ReportCreateComponent {
    constructor(formBuilder, _ser, _activeRoute, _router, _auth) {
        this.formBuilder = formBuilder;
        this._ser = _ser;
        this._activeRoute = _activeRoute;
        this._router = _router;
        this._auth = _auth;
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["TeacherSideMenu"].Report],
            routeLink: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].ReportList,]
        };
    }
    ngOnInit() {
        this.getCheckData();
    }
    getCheckData() {
        this._activeRoute.params.subscribe(params => {
            console.log(params.reportId);
            this.studentId = params.studentId;
            this.reportId = params.reportId;
            this.routeDirLists.routeLink.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
            this.reportForm = this.formBuilder.group({
                note: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
                term: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
            this.routeDirLists.routeName.push(localStorage.getItem("studentName"));
            if (!this.reportId) {
                this.routeDirLists.routeName.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Create);
            }
            else {
                this.getReportDetail();
                this.routeDirLists.routeName.push(_enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["CommonExpands"].Edit);
            }
        });
    }
    getfile(file) {
        this.file = file;
    }
    onSubmit() {
        this.submitted = true;
        if (this.reportForm.invalid || !this.file)
            return;
        else {
            if (this.reportId) {
                this.onEdit();
            }
            else {
                this.onCreate();
            }
        }
    }
    onCreate() {
        let report = new _model_report__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        report.note = this.reportForm.value.note;
        report.report = this.file;
        report.studentId = this.studentId;
        report.type = this.reportForm.value.term;
        console.log(report);
        this.subscription = this._ser.onCreateReport(report)
            .subscribe(() => {
            this.submitted = false;
            this.goBack();
        });
    }
    onEdit() {
        let report = new _model_report__WEBPACK_IMPORTED_MODULE_3__["Report"]();
        report.note = this.reportForm.value.note;
        report.report = this.file;
        report.studentId = this.studentId;
        report._id = this.reportId;
        report.type = this.reportForm.value.term;
        this.subscription = this._ser.onEditReport(report)
            .subscribe(() => {
            this.submitted = false;
            this.goBack();
        });
    }
    getReportDetail() {
        this.subscription = this._ser.getReportDetail(this.reportId)
            .subscribe((report) => {
            let tempReport = report.report;
            this.reportForm = this.formBuilder.group({
                note: [tempReport.note, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            });
        });
    }
    goBack() {
        let currentRole = this._auth.currentUserValue.role.toLowerCase();
        this._router.navigateByUrl(currentRole + "/" + _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
        console.log(currentRole + "/" + _enum_app_enum__WEBPACK_IMPORTED_MODULE_2__["EssentialRoute"].StudentByReport + "/" + this.studentId);
    }
    // convenience getter for easy access to form fields
    get f() { return this.reportForm.controls; }
}
ReportCreateComponent.ɵfac = function ReportCreateComponent_Factory(t) { return new (t || ReportCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"])); };
ReportCreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportCreateComponent, selectors: [["app-report-create"]], decls: 31, vars: 13, consts: [[1, "d-flex", "mt-3"], [3, "dirList"], [1, "col-md-8", "mx-auto"], [3, "formGroup"], [1, "form-group"], ["formControlName", "note", "placeholder", "Enter name", "row", "5", 1, "form-control", "input-style", 3, "ngClass"], [3, "onFile"], ["class", "warning-txt", 4, "ngIf"], ["formControlName", "term", 1, "form-control", "selected-box", 3, "ngClass"], ["value", "", "disabled", "", "selected", ""], [3, "value"], [1, "d-flex", "justify-content-end"], [1, "d-flex", "m-2", "flex-column"], [3, "btnSize", "onClick"], [3, "click"], [1, "warning-txt"]], template: function ReportCreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "textarea", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "File");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "app-file-upload", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFile", function ReportCreateComponent_Template_app_file_upload_onFile_12_listener($event) { return ctx.getfile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportCreateComponent_p_13_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "First Term ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Second Term ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "cancel-btn", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ReportCreateComponent_Template_cancel_btn_onClick_26_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "primary-btn", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReportCreateComponent_Template_primary_btn_click_29_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.reportForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.note.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && !ctx.file);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.term.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "First Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Second Term");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("btnSize", "btn-lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reportId ? "Edit" : "Create");
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_8__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _shared_basic_components_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_10__["FileUploadComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _shared_basic_components_cancel_btn_cancel_btn_component__WEBPACK_IMPORTED_MODULE_11__["CancelBtnComponent"], _shared_basic_components_primary_btn_primary_btn_component__WEBPACK_IMPORTED_MODULE_12__["PrimaryBtnComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L3JlcG9ydC1jcmVhdGUvcmVwb3J0LWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportCreateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-create',
                templateUrl: './report-create.component.html',
                styleUrls: ['./report-create.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "64rK":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/report/report-for-students/report-for-students.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ReportForStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportForStudentsComponent", function() { return ReportForStudentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/services/serviceIndex */ "vbd/");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _shared_basic_components_create_btn_create_btn_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/create-btn/create-btn.component */ "iqVX");
/* harmony import */ var _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/basic-components/dynamic-table/dynamic-table.component */ "1oe7");
/* harmony import */ var _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/pagination/pagination.component */ "LzDk");












function ReportForStudentsComponent_app_create_btn_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-create-btn", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function ReportForStudentsComponent_app_create_btn_2_Template_app_create_btn_onClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.goTocreate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReportForStudentsComponent_app_dynamic_table_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-dynamic-table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("setfilter", function ReportForStudentsComponent_app_dynamic_table_5_Template_app_dynamic_table_setfilter_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableData", ctx_r1.reportLists)("filter", ctx_r1.filter);
} }
function ReportForStudentsComponent_app_pagination_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function ReportForStudentsComponent_app_pagination_6_Template_app_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.pageChanges($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberPerPage", ctx_r2.limit)("numberOfPages", ctx_r2.page)("totalCount", ctx_r2.totalCount);
} }
class ReportForStudentsComponent {
    constructor(_activeRoute, _auth, _reportSerivce, _router) {
        this._activeRoute = _activeRoute;
        this._auth = _auth;
        this._reportSerivce = _reportSerivce;
        this._router = _router;
        this.routeDirLists = {
            routeName: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["TeacherSideMenu"].Report],
            routeLink: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["EssentialRoute"].ReportList]
        };
        this.objectLabel = ["assementName", "assementType", "concept", "maxScore", "socrePercent"];
        this.limit = 10;
        this.page = 1;
        this.isAsc = true;
        this.filter = {
            sortColumn: this.objectLabel[0],
            sortDirection: "asc",
            index: 0
        };
        this.actionLinks = {
            editLink: "",
            deleteLink: "reports",
            idKeyname: "reportId"
        };
        this.reportLists = [];
        this.isLoading = false;
        this.actionBtns = [];
        this.role = _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Role"].Teacher;
    }
    ngOnInit() {
        this._activeRoute.params.subscribe(params => {
            this.studentId = params.id;
            this.type = params.type;
            this.classId = params.classId;
            console.log(this.type);
            this.actionLinks.editLink = "teacher/reports/students/edit/" + this.studentId;
            this.checkPermission();
            if (this.type == 'progress')
                this.getReportProgress();
            else
                this.getReportStudents();
        });
    }
    checkPermission() {
        this.currentRole = this._auth.currentUserValue.role;
        if (this.role == this.currentRole)
            this.actionBtns = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].edit, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].download, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].delete];
        else
            this.actionBtns = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["ActionLabel"].download];
    }
    getReportProgress() {
        this.isLoading = true;
        this.subscription = this._reportSerivce.getReportProgress(this.searchData, this.page, this.limit, this.filter.sortDirection, this.filter.sortColumn, this.studentId, this.classId)
            .subscribe((res) => {
            let temp = {};
            this.totalCount = res.totalCount;
            this.routeDirLists.routeName.push(res.studentName);
            localStorage.setItem("studentName", res.studentName);
            temp.data = res.progresses;
            temp.tableHeader = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].name, 'Assessment Type', 'Concept', 'Max Score', 'Score Percent', _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
            temp.actionBtns = this.actionBtns;
            temp.btnLink = this.actionLinks;
            temp.objectLabel = this.objectLabel;
            this.reportLists = temp;
            this.isLoading = false;
            this.searchData = null;
        });
    }
    getReportStudents() {
        this.isLoading = true;
        this.subscription = this._reportSerivce.getReportStudents(this.searchData, this.page, this.limit, this.filter.sortDirection, this.filter.sortColumn, this.studentId)
            .subscribe((res) => {
            let temp = {};
            this.totalCount = res.totalCount;
            this.routeDirLists.routeName.push(res.studentName);
            localStorage.setItem("studentName", res.studentName);
            temp.data = res.reports;
            temp.tableHeader = [_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].note, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].createDate, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].updateDate, _enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["Label"].action];
            temp.actionBtns = this.actionBtns;
            temp.btnLink = this.actionLinks;
            temp.objectLabel = this.objectLabel;
            this.reportLists = temp;
            this.isLoading = false;
            this.searchData = null;
        });
    }
    onFilter(data) {
        this.filter = data;
        if (this.type == 'progress')
            this.getReportProgress();
        else
            this.getReportStudents();
    }
    search(search) {
        this.searchData = search;
        if (this.type == 'progress')
            this.getReportProgress();
        else
            this.getReportStudents();
    }
    goTocreate() {
        this._router.navigateByUrl("teacher/reports/students/create/" + this.studentId);
    }
    pageChanges(e) {
        console.log(e);
        this.page = e;
        if (this.type == 'progress')
            this.getReportProgress();
        else
            this.getReportStudents();
    }
}
ReportForStudentsComponent.ɵfac = function ReportForStudentsComponent_Factory(t) { return new (t || ReportForStudentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ReportForStudentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportForStudentsComponent, selectors: [["app-report-for-students"]], decls: 7, vars: 4, consts: [[1, "d-flex", "justify-content-between", "align-items-center", "mt-3"], [3, "dirList"], [3, "onClick", 4, "ngIf"], [1, "d-flex", "justify-content-end", "mt-3"], [3, "searchEmit"], [3, "tableData", "filter", "setfilter", 4, "ngIf"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange", 4, "ngIf"], [3, "onClick"], [3, "tableData", "filter", "setfilter"], [3, "numberPerPage", "numberOfPages", "totalCount", "pageChange"]], template: function ReportForStudentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportForStudentsComponent_app_create_btn_2_Template, 1, 0, "app-create-btn", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-search-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function ReportForStudentsComponent_Template_app_search_box_searchEmit_4_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportForStudentsComponent_app_dynamic_table_5_Template, 1, 2, "app-dynamic-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportForStudentsComponent_app_pagination_6_Template, 1, 3, "app-pagination", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeDirLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentRole == ctx.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportLists == null ? null : ctx.reportLists.data);
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__["RouteDirectionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_7__["AppSearchBoxComponent"], _shared_basic_components_create_btn_create_btn_component__WEBPACK_IMPORTED_MODULE_8__["CreateBtnComponent"], _shared_basic_components_dynamic_table_dynamic_table_component__WEBPACK_IMPORTED_MODULE_9__["DynamicTableComponent"], _shared_basic_components_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L3JlcG9ydC1mb3Itc3R1ZGVudHMvcmVwb3J0LWZvci1zdHVkZW50cy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportForStudentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-for-students',
                templateUrl: './report-for-students.component.html',
                styleUrls: ['./report-for-students.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "aHE/":
/*!*****************************************************************!*\
  !*** ./src/app/modules/report/user-view/user-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewComponent", function() { return UserViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/basic-components/profile-image-view/profile-image-view.component */ "wuaa");



class UserViewComponent {
    constructor() {
        this.user = {};
    }
    ngOnInit() {
    }
}
UserViewComponent.ɵfac = function UserViewComponent_Factory(t) { return new (t || UserViewComponent)(); };
UserViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserViewComponent, selectors: [["app-user-view"]], inputs: { user: "user" }, decls: 8, vars: 3, consts: [[1, "d-flex"], [1, "img-wrapper"], [3, "profileImg"], [1, "d-flex", "flex-column"]], template: function UserViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-profile-image-view", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profileImg", ctx.user.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.user.phoneNumber);
    } }, directives: [_shared_basic_components_profile_image_view_profile_image_view_component__WEBPACK_IMPORTED_MODULE_1__["ProfileImageViewComponent"]], styles: [".img-wrapper[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n    margin-right: 15px;\n    background-color: #f3f3f3;\n    padding: 3px;\n}\n\n.img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%;\n}\n\na[_ngcontent-%COMP%]{\n    color: #0076FE;\n    font-weight: bold;\n    font-size: 14px;\n    text-decoration: underline;\n}\n\nspan[_ngcontent-%COMP%]{\n    color: #4A4A4A;\n    font-size: 14px;\n    font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBaUI7T0FBakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvdXNlci12aWV3L3VzZXItdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaW1nLXdyYXBwZXIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAzcHg7XG59XG5cbi5pbWctd3JhcHBlciBpbWd7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuYXtcbiAgICBjb2xvcjogIzAwNzZGRTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNwYW57XG4gICAgY29sb3I6ICM0QTRBNEE7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-view',
                templateUrl: './user-view.component.html',
                styleUrls: ['./user-view.component.css']
            }]
    }], function () { return []; }, { user: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "gVnV":
/*!*************************************************************************!*\
  !*** ./src/app/modules/report/parent-report/parent-report.component.ts ***!
  \*************************************************************************/
/*! exports provided: ParentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentReportComponent", function() { return ParentReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services/report.service */ "ZPyn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_basic_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/basic-components/custom-modal/custom-modal.component */ "aBLa");
/* harmony import */ var _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/basic-components/label/label.component */ "zm56");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







function ParentReportComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentReportComponent_tr_8_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const data_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onExport(data_r3.userId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Export ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3.username, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r3.email, "");
} }
function ParentReportComponent_tr_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No data exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 3);
} }
function ParentReportComponent_app_custom_modal_10_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-custom-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ParentReportComponent_app_custom_modal_10_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.selectedtype = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Term ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Second Term ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentReportComponent_app_custom_modal_10_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentReportComponent_app_custom_modal_10_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.onExportApi(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Export");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("modalSize", "modal-medium");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.selectedtype);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "First Term");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "Second Term");
} }
class ParentReportComponent {
    constructor(_service) {
        this._service = _service;
        this.tabLists = ['Progress Report', 'Final Report'];
        this.activeIndex = 0;
        this.pcList = [];
        this.isModal = false;
        this.selectedtype = "";
    }
    ngOnInit() {
        this.getParentChildList();
    }
    tabChange(index) {
        this.activeIndex = index;
        // if (this.activeIndex == 1)
        //   this.getPaymentLists();
    }
    getParentChildList() {
        this.subscription = this._service.getParentChildList()
            .subscribe((res) => {
            this.pcList = res;
        });
    }
    onExport(userId) {
        this.isModal = true;
        this.selectedUserId = userId;
    }
    closeModal() {
        this.isModal = false;
        this.selectedtype = null;
        this.selectedUserId = null;
    }
    onExportApi() {
        console.log(this.selectedtype);
        this._service.onExportFile(this.selectedUserId, this.selectedtype);
        this.closeModal();
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
ParentReportComponent.ɵfac = function ParentReportComponent_Factory(t) { return new (t || ParentReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"])); };
ParentReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentReportComponent, selectors: [["app-parent-report"]], decls: 11, vars: 3, consts: [[1, "mt-4", 2, "width", "100%"], [2, "width", "10%"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "modalSize", 4, "ngIf"], [1, "td-action"], [1, "btn", "btn-link", 3, "click"], [1, "text-center"], [3, "modalSize"], [1, "form-group"], [1, "form-control", "selected-box", 3, "ngModel", "ngModelChange"], ["value", "", "disabled", "", "selected", ""], [3, "value"], [1, "d-flex", "justify-content-end", "mt-4"], [1, "btn", "btn-canel", 3, "click"], [1, "btn", "btn-export", 3, "click"]], template: function ParentReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " User Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Action ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ParentReportComponent_tr_8_Template, 8, 2, "tr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ParentReportComponent_tr_9_Template, 3, 1, "tr", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ParentReportComponent_app_custom_modal_10_Template, 16, 4, "app-custom-modal", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pcList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pcList.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isModal);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_basic_components_custom_modal_custom_modal_component__WEBPACK_IMPORTED_MODULE_3__["CustomModalComponent"], _shared_basic_components_label_label_component__WEBPACK_IMPORTED_MODULE_4__["LabelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"]], styles: ["table[_ngcontent-%COMP%]{\n    table-layout: fixed;\n}\ntr[_ngcontent-%COMP%] {\n    color: #4A4A4A;\n    border-bottom: 1px solid #707070;\n}\ntd[_ngcontent-%COMP%] {\n    padding: 10px 0;\n    text-overflow: ellipsis;\n    max-width: 10px;\n    white-space: nowrap;\n    overflow: hidden;\n}\n.td-action[_ngcontent-%COMP%]{\n    max-width: unset !important;\n}\nth[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:hover, tr[_ngcontent-%COMP%]:hover{\n    background: #f3f3f3;\n}\nbutton[_ngcontent-%COMP%] {\n    border-radius: 0;\n    padding: 3px 9px;\n    font-size: 14px;\n    border: 0;\n    margin-right: 8px;\n    \n}\nbutton[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]{\n    color: #FFFF !important; \n}\nbutton.edit[_ngcontent-%COMP%] {\n    background-color: #EAA815;\n}\nbutton.delete[_ngcontent-%COMP%] {\n    background-color: #EA1D15;\n}\nbutton.download[_ngcontent-%COMP%] {\n    background-color: #0076FE;\n}\n.modal-body[_ngcontent-%COMP%]{\n    text-align: center;\n}\nbutton.btn.btn-canel[_ngcontent-%COMP%] {\n    background-color: #5c5656;\n    padding: 8px 14px;\n    color: white;\n    margin-right: 16px;\n}\nbutton.btn.btn-export[_ngcontent-%COMP%]{\n    background-color: #0076FE;\n    padding: 8px 14px;\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcGFyZW50LXJlcG9ydC9wYXJlbnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQ0FBZ0M7QUFDcEM7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjtBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBSUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcGFyZW50LXJlcG9ydC9wYXJlbnQtcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZXtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xufVxudHIge1xuICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzA3MDcwO1xufVxuXG50ZCB7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1heC13aWR0aDogMTBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50ZC1hY3Rpb257XG4gICAgbWF4LXdpZHRoOiB1bnNldCAhaW1wb3J0YW50O1xufVxuXG50aD46aG92ZXIsdHI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZDogI2YzZjNmMztcbn1cblxuXG5cbmJ1dHRvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAzcHggOXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgXG59XG5idXR0b24gID4gYXtcbiAgICBjb2xvcjogI0ZGRkYgIWltcG9ydGFudDsgXG59XG5idXR0b24uZWRpdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBQTgxNTtcbn1cblxuYnV0dG9uLmRlbGV0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBMUQxNTtcbn1cblxuYnV0dG9uLmRvd25sb2FkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NkZFO1xufVxuXG4ubW9kYWwtYm9keXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWNhbmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWM1NjU2O1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLWV4cG9ydHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NkZFO1xuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent-report',
                templateUrl: './parent-report.component.html',
                styleUrls: ['./parent-report.component.css']
            }]
    }], function () { return [{ type: _app_core_services_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"] }]; }, null); })();


/***/ }),

/***/ "kmV6":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/report/progress-report/progress-report.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProgressReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressReportComponent", function() { return ProgressReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../user-view/user-view.component */ "aHE/");
/* harmony import */ var _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/basic-components/noti-box/noti-box.component */ "JDKn");











function ProgressReportComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empty report! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProgressReportComponent_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProgressReportComponent_div_6_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const stud_r5 = ctx.$implicit; const report_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.goToStudents(stud_r5.userId, report_r3.classId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-view", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stud_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", stud_r5);
} }
function ProgressReportComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Student Lists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProgressReportComponent_div_6_div_16_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", report_r3.startTime, " - ", report_r3.endTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r3 == null ? null : report_r3.students == null ? null : report_r3.students.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r3.students);
} }
function ProgressReportComponent_app_noti_box_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-noti-box", 22);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "No more classes!");
} }
class ProgressReportComponent {
    constructor(_service, _router, _auth) {
        this._service = _service;
        this._router = _router;
        this._auth = _auth;
        this.routeLists = {
            routeName: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report],
            routeLink: []
        };
        this.reportLists = [];
        this.page = 1;
        this.limit = 10;
        this.direction = 'down';
        this.isclassEmpty = false;
    }
    ngOnInit() {
        this.userData = this._auth.currentUserValue;
        console.log(this.userData);
        this.getReportList();
    }
    getReportList() {
        this.subscription = this._service.getUsersClasses(this.page, this.limit, this.direction, this.searchData)
            .subscribe((res) => {
            console.log(res);
            if (this.direction) {
                this.isclassEmpty = res.classes.length == 0;
                this.reportLists = this.reportLists.concat(res.classes);
            }
            else if (this.searchData) {
                this.reportLists = res.classes;
                this.page = 1;
            }
            else {
                this.reportLists = res.classes;
            }
            console.log(this.reportLists);
        });
    }
    onsearch(val) {
        this.searchData = val;
        this.reportLists = [];
        this.getReportList();
    }
    onScroll(event) {
        var element = event.target;
        if (!this.searchData) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                if (!this.isclassEmpty) {
                    this.direction = "down";
                    this.page += 1;
                    this.getReportList();
                }
            }
        }
    }
    goToStudents(id, classId) {
        this._router.navigateByUrl("teacher/" + _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["EssentialRoute"].StudentByReport + "/" + id + "/" + classId + "/progress");
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
ProgressReportComponent.ɵfac = function ProgressReportComponent_Factory(t) { return new (t || ProgressReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
ProgressReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressReportComponent, selectors: [["app-progress-report"]], decls: 8, vars: 4, consts: [[1, "d-flex", "justify-content-between", "my-3", "align-items-start"], [3, "dirList"], [3, "searchEmit"], [1, "main-content", 3, "scroll"], ["class", "emplty-class", 4, "ngIf"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "message", 4, "ngIf"], [1, "emplty-class"], [1, "card"], [1, "d-flex", "justify-content-between", "card-header"], [1, "d-flex", "align-items-center"], [1, "img", "pr-2"], ["src", "assets/icons/clock_light.svg"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "time"], [1, "card-body"], [1, "mb-2"], [1, "student-wrapper"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "user"], [3, "message"]], template: function ProgressReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-box", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function ProgressReportComponent_Template_app_search_box_searchEmit_2_listener($event) { return ctx.onsearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ProgressReportComponent_Template_div_scroll_3_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProgressReportComponent_div_4_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProgressReportComponent_div_6_Template, 17, 5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProgressReportComponent_app_noti_box_7_Template, 1, 1, "app-noti-box", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx.routeLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.reportLists.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reportLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isclassEmpty);
    } }, directives: [_shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_5__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_6__["AppSearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_8__["UserViewComponent"], _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_9__["NotiBoxComponent"]], styles: [".main-content[_ngcontent-%COMP%]{\n    overflow: overlay;\n    height: 100%;\n    padding: 10px 10px 200px 10px;\n}\n\n.card-columns[_ngcontent-%COMP%]{\n\n    \n    -moz-column-count: 2;\n         column-count: 2;\n}\n\n.card-columns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    \n    \n    border: solid 1px #707070;\n    \n    margin-bottom: 20px;\n    margin: 10px;\n    border-radius: 0;\n}\n\n.report-block[_ngcontent-%COMP%] {\n    border: solid 1px #707070;\n    max-height: 288px;\n    margin-bottom: 20px;\n    margin: 10px\n}\n\n.card-header[_ngcontent-%COMP%] {\n    background: #707070;\n    padding: 10px;\n    border-radius: 0;\n}\n\n.card-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 18px;\n    font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\np.time[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    color: #5C5656;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    background: #DD4B4A;\n    color: #FFFFFF;\n    padding: 3px;\n}\n\nbutton.btn.btn-viewmore[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: #F4F4F4;\n    color: #DD4B4A;\n    font-weight: bold;\n    font-size: 12px;\n    background-repeat: no-repeat;\n    background-position-x: 83px;\n    background-position-y: center;\n    width: 114px;\n    \n    border-radius: 0;\n    text-align: left;\n    padding-left: 15px;\n    background-image: url('create-active.4f05c42c1b9ce580fbb2.svg');\n    \n}\n\n.student-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    max-height: 140px;\n    overflow: overlay;\n}\n\n.student-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    flex-basis: 50%;\n    padding: 10px 0px;\n}\n\n.card-footer[_ngcontent-%COMP%]{\n    padding: 5px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcHJvZ3Jlc3MtcmVwb3J0L3Byb2dyZXNzLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUk7OztrQkFHYztJQUNkLG9CQUFlO1NBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJOztzQkFFa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0RBQXVEO0lBQ3ZELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvcHJvZ3Jlc3MtcmVwb3J0L3Byb2dyZXNzLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLm1haW4tY29udGVudHtcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwMHB4IDEwcHg7XG59XG5cbi5jYXJkLWNvbHVtbnN7XG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlOyAqL1xuICAgIGNvbHVtbi1jb3VudDogMjtcbn1cblxuLmNhcmQtY29sdW1ucyA+IGRpdntcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1iYXNpczogNTAlOyAqL1xuICAgIC8qIGZsZXg6IDE7ICovXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAyODhweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucmVwb3J0LWJsb2NrIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwO1xuICAgIG1heC1oZWlnaHQ6IDI4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2FyZC1oZWFkZXI+cCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnAudGltZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWJvZHk+cHtcbiAgICBjb2xvcjogIzVDNTY1NjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWJvZHk+cD5zcGFue1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5idXR0b24uYnRuLmJ0bi12aWV3bW9yZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICAgIGNvbG9yOiAjREQ0QjRBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogODNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ljb25zL2NyZWF0ZS1hY3RpdmUuc3ZnXCIpO1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbn1cblxuLnN0dWRlbnQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG4uc3R1ZGVudC13cmFwcGVyID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress-report',
                templateUrl: './progress-report.component.html',
                styleUrls: ['./progress-report.component.css']
            }]
    }], function () { return [{ type: _app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "mA4b":
/*!***********************************************************************!*\
  !*** ./src/app/modules/report/final-report/final-report.component.ts ***!
  \***********************************************************************/
/*! exports provided: FinalReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalReportComponent", function() { return FinalReportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/enum/app_enum */ "+Mrb");
/* harmony import */ var _app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/core/services/serviceIndex */ "vbd/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/authentication/authentication.service */ "6CRC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _parent_report_parent_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../parent-report/parent-report.component */ "gVnV");
/* harmony import */ var _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/basic-components/route-direction/route-direction.component */ "W/j5");
/* harmony import */ var _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/basic-components/app-search-box/app-search-box.component */ "WUFv");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../user-view/user-view.component */ "aHE/");
/* harmony import */ var _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/basic-components/noti-box/noti-box.component */ "JDKn");












function FinalReportComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-parent-report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function FinalReportComponent_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Empty report! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FinalReportComponent_ng_template_1_div_6_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FinalReportComponent_ng_template_1_div_6_div_16_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const stud_r8 = ctx.$implicit; const report_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.goToStudents(stud_r8.userId, report_r6.classId); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-user-view", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stud_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", stud_r8);
} }
function FinalReportComponent_ng_template_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Student Lists ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, FinalReportComponent_ng_template_1_div_6_div_16_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", report_r6.startTime, " - ", report_r6.endTime, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r6.students.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", report_r6.students);
} }
function FinalReportComponent_ng_template_1_app_noti_box_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-noti-box", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", "No more classes!");
} }
function FinalReportComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-route-direction", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-search-box", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchEmit", function FinalReportComponent_ng_template_1_Template_app_search_box_searchEmit_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.onsearch($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function FinalReportComponent_ng_template_1_Template_div_scroll_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FinalReportComponent_ng_template_1_div_4_Template, 2, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FinalReportComponent_ng_template_1_div_6_Template, 17, 5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FinalReportComponent_ng_template_1_app_noti_box_7_Template, 1, 1, "app-noti-box", 9);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dirList", ctx_r2.routeLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.reportLists.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.reportLists);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isclassEmpty);
} }
class FinalReportComponent {
    constructor(_service, _router, _auth) {
        this._service = _service;
        this._router = _router;
        this._auth = _auth;
        this.routeLists = {
            routeName: [_app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["AdminSideMenu"].Report],
            routeLink: []
        };
        this.reportLists = [];
        this.page = 1;
        this.limit = 10;
        this.direction = 'down';
        this.isclassEmpty = false;
    }
    ngOnInit() {
        this.userData = this._auth.currentUserValue;
        this.getReportList();
    }
    getReportList() {
        this.subscription = this._service.getUsersClasses(this.page, this.limit, this.direction, this.searchData)
            .subscribe((res) => {
            if (this.direction) {
                this.isclassEmpty = res.classes.length == 0;
                this.reportLists = this.reportLists.concat(res.classes);
            }
            else if (this.searchData) {
                this.reportLists = res.classes;
                this.page = 1;
            }
            else {
                this.reportLists = res.classes;
            }
            console.log(this.reportLists);
        });
    }
    onsearch(val) {
        this.searchData = val;
        this.reportLists = [];
        this.getReportList();
    }
    onScroll(event) {
        var element = event.target;
        if (!this.searchData) {
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                if (!this.isclassEmpty) {
                    this.direction = "down";
                    this.page += 1;
                    this.getReportList();
                }
            }
        }
    }
    goToStudents(id, classId) {
        this._router.navigateByUrl("teacher/" + _app_enum_app_enum__WEBPACK_IMPORTED_MODULE_1__["EssentialRoute"].StudentByReport + "/" + id + "/" + classId + "/final");
    }
    ngOnDestroy() {
        if (this.subscription)
            this.subscription.unsubscribe();
    }
}
FinalReportComponent.ɵfac = function FinalReportComponent_Factory(t) { return new (t || FinalReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"])); };
FinalReportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FinalReportComponent, selectors: [["app-final-report"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["isNotParent", ""], [1, "d-flex", "justify-content-between", "my-3", "align-items-start"], [3, "dirList"], [3, "searchEmit"], [1, "main-content", 3, "scroll"], ["class", "emplty-class", 4, "ngIf"], [1, "card-columns"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "message", 4, "ngIf"], [1, "emplty-class"], [1, "card"], [1, "d-flex", "justify-content-between", "card-header"], [1, "d-flex", "align-items-center"], [1, "img", "pr-2"], ["src", "assets/icons/clock_light.svg"], [1, "d-flex", "flex-column", "justify-content-center"], [1, "time"], [1, "card-body"], [1, "mb-2"], [1, "student-wrapper"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"], [3, "user"], [3, "message"]], template: function FinalReportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FinalReportComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FinalReportComponent_ng_template_1_Template, 8, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userData.role == "Parent")("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _parent_report_parent_report_component__WEBPACK_IMPORTED_MODULE_6__["ParentReportComponent"], _shared_basic_components_route_direction_route_direction_component__WEBPACK_IMPORTED_MODULE_7__["RouteDirectionComponent"], _shared_basic_components_app_search_box_app_search_box_component__WEBPACK_IMPORTED_MODULE_8__["AppSearchBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_9__["UserViewComponent"], _shared_basic_components_noti_box_noti_box_component__WEBPACK_IMPORTED_MODULE_10__["NotiBoxComponent"]], styles: [".main-content[_ngcontent-%COMP%]{\n    overflow: overlay;\n    height: 100%;\n    padding: 10px 10px 200px 10px;\n}\n\n.card-columns[_ngcontent-%COMP%]{\n\n    \n    -moz-column-count: 2;\n         column-count: 2;\n}\n\n.card-columns[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    \n    \n    border: solid 1px #707070;\n    \n    margin-bottom: 20px;\n    margin: 10px;\n    border-radius: 0;\n}\n\n.report-block[_ngcontent-%COMP%] {\n    border: solid 1px #707070;\n    max-height: 288px;\n    margin-bottom: 20px;\n    margin: 10px\n}\n\n.card-header[_ngcontent-%COMP%] {\n    background: #707070;\n    padding: 10px;\n    border-radius: 0;\n}\n\n.card-header[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 18px;\n    font-weight: 500;\n}\n\np[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n}\n\np.time[_ngcontent-%COMP%] {\n    color: #FFFFFF;\n    font-size: 16px;\n    font-weight: 500;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{\n    color: #5C5656;\n    font-size: 14px;\n    font-weight: bold;\n}\n\n.card-body[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{\n    background: #DD4B4A;\n    color: #FFFFFF;\n    padding: 3px;\n}\n\nbutton.btn.btn-viewmore[_ngcontent-%COMP%] {\n    padding: 0;\n    background-color: #F4F4F4;\n    color: #DD4B4A;\n    font-weight: bold;\n    font-size: 12px;\n    background-repeat: no-repeat;\n    background-position-x: 83px;\n    background-position-y: center;\n    width: 114px;\n    \n    border-radius: 0;\n    text-align: left;\n    padding-left: 15px;\n    background-image: url('create-active.4f05c42c1b9ce580fbb2.svg');\n    \n}\n\n.student-wrapper[_ngcontent-%COMP%]{\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: row;\n    max-height: 140px;\n    overflow: overlay;\n}\n\n.student-wrapper[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    flex-basis: 50%;\n    padding: 10px 0px;\n}\n\n.card-footer[_ngcontent-%COMP%]{\n    padding: 5px;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvZmluYWwtcmVwb3J0L2ZpbmFsLXJlcG9ydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7O0lBRUk7OztrQkFHYztJQUNkLG9CQUFlO1NBQWYsZUFBZTtBQUNuQjs7QUFFQTtJQUNJOztzQkFFa0I7SUFDbEIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQjtBQUNKOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsK0RBQXVEO0lBQ3ZELGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9yZXBvcnQvZmluYWwtcmVwb3J0L2ZpbmFsLXJlcG9ydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuLm1haW4tY29udGVudHtcbiAgICBvdmVyZmxvdzogb3ZlcmxheTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDIwMHB4IDEwcHg7XG59XG5cbi5jYXJkLWNvbHVtbnN7XG5cbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlOyAqL1xuICAgIGNvbHVtbi1jb3VudDogMjtcbn1cblxuLmNhcmQtY29sdW1ucyA+IGRpdntcbiAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1iYXNpczogNTAlOyAqL1xuICAgIC8qIGZsZXg6IDE7ICovXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggIzcwNzA3MDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAyODhweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4ucmVwb3J0LWJsb2NrIHtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjNzA3MDcwO1xuICAgIG1heC1oZWlnaHQ6IDI4OHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luOiAxMHB4XG59XG4uY2FyZC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICM3MDcwNzA7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uY2FyZC1oZWFkZXI+cCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbnAudGltZSB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5jYXJkLWJvZHk+cHtcbiAgICBjb2xvcjogIzVDNTY1NjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5jYXJkLWJvZHk+cD5zcGFue1xuICAgIGJhY2tncm91bmQ6ICNERDRCNEE7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gICAgcGFkZGluZzogM3B4O1xufVxuXG5idXR0b24uYnRuLmJ0bi12aWV3bW9yZSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0O1xuICAgIGNvbG9yOiAjREQ0QjRBO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogODNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICB3aWR0aDogMTE0cHg7XG4gICAgLyogaGVpZ2h0OiAzNXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ljb25zL2NyZWF0ZS1hY3RpdmUuc3ZnXCIpO1xuICAgIC8qIGZsb2F0OiByaWdodDsgKi9cbn1cblxuLnN0dWRlbnQtd3JhcHBlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC1oZWlnaHQ6IDE0MHB4O1xuICAgIG92ZXJmbG93OiBvdmVybGF5O1xufVxuXG4uc3R1ZGVudC13cmFwcGVyID4gZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWJhc2lzOiA1MCU7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FinalReportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-final-report',
                templateUrl: './final-report.component.html',
                styleUrls: ['./final-report.component.css']
            }]
    }], function () { return [{ type: _app_core_services_serviceIndex__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _app_core_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }]; }, null); })();


/***/ }),

/***/ "nRcI":
/*!***************************************************************************!*\
  !*** ./src/app/modules/report/report-teacher/report-teacher.component.ts ***!
  \***************************************************************************/
/*! exports provided: ReportTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportTeacherComponent", function() { return ReportTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_basic_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/basic-components/tabs/tabs.component */ "1NEo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _progress_report_progress_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../progress-report/progress-report.component */ "kmV6");
/* harmony import */ var _final_report_final_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../final-report/final-report.component */ "mA4b");






function ReportTeacherComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-progress-report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function ReportTeacherComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-final-report");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class ReportTeacherComponent {
    constructor() {
        this.tabLists = ['Progress Report', 'Final Report'];
        this.activeIndex = 0;
    }
    ngOnInit() {
    }
    tabChange(index) {
        this.activeIndex = index;
        // if (this.activeIndex == 1)
        //   this.getPaymentLists();
    }
}
ReportTeacherComponent.ɵfac = function ReportTeacherComponent_Factory(t) { return new (t || ReportTeacherComponent)(); };
ReportTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReportTeacherComponent, selectors: [["app-report-teacher"]], decls: 4, vars: 3, consts: [[1, "container", "mt-3"], [3, "tabLists", "tabChange"], [4, "ngIf"]], template: function ReportTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-tabs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tabChange", function ReportTeacherComponent_Template_app_tabs_tabChange_1_listener($event) { return ctx.tabChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportTeacherComponent_ng_container_2_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportTeacherComponent_ng_container_3_Template, 2, 0, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tabLists", ctx.tabLists);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeIndex == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.activeIndex == 1);
    } }, directives: [_shared_basic_components_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _progress_report_progress_report_component__WEBPACK_IMPORTED_MODULE_3__["ProgressReportComponent"], _final_report_final_report_component__WEBPACK_IMPORTED_MODULE_4__["FinalReportComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0L3JlcG9ydC10ZWFjaGVyL3JlcG9ydC10ZWFjaGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-report-teacher',
                templateUrl: './report-teacher.component.html',
                styleUrls: ['./report-teacher.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pCwN":
/*!*************************************************!*\
  !*** ./src/app/modules/report/report.module.ts ***!
  \*************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-view/user-view.component */ "aHE/");
/* harmony import */ var _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/modules/report/report-teacher/report-teacher.component */ "nRcI");
/* harmony import */ var _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report-for-students/report-for-students.component */ "64rK");
/* harmony import */ var _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./report-create/report-create.component */ "2xrB");
/* harmony import */ var _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @enum/app_enum */ "+Mrb");
/* harmony import */ var _core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/guards/auth-guard.service */ "kx0m");
/* harmony import */ var _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @basic-components/basic-components.module */ "mHbn");
/* harmony import */ var _parent_report_parent_report_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./parent-report/parent-report.component */ "gVnV");
/* harmony import */ var _progress_report_progress_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./progress-report/progress-report.component */ "kmV6");
/* harmony import */ var _final_report_final_report_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./final-report/final-report.component */ "mA4b");




// com lists




// local module import








const routes = [
    {
        path: 'management',
        component: _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: {
            roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].StudentAffair, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Parent],
        }
    },
    {
        path: 'students/:id/:classId/:type',
        component: _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Admin, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].StudentAffair, _enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Parent] }
    },
    {
        path: 'students/create/:studentId',
        component: _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher] }
    },
    {
        path: 'students/edit/:studentId/:reportId',
        component: _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        canActivate: [_core_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        data: { roles: [_enum_app_enum__WEBPACK_IMPORTED_MODULE_8__["Role"].Teacher] }
    },
];
class ReportModule {
}
ReportModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReportModule });
ReportModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReportModule_Factory(t) { return new (t || ReportModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            // PipeModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportModule, { declarations: [_app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
        _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
        _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
        _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"],
        _parent_report_parent_report_component__WEBPACK_IMPORTED_MODULE_11__["ParentReportComponent"],
        _progress_report_progress_report_component__WEBPACK_IMPORTED_MODULE_12__["ProgressReportComponent"],
        _final_report_final_report_component__WEBPACK_IMPORTED_MODULE_13__["FinalReportComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        // PipeModule
    ] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_modules_report_report_teacher_report_teacher_component__WEBPACK_IMPORTED_MODULE_5__["ReportTeacherComponent"],
                    _report_for_students_report_for_students_component__WEBPACK_IMPORTED_MODULE_6__["ReportForStudentsComponent"],
                    _report_create_report_create_component__WEBPACK_IMPORTED_MODULE_7__["ReportCreateComponent"],
                    _user_view_user_view_component__WEBPACK_IMPORTED_MODULE_4__["UserViewComponent"],
                    _parent_report_parent_report_component__WEBPACK_IMPORTED_MODULE_11__["ParentReportComponent"],
                    _progress_report_progress_report_component__WEBPACK_IMPORTED_MODULE_12__["ProgressReportComponent"],
                    _final_report_final_report_component__WEBPACK_IMPORTED_MODULE_13__["FinalReportComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _basic_components_basic_components_module__WEBPACK_IMPORTED_MODULE_10__["BasicComponentsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                    // PipeModule
                ],
                exports: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-report-report-module-es2015.25cb11cb46cb5ba76fd7.js.map