function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){return function(){var t,r=_getPrototypeOf(e);if(_isNativeReflectConstruct()){var n=_getPrototypeOf(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return _possibleConstructorReturn(this,t)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{PU5u:function(e,t,r){"use strict";r.r(t),r.d(t,"SignupModule",(function(){return x}));var n,o,a,i,c=r("kmnG"),s=r("qFsG"),u=r("bTqV"),f=r("tmjD"),l=r("tyNb"),b=r("mrSG"),m=r("3Pt+"),p=r("PSD3"),d=r.n(p),h=r("cYo0"),g=r("MvzY"),v=r("fXoL"),y=r("FXLl"),w=r("tk/3"),S=((n=function(e){_inherits(r,e);var t=_createSuper(r);function r(e){var n;return _classCallCheck(this,r),(n=t.call(this,e)).API_URL="user/register",n}return r}(y.a)).\u0275fac=function(e){return new(e||n)(v.Wb(w.b))},n.\u0275prov=v.Jb({token:n,factory:n.\u0275fac}),n),C=r("4jKo"),_=r("mJcT"),R=r("XiUz"),O=[{path:"",component:(o=function(){function e(t,r,n,o){var a=this;_classCallCheck(this,e),this.router=t,this.userRegistersService=r,this.userDataService=n,this.userConfirmationSmsService=o,this.handleSubmit=function(){return Object(b.a)(a,void 0,void 0,regeneratorRuntime.mark((function e(){var t,r,n=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(h.a)(this.form),this.formValidation()&&!this.form.invalid){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.userRegistersService.post(this.formatObject()).toPromise();case 4:t=e.sent,(r=t.result)&&d.a.fire("Sucesso","Cadastro realizado!","success").then((function(){var e=n.form.value.countryCode,t=Object.assign(Object.assign({},r),{countryCode:e});n.sendSmsAndRedirect(t)}));case 7:case"end":return e.stop()}}),e,this)})))},this.getErrorMessage=function(e){return Object(g.a)(a.form.get(e))},this.goBack=function(){return window.history.back()}}return _createClass(e,[{key:"ngOnInit",value:function(){this.createForm()}},{key:"createForm",value:function(){this.form=new m.d({userName:new m.b("usr"),fullName:new m.b("",m.n.required),countryCode:new m.b("55"),phone:new m.b("",m.n.required),password:new m.b("",m.n.required),email:new m.b("",[m.n.required,m.n.email]),confirmPassword:new m.b("",m.n.required)})}},{key:"formatObject",value:function(){var e=this.form.value.phone,t=e.substring(2),r=e.substring(0,2);return Object.assign(Object.assign({},this.form.value),{phoneNumber:t,stateCode:r})}},{key:"formValidation",value:function(){var e=this.form.value;if(e.password===e.confirmPassword)return!0;this.form.get("confirmPassword").setErrors({confirmPassword:!0})}},{key:"sendSmsAndRedirect",value:function(e){return Object(b.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var r,n,o,a;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e._id,n=e.stateCode,o=e.phoneNumber,a=n+o,t.next=3,this.userConfirmationSmsService.post({_id:r}).toPromise();case 3:this.userDataService.setPhoneNumber(a),this.userDataService.setUserData(e),this.router.navigate(["/user-confirmation"]);case 6:case"end":return t.stop()}}),t,this)})))}}]),e}(),o.\u0275fac=function(e){return new(e||o)(v.Nb(l.b),v.Nb(S),v.Nb(C.a),v.Nb(_.a))},o.\u0275cmp=v.Hb({type:o,selectors:[["app-signup"]],decls:40,vars:6,consts:[[1,"content"],["fxFlex","100","fxLayout","column","fxLayoutAlign","start center",1,"align-center"],["fxLayout","column","fxLayoutAlign","center center",1,"box"],["alt","Logo","src","../../assets/images/mideal-logo-black.png"],[1,"w-100",3,"formGroup"],["fxLayout","column"],["appearance","outline","color","primary"],["formControlName","fullName","type","text","ngDefaultControl","","matInput",""],["formControlName","phone","type","text","ngDefaultControl","","matInput","","mask","(00) 00009-0000","placeholder","(00) 00000-0000","autocomplete","off"],["formControlName","email","type","text","ngDefaultControl","","matInput",""],["formControlName","password","type","password","ngDefaultControl","","matInput",""],["formControlName","confirmPassword","type","password","ngDefaultControl","","matInput",""],["mat-raised-button","","color","accent",1,"btn-accent",3,"click"],[1,"text-muted",3,"click"]],template:function(e,t){1&e&&(v.Sb(0,"div",0),v.Sb(1,"div",1),v.Sb(2,"div",2),v.Ob(3,"img",3),v.Sb(4,"form",4),v.Sb(5,"div",5),v.Sb(6,"mat-form-field",6),v.Sb(7,"mat-label"),v.vc(8,"Nome completo"),v.Rb(),v.Ob(9,"input",7),v.Sb(10,"mat-error"),v.vc(11),v.Rb(),v.Rb(),v.Sb(12,"mat-form-field",6),v.Sb(13,"mat-label"),v.vc(14,"Telefone"),v.Rb(),v.Ob(15,"input",8),v.Sb(16,"mat-error"),v.vc(17),v.Rb(),v.Rb(),v.Sb(18,"mat-form-field",6),v.Sb(19,"mat-label"),v.vc(20,"E-mail"),v.Rb(),v.Ob(21,"input",9),v.Sb(22,"mat-error"),v.vc(23),v.Rb(),v.Rb(),v.Sb(24,"mat-form-field",6),v.Sb(25,"mat-label"),v.vc(26,"Senha"),v.Rb(),v.Ob(27,"input",10),v.Sb(28,"mat-error"),v.vc(29),v.Rb(),v.Rb(),v.Sb(30,"mat-form-field",6),v.Sb(31,"mat-label"),v.vc(32,"Confirmar senha"),v.Rb(),v.Ob(33,"input",11),v.Sb(34,"mat-error"),v.vc(35),v.Rb(),v.Rb(),v.Rb(),v.Rb(),v.Sb(36,"button",12),v.ac("click",(function(){return t.handleSubmit()})),v.vc(37,"Salvar"),v.Rb(),v.Sb(38,"a",13),v.ac("click",(function(){return t.goBack()})),v.vc(39,"Voltar"),v.Rb(),v.Rb(),v.Rb(),v.Rb()),2&e&&(v.Bb(4),v.hc("formGroup",t.form),v.Bb(7),v.wc(t.getErrorMessage("fullName")),v.Bb(6),v.wc(t.getErrorMessage("phone")),v.Bb(6),v.wc(t.getErrorMessage("email")),v.Bb(6),v.wc(t.getErrorMessage("password")),v.Bb(6),v.wc(t.getErrorMessage("confirmPassword")))},directives:[R.a,R.c,R.b,m.o,m.k,m.e,c.b,c.e,m.a,s.a,m.j,m.c,c.a,f.a,u.a],styles:["img[_ngcontent-%COMP%]{max-width:150px}form[_ngcontent-%COMP%]{margin-top:40px}button[_ngcontent-%COMP%]{margin-top:20px}.box[_ngcontent-%COMP%]{min-width:300px;padding-top:100px}.content[_ngcontent-%COMP%]{height:100vh}a[_ngcontent-%COMP%]{margin-top:10px}"]}),o)}],P=((a=function e(){_classCallCheck(this,e)}).\u0275mod=v.Lb({type:a}),a.\u0275inj=v.Kb({factory:function(e){return new(e||a)},imports:[[l.e.forChild(O)],l.e]}),a),k=r("PCNd"),x=((i=function e(){_classCallCheck(this,e)}).\u0275mod=v.Lb({type:i}),i.\u0275inj=v.Kb({factory:function(e){return new(e||i)},providers:[S,C.a,_.a],imports:[[P,k.a,f.c,c.d,s.b,u.b]]}),i)}}]);