(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(e,t,a){e.exports=a(368)},367:function(e,t,a){},368:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(24),o=a.n(i),c=a(30),s=a(21),l=a(33),u=Object(l.createMuiTheme)({typography:{useNextVariants:!0},overrides:{MuiBackdrop:{root:{top:64,backgroundColor:"rgba(0, 0, 0, 0.7)"}},MuiButton:{label:{textTransform:"none"}}},palette:{type:"dark",primary:{light:"#252627",main:"#181818",kindaDark:"#242424",subheader:"#2d2d2d",dark:"#070707"},secondary:{main:"#42dbff",contrastText:"#3D3D3D"},text:{primary:"#fff",secondary:"#c8c6c8"}}}),d=a(28),m=a(159),p=a(56),v=a(100),f=Object(d.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MOVIES/FETCH_FAILED":return{};case"MOVIES/SET":return t.movies;default:return e}},login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{success:null,data:{}},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/FAILED":return{success:!1,data:{}};case"LOGIN/SUCCESS":return Object(p.a)({success:!0},t.user);case"AUTH/LOGOUT":return{success:null,data:{}};default:return e}},poster:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{size:2},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTER/SETSIZE":return{size:t.size};default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{data:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FAVORITES/SET":return t.favorites;case"FAVORITE/ADD":return Object(p.a)({},e,{data:[].concat(Object(v.a)(e.data),[t.data])});case"FAVORITE/REMOVE":return Object(p.a)({},e,{data:Object(v.a)(e.data.filter(function(e){return e.movie_id!==t.data.movie_id}))});default:return e}}}),b=a(23),g=a.n(b),h=a(146),E=function(e){return{type:"FAVORITES/SET",favorites:e}},O=function(e){return{type:"LOGIN/SUCCESS",user:e}},x=function(){return{type:"LOGIN/FAILED"}},y=function(e){return{type:"MOVIES/FETCH_FAILED",e:e}},w=function(e){return{type:"MOVIES/SET",movies:e}},S=function(e){return{type:"REGISTER/SUCCESS",user:e}},j=function(){return{type:"REGISTER/FAILED"}},T="9c5d8e6720b52842439640750f777880",N=a(27),k=g.a.mark(F),C=g.a.mark(L),I=g.a.mark(A),_=g.a.mark(P),R=g.a.mark(M);function F(){var e;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(N.a)(Object(h.a)(g.a.mark(function e(){var t;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key="+T);case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}},e)})));case 3:return e=t.sent,t.next=6,Object(N.b)(w(e));case 6:t.next=13;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(N.b)(y(t.t0));case 12:return t.abrupt("return");case 13:case"end":return t.stop()}},k,null,[[0,8]])}function L(e){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.b)(E({status:"success",data:[],message:"Retrieved All favorites"}));case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),alert(e.t0),e.abrupt("return");case 9:case"end":return e.stop()}},C,null,[[0,5]])}function A(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.b)(O({data:{id:1}}));case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(N.b)(x());case 9:return e.abrupt("return");case 10:case"end":return e.stop()}},I,null,[[0,5]])}function P(e){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(N.b)(S({id:1}));case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(N.b)(j());case 9:return e.abrupt("return");case 10:case"end":return e.stop()}},_,null,[[0,5]])}function M(){return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.c)("MOVIES/FETCH",F);case 2:return e.next=4,Object(N.c)("LOGIN/ATTEMPT",function(e){return A(e.user)});case 4:return e.next=6,Object(N.c)("REGISTER/ATTEMPT",function(e){return P(e.user)});case 6:return e.next=8,Object(N.c)("FAVORITES/GET",function(e){return L(e.user_id)});case 8:case"end":return e.stop()}},R)}var z=Object(m.a)(),B=Object(d.d)(Object(d.a)(z),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||d.d),V=Object(d.e)(f,B);z.run(M);var D=a(40),q=a(26),G=a(4),U=a(25),H=Object(U.a)(Object(l.withStyles)(function(e){return{root:{},actions:{padding:0,margin:0},activePanel:{borderBottom:"none",borderTopRightRadius:"".concat(e.shape.borderRadius,"px !important"),borderTopLeftRadius:"".concat(e.shape.borderRadius,"px !important")},button:{borderRadius:0,height:44,margin:0,width:"50%"},content:{border:"solid 1px #6d6d6d",borderTop:"none",display:"flex",flexDirection:"column",paddingTop:e.spacing.unit,paddingBottom:e.spacing.unit},inActivePanel:{border:"none",borderBottom:"solid 1px #6d6d6d"},submitButton:{letterSpacing:1,fontWeight:700,margin:"".concat(e.spacing.unit,"px 0"),width:"100%"},textField:{width:250},title:{display:"flex",justifyContent:"center"}}}),Object(s.b)(function(e){return{authenticated:e.login.success}},function(e){return{sendLogin:function(t){return e(function(e){return{type:"LOGIN/ATTEMPT",user:e}}(t))},sendRegister:function(t){return e(function(e){return{type:"REGISTER/ATTEMPT",user:e}}(t))}}}))(function(e){var t=e.classes,a=e.sendLogin,i=e.sendRegister,o=e.authenticated,c=Object(n.useState)(""),s=Object(q.a)(c,2),l=s[0],u=s[1],d=Object(n.useState)("tman2272@aol.com"),m=Object(q.a)(d,2),p=m[0],v=m[1],f=Object(n.useState)("password"),b=Object(q.a)(f,2),g=b[0],h=b[1],E=Object(n.useState)(""),O=Object(q.a)(E,2),x=O[0],y=O[1],w=Object(n.useState)("login"),S=Object(q.a)(w,2),j=S[0],T=S[1],N=function(e){T(e.target.innerText.toLowerCase()),u(""),v(""),h(""),y("")},k=r.a.createElement(r.a.Fragment,null,r.a.createElement(G.o,{label:"Email",type:"email",value:p,onChange:function(e){return v(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0}),r.a.createElement(G.o,{label:"Password",value:g,type:"password",onChange:function(e){return h(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0})),C=r.a.createElement(r.a.Fragment,null,r.a.createElement(G.o,{label:"Name",value:l,onChange:function(e){return u(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0}),r.a.createElement(G.o,{label:"Email",type:"email",value:p,onChange:function(e){return v(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0}),r.a.createElement(G.o,{label:"Password",value:g,type:"password",onChange:function(e){return h(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0}),r.a.createElement(G.o,{label:"Repeat Password",value:x,type:"password",onChange:function(e){return y(e.target.value)},margin:"normal",variant:"outlined",className:t.textField,required:!0}));return r.a.createElement(r.a.Fragment,null,o&&r.a.createElement(D.a,{to:"/"}),r.a.createElement(G.d,{open:!0,className:t.root},r.a.createElement("form",null,r.a.createElement(G.e,{className:t.actions},r.a.createElement(G.b,{className:"login"===j?"".concat(t.button," ").concat(t.buttonLeft," ").concat(t.activePanel):"".concat(t.button," ").concat(t.buttonLeft," ").concat(t.inActivePanel),variant:"outlined",onClick:N},"Login"),r.a.createElement(G.b,{className:"register"===j?"".concat(t.button," ").concat(t.buttonRight," ").concat(t.activePanel):"".concat(t.button," ").concat(t.buttonRight," ").concat(t.inActivePanel),variant:"outlined",onClick:N},"Register")),r.a.createElement(G.f,{className:t.content},"login"===j?k:C,r.a.createElement(G.e,null,r.a.createElement(G.b,{variant:"contained",color:"secondary",type:"submit",className:t.submitButton,onClick:function(e){switch(e.preventDefault(),j){case"login":return a({email:p,password:g});case"register":return i({name:l,email:p,password:g});default:return}}},j.toUpperCase()))))))}),W=a(149),X=a.n(W),J=Object(l.withStyles)(function(e){return{appBarSpacer:e.mixins.toolbar,drawerTitle:{fontWeight:700,marginTop:"".concat(4*e.spacing.unit,"px"),paddingLeft:4*e.spacing.unit},icon:{paddingRight:2*e.spacing.unit},libraryList:{color:e.palette.text.secondary,width:240},listItem:{paddingLeft:6*e.spacing.unit},navLink:{color:e.palette.text.primary,textDecoration:"none"},navLinkActive:{color:e.palette.secondary.main}}})(function(e){var t=e.classes;return r.a.createElement(G.g,{variant:"permanent",anchor:"left",PaperProps:{style:{backgroundColor:"#242424"}}},r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(G.q,{color:"textSecondary",variant:"caption",className:t.drawerTitle},"LIBRARIES"),r.a.createElement(G.j,{className:t.libraryList},["Favorites","Movies","TV Shows","Podcasts"].map(function(e,a){return r.a.createElement(c.c,{to:"/".concat(e.toLowerCase().split(" ").join("")),className:t.navLink,activeClassName:t.navLinkActive,key:"link"+a},r.a.createElement(G.k,{button:!0,disableGutters:!0,className:t.listItem},r.a.createElement(X.a,{className:t.icon}),e))})))}),Y=a(151),Z=a.n(Y),K=a(150),Q=a.n(K),$=Object(U.a)(Object(l.withStyles)(function(e){return{appBar:{zIndex:e.zIndex.drawer+1},appBarSpacer:e.mixins.toolbar,pushRight:{marginLeft:"auto"}}}),Object(s.b)(null,function(e){return{logout:function(){return e({type:"AUTH/LOGOUT"})}}}))(function(e){var t=e.classes,a=e.logout,i=Object(n.useState)(null),o=Object(q.a)(i,2),s=o[0],l=o[1],u=Object(n.useState)(!1),d=Object(q.a)(u,2),m=d[0],p=d[1],v=function(){p(!1),l(null)};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(G.a,{className:t.appBar},r.a.createElement(G.p,null,r.a.createElement(c.b,{to:"/"},r.a.createElement(G.i,null,r.a.createElement(Q.a,null))),r.a.createElement("div",{className:t.pushRight},r.a.createElement(G.i,{onClick:function(e){var t=e.target;p(!0),l(t)}},r.a.createElement(Z.a,null)),r.a.createElement(G.l,{anchorEl:s,open:m,onClose:v,PaperProps:{style:{width:200}}},r.a.createElement(G.m,{onClick:function(){v(),a()}},"Log Out"))))))}),ee=a(153),te=a.n(ee),ae=a(152),ne=a.n(ae),re=Object(U.a)(D.f,Object(l.withStyles)(function(e){return{root:{height:"100%",width:"100%",position:"relative",cursor:"pointer"},favoritedIcon:{color:"#ddd"},iconButton:{color:"#999","&:hover":{color:"#fff !important"},zIndex:10},poster:{width:"100%",height:"100%",zIndex:"-10"},overlay:{boxSizing:"border-box",height:"100%",filter:"opacity(0)",position:"absolute",transition:".2s",top:0,width:"100%","&:hover":{background:"#0006",border:"solid 2px ".concat(e.palette.secondary.main),filter:"opacity(1)"}}}}),Object(s.b)(function(e){return{favorites:e.favorites.data,user_id:e.login.data.id}},function(e){return{addFavorite:function(t){return e({type:"FAVORITE/ADD",data:t})},removeFavorite:function(t){return e({type:"FAVORITE/REMOVE",data:t})}}}))(function(e){var t=e.addFavorite,a=e.classes,i=e.history,o=e.movie,c=e.removeFavorite,s=e.user_id,l=e.favorites,u=Object(n.useState)(!1),d=Object(q.a)(u,2),m=d[0],p=d[1];Object(n.useEffect)(function(){return l.find(function(e){return o.id===e.movie_id})?p(!0):p(!1)},[l,o.id]);return r.a.createElement(G.c,{className:a.root,onClick:function(e){"overlay"===e.target.id&&i.push("/movies/"+o.id)}},r.a.createElement("img",{className:a.poster,src:"http://image.tmdb.org/t/p/w400"+o.poster_path,alt:o.title}),r.a.createElement("div",{className:a.overlay,id:"overlay"},r.a.createElement(G.i,{onClick:function(){switch(m){case!0:c({movie_id:o.id,user_id:s}),p(function(e){return!e});break;case!1:t({movie_id:o.id,user_id:s,title:o.title,poster_path:o.poster_path,release_date:o.release_date,vote_average:o.vote_average,overview:o.overview}),p(function(e){return!e});break;default:return}},className:a.iconButton},m?r.a.createElement(ne.a,{className:a.favoritedIcon}):r.a.createElement(te.a,null))))}),ie=a(154),oe=a.n(ie),ce=a(155),se=a.n(ce),le=Object(U.a)(Object(l.withStyles)(function(e){return{appBar:{position:"fixed",top:64,zIndex:e.zIndex.drawer-1},appBarSpacer:e.mixins.toolbar,comfyIcon:{padding:"0 ".concat(2*e.spacing.unit,"px")},drawerSpacer:{width:241},slider:{width:50},sliderContainer:{alignItems:"center",display:"flex",marginLeft:"auto"},track:{backgroundColor:e.palette.text.primary},thumb:{backgroundColor:e.palette.text.primary},toolbar:{backgroundColor:e.palette.primary.subheader}}}),Object(s.b)(function(e){return{slider:e.poster.size}},function(e){return{setSlider:function(t){return e(function(e){return{type:"POSTER/SETSIZE",size:e}}(t))}}}),D.f)(function(e){var t=e.classes,a=e.location,n=e.slider,i=e.setSlider;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.appBarSpacer}),r.a.createElement(G.a,{className:t.appBar},r.a.createElement(G.p,{className:t.toolbar},r.a.createElement("div",{className:t.drawerSpacer}),r.a.createElement(G.q,{variant:"h5",color:"secondary"},"My ",function(){var e=a.pathname.split("/").find(function(e){return["movies","tvshows","podcasts","favorites"].includes(e.toLowerCase())});try{return"tvshows"===e?"TV Shows":e[0].toUpperCase()+e.slice(1).toLowerCase()}catch(t){return""}}()),r.a.createElement("div",{className:t.sliderContainer},r.a.createElement("div",{className:t.slider},r.a.createElement(oe.a,{min:1,max:4,step:1,value:n,onChange:function(e,t){return i(t)},classes:{thumb:t.thumb,track:t.track}})),r.a.createElement(se.a,{className:t.comfyIcon})))))}),ue=Object(l.withStyles)(function(e){return{root:{background:e.palette.background.paper,minHeight:"100vh"},body:{display:"grid",gridTemplateColumns:"241px 1fr"}}})(function(e){var t=e.classes,a=e.children;return r.a.createElement("div",{className:t.root},r.a.createElement($,null),r.a.createElement(le,null),r.a.createElement("div",{className:t.body},r.a.createElement(J,null),a))}),de=Object(U.a)(Object(l.withStyles)(function(e){return{paper:{padding:4*e.spacing.unit}}}),Object(s.b)(function(e){var t=e.favorites,a=e.movies,n=e.poster;return{favorites:t.data,movies:a.results,posterSize:n.size}},function(e){return{fetchMovies:function(){return e({type:"MOVIES/FETCH"})}}}))(function(e){var t=e.classes,a=e.fetchMovies,i=e.movies,o=e.favorites,c=e.posterSize;return Object(n.useEffect)(function(){a()},[a]),r.a.createElement("div",{className:t.paper},o.length?r.a.createElement(G.h,{container:!0,spacing:32},o.map(function(e){var t=i.find(function(t){return t.id===e.movie_id});return r.a.createElement(G.h,{item:!0,xs:c,key:"fav"+t.id},r.a.createElement(re,{movie:t}))})):r.a.createElement(G.q,{variant:"h5"},"Uh oh! There's nothing here. Favorite content in your library to see it here"))}),me=Object(U.a)(Object(l.withStyles)(function(e){return{paper:{padding:4*e.spacing.unit}}}),Object(s.b)(function(e){return{movies:e.movies,posterSize:e.poster.size}},function(e){return{fetchMovies:function(){return e({type:"MOVIES/FETCH"})}}}))(function(e){var t=e.classes,a=e.fetchMovies,i=e.movies,o=e.posterSize;return Object(n.useEffect)(function(){a()},[a]),r.a.createElement(G.n,{square:!0,className:t.paper},r.a.createElement(G.h,{container:!0,spacing:32},i&&i.results&&i.results.map(function(e){return r.a.createElement(G.h,{item:!0,xs:o,key:e.id},r.a.createElement(re,{movie:e}))})))}),pe=a(156),ve=a.n(pe),fe=a(158),be=a.n(fe),ge=a(157),he=a.n(ge),Ee=Object(U.a)(Object(l.withStyles)(function(e){return{root:{overflowY:"visible",minWidth:920},backdropImage:{width:"100%"},backIcon:{border:"solid 3px #fff",left:6*e.spacing.unit,position:"fixed",top:4*e.spacing.unit+48,zIndex:999999999},dialogContainer:{alignItems:"flex-end"},dialogContent:{height:350,padding:0,position:"relative"},dialogContentFilter:{background:"#000",filter:"opacity(.45)",height:"100%",left:0,position:"absolute",top:0,width:"100%"},dialogPaper:{overflowY:"visible"},dialogPosterContainer:{boxSizing:"border-box",boxShadow:"0px 5px 5px 0px rgb(255, 255, 255, .1)",bottom:10*e.spacing.unit,height:450,position:"absolute",right:10*e.spacing.unit,width:300},dialogText:{background:"#000a",borderRadius:4,maxHeight:450-28*e.spacing.unit,overflow:"scroll",padding:4*e.spacing.unit},dialogTextContentContainer:{boxSizing:"border-box",display:"grid",gridTemplateColumns:"1fr ".concat(300+10*e.spacing.unit,"px"),height:"100%",left:0,padding:"".concat(6*e.spacing.unit,"px ").concat(10*e.spacing.unit,"px"),position:"absolute",top:0},movieOverview:{paddingTop:3*e.spacing.unit,textShadow:"#000 0px 0px 4px"},movieSubheader:{alignItems:"flex-end",display:"flex"},poster:{height:"100%",width:"100%"},ratingContainer:{marginRight:e.spacing.unit,position:"relative",width:175},ratingMask:{display:"flex",left:0,position:"absolute",top:0,overflow:"hidden"},ratingIcon:{color:"#fff"},ratingBackgroundIcon:{color:"#999"}}}),Object(s.b)(function(e){return{movies:e.movies.results}}))(function(e){var t=e.classes,a=e.history,i=e.movies,o=e.match.params.movie_id,c=Object(n.useState)(!0),s=Object(q.a)(c,2),l=s[0],u=s[1],d=Object(n.useState)({vote_count:0,id:null,video:null,vote_average:0,title:"",popularity:0,poster_path:"",original_language:null,original_title:"",genre_ids:[],backdrop_path:"",adult:null,overview:"",release_date:""}),m=Object(q.a)(d,2),p=m[0],v=m[1],f=function(){u(!1),a.goBack()};return Object(n.useEffect)(function(){i&&v(i.find(function(e){return e.id===Number(o)}))},[i,o]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G.i,{className:t.backIcon,onClick:f},r.a.createElement(ve.a,null)),r.a.createElement(G.d,{className:t.root,open:l,fullWidth:!0,maxWidth:"xl",onClose:f,PaperProps:{classes:{root:t.dialogPaper}},classes:{container:t.dialogContainer}},r.a.createElement(G.f,{className:t.dialogContent,style:{backgroundImage:"url(".concat("http://image.tmdb.org/t/p/w1280"+p.backdrop_path,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat"}}),r.a.createElement("div",{className:t.dialogContentFilter}),r.a.createElement(G.n,{className:t.dialogPosterContainer},r.a.createElement("img",{className:t.poster,src:"http://image.tmdb.org/t/p/w500"+p.poster_path,alt:p.title})),r.a.createElement("div",{className:t.dialogTextContentContainer},r.a.createElement("div",{className:t.dialogText},r.a.createElement(G.q,{variant:"h4"},p.title),r.a.createElement("div",{className:t.movieSubheader},r.a.createElement("span",{className:t.ratingContainer},[0,1,2,3,4].map(function(e,a){return r.a.createElement(he.a,{key:"filled"+a,fontSize:"large",className:t.ratingBackgroundIcon})}),r.a.createElement("span",{className:t.ratingMask,style:{width:"calc(175px * ".concat(p.vote_average/10," ")}},[0,1,2,3,4].map(function(e,a){return r.a.createElement(be.a,{key:"filled"+a,fontSize:"large",className:t.ratingIcon})}))),r.a.createElement("div",null,r.a.createElement(G.q,{inline:!0,variant:"subtitle1"},p.release_date+" "),r.a.createElement(G.q,{inline:!0},p.original_language&&"(".concat(p.original_language,")")))),r.a.createElement(G.q,{variant:"subtitle1",className:t.movieOverview},p.overview)),r.a.createElement("div",null))))}),Oe=function(){return r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/movies/:movie_id",component:Ee}),r.a.createElement(D.b,{path:"/movies",component:me}),r.a.createElement(D.a,{to:"/movies"}))},xe=Object(l.withStyles)(function(e){return{root:{padding:4*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(G.q,{variant:"h5"},"Uh oh! There's nothing here. Add content to your library to see it here"))}),ye=Object(l.withStyles)(function(e){return{root:{padding:4*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(G.q,{variant:"h5"},"Uh oh! There's nothing here. Add content to your library to see it here"))}),we=Object(s.b)(function(e){return{authenticated:e.login.success}})(function(e){return e.authenticated?r.a.createElement(ue,null,r.a.createElement(D.d,null,r.a.createElement(D.b,{path:"/movies",component:Oe}),r.a.createElement(D.b,{path:"/favorites",component:de}),r.a.createElement(D.b,{path:"/podcasts",component:xe}),r.a.createElement(D.b,{path:"/tvshows",component:ye}),r.a.createElement(D.a,{to:"/movies"}))):r.a.createElement(ue,null,r.a.createElement(H,null),r.a.createElement(Oe,null))});a(367);o.a.render(r.a.createElement(s.a,{store:V},r.a.createElement(c.a,{basename:"/movie-tracker-frontend"},r.a.createElement(l.MuiThemeProvider,{theme:u},r.a.createElement(we,null)))),document.getElementById("root"))}},[[229,1,2]]]);
//# sourceMappingURL=main.5923a06b.chunk.js.map