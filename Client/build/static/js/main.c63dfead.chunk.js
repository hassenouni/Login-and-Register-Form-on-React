(this.webpackJsonpmernboilerplate=this.webpackJsonpmernboilerplate||[]).push([[0],{101:function(e,a,t){e.exports=t(136)},106:function(e,a,t){},136:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),o=t.n(l),c=(t(106),t(24)),i=t(31),s=(t(107),t(6)),m=t(177),u=t(169),d=t(167),p=t(171),f=t(168),g=t(174),h=t(164),b=t(170),E=t(172),v=t(27),O=t.n(v),j=t(89),w=t(165),y=t(166),S=t(13),C=t.n(S),x=t(176),k=t(163),N=t(46),W=t.n(N),P=t(173);function T(e){var a=r.a.useState(e.open),t=Object(s.a)(a,2),n=t[0],l=t[1];r.a.useEffect((function(){l(e.open)}),[e.open]);var o=function(a,t){"clickaway"!==t&&(l(!1),e.handle(!1))};return r.a.createElement("div",null,r.a.createElement(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:n,autoHideDuration:6e3,onClose:o,action:r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{size:"small","aria-label":"close",onClick:o},r.a.createElement(W.a,{fontSize:"small"})))},r.a.createElement(P.a,{onClose:o,severity:e.severity},e.message)))}var q="https://asalik13-loginserver.herokuapp.com/api",D={link:q,login:q+"/login",register:q+"/register",forgot:q+"/forgot",logout:q+"/logout",secret:q+"/secret",reset:function(e){return q+"/reset/"+e.ident+"/"+e.today+"-"+e.hash},verify:function(e){return q+"/verify/"+e.ident+"/"+e.today+"-"+e.hash},resetVerify:function(e){return q+"/reset/verify/"+e.ident+"/"+e.today+"-"+e.hash}};function I(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"http://ayushsalik.com"},"ayushsalik.com")," ",(new Date).getFullYear(),".")}var V=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function A(e){var a=V(),t=Object(n.useState)(""),l=Object(s.a)(t,2),o=l[0],c=l[1],v=Object(n.useState)(""),w=Object(s.a)(v,2),S=w[0],x=w[1],k=Object(n.useState)(!1),N=Object(s.a)(k,2),W=(N[0],N[1]),P=Object(n.useState)(!1),q=Object(s.a)(P,2),A=q[0],F=q[1],L=Object(n.useState)(!1),R=Object(s.a)(L,2),z=R[0],Y=(R[1],Object(n.useState)("")),B=Object(s.a)(Y,2),J=B[0],Z=(B[1],Object(n.useState)("")),$=Object(s.a)(Z,2),H=$[0],M=$[1],U=Object(n.useState)(!1),G=Object(s.a)(U,2),K=G[0],Q=G[1],X=Object(n.useState)("success"),_=Object(s.a)(X,2),ee=_[0],ae=_[1],te=Object(n.useState)(""),ne=Object(s.a)(te,2),re=(ne[0],ne[1],Object(n.useState)(!1)),le=Object(s.a)(re,2),oe=(le[0],le[1],Object(n.useState)(!1)),ce=Object(s.a)(oe,2),ie=ce[0],se=ce[1],me=Object(i.g)();Object(n.useEffect)((function(){var a=e.history.location.state;void 0!==a&&void 0!==a.notif&&ue(a.notif,"success")}),[]);var ue=function(e,a){ae(a),M(e),Q(!0)};return ie?r.a.createElement("h6",null,"loading..."):r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement("br",null),r.a.createElement(m.a,{className:a.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:z,helperText:J,id:"email",label:"Email Address",name:"email",value:o,onChange:function(e){c(e.target.value)},autoComplete:"email"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:A,helperText:A?"Email or password is incorrect. Please try again":"",name:"password",value:S,onChange:function(e){x(e.target.value),F(!1)},label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(f.a,{control:r.a.createElement(g.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),se(!0),C.a.post(D.login,{user:{email:o,password:S}}).then((function(e){se(!1),e.data.error?ue(e.data.error,"error"):200===e.status&&(W(!1),F(!1),me.push("/secret"))})).catch((function(e){se(!1),ue("Email or password is incorrect. Please try again","error")}))},className:a.submit},"Sign In"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"/forgot",variant:"body2"},"Forgot password?")),r.a.createElement(b.a,{item:!0},r.a.createElement(h.a,{href:"/register",variant:"body2"},"Don't have an account? Sign Up"))))),r.a.createElement(E.a,{mt:8},r.a.createElement(I,null),r.a.createElement(T,{message:H,open:K,handle:Q,severity:ee})))}t(131);var F=t(56),L=t.n(F);function R(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"https://material-ui.com/"},"Your Website")," ",(new Date).getFullYear(),".")}var z=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Y(){var e=z(),a=Object(n.useState)(""),t=Object(s.a)(a,2),l=t[0],o=t[1],c=Object(n.useState)(""),f=Object(s.a)(c,2),g=f[0],v=f[1],w=Object(n.useState)(!1),S=Object(s.a)(w,2),x=S[0],k=S[1],N=Object(n.useState)(""),W=Object(s.a)(N,2),P=W[0],q=W[1],I=Object(n.useState)(""),V=Object(s.a)(I,2),A=V[0],F=V[1],Y=Object(n.useState)(""),B=Object(s.a)(Y,2),J=B[0],Z=B[1],$=Object(n.useState)(""),H=Object(s.a)($,2),M=H[0],U=H[1],G=Object(n.useState)(""),K=Object(s.a)(G,2),Q=K[0],X=K[1],_=Object(n.useState)(!0),ee=Object(s.a)(_,2),ae=ee[0],te=ee[1],ne=Object(n.useState)(0),re=Object(s.a)(ne,2),le=re[0],oe=re[1],ce=Object(n.useState)(""),ie=Object(s.a)(ce,2),se=ie[0],me=ie[1],ue=Object(n.useState)(!1),de=Object(s.a)(ue,2),pe=de[0],fe=de[1],ge=Object(n.useState)("success"),he=Object(s.a)(ge,2),be=(he[0],he[1]),Ee=Object(i.g)(),ve=function(e,a){be(a),me(e),fe(!0)};r.a.useEffect((function(){var e=function(e){return""===e||/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(l);v(e?"":"Please enter a valid email"),k(!e)}),[l]),r.a.useEffect((function(){""===A||A===P?(X(""),te(!0)):(X("Passwords don't match"),te(!1))}),[A,P]);return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(m.a,{className:e.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Register"),r.a.createElement("form",{autoComplete:"new-password",className:e.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"First Name",name:"firstName",value:J,onChange:function(e){return Z(e.target.value)},autoComplete:"given-name"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,label:"Last Name",name:"lastName",value:M,onChange:function(e){return U(e.target.value)},autoComplete:"family-name"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,error:x,fullWidth:!0,label:"Email Address",name:"email",helperText:g,value:l,onChange:function(e){return o(e.target.value)},autoComplete:"email"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"new-password",value:P,onChange:function(e){return q(e.target.value)},label:"Password",type:"password",id:"new-password",autoComplete:"new-password"}),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,error:!ae,name:"confirmPassword",value:A,helperText:Q,onChange:function(e){return F(e.target.value)},label:" Confirm Password",type:"password",autoComplete:"new-password"}),P.length>0?r.a.createElement(L.a,{password:P,onChangeScore:function(e){oe(e),console.log(e)}}):r.a.createElement("p",null),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",onClick:function(e){e.preventDefault(),[J,M,l,P].filter((function(e){return""===e})).length>0?ve("Please fill all the fields","error"):x?ve("Please enter a valid email","error"):le<2?ve("Please enter a stronger password","error"):C.a.post(D.register,{user:{email:l,password:P,firstName:J,lastName:M}}).then((function(e){"Already exists"===e.data.email?ve("This email already exists","error"):200===e.status&&Ee.push("/login",{notif:"Verification Email Sent"})}))},className:e.submit},"Register!"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(h.a,{href:"/login",variant:"body2"},"Already have an account? Log in")),r.a.createElement(b.a,{item:!0})))),r.a.createElement(E.a,{mt:8},r.a.createElement(R,null)),r.a.createElement(T,{message:se,open:pe,handle:fe}))}function B(){var e=Object(i.g)();return r.a.createElement(u.a,{onClick:function(){e.push("/login"),C.a.post(D.logout)}},"Logout")}function J(e){return r.a.createElement(u.a,{onClick:function(){C.a.post(D.forgot,{email:e.email})}}," Reset ")}function Z(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(n.useState)(0),c=Object(s.a)(o,2),m=c[0],u=c[1],d=Object(i.g)();return Object(n.useEffect)((function(){C()(D.secret,{method:"get"}).then((function(e){l(e.data),u(e.status)})).catch((function(e){return u(401)}))}),[]),0===m?r.a.createElement("h6",null," loading... "):200===m?r.a.createElement("div",null,r.a.createElement("h6",null," ",t.firstName+" just logged in!"," "),r.a.createElement(B,null),r.a.createElement(J,{email:t.email})):void d.push("/login")}C.a.defaults.withCredentials=!0;var $=t(71);function H(){return r.a.createElement(j.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(h.a,{color:"inherit",href:"http://ayushsalik.com"},"ayushsalik.com")," ",(new Date).getFullYear(),".")}var M=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function U(e){var a=M(),t=Object(n.useState)(""),l=Object(s.a)(t,2),o=l[0],c=l[1],f=Object(n.useState)(""),g=Object(s.a)(f,2),h=g[0],v=g[1],w=Object(n.useState)(0),S=Object(s.a)(w,2),x=S[0],k=S[1],N=Object(n.useState)(""),W=Object(s.a)(N,2),P=W[0],q=W[1],I=Object(n.useState)(!1),V=Object(s.a)(I,2),A=V[0],F=V[1],R=Object(n.useState)("success"),z=Object(s.a)(R,2),Y=z[0],B=z[1],J=Object(i.g)(),Z=function(e,a){B(a),q(e),F(!0)};return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(m.a,{className:a.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Reset Password"),r.a.createElement("form",{className:a.form,noValidate:!0},r.a.createElement(p.a,Object($.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"oldpassword",label:"Old Password",name:"oldpassword",hidden:!e.loggedIn,value:o,onChange:function(e){c(e.target.value)},autoComplete:"email"},"autoComplete","current-password")),r.a.createElement(p.a,Object($.a)({variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"password",label:"Password",name:"password",type:"password",value:o,onChange:function(e){c(e.target.value)},autoComplete:"email"},"autoComplete","new-password")),r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"cpassword",value:h,onChange:function(e){v(e.target.value)},label:"Confirm Password",type:"password",id:"cpassword",autoComplete:"new-password"}),o.length>0?r.a.createElement(L.a,{password:o,onChangeScore:function(e){k(e)}}):r.a.createElement("p",null),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",className:a.submit,onClick:function(){o===h?x<2?Z("Please choose a stronger Password","error"):(C.a.post(D.reset(e),{password:o}),J.push("/login",{notif:"Email with reset link sent"})):Z("Passwords don't match","error")}},"Reset"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0}),r.a.createElement(b.a,{item:!0})))),r.a.createElement(E.a,{mt:8},r.a.createElement(H,null)),r.a.createElement(T,{message:P,open:A,handle:F,severity:Y}))}function G(e){var a=e.match.params,t=a.ident,l=a.today,o=a.hash,c=Object(n.useState)(!1),i=Object(s.a)(c,2),m=i[0],u=i[1];return Object(n.useEffect)((function(){C.a.post(D.resetVerify(e.match.params)).then((function(e){u(e.status)}))})),200===m?r.a.createElement(U,{ident:t,today:l,hash:o}):r.a.createElement("h1",null,m)}var K=Object(w.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function Q(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],l=a[1],o=Object(i.g)(),c=K();return r.a.createElement(y.a,{component:"main",maxWidth:"xs"},r.a.createElement(d.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(m.a,{className:c.avatar},r.a.createElement(O.a,null)),r.a.createElement(j.a,{component:"h1",variant:"h5"},"Please enter your email"),r.a.createElement("form",{className:c.form,noValidate:!0},r.a.createElement(p.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",value:t,onChange:function(e){l(e.target.value)},autoComplete:"email"}),r.a.createElement(u.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",onClick:function(){o.push("./login"),C.a.post(D.forgot,{email:t})},className:c.submit},"Send Email"),r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,xs:!0}),r.a.createElement(b.a,{item:!0})))),r.a.createElement(E.a,{mt:8}))}function X(e){var a=Object(n.useState)("loading"),t=Object(s.a)(a,2),l=t[0],o=t[1];Object(i.g)();return Object(n.useEffect)((function(){C()(D.verify(e.match.params),{method:"post"}).then((function(e){o(200===e.status)})).catch((function(e){return o(!1)}))})),"loading"===l?r.a.createElement("h6",null," Verifying Email... "):l?r.a.createElement(i.a,{to:"/secret"}):r.a.createElement("h6",null," Sorry. Invalid Link ")}C.a.defaults.withCredentials=!0;var _=function(){return r.a.createElement(c.a,null,r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/",component:A}),r.a.createElement(i.b,{path:"/Login",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(i.b,{path:"/register",render:function(e){return r.a.createElement(Y,e)}}),r.a.createElement(i.b,{path:"/register",component:Y}),r.a.createElement(i.b,{path:"/secret",component:Z}),r.a.createElement(i.b,{path:"/reset/:ident/:today-:hash",component:G}),r.a.createElement(i.b,{path:"/verify/:ident/:today-:hash",component:X}),r.a.createElement(i.b,{path:"/forgot",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.c63dfead.chunk.js.map