YUI.add("gallery-itsalogin",function(e,t){"use strict";var n=e.ITSAMessageControllerClass,r=e.ITSAMessageController,i=e.ITSADialogClass,s=e.ITSADialog,o=e.Array,u=e.Intl,a="boolean",f="info",l="warn",c="error",h="_",p="ogin",d="l"+p,v="text",m="get",g=m+"L"+p,y="application",b="type",w="itsaicon-dialog-",E=w+f,S=w+"question",x="username",T="password",N="forgot",C="mail",k="e"+C,L="address",A="function",O=k+L,M=x+"or"+T,_=N+x,D=N+T,P=D+k,H=N+M,B="createaccount",j="send",F="reset",I=j+x,q="change",R=F+T,U=q+T,z="show"+T,W=T+q,X=W+"d",V="verify",$=V+T,J="verification"+c,K=q+"your"+T,Q="NewPassword",G="verify"+Q,Y="show"+Q,Z="message",et=Z+"resolve",tt="loggedin",nt="stay"+tt,rt="gallery-itsa-i18n-login",it="check",st="receivedmailwithinstructions",ot=it+"spambox",ut=it+"mail",at="classname",ft="primarybtnonenter",lt="fullselect",ct="label",ht="placeholder",pt="required",dt="itsa",vt=dt+"-"+d,mt="dialog",gt=dt+mt,yt='<span class="itsa-messagewrapper">',bt='<fieldset class="'+vt+'">',wt="</span>",Et='<div class="pure-control-group">',St="</div>",xt='<div class="itsa-',Tt="</fieldset>",Nt="img",Ct="submit",kt="btn_",Lt=kt+Ct,At="contentBox",Ot=Nt+kt,Mt="button",_t=mt+"-"+N+Mt,Dt='input[name="',Pt="itsabutton-iconleft",Ht='<i class="itsaicon-dialog',Bt="string",jt=function(t){if(typeof t=="string")try{return e.JSON.parse(t)}catch(n){return this.fire(c,{error:n,response:t,src:"parse"}),{}}return t||{}};n.prototype[h+g]=function(t,n,r,i){var o=this,u=s._intl,l=o._retrieveLoginParams(t,n,r,i),c,p,v,b,w,S,C,k,L,P,H,j,F,I,q,R,U;return t=l.title,k=l.message,r=l.config,w=l.syncPromise,I=typeof r.createAccount===A&&r.createAccount,j=Lt,q=typeof r.required===a&&r.required||!1,U=typeof r.usernameIsEmail===a&&r.usernameIsEmail||!1,R=typeof r.showStayLoggedin===a&&r.showStayLoggedin||!1,P=typeof r.imageButtons===a&&r.imageButtons,S=r.regain,S&&U&&(S=T),F=S===M||S===x||S===T,H=F?"{"+kt+N+"}":"",I&&(H+="{"+kt+B+"}"),H+="{"+Lt+"}",P&&(H=H.replace(/\{btn_/g,"{"+Ot),j=j.replace(/btn_/g,Ot)),p=r.formconfigUsername||{},p[ct]||p[ht]||(p[ct]=u[U?O:x]),p[lt]=!0,p[ft]=!1,p[at]=vt+(p[at]?" "+p[at]:""),p[pt]=!0,v=r.formconfigPassword||{},v[ct]||v[ht]||(v[ct]=u[T]),v[lt]=!0,v[ft]=!0,v[at]=vt+(v[at]?" "+v[at]:""),v[pt]=!0,b=r.formconfigRemember||{},b.widgetconfig={primarybtnonenter:!0},p[ct]&&!v[ct]&&(v[ct]=" "),v[ct]&&!p[ct]&&(p[ct]=" "),b[ct]||(b[ct]=u[nt]),b.switchlabel=!0,C=typeof r.valueRemember===a&&r.valueRemember||!1,o.isReady().then(function(){var a;return c=e.Base.create("itsamessageinput",e.ITSAMessage,[],null,{ATTRS:{username:{value:r.valueUsername||"",formtype:U?"email":"text",formconfig:p,validator:r.validatorUsername,validationerror:r.validationerrorUsername},password:{value:r.valuePassword||"",formtype:T,formconfig:v,validator:r.validatorPassword,validationerror:r.validationerrorPassword},remember:{value:R&&C||!1,formtype:e.ITSACheckbox,formconfig:b}}}),k=yt+k+wt+bt+Et+"{"+x+"}"+St+Et+"{"+T+"}"+St+(R?xt+'login-checkbox">'+"{remember}"+St:"")+Tt,a=new c,a.syncPromise=w,a._config=r,a.icon=r.icon||E,a.target=gt,a.title=t,a.message=k,a.footer=H,a.setSyncMessage(Ct,u.attemptlogin),a.imageButtons=P,a.closeButton=!q,a.priority=r.priority,a.primaryButton=r.primaryButton||j,a.timeoutReject=r.timeoutReject,a.level=f,a.source=r.source||y,a.messageType=g,a._submitBtn=m+d,a.buttonLabels=[{buttonType:Lt,labelHTML:u[d]},{buttonType:Nt+Lt,labelHTML:Ht+'-login"></i>'+u[d]}],a.customBtns=[],I&&a.customBtns.push(P?{buttonId:Ot+B,labelHTML:Ht+'-user"></i>'+u[B],config:{value:B,classname:Pt}}:{buttonId:kt+B,labelHTML:u[B],config:{value:B}}),F&&(a.customBtns.push(P?{buttonId:Ot+N,labelHTML:Ht+'-question"></i>'+u[N],config:{value:N,classname:Pt}}:{buttonId:kt+N,labelHTML:u[N],config:{value:N}}),a.on(et,function(t){t.attrs&&t.attrs.button===N&&(t.preventDefault(),s._panels[f].focusInitialItem().then(null,function(){return!0}).then(function(){return S===M?s._regainFn_UnPw(r):!0}).then(function(e){if(e.button===_||S===x)return s._regainFn_Un(r,w);if(e.button===D||S===T)return s._regainFn_Pw(r,w)},function(t){t instanceof Error&&e.showError(t.message)}))})),I&&(L=function(s){return I(s).then(function(u){var a=jt(u),f;return(k=a.message)&&e.showMessage(a.title,k,{priority:!0}),u.status==="RETRY"&&(f=L(s)),u.status==="LOGIN"&&(f=u),f||o[h+g](t,n,(r.priority=!0)&&r,i)},function(){return o[h+g](t,n,(r.priority=!0)&&r,i)})}),I?o.queueMessage(a).then(function(e){return e.button===B?L(w):e}):o.queueMessage(a)})},n.prototype._retrieveLoginParams=function(t,n,r,i){var s=typeof n===Bt,o,u;return s||(i=r,r=n,n=t,t=null),o=typeof n===Bt,o||(i=r,r={},n=n&&(n.message||""),t=null),u=typeof r=="object",u||(i=r,r={}),typeof i===A||(i=function(){var t="no syncPromise defined";return new e.Promise(function(e,n){n(new Error(t))})}),{title:t,message:n,config:r,syncPromise:i}},i.prototype._intl=u.get(rt),i.prototype.translate=function(e){return this._intl[e]||e},i.prototype._changePwFn=function(t,n,i,o){var u=typeof i[G]===a&&i[G]||!0,f=typeof i[Y]===a&&i[Y]||!0,c=s._intl,h,p,d,m,g,w,S;return p=i.formconfigPassword||{},p[ct]||p[ht]||(p[ct]=c[T]),p[lt]=!0,p[ft]=!u,p[at]=vt+(p[at]?" "+p[at]:""),p[pt]=!0,d=i.formconfigVerifyPassword||{},d[ct]||d[ht]||(d[ct]=c["verify"+T]),d[lt]=!0,d[ft]=!0,d[at]=vt+(d[at]?" "+d[at]:""),d[pt]=!0,m=i.formconfigShowPassword||{},m.widgetconfig={primarybtnonenter:!0},m[ct]||m[ht]||(m[ct]=c[z]),m.switchlabel=!0,g=e.Base.create("itsamessagechangepw",e.ITSAMessage,[],{crossValidation:function(){var e=this,t=[];return u&&e.get(T)!==e.get($)&&(t.push({attribute:T,validationerror:c[J]}),t.push({attribute:$,validationerror:c[J]})),t}},{ATTRS:{username:{value:t},oldpassword:{value:n},password:{formtype:T,formconfig:p,validator:i.validatorPassword,validationerror:i.validationerrorPassword},verifypassword:{formtype:T,formconfig:d,validator:i.validatorPassword,validationerror:i.validationerrorPassword},showpassword:{value:!1,formtype:e.ITSACheckbox,formconfig:m}}}),w=yt+(i.messageChangePassword||c.needchangepassword)+wt+bt+Et+"{"+T+"}"+St+
(u?Et+"{"+$+"}"+St:"")+(f?xt+'login-checkbox">{'+z+"}"+St:"")+Tt,h=new g,h.syncPromise=o,S=typeof i.imageButtons===a&&i.imageButtons,h.icon=i.iconQuestion||E,h.title=i.titleChangePassword||c[K],h.message=w,h.level=l,h.noAudio=!0,h.config=i,h.target=gt,h.source=i.source||y,h.messageType=U,h.closeButton=!0,h.footer="{"+(S?Nt:"")+Lt+"}",h.primaryButton=(S?Nt:"")+Lt,h._submitBtn=U,h.buttonLabels=[{buttonType:(S?Nt:"")+Lt,labelHTML:(S?Ht+'-switch"></i>':"")+c[U]}],f&&(h.setLifeUpdate(!0),h.after("showpasswordChange",function(e){var t=s._panels[l],n=t.get(At).one(Dt+T+'"]'),r=t.get(At).one(Dt+$+'"]'),i=e.newVal;n.setAttribute(b,i?v:T),r.setAttribute(b,i?v:T)})),r.queueMessage(h)},i.prototype._regainFn_UnPw=function(t){var n=s._intl,i=typeof t.imageButtons===a&&t.imageButtons,o="<form>"+(t.messageForgotUsernameOrPassword||n[N+"what"])+xt+_t+" "+gt+'-firstbutton">{'+(i?Nt:"")+kt+_+"}"+St+xt+_t+'">{'+(i?Nt:"")+kt+D+"}"+St+"</form>",u=new e.ITSAMessage;return u.icon=t.iconQuestion||S,u.title=t.titleForgotUsernameOrPassword||n[H],u.level=l,u.noAudio=!0,u.footer=null,u._config=t,u.target=gt,u.source=t.source||y,u.messageType=H,u.message=o,u.closeButton=!0,i?u.customBtns=[{buttonId:Ot+_,labelHTML:Ht+'-user"></i>'+n[_],config:{value:_,classname:Pt}},{buttonId:Ot+D,labelHTML:Ht+'-key"></i>'+n[D],config:{value:D,classname:Pt}}]:u.customBtns=[{buttonId:kt+_,labelHTML:n[_],config:{value:_}},{buttonId:kt+D,labelHTML:n[D],config:{value:D}}],r.queueMessage(u)},i.prototype._regainFn_Un=function(t,n){var i,o,u,f,c,h;return h=s._intl,i=t.formconfigForgotUsername||{},i[ct]||i[ht]||(i[ct]=h[k]),i[lt]=!0,i[ft]=!0,i[at]=vt+(i[at]?" "+i[at]:""),i[pt]=!0,o=e.Base.create("itsamessageforgotun",e.ITSAMessage,[],null,{ATTRS:{emailaddress:{formtype:k,formconfig:i,validator:t.validatorEmail||t.validatorUsername,validationerror:t.validationerrorEmail||t.validationerrorUsername}}}),u=yt+(t.messageForgotUsername||h.entersignupaddress)+wt+bt+Et+"{"+O+"}"+St+Tt,f=new o,f.syncPromise=n,c=typeof t.imageButtons===a&&t.imageButtons,f.icon=t.iconQuestion||S,f.title=t.titleForgotUsername||h[_],f.message=u,f.level=l,f.noAudio=!0,f.config=t,f.target=gt,f.source=t.source||y,f.messageType=_,f._submitBtn=_,f.closeButton=!0,f.primaryButton=(c?Nt:"")+Lt,f.footer="{"+(c?Nt:"")+Lt+"}",f.buttonLabels=[{buttonType:(c?Nt:"")+Lt,labelHTML:(c?Ht+'-mail"></i>':"")+h[I]}],r.queueMessage(f)},i.prototype._regainFn_Pw=function(t,n){var i,o,u,f,c,h,p;return h=s._intl,p=typeof t.usernameIsEmail===a&&t.usernameIsEmail||!1,i=t.formconfigPassword||{},i.label||i[ht]||(i.label=h[p?O:x]),i[lt]=!0,i[ft]=!0,i[at]=vt+(i[at]?" "+i[at]:""),i[pt]=!0,o=e.Base.create("itsamessageforgotpw",e.ITSAMessage,[],null,{ATTRS:{username:{formtype:p?"email":"text",formconfig:i,validator:t.validatorEmail||t.validatorUsername,validationerror:t.validationerrorEmail||t.validationerrorUsername}}}),u=yt+(t.messageForgotPassword||(p?h.retrievepasswordinstructionsmaillogin:h.retrievepasswordinstructions))+wt+bt+Et+"{"+x+"}"+St+Tt,f=new o,f.syncPromise=n,c=typeof t.imageButtons===a&&t.imageButtons,f.icon=t.iconQuestion||S,f.title=t.titleForgotPassword||h[D],f.message=u,f.level=l,f.noAudio=!0,f.config=t,f.target=gt,f.source=t.source||y,f.messageType=p?P:D,f._submitBtn=D,f.closeButton=!0,f.primaryButton=(c?Nt:"")+Lt,f.footer="{"+(c?Nt:"")+Lt+"}",f.buttonLabels=[{buttonType:(c?Nt:"")+Lt,labelHTML:(c?Ht+'-mail"></i>':"")+h[R]}],r.queueMessage(f)},s.isRendered().then(function(){o.each([f,l],function(t){var n=s._panels[t];s._eventhandlers.push(n.on("*:submit",function(e){var t=e.target,n=t.messageType;(n===g||n===U||n===_||n===D||n===P)&&t._set(Mt,t._submitBtn)})),s._eventhandlers.push(n.after("*:submit",function(t){var r=t.target;t.promise.then(function(t){var i=jt(t),o=s._intl,u=r.messageType,a,f,h,p,d;i&&i.status?i.status==="ERROR"?(f=i.message||o.unspecifiederror,e.showError(i.title||o[c],f),r.reject(f)):u===B&&i.status==="LOGIN"?(h=e.merge(i,r.toJSON()),r.resolve(h)):i.status==="OK"?(h=e.merge(i,r.toJSON()),r.resolve(h),u===g?(e.fire(tt,h),(f=i.message)&&e.showMessage(i.title,f)):u===_||u===D||u===P?(d=r._config,f=d.instructionMessage||o[st]+", "+o[ot],p={level:l,noAudio:!0,target:gt,source:d.source||y,messageType:"instructions"},e.showMessage(p.instructionTitle||o[ut],f,p)):u===W&&(d=r._config,f=d.passwordChangedMessage||o[X],p={level:l,noAudio:!0,target:gt,source:d.source||y,messageType:X},e.showMessage(p.passwordChangeTitle||o[W],f,p),r.resolve())):u===g&&i.status==="NOACCESS"?(f=i.message||o.loginblocked,e.showError(i.title||o[c],f),r.reject(f)):i.status!=="RETRY"||u!==g&&u!==_&&u!==B&&u!==D&&u!==P&&u!==U?u===g&&i.status==="CHANGEPASSWORD"?s._changePwFn(r.get(x),r.get(T),r._config,r.syncPromise).then(function(t){var n=jt(t);h=e.merge(i,n,r.toJSON(),{password:t.password}),r.resolve(h),e.fire(tt,h),(f=i.message)&&e.showMessage(i.title,f)},function(t){f=o.passwordnotchanged,e.showError(o[c],f)}):(f="Wrong response.status found: "+i.status,h={src:"Y.ITSALogin.submit()",msg:f},n.fire("warn",h),r.reject(f)):u===B?e.alert(i.title||o.failed,i.message||o.failedcreateaccount):(i.title&&n.set("title",i.title),u===g&&(f=i.message||o.unknownlogin),u===U&&(f=i.message||o.passwordnotaccepted),u===D&&(f=i.message||o.unknownusername),u===P&&(f=i.message||o.unknownemail),u===_&&(f=i.message||o.unknownemail),f&&(a=n.get(At),a.one(".itsa-messagewrapper").setHTML(f))):(f="Response returned without response.status",h={src:"Y.ITSALogin.submit()",msg:f},n.fire("warn",h),r.reject(f))}).then(null,function(t){var n=t&&(t.message||t)||"Undefined error during submission";e.showWarning(n)})}))})}),e[g]=e.bind(r[h+g],r)},"gallery-2013.12.20-18-06",{requires:["yui-base","intl","base-build","base-base","promise","json-parse","oop","gallery-itsa-i18n-login","gallery-itsamessagecontroller","gallery-itsacheckbox","gallery-itsadialog","gallery-itsamessage","gallery-itsaviewmodelpanel","gallerycss-itsa-base","gallerycss-itsa-animatespin","gallerycss-itsa-dialog"],skinnable:!0});