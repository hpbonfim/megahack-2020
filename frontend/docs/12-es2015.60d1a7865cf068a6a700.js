(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{urUe:function(t,e,n){"use strict";n.r(e),n.d(e,"UserConfirmationModule",(function(){return O}));var o=n("kmnG"),i=n("qFsG"),r=n("bTqV"),a=n("tmjD"),c=n("tyNb"),s=n("mrSG"),u=n("3Pt+"),b={prefix:"fas",iconName:"paper-plane",icon:[512,512,[],"f1d8","M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"]},m=n("PSD3"),d=n.n(m),f=n("cYo0"),l=n("MvzY"),p=n("fXoL"),h=n("4jKo"),g=n("mJcT"),v=n("FXLl"),x=n("tk/3");let C=(()=>{class t extends v.a{constructor(t){super(t),this.API_URL="function/verify"}}return t.\u0275fac=function(e){return new(e||t)(p.Vb(x.b))},t.\u0275prov=p.Ib({token:t,factory:t.\u0275fac}),t})();var P=n("XiUz"),S=n("6NWb");const y=[{path:"",component:(()=>{class t{constructor(t,e,n,o){this.router=t,this.userDataService=e,this.userConfirmationSmsService=n,this.userConfirmationCodeService=o,this.faPaperPlane=b,this.handleSubmit=()=>Object(s.a)(this,void 0,void 0,(function*(){const{_id:t}=this.user;if(Object(f.a)(this.form),this.form.invalid)return;const e=Object.assign(Object.assign({},this.form.value),{_id:t}),{verification:n}=yield this.userConfirmationCodeService.post(e).toPromise();n&&d.a.fire("Sucesso","C\xf3dico validado!","success").then(()=>{this.router.navigate(["/user-shell"])})})),this.handleSendAgain=()=>Object(s.a)(this,void 0,void 0,(function*(){const{_id:t}=this.user;Object(f.a)(this.form),this.form.invalid||(yield this.userConfirmationSmsService.post({_id:t}).toPromise(),d.a.fire("Sucesso","SMS enviado!","success"))})),this.getErrorMessage=t=>Object(l.a)(this.form.get(t))}ngOnInit(){this.phoneNumber=this.userDataService.getPhoneNumber(),this.user=this.userDataService.getUserData(),this.createForm()}createForm(){this.form=new u.d({code:new u.b("",[u.n.required])})}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(c.b),p.Mb(h.a),p.Mb(g.a),p.Mb(C))},t.\u0275cmp=p.Gb({type:t,selectors:[["app-user-confirmation"]],decls:22,vars:7,consts:[[1,"content"],["fxFlex","100","fxLayout","column","fxLayoutAlign","start center",1,"align-center"],["fxLayout","column","fxLayoutAlign","center center",1,"box"],["alt","Logo","src","../../assets/images/mideal-logo-black.png"],[1,"w-100",3,"formGroup"],["fxLayout","column"],[1,"color","accent"],["appearance","outline","color","primary"],["formControlName","code","type","text","ngDefaultControl","","matInput",""],["mat-raised-button","","color","accent",1,"btn-accent",3,"click"],["mat-raised-button","",3,"click"],[3,"icon"]],template:function(t,e){1&t&&(p.Rb(0,"div",0),p.Rb(1,"div",1),p.Rb(2,"div",2),p.Nb(3,"img",3),p.Rb(4,"form",4),p.Rb(5,"div",5),p.Rb(6,"p"),p.Rb(7,"span",6),p.uc(8,"Ol\xe1!"),p.Qb(),p.uc(9),p.cc(10,"mask"),p.Qb(),p.Rb(11,"mat-form-field",7),p.Rb(12,"mat-label"),p.uc(13,"C\xf3digo de confirma\xe7\xe3o"),p.Qb(),p.Nb(14,"input",8),p.Rb(15,"mat-error"),p.uc(16),p.Qb(),p.Qb(),p.Qb(),p.Qb(),p.Rb(17,"button",9),p.Zb("click",(function(){return e.handleSubmit()})),p.uc(18," Continuar "),p.Qb(),p.Rb(19,"button",10),p.Zb("click",(function(){return e.handleSendAgain()})),p.uc(20," Enviar novamente "),p.Nb(21,"fa-icon",11),p.Qb(),p.Qb(),p.Qb(),p.Qb()),2&t&&(p.Bb(4),p.gc("formGroup",e.form),p.Bb(5),p.wc(" enviamos uma mensagem com o c\xf3digo de confirma\xe7\xe3o para o telefone ",p.dc(10,4,e.phoneNumber,"(00) 00009-0000"),", informe o c\xf3digo recebido abaixo para continuar: "),p.Bb(7),p.vc(e.getErrorMessage("code")),p.Bb(5),p.gc("icon",e.faPaperPlane))},directives:[P.a,P.c,P.b,u.o,u.k,u.e,o.b,o.e,u.a,i.a,u.j,u.c,o.a,r.a,S.a],pipes:[a.a],styles:["img[_ngcontent-%COMP%]{max-width:150px}form[_ngcontent-%COMP%]{margin-top:40px;margin-bottom:80px}button[_ngcontent-%COMP%]{margin-bottom:10px}p[_ngcontent-%COMP%]{max-width:300px}.box[_ngcontent-%COMP%]{min-width:300px;padding-top:200px}.content[_ngcontent-%COMP%]{height:100vh}.content-login[_ngcontent-%COMP%]{padding:30px}a[_ngcontent-%COMP%]{margin-top:10px}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},imports:[[c.e.forChild(y)],c.e]}),t})();var w=n("PCNd");let O=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},providers:[h.a,g.a,C],imports:[[M,w.a,a.b.forRoot(),o.d,i.b,r.b]]}),t})()}}]);