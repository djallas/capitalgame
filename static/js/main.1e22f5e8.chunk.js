(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){var n=t(52);e.exports={game:{names:[],countries:[{name:"Algeria",capital:"Algiers"},{name:"Angola",capital:"Luanda"},{name:"Benin",capital:"Porto Novo"},{name:"Botswana",capital:"Gaborone"},{name:"Burkina Faso",capital:"Ouagadougou"},{name:"Burundi",capital:"Gitega"},{name:"Cameroon",capital:"Yaounde"},{name:"Cape Verde",capital:"Praia"},{name:"Central African Republic",capital:"Bangui"},{name:"Chad",capital:"N'Djamena"},{name:"Democratic Republic of the Congo",capital:"Kinshasa"},{name:"Djibouti",capital:"Djibouti"},{name:"Egypt",capital:"Cairo"},{name:"Equatorial Guinea",capital:"Malabo"},{name:"Eritrea",capital:"Asmara"},{name:"Ethiopia",capital:"Addis Ababa"},{name:"Gabon",capital:"Libreville"},{name:"Gambia",capital:"Banjul"},{name:"Ghana",capital:"Accra"},{name:"Guinea Bissau",capital:"Bissau"},{name:"Guinea",capital:"Conakry"},{name:"Ivory Coast",capital:""},{name:"Kenya",capital:"Nairobi"},{name:"Lesotho",capital:"Maseru"},{name:"Liberia",capital:"Monrovia"},{name:"Libya",capital:"Tripoli"},{name:"Madagascar",capital:"Antananarivo"},{name:"Malawi",capital:"Lilongwe"},{name:"Mali",capital:"Bamako"},{name:"Mauritania",capital:"Nouakchott"},{name:"Mauritius",capital:"Port Louis"},{name:"Morocco",capital:"Rabat"},{name:"Mozambique",capital:"Maputo"},{name:"Namibia",capital:"Windhoek"},{name:"Niger",capital:"Niamey"},{name:"Nigeria",capital:"Abuja"},{name:"Republic of the Congo",capital:"Kinshasa"},{name:"Rwanda",capital:"Kigali"},{name:"Senegal",capital:"Dakar"},{name:"Seychelles",capital:"Victoria"},{name:"Sierra Leone",capital:"Freetown"},{name:"Sao Tome and Principe",capital:"S\xe3o Tom\xe9"},{name:"Somalia",capital:"Mogadishu"},{name:"South Africa",capital:"Pretoria"},{name:"South Sudan",capital:"Juba"},{name:"North Sudan",capital:"Khartoum"},{name:"Eswatini",capital:"Mbabane"},{name:"Tanzania",capital:"Dodoma"},{name:"Togo",capital:"Lom\xe9"},{name:"Tunisia",capital:"Tunis"},{name:"Uganda",capital:"Kampala"},{name:"Western Sahara",capital:""},{name:"Zambia",capital:"Lusaka"},{name:"Zimbabwe",capital:"Harare"}],answer:{},attempts:[]},user:{profile:n()||{},isAuth:n()&&!0}}},19:function(e,a,t){},30:function(e,a,t){e.exports=t.p+"static/media/ninjas.6bbee876.jpg"},31:function(e,a,t){e.exports=t.p+"static/media/profile_plaholder.4788048f.png"},32:function(e,a,t){e.exports=t.p+"static/media/celebration.9bb48ce6.gif"},33:function(e,a,t){e.exports=t.p+"static/media/nope.dd8aac9c.gif"},38:function(e,a,t){e.exports=t(53)},47:function(e,a,t){},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},52:function(e,a){e.exports=function(){var e=document.cookie?decodeURIComponent(document.cookie):"",a=e.search("user=")>=0&&e.split("user=")[1];return a?JSON.parse(a).user:null}},53:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"GET_PROFILE",function(){return N});var r={};t.r(r),t.d(r,"SUBMIT_NAME",function(){return y}),t.d(r,"SUBMIT_ANSWER",function(){return O}),t.d(r,"REMOVE_NAME",function(){return j});var i={};t.r(i),t.d(i,"get",function(){return A}),t.d(i,"submit",function(){return M}),t.d(i,"remove",function(){return S}),t.d(i,"submitAnswer",function(){return k});var c=t(0),o=t.n(c),l=t(20),u=t.n(l),s=t(7),m=(t(47),t(24)),p=t(14),d=t(9),h=t(10),g=t(12),b=t(11),f=t(13),E=t(30),v=t.n(E),w=(t(48),t(19),function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.isAuth;return o.a.createElement("div",{className:"container App"},o.a.createElement("div",{className:"container shadow-2 radius-3"},o.a.createElement("div",{className:"center"},o.a.createElement("h1",{className:"primary text-white radius-2 uppercase large-padding center-align"},"Capital City Challenge"),o.a.createElement("div",{className:"large-padding"},o.a.createElement("img",{src:v.a,className:"App-logo",alt:"logo"}),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("a",{className:"radius-4 button primary radius-5 text-white large-h-padding large-text",href:"/game"},e?"Click here to play The Game":"Login to play"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("div",{className:e?"hide":""},o.a.createElement("br",null),o.a.createElement("a",{className:"social-login radius-4 button danger radius-5 text-white large-h-padding large-text",href:"http://localhost:3000/api/v1/auth/google"},"Google"),o.a.createElement("a",{className:"social-login radius-4 button info radius-5 text-white large-h-padding large-text",href:"http://localhost:3000/api/v1/auth/twitter"},"Twitter"),o.a.createElement("a",{className:"social-login radius-4 button primary radius-5 text-white large-h-padding large-text",href:"http://localhost:3000/api/v1/auth/facebook"},"Facebook"),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("br",null))))))}}]),a}(o.a.Component)),N=(t(49),"GET_PROFILE"),y="SUBMIT_NAME",O="SUBMIT_ANSWER",j="REMOVE_NAME",A=function(e){return{type:r.SUBMIT_NAME,payload:e}},M=function(e){return function(a){return a(A(e))}},S=function(e){return{type:r.REMOVE_NAME,payload:e}},k=function(e){return{type:r.SUBMIT_ANSWER,payload:e}},x=t(31),C=t.n(x),L=(t(50),function(){return(document.cookie?decodeURIComponent(document.cookie):"").search("user=")>=0&&!0&&(document.cookie="user=",window.location.replace("/")),!1}),T=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"card center-align"},o.a.createElement("button",{type:"button",className:"radius-4 button danger radius-5 text-white large-h-padding shadow-3 large-text",onClick:L},"Logout")))}}]),a}(c.Component),B=function(e){function a(){return Object(d.a)(this,a),Object(g.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.profile;return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row shadow-3 radius-4 "},o.a.createElement("div",{className:"grabProfileImage center"},o.a.createElement("img",{src:e.image||C.a,className:"center shadow-4",alt:"Profile"})),o.a.createElement("div",{className:"card no-margin center-align"},o.a.createElement("div",{className:"text-info large-text"},"Hello,",o.a.createElement("br",null)," ")," ",o.a.createElement("h1",{className:"no-margin"},e.firstName," ",e.lastName)),o.a.createElement("div",{className:"clear"}),o.a.createElement(T,null)))}}]),a}(c.Component),R=function(e){var a=Math.ceil(Math.random()*(e.length-1));return{question:"What is the capital of ".concat(e[a].name," ?"),country:e[a].name}},I=t(32),_=t.n(I),G=t(33),P=t.n(G),U=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(r)))).changeQuestion=function(e){e.preventDefault();var a=t.props.countries,n=R(a),r=n.question,i=n.country;return document.querySelector("#question").innerHTML=r,document.querySelector("#country").innerHTML=i,r},t.checkAnswer=function(e){for(var a=e.country,n=e.answer,r=t.props.countries,i="",c=P.a,o=0;o<r.length;o+=1){if(r[o].name.toLowerCase()===a.toLowerCase()&&r[o].capital.toLowerCase()===n.toLowerCase()){c=_.a,i="Congratulation";break}if(r[o].name.toLowerCase()===a.toLowerCase()){i='Sorry, the capital of "'.concat(r[o].name,'" is "').concat(r[o].capital,'"');break}}return{message:i,image:c}},t.handleSubmit=function(e){return e.preventDefault(),(0,t.props.submitAnswer)({answer:e.target.answer.value,country:document.querySelector("#country").innerHTML}),e.target.answer.value="",!1},t}return Object(f.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props,a=e.profile,t=e.countries,n=e.answer,r=R(t),i=Object.keys(n).length?this.checkAnswer(n):null;return o.a.createElement("div",{className:"container"},o.a.createElement(B,{profile:a}),o.a.createElement("div",{className:"container shadow-2 radius-3"},o.a.createElement("div",{className:"center"},o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{id:"question",className:"primary card radius-3 bold large-text text-white center-align"},r.question),o.a.createElement("div",{id:"country",className:"hide"},r.country),o.a.createElement("div",{className:"radius-2 input-field"},o.a.createElement("div",{className:"card"},o.a.createElement("input",{type:"text",placeholder:"Enter your answer",name:"answer",id:"name",autoComplete:"off",className:"shadow-4 radius-2 medium-padding card medium-text large-screen-3"})),o.a.createElement("br",null),o.a.createElement("div",{className:"card"},o.a.createElement("button",{type:"submit",className:"submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"},"Answer"),o.a.createElement("button",{onClick:this.changeQuestion,className:"submit radius-4 button radius-5 primary text-white center-align large-h-padding large-text"},"Skip")))),o.a.createElement("div",{className:"grey container shadow-2 radius-3"},i?o.a.createElement("div",{className:"white card radius-2 small-padding center-align"},o.a.createElement("h3",null,i.message),o.a.createElement("img",{src:i.image,alt:""})):""))))}}]),a}(c.Component),q=Object(s.b)(function(e){return{names:e.game.names,profile:e.user.profile,countries:e.game.countries,answer:e.game.answer}},function(e){return{submitName:function(a){return e(i.submit(a))},removeName:function(a){return e(i.remove(a))},submitAnswer:function(a){return e(i.submitAnswer(a))}}})(U),W=function(e){var a=e.isAuth;return o.a.createElement(p.c,null,o.a.createElement(p.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(w,Object.assign({},e,{isAuth:a}))}}),o.a.createElement(p.a,{exact:!0,path:"/home",render:function(e){return o.a.createElement(w,Object.assign({},e,{isAuth:a}))}}),o.a.createElement(p.a,{exact:!0,path:"/game",render:function(e){return a?o.a.createElement(q,e):o.a.createElement(w,null)}}))};W.defaultProps={isAuth:!1};var D=Object(s.b)(function(e){return{isAuth:e.user.isAuth}})(W);var F=function(){return o.a.createElement(m.a,null,o.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=t(8),V=t(35),H=t(36),J=t(15),z=t.n(J),Q=t(17),Z=t(37),Y=Object(K.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.game,a=arguments.length>1?arguments[1]:void 0,t=a.type,r=a.payload;switch(t){case n.GET_PROFILE:return Object(Q.a)({},e,{profile:r});default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J.game,a=arguments.length>1?arguments[1]:void 0,t=a.type,n=a.payload;switch(t){case r.SUBMIT_NAME:return Object(Q.a)({},e,{names:[].concat(Object(Z.a)(e.names),[n])});case r.REMOVE_NAME:return Object(Q.a)({},e,{names:e.names.filter(function(e,a){return a!==parseInt(n,10)})});case r.SUBMIT_ANSWER:return Object(Q.a)({},e,{answer:{country:n.country,answer:n.answer}});default:return e}}}),$=Object(K.createStore)(Y,z.a,Object(H.composeWithDevTools)(Object(K.applyMiddleware)(V.a)));u.a.render(o.a.createElement(s.a,{store:$},o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.1e22f5e8.chunk.js.map