!function(){var e,r,i,o,n,a,t,l,s,u,d,c,m,f,g;function p(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}function Z(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function v(e,r){for(var i=0;i<r.length;i++){var o=r[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkshreyu_angular=self.webpackChunkshreyu_angular||[]).push([[907],{907:function(h,b,q){"use strict";q.r(b),q.d(b,{RegisterModule:function(){return M}});var A=q(8583),T=q(665),x=q(674),S=q(9668),w=q(1558),k=q(8049),y=q(7716),I=q(1782),J=q(9075),V=q(9091),_=q(4719),N=q(8785);function z(e,r){if(1&e&&(y.TgZ(0,"ngb-alert",38),y._uU(1),y.qZA()),2&e){var i=y.oxw();y.Q6J("dismissible",!1),y.xp6(1),y.Oqu(i.error)}}function Q(e,r){1&e&&(y.TgZ(0,"div"),y.SDv(1,41),y.qZA())}function U(e,r){if(1&e&&(y.TgZ(0,"div",39),y.YNc(1,Q,2,0,"div",40),y.qZA()),2&e){var i=y.oxw();y.xp6(1),y.Q6J("ngIf",null==i.formValues.name.errors?null:i.formValues.name.errors.required)}}function C(e,r){1&e&&(y.TgZ(0,"div"),y.SDv(1,42),y.qZA())}function D(e,r){1&e&&(y.TgZ(0,"div"),y.SDv(1,43),y.qZA())}function L(e,r){if(1&e&&(y.TgZ(0,"div",39),y.YNc(1,C,2,0,"div",40),y.YNc(2,D,2,0,"div",40),y.qZA()),2&e){var i=y.oxw();y.xp6(1),y.Q6J("ngIf",null==i.formValues.email.errors?null:i.formValues.email.errors.required),y.xp6(1),y.Q6J("ngIf",null==i.formValues.email.errors?null:i.formValues.email.errors.email)}}function $(e,r){1&e&&(y.TgZ(0,"div"),y.SDv(1,44),y.qZA())}function Y(e,r){1&e&&(y.TgZ(0,"div"),y.SDv(1,45),y.qZA())}function O(e,r){if(1&e&&(y.TgZ(0,"div",39),y.YNc(1,$,2,0,"div",40),y.YNc(2,Y,2,0,"div",40),y.qZA()),2&e){var i=y.oxw();y.xp6(1),y.Q6J("ngIf",null==i.formValues.password.errors?null:i.formValues.password.errors.required),y.xp6(1),y.Q6J("ngIf",null==i.formValues.password.errors?null:i.formValues.password.errors.minlength)}}var F,j,E=function(){return["../../dashboard/ecommerce"]},K=function(e){return{"is-invalid":e}},P=function(){return["../login"]},R=[{path:"",component:(F=function(){function e(r,i,o,n){Z(this,e),this.fb=r,this.router=i,this.authenticationService=o,this.titleService=n,this.formSubmitted=!1,this.showPassword=!1,this.loading=!1,this.error="",n.setTitle("Register | Shreyu - Responsive Angular and Bootstrap 5 Admin Dashboard Template")}var r,i,o;return r=e,(i=[{key:"ngOnInit",value:function(){this.signUpForm=this.fb.group({name:["",T.kI.required],email:["",[T.kI.required,T.kI.email]],password:["",[T.kI.required,T.kI.minLength(4)]]})}},{key:"formValues",get:function(){return this.signUpForm.controls}},{key:"onSubmit",value:function(){var e,r,i,o=this;this.formSubmitted=!0,this.signUpForm.valid&&(this.loading=!0,this.authenticationService.signup(null===(e=this.formValues.name)||void 0===e?void 0:e.value,null===(r=this.formValues.email)||void 0===r?void 0:r.value,null===(i=this.formValues.password)||void 0===i?void 0:i.value).pipe((0,k.P)()).subscribe(function(e){o.router.navigate(["/auth/confirm"])},function(e){o.error=e,o.loading=!1}))}}])&&v(r.prototype,i),o&&v(r,o),e}(),F.\u0275fac=function(e){return new(e||F)(y.Y36(T.qu),y.Y36(w.F0),y.Y36(I.$),y.Y36(J.Dx))},F.\u0275cmp=y.Xpm({type:F,selectors:[["app-register"]],decls:51,vars:21,consts:function(){return[[1,"auth-logo","mx-auto"],[1,"logo","logo-dark","text-center",3,"routerLink"],[1,"logo-lg"],["src","https://www.databridgemarketresearch.com/assets/images/logo.png","alt","","height","24"],[1,"logo","logo-light","text-center",3,"routerLink"],["src","../assets/images/logo-light.png","alt","","height","24"],[1,"h5","mb-0","mt-3"],$localize(e||(e=p(["Create your account"]))),[1,"text-muted","mt-1","mb-4"],$localize(r||(r=p(["Create a free account and start using Shreyu"]))),["name","signup-form",1,"authentication-form",3,"formGroup","ngSubmit"],[3,"display"],["type","danger",3,"dismissible",4,"ngIf"],[1,"mb-3"],[1,"form-label"],$localize(i||(i=p(["Name"]))),[1,"input-group"],[1,"input-group-text"],["data-feather","user","appFeatherIcon","",1,"icon-dual"],["type","text","id","name","placeholder",$localize(o||(o=p(["Your full name"]))),"required","","formControlName","name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],$localize(n||(n=p(["Email Address"]))),["data-feather","mail","appFeatherIcon","",1,"icon-dual"],["type","email","required","","id","email","placeholder","hello@coderthemes.com","formControlName","email",1,"form-control",3,"ngClass"],$localize(a||(a=p(["Password"]))),["data-feather","lock","appFeatherIcon","",1,"icon-dual"],["type","password","id","password","placeholder",$localize(t||(t=p(["Enter your password"]))),"formControlName","password","required","","minlength","4",1,"form-control",3,"ngClass"],[1,"form-check"],["type","checkbox","id","checkbox-signup","checked","",1,"form-check-input"],["for","checkbox-signup",1,"form-check-label"],$localize(l||(l=p([" I accept ",":START_LINK:Terms and Conditions",":CLOSE_LINK:"])),"\ufffd#44\ufffd","\ufffd/#44\ufffd"),["href","javascript: void(0);"],[1,"mb-3","text-center","d-grid"],["type","submit",1,"btn","btn-primary"],$localize(s||(s=p(["Sign Up"]))),["footerLink","",1,"text-muted"],$localize(u||(u=p(["Already have account? ",":START_LINK:Login",":CLOSE_LINK:"])),"\ufffd#50\ufffd","\ufffd/#50\ufffd"),[1,"text-primary","fw-bold","ms-1",3,"routerLink"],["type","danger",3,"dismissible"],[1,"invalid-feedback"],[4,"ngIf"],$localize(d||(d=p([" Name is required. "]))),$localize(c||(c=p([" Email is required. "]))),$localize(m||(m=p([" Email must be a valid Email Address "]))),$localize(f||(f=p([" Password is required. "]))),$localize(g||(g=p([" Password length must be greater than 3. "])))]},template:function(e,r){1&e&&(y.TgZ(0,"app-default-layout"),y.TgZ(1,"div",0),y.TgZ(2,"a",1),y.TgZ(3,"span",2),y._UZ(4,"img",3),y.qZA(),y.qZA(),y.TgZ(5,"a",4),y.TgZ(6,"span",2),y._UZ(7,"img",5),y.qZA(),y.qZA(),y.qZA(),y.TgZ(8,"h6",6),y.SDv(9,7),y.qZA(),y.TgZ(10,"p",8),y.SDv(11,9),y.qZA(),y.TgZ(12,"form",10),y.NdJ("ngSubmit",function(){return r.onSubmit()}),y._UZ(13,"app-ui-preloader",11),y.YNc(14,z,2,2,"ngb-alert",12),y.TgZ(15,"div",13),y.TgZ(16,"label",14),y.SDv(17,15),y.qZA(),y.TgZ(18,"div",16),y.TgZ(19,"span",17),y._UZ(20,"i",18),y.qZA(),y._UZ(21,"input",19),y.YNc(22,U,2,1,"div",20),y.qZA(),y.qZA(),y.TgZ(23,"div",13),y.TgZ(24,"label",14),y.SDv(25,21),y.qZA(),y.TgZ(26,"div",16),y.TgZ(27,"span",17),y._UZ(28,"i",22),y.qZA(),y._UZ(29,"input",23),y.YNc(30,L,3,2,"div",20),y.qZA(),y.qZA(),y.TgZ(31,"div",13),y.TgZ(32,"label",14),y.SDv(33,24),y.qZA(),y.TgZ(34,"div",16),y.TgZ(35,"span",17),y._UZ(36,"i",25),y.qZA(),y._UZ(37,"input",26),y.YNc(38,O,3,2,"div",20),y.qZA(),y.qZA(),y.TgZ(39,"div",13),y.TgZ(40,"div",27),y._UZ(41,"input",28),y.TgZ(42,"label",29),y.tHW(43,30),y._UZ(44,"a",31),y.N_p(),y.qZA(),y.qZA(),y.qZA(),y.TgZ(45,"div",32),y.TgZ(46,"button",33),y.SDv(47,34),y.qZA(),y.qZA(),y.qZA(),y.TgZ(48,"p",35),y.tHW(49,36),y._UZ(50,"a",37),y.N_p(),y.qZA(),y.qZA()),2&e&&(y.xp6(2),y.Q6J("routerLink",y.DdM(12,E)),y.xp6(3),y.Q6J("routerLink",y.DdM(13,E)),y.xp6(7),y.Q6J("formGroup",r.signUpForm),y.xp6(1),y.Q6J("display",r.loading),y.xp6(1),y.Q6J("ngIf",r.error),y.xp6(7),y.Q6J("ngClass",y.VKq(14,K,r.formSubmitted&&r.formValues.name.invalid)),y.xp6(1),y.Q6J("ngIf",r.formSubmitted&&r.formValues.name.invalid),y.xp6(7),y.Q6J("ngClass",y.VKq(16,K,r.formSubmitted&&r.formValues.email.invalid)),y.xp6(1),y.Q6J("ngIf",r.formSubmitted&&r.formValues.email.invalid),y.xp6(7),y.Q6J("ngClass",y.VKq(18,K,r.formSubmitted&&r.formValues.password.invalid)),y.xp6(1),y.Q6J("ngIf",r.formSubmitted&&r.formValues.password.invalid),y.xp6(12),y.Q6J("routerLink",y.DdM(20,P)))},directives:[V.e,w.yS,T._Y,T.JL,T.sg,_.T,A.O5,N.R,T.Fj,T.Q7,T.JJ,T.u,A.mk,T.wO,x.xm],styles:[""]}),F)}],B=function(){var e=function e(){Z(this,e)};return e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=y.oAB({type:e}),e.\u0275inj=y.cJS({imports:[[w.Bz.forChild(R)],w.Bz]}),e}(),M=((j=function e(){Z(this,e)}).\u0275fac=function(e){return new(e||j)},j.\u0275mod=y.oAB({type:j}),j.\u0275inj=y.cJS({imports:[[A.ez,T.u5,T.UX,S.W,x._A,B]]}),j)}}])}();