(this.webpackJsonpquartet=this.webpackJsonpquartet||[]).push([[0],{128:function(e,t,a){e.exports=a(168)},146:function(e,t,a){},147:function(e,t,a){},167:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),l=a(32),i=a(104),u=a(25),s=a(79),m=a(113),p=(a(137),a(8)),d=a.n(p),f=a(12),E=a(16),g={GOOGLE_SIGN_IN_START:"GOOGLE_SIGN_IN_START",EMAIL_SIGN_IN_START:"EMAIL_SIGN_IN_START",SIGN_IN_SUCCESS:"SIGN_IN_SUCCESS",SIGN_IN_FAILURE:"SIGN_IN_FAILURE",SIGN_OUT_START:"SIGN_OUT_START",SIGN_OUT_SUCCESS:"SIGN_OUT_SUCCESS",SIGN_OUT_FAILURE:"SIGN_OUT_FAILURE",SIGN_UP_START:"SIGN_UP_START",SIGN_UP_SUCCESS:"SIGN_UP_SUCCESS",SIGN_UP_FAILURE:"SIGN_UP_FAILURE",CHECK_USER_SESSION:"CHECK_USER_SESSION",GUEST_SIGN_IN_START:"GUEST_SIGN_IN_START"},b=function(e){return{type:g.SIGN_IN_FAILURE,payload:e.message}},v=function(e){var t=e.user,a=e.additionalData;return{type:g.SIGN_UP_SUCCESS,payload:{user:t,additionalData:a}}},h=a(28),S=a(58),O=a.n(S),j=(a(139),a(141),function(){var e=Object(h.a)(d.a.mark((function e(t,a){var n,r,c,o;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=N.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,o=new Date,e.prev=9,e.next=12,n.set(Object(E.a)({displayName:r,email:c,createdAt:o},a));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,a){return e.apply(this,arguments)}}());O.a.initializeApp({apiKey:"AIzaSyBECKEw3hF-GK814DvGW6xU67RCuQfzDkY",authDomain:"teamcassproj1.firebaseapp.com",databaseURL:"https://teamcassproj1.firebaseio.com",projectId:"teamcassproj1",storageBucket:"teamcassproj1.appspot.com",messagingSenderId:"583083226339",appId:"1:583083226339:web:90568dcf8dac8ef79e41d6",measurementId:"G-G4PMVEHGMR"});var y=O.a.auth(),N=O.a.firestore(),x=new O.a.auth.GoogleAuthProvider;x.setCustomParameters({prompt:"select_account"});O.a;var I=d.a.mark(W),_=d.a.mark(B),U=d.a.mark(z),w=d.a.mark(M),C=d.a.mark(K),T=d.a.mark(H),k=d.a.mark(Y),G=d.a.mark(q),A=d.a.mark(J),R=d.a.mark(Q),D=d.a.mark(V),L=d.a.mark(X),P=d.a.mark($),F=d.a.mark(Z);function W(e,t){var a,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(f.b)(j,e,t);case 3:return a=r.sent,r.next=6,a.get();case 6:return n=r.sent,r.next=9,Object(f.c)((c=Object(E.a)({id:n.id},n.data()),{type:g.SIGN_IN_SUCCESS,payload:c}));case 9:r.next=15;break;case 11:return r.prev=11,r.t0=r.catch(0),r.next=15,Object(f.c)(b(r.t0));case 15:case"end":return r.stop()}var c}),I,null,[[0,11]])}function B(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var a=y.onAuthStateChanged((function(t){a(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Object(f.b)(W,e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(f.c)(b(t.t0));case 14:case"end":return t.stop()}}),_,null,[[0,10]])}function z(){var e,t;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,y.signInWithPopup(x);case 3:return e=a.sent,t=e.user,a.next=7,Object(f.b)(W,t);case 7:a.next=13;break;case 9:return a.prev=9,a.t0=a.catch(0),a.next=13,Object(f.c)(b(a.t0));case 13:case"end":return a.stop()}}),U,null,[[0,9]])}function M(e){var t,a,n,r,c;return d.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,a=t.email,n=t.password,o.prev=1,o.next=4,y.signInWithEmailAndPassword(a,n);case 4:return r=o.sent,c=r.user,o.next=8,Object(f.b)(W,c);case 8:o.next=14;break;case 10:return o.prev=10,o.t0=o.catch(1),o.next=14,Object(f.c)(b(o.t0));case 14:case"end":return o.stop()}}),w,null,[[1,10]])}function K(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.signOut();case 3:return e.next=5,Object(f.c)({type:g.SIGN_OUT_SUCCESS});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(f.c)((t=e.t0,{type:g.SIGN_OUT_FAILURE,payload:t.message}));case 11:case"end":return e.stop()}var t}),C,null,[[0,7]])}function H(e){var t,a,n,r,c,o;return d.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,a=t.displayName,n=t.password,r=t.email,l.prev=1,l.next=4,y.createUserWithEmailAndPassword(r,n);case 4:return c=l.sent,o=c.user,l.next=8,Object(f.c)(v({user:o,additionalData:{displayName:a}}));case 8:l.next=14;break;case 10:return l.prev=10,l.t0=l.catch(1),l.next=14,Object(f.c)((i=l.t0,{type:g.SIGN_UP_FAILURE,payload:i.message}));case 14:case"end":return l.stop()}var i}),T,null,[[1,10]])}function Y(e){var t,a,n;return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,a=t.user,n=t.additionalData,r.next=3,W(a,n);case 3:case"end":return r.stop()}}),k)}function q(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.CHECK_USER_SESSION,B);case 2:case"end":return e.stop()}}),G)}function J(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.GOOGLE_SIGN_IN_START,z);case 2:case"end":return e.stop()}}),A)}function Q(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.EMAIL_SIGN_IN_START,M);case 2:case"end":return e.stop()}}),R)}function V(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.SIGN_OUT_START,K);case 2:case"end":return e.stop()}}),D)}function X(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.SIGN_UP_START,H);case 2:case"end":return e.stop()}}),L)}function $(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.d)(g.SIGN_UP_SUCCESS,Y);case 2:case"end":return e.stop()}}),P)}function Z(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.b)(J),Object(f.b)(Q),Object(f.b)(q),Object(f.b)(V),Object(f.b)(X),Object(f.b)($)]);case 2:case"end":return e.stop()}}),F)}var ee=d.a.mark(te);function te(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.a)([Object(f.b)(Z)]);case 2:case"end":return e.stop()}}),ee)}var ae=a(105),ne={currentUser:null,error:null},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.SIGN_IN_SUCCESS:return Object(E.a)({},e,{currentUser:t.payload,error:null});case g.SIGN_OUT_SUCCESS:return Object(E.a)({},e,{currentUser:null,error:null});case g.SIGN_IN_FAILURE:case g.SIGN_OUT_FAILURE:case g.SIGN_UP_FAILURE:return Object(E.a)({},e,{error:t.payload});case g.GUEST_SIGN_IN_START:return Object(E.a)({},e,{currentUser:{email:"guest@guest.com",id:"817xvzXncusfgYUFjfJFuyiFFgdCsfxy97aysd",displayName:"Guest"},error:null});default:return e}},ce={key:"root",storage:a.n(ae).a,whitelist:["user"]},oe=Object(u.c)({user:re}),le=Object(s.a)(ce,oe),ie=Object(m.a)(),ue=[ie];var se=Object(u.e)(le,u.a.apply(void 0,ue));ie.run(te);var me=Object(s.b)(se),pe=(a(146),a(22)),de=a(23),fe=a(18),Ee=a(51),ge=(a(147),a(47)),be=a(217),ve=a(203),he=a(201),Se=a(198),Oe=a(202),je=a(215),ye=a(106),Ne=a.n(ye),xe=a(63),Ie=a(199),_e=a(200);function Ue(){return r.a.createElement(xe.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(Se.a,{color:"inherit",href:""},"Quartet")," ",(new Date).getFullYear(),".")}var we=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ce=Object(l.b)(null,(function(e){return{googleSignInStart:function(){return e({type:g.GOOGLE_SIGN_IN_START})},guestSignInStart:function(){return e({type:g.GUEST_SIGN_IN_START})}}}))((function(e){var t=e.googleSignInStart,a=e.guestSignInStart,c=we(),o=Object(n.useState)({email:"",password:""}),l=Object(pe.a)(o,2),i=l[0];l[1],i.email,i.password;return r.a.createElement(_e.a,{component:"main",maxWidth:"xs"},r.a.createElement(he.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(be.a,{className:c.avatar},r.a.createElement(Ne.a,null)),r.a.createElement(xe.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement(Oe.a,{item:!0},r.a.createElement(ve.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:c.submit,onClick:function(){return t()}},"Sign In With Google")),r.a.createElement("h2",null,"OR"),r.a.createElement(Oe.a,{item:!0},r.a.createElement(ve.a,{type:"submit",fullWidth:!0,variant:"contained",className:c.submit,onClick:function(){return a()}},"Guest"))),r.a.createElement(je.a,{mt:8},r.a.createElement(Ue,null)))})),Te=a(111),ke=a(209),Ge=(a(208),a(170),a(204),a(206),a(205),a(207),a(107),a(108),Object(Ie.a)((function(e){return{root:{flexGrow:1},form:{"& > *":{marginTop:e.spacing(1)}},paper:{marginTop:e.spacing(15),padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},heading:{marginBottom:e.spacing(10)}}}))),Ae=Object(Te.a)();Ae.typography.h1={fontSize:"2rem"};function Re(e){var t=Ge();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ke.a,{theme:Ae},r.a.createElement(he.a,null),r.a.createElement(_e.a,{maxWidth:"lg"},r.a.createElement("div",{className:t.root},r.a.createElement(xe.a,{className:t.heading,variant:"h3"},"Hello, ",e.displayName),r.a.createElement(Oe.a,{container:!0,spacing:3},r.a.createElement(Oe.a,{container:!0,justify:"center",spacing:5},r.a.createElement(Oe.a,{item:!0},r.a.createElement(de.b,{to:"/choose-mix-song"},r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large"},"Mix!"))),r.a.createElement(Oe.a,{item:!0},r.a.createElement(de.b,{to:"/choose-song"},r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large"},"Create!")))))))))}var De=a(213),Le=a(210),Pe=a(214),Fe=a(57),We=a.n(Fe),Be=function(){return We()({url:"/midi-files",method:"get"})},ze=function(e,t){return We()({url:"/get-recording/".concat(e,"/").concat(t),method:"get"})},Me=function(e,t,a){return We()({url:"/mix",method:"post",data:{songID:e,mixer:t,recordings:a}})},Ke=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(8),minWidth:200},buttonGroup:{margin:e.spacing(2)}}})),He=Object(fe.g)((function(e){var t=e.history,a=Ke(),c=Object(n.useState)({id:null,title:null}),o=Object(pe.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)({loading:!0,data:null}),s=Object(pe.a)(u,2),m=s[0],p=s[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be();case 2:t=e.sent,a=t.data,n=a.midis,p((function(e){return Object(E.a)({},e,{loading:!1,data:n})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.loading,g=m.data;return f?r.a.createElement("h1",null,"Loading..."):r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(xe.a,{variant:"h3"},"Choose your song"),r.a.createElement(Le.a,{className:a.formControl},r.a.createElement(Pe.a,{label:"",value:l.id+"&&"+l.title,onChange:function(e){var t=e.target.value.split("&&"),a=Object(pe.a)(t,2),n=a[0],r=a[1];i(Object(E.a)({},l,{id:n,title:r}))}},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),g.map((function(e){return r.a.createElement(De.a,{key:e.id,value:e.id+"&&"+e.title},e.title)}))))),r.a.createElement(de.b,{to:{pathname:"/record-song",state:{song:l}}},r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large",disabled:!l.id,onClick:function(){t.push("/record-song",Object(E.a)({},l))}},"Let's go")))})),Ye=a(216),qe=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(1),minWidth:200},selectEmpty:{marginTop:e.spacing(2)}}}));function Je(){var e=qe();return r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(xe.a,{variant:"h1"},"Upload Midi File"),r.a.createElement(Le.a,{className:e.formControl},r.a.createElement(Ye.a,{id:"title",variant:"outlined",fullWidth:!0,label:"Title"})),r.a.createElement(ve.a,null,"Upload")))}var Qe=a(109),Ve=a(110),Xe=a(78),$e=a(112),Ze=a(114),et=function(e){Object(Ze.a)(a,e);var t=Object($e.a)(a);function a(e){var n;return Object(Qe.a)(this,a),(n=t.call(this,e)).uploadAudio=function(e,t,a){console.log("Blob is: - ".concat(e));var r=new FormData;r.append("recording",e),r.append("songID",t.id),r.append("uid",a),r.append("partID",n.state.part),We.a.post("/upload",r,{headers:{"Content-Type":"multipart/form-data"}}),n.props.history.push("/clip-saved",{})},n.state={recording:!1,audios:[],part:"",displayName:e.uid.replace(" ","_")},n.updatePart=n.updatePart.bind(Object(Xe.a)(n)),n}return Object(Ve.a)(a,[{key:"componentDidMount",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0});case 2:t=e.sent,console.log(this.state.displayName),this.audio.srcObject=t,this.mediaRecorder=new MediaRecorder(t),this.chunks=[],console.log(this.props.location.state.song),this.bgAudio=new Audio("/midi/".concat(this.props.location.state.song.id,".mp3")),this.bgAudio.load(),this.mediaRecorder.ondataavailable=function(e){e.data&&e.data.size>0&&a.chunks.push(e.data)};case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startRecording",value:function(e){e.preventDefault(),this.bgAudio.play(),this.chunks=[],this.mediaRecorder.start(10),this.setState({recording:!0})}},{key:"stopRecording",value:function(e){e.preventDefault(),this.bgAudio.pause(),this.bgAudio.currentTime=0,this.mediaRecorder.stop(),this.setState({recording:!1}),this.saveAudio()}},{key:"saveAudio",value:function(){var e=new Blob(this.chunks,{type:"audio/wav"}),t=window.URL.createObjectURL(e),a=this.state.audios.concat([{url:t,blob:e}]);this.setState({audios:a}),console.log(a)}},{key:"deleteAudio",value:function(e){var t=this.state.audios.filter((function(t){return t!==e}));this.setState({audios:t})}},{key:"updatePart",value:function(e){this.setState({part:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props,a=(t.match,t.location,t.history,this.state),n=a.recording,c=a.audios,o=a.part,l=this.props.location.state.song;return r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement(Oe.a,{container:!0,justify:"center"},r.a.createElement(Oe.a,{item:!0,sm:6},r.a.createElement(xe.a,{variant:"h3"},"Choose Role"),r.a.createElement(Le.a,null,r.a.createElement(Pe.a,{value:o,onChange:this.updatePart},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),r.a.createElement(De.a,{value:"soprano"},"Soprano"),r.a.createElement(De.a,{value:"alto"},"Alto"),r.a.createElement(De.a,{value:"tenor"},"Tenor"),r.a.createElement(De.a,{value:"bass"},"Bass")))),r.a.createElement(Oe.a,{item:!0,sm:6},r.a.createElement(xe.a,{variant:"h3"},"Record ",o.charAt(0).toUpperCase()+o.slice(1)," Part"),r.a.createElement(xe.a,{variant:"h4"},l.title),r.a.createElement("div",null,r.a.createElement("audio",{style:{width:400},ref:function(t){e.audio=t}},r.a.createElement("p",null,"Audio stream not available. ")),r.a.createElement("div",null,!n&&r.a.createElement(ve.a,{variant:"contained",color:"primary",onClick:function(t){return e.startRecording(t)}},"Record"),n&&r.a.createElement(ve.a,{variant:"contained",color:"primary",onClick:function(t){return e.stopRecording(t)}},"Stop")),r.a.createElement("div",null,r.a.createElement("h3",null,"Draft Recordings"),c.map((function(t,a){return r.a.createElement("div",{key:"audio_".concat(a)},r.a.createElement("audio",{controls:!0,style:{width:200},src:t.url}),r.a.createElement("div",null,r.a.createElement(ve.a,{variant:"contained",color:"primary",onClick:function(){return e.deleteAudio(t)}},"Delete")),r.a.createElement("div",null,r.a.createElement(ve.a,{variant:"contained",color:"primary",style:{marginTop:"2rem"},onClick:function(){return e.uploadAudio(t.blob,l,e.state.displayName)}},"Upload")))})))))))}}]),a}(r.a.Component),tt=Object(fe.g)(et),at=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"}}}));function nt(){var e=at();return r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(xe.a,{variant:"h3"},"Clip Saved!")),r.a.createElement(de.b,{to:"/dashboard"},r.a.createElement(ve.a,{style:{marginTop:"2rem"},variant:"contained",color:"primary",size:"large"},"Back to Dashboard")))}var rt=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(8),minWidth:200}}})),ct=Object(fe.g)((function(e){var t=e.history,a=rt(),c=Object(n.useState)({id:null,title:null}),o=Object(pe.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)({loading:!0,data:null}),s=Object(pe.a)(u,2),m=s[0],p=s[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Be();case 2:t=e.sent,a=t.data,n=a.midis,p((function(e){return Object(E.a)({},e,{loading:!1,data:n})}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.loading,g=m.data;return f?r.a.createElement("h1",null,"Loading..."):r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:a.paper},r.a.createElement(xe.a,{variant:"h3"},"Choose your song"),r.a.createElement(Le.a,{className:a.formControl},r.a.createElement(Pe.a,{label:"",value:l.id+"&&"+l.title,onChange:function(e){var t=e.target.value.split("&&"),a=Object(pe.a)(t,2),n=a[0],r=a[1];i(Object(E.a)({},l,{id:n,title:r}))}},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),g.map((function(e){return r.a.createElement(De.a,{key:e.id,value:e.id+"&&"+e.title},e.title)}))))),r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large",disabled:!l.id,onClick:function(){t.push("/choose-mix-parts",Object(E.a)({},l))}},"Let's go"))})),ot=Object(Ee.a)([function(e){return e.user}],(function(e){return e.currentUser})),lt=Object(Ie.a)((function(e){return{paper:{marginBottom:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},formControl:{margin:e.spacing(1),minWidth:200},paddingTopBottom:{marginTop:e.spacing(8),marginBottom:e.spacing(8)}}})),it=Object(Ee.b)({currentUser:ot}),ut=Object(fe.g)(Object(l.b)(it)((function(e){var t=e.location,a=e.currentUser,c=lt(),o=r.a.useState({soprano:null,tenor:null,alto:null,bass:null,loading:!0}),l=Object(pe.a)(o,2),i=l[0],u=l[1],s=r.a.useState({soprano:null,tenor:null,alto:null,bass:null}),m=Object(pe.a)(s,2),p=m[0],f=m[1];Object(n.useEffect)((function(){var e=function(){var e=Object(h.a)(d.a.mark((function e(t,a){var n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ze(t,a);case 2:n=e.sent,r=n.data,c=r.recordings.map((function(e){return e.uid})),u((function(e){return Object(E.a)({},e,Object(ge.a)({},a,c))}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();e(t.state.id,"soprano"),e(t.state.id,"tenor"),e(t.state.id,"alto"),e(t.state.id,"bass"),u((function(e){return Object(E.a)({},e,{loading:!1})}))}),[t.state.id]);var g=function(e){f((function(t){return Object(E.a)({},t,Object(ge.a)({},e.target.name,e.target.value))}))},b=function(){var e=Object(h.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(n=[{partID:"soprano",uid:p.soprano},{partID:"tenor",uid:p.tenor},{partID:"alto",uid:p.alto},{partID:"bass",uid:p.bass}]).filter((function(e){return null!==e.uid})),e.next=4,Me(t.state.id,a.displayName.replace(" ","_"),n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=i.soprano,S=i.tenor,O=i.alto,j=i.bass;return i.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:c.paper},r.a.createElement(xe.a,{variant:"h3"},t.state.title)),r.a.createElement(Oe.a,{container:!0,spacing:3,className:c.paddingTopBottom},r.a.createElement(Oe.a,{item:!0,xs:3},r.a.createElement(xe.a,null,"Soprano"),r.a.createElement(Le.a,{className:c.formControl},r.a.createElement(Pe.a,{label:"",name:"soprano",value:p.soprano,onChange:g},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),v?v.map((function(e){return r.a.createElement(De.a,{value:e},e)})):null))),r.a.createElement(Oe.a,{item:!0,xs:3},r.a.createElement(xe.a,null,"Tenor"),r.a.createElement(Le.a,{className:c.formControl},r.a.createElement(Pe.a,{label:"",name:"tenor",value:p.tenor,onChange:g},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),S?S.map((function(e){return r.a.createElement(De.a,{value:e},e)})):null))),r.a.createElement(Oe.a,{item:!0,xs:3},r.a.createElement(xe.a,null,"Alto"),r.a.createElement(Le.a,{className:c.formControl},r.a.createElement(Pe.a,{label:"",name:"alto",value:p.alto,onChange:g},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),O?O.map((function(e){return r.a.createElement(De.a,{value:e},e)})):null))),r.a.createElement(Oe.a,{item:!0,xs:3},r.a.createElement(xe.a,null,"Bass"),r.a.createElement(Le.a,{className:c.formControl},r.a.createElement(Pe.a,{label:"",name:"bass",value:p.bass,onChange:g},r.a.createElement(De.a,{value:""},r.a.createElement("em",null,"None")),j?j.map((function(e){return r.a.createElement(De.a,{value:e},e)})):null)))),r.a.createElement(ve.a,{variant:"contained",color:"primary",size:"large",onClick:function(){return b()}},"Mix!"))}))),st=Object(Ie.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},padding:{margin:e.spacing(8),minWidth:200}}}));function mt(){var e=st();return r.a.createElement(_e.a,null,r.a.createElement(he.a,null),r.a.createElement("div",{className:e.paper},r.a.createElement(xe.a,{variant:"h3"},"Your mix is ready!")),r.a.createElement(ve.a,{className:e.padding,variant:"contained",color:"primary",size:"large"},"Download"))}a(167);var pt=Object(l.b)(null,(function(e){return{signOut:function(){return e({type:g.SIGN_OUT_START})}}}))((function(e){var t=e.signOut,a=e.currentUser;return r.a.createElement("div",{className:"navbar"},r.a.createElement(Oe.a,{justify:"space-between",container:!0,spacing:3},r.a.createElement(Oe.a,{item:!0},r.a.createElement(de.b,{to:"/dashboard"},r.a.createElement("img",{src:"../quartetlogo.png",height:"80",alt:"Quartet Logo"}))),a?r.a.createElement(Oe.a,{item:!0},r.a.createElement(ve.a,{style:{marginTop:"25%"},variant:"contained",color:"primary",onClick:function(){return t()}},"Sign Out")):null))}));var dt=Object(Ee.b)({currentUser:ot}),ft=Object(l.b)(dt,(function(e){return{checkUserSession:function(){return e({type:g.CHECK_USER_SESSION})}}}))((function(e){var t=e.currentUser,a=e.checkUserSession,c=Object(n.useState)({loading:!0}),o=Object(pe.a)(c,2),l=o[0],i=o[1];return Object(n.useEffect)((function(){a(),i((function(e){return Object(E.a)({},e,{loading:!1})}))}),[a]),l.loading?r.a.createElement("h1",null,"Loading..."):r.a.createElement("div",{className:"App"},r.a.createElement(de.a,null,r.a.createElement(pt,{currentUser:t}),r.a.createElement("div",null,r.a.createElement(fe.d,null,r.a.createElement(fe.b,{exact:!0,path:"/",render:function(){return t?r.a.createElement(fe.a,{to:"/dashboard"}):r.a.createElement(Ce,null)}}),r.a.createElement(fe.b,{path:"/dashboard",render:function(){return t?r.a.createElement(Re,{displayName:t.displayName}):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/choose-song",render:function(){return t?r.a.createElement(He,null):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/upload-midi",render:function(){return t?r.a.createElement(Je,null):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/record-song",render:function(){return r.a.createElement(tt,{uid:t.displayName})}}),r.a.createElement(fe.b,{path:"/clip-saved",render:function(){return t?r.a.createElement(nt,null):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/choose-mix-song",render:function(){return t?r.a.createElement(ct,null):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/choose-mix-parts",render:function(){return t?r.a.createElement(ut,null):r.a.createElement(fe.a,{to:"/"})}}),r.a.createElement(fe.b,{path:"/mix-ready",render:function(){return t?r.a.createElement(mt,null):r.a.createElement(fe.a,{to:"/"})}})))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{store:se},r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,{persistor:me},r.a.createElement(ft,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.3f466a34.chunk.js.map