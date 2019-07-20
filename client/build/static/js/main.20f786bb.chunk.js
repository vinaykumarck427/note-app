(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,t,a){e.exports=a(77)},77:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),l=a(1),s=a(2),i=a(5),u=a(3),m=a(4),h=a(39),d=a.n(h),p=a(7),g=a(6),b=a(17),f=a(41),E=a.n(f).a.create({baseURL:"http://localhost:3006"}),y=function(e){return{type:"SET_CATEGORIES",payload:e}},v=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.get("/categories",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.props.dispatch(y(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Listing Category - ",this.props.categories.length),o.a.createElement("ul",null,this.props.categories.map(function(e){return o.a.createElement("li",{key:e._id},o.a.createElement(g.b,{to:"/categories/".concat(e._id)},e.name))})),o.a.createElement(g.b,{className:"Link",to:"/categories/new"},"Add Category"),o.a.createElement("pre",null,o.a.createElement(g.b,{to:"/notes/new"},"Back")))}}]),t}(o.a.Component),O=Object(p.b)(function(e){return{categories:e.categories}})(v),j=a(10),S=a(12),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleSelect=function(e){var t=e.target.value;a.setState(function(){return{category:t}})},a.handleSelectedTag=function(e){a.setState(function(t){return{selectedTags:[].concat(Object(S.a)(t.selectedTags),[e])}})},a.state={title:"",body:"",category:"",selectedTags:[]},a.handleTitle=a.handleTitle.bind(Object(j.a)(a)),a.handleBody=a.handleBody.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleTitle",value:function(e){var t=e.target.value;this.setState(function(){return{title:t}})}},{key:"handleBody",value:function(e){var t=e.target.value;this.setState(function(){return{body:t}})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.selectedTags.map(function(e){return{tag:e._id}}),a={title:this.state.title,body:this.state.body,category:this.state.category,tags:t};this.props.handleSubmit(a)}},{key:"componentDidMount",value:function(){var e=this;E.get("/categories",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.props.dispatch(y(t.data))}).catch(function(e){console.log(e)}),E.get("/tags",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.props.dispatch({type:"SET_TAGS",payload:t.data})}).catch(function(e){console.log(e)})}},{key:"componentWillReceiveProps",value:function(e){console.log(e.title),console.log(e.body),console.log(e.category),e&&this.setState(function(){return{title:e.title,body:e.body,category:e.category}})}},{key:"render",value:function(){var e=this;return console.log(this.props),o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.handleSubmit,className:"form-row"},o.a.createElement("div",{className:"form-group row"},o.a.createElement("label",{className:"col-sm-2 col-form-label",htmlFor:"inputSelectCategory"},"category:"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("select",{className:"form-control form-control-sm col-sm-3 selectpicker",id:"inputSelectCategory",value:this.state.category,name:"category",onChange:this.handleSelect},o.a.createElement("option",{value:""},"select"),this.state.categories.map(function(e){return o.a.createElement("option",{key:e._id,value:e._id},e.name)}))),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"inputTitle",className:"col-sm-2 col-form-label"},"Title:"," "),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("input",{className:"form-control form-control-sm col-sm-3",id:"inputTitle",type:"text",value:this.state.title,onChange:this.handleTitle})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"inputBody",className:"col-sm-2 col-form-label"},"Body:"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement("input",{className:"form-control form-control-sm col-sm-3",id:"inputBody",type:"text",value:this.state.body,onChange:this.handleBody})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("lable",{htmlFor:"tag",className:"col-sm-2 col-form-label"},"tags:"),o.a.createElement("br",null),o.a.createElement("div",{className:"col-sm-10"},this.props.tags.map(function(t){return o.a.createElement("div",{key:t._id},o.a.createElement("input",{className:"form-check-input",id:"tag",type:"checkbox",value:t.name,onClick:function(){e.handleSelectedTag(t)}})," ",o.a.createElement("label",{className:"form-check-label"},t.name),o.a.createElement("br",null))})),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"SUBMIT",className:"w3-ripple btn btn-primary"}))))}}]),t}(o.a.Component),T=Object(p.b)(function(e){return{categories:e.categories,tags:e.tags}})(k),w=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selectedTags:[]},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.get("/notes/".concat(t),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){console.log(t.data),e.props.dispatch({type:"SET_NOTE",payload:t.data})}).catch(function(e){console.log(e)})}},{key:"handleSubmit",value:function(e){var t=this;console.log(localStorage.getItem("userAuthToken")),E.put("/notes/".concat(this.props.note._id),e,{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){e.data.hasOwnProperty("errors")?console.log(e.data.errors):t.props.history.push("/notes/".concat(t.props.match.params.id))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){console.log(this.props.note);var e=this.props.note.title,t=this.props.note.body,a=this.props.note.category.name;return o.a.createElement("div",null,o.a.createElement("h2",null,"Edit the Note"),o.a.createElement(T,{title:e,body:t,category:a,handleSubmit:this.handleSubmit}),o.a.createElement(g.b,{className:"Link",to:"/notes/".concat(this.props.match.params.id)},"Back"))}}]),t}(o.a.Component),C=Object(p.b)(function(e){return{note:e.note}})(w),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState(function(){return{name:t}})},a.handleSubmit=function(e){e.preventDefault();var t={name:a.state.name};a.props.handleSubmit(t)},a.state={name:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){Object.keys(e)>0&&this.setState(function(){return{name:e.category.name}})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",null,"Name:",o.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange})),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit",onClick:this.handleSubmit})),o.a.createElement(g.b,{className:"Link",to:"/notes/new"},"Back"))}}]),t}(o.a.Component),A=function(e){return{type:"SET_CATEGORY",payload:e}},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){E.put("/categories/".concat(a.props.category._id),e,{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){e.data.hasOwnProperty("errors")?console.log(e.data.errors):a.props.history.push("/categories/".concat(a.props.match.params.id))}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.get("/categories/".concat(t),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.props.dispatch(A(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Edit this Category"),o.a.createElement(N,{category:this.props.category,handleSubmit:this.handleSubmit}))}}]),t}(o.a.Component),_=Object(p.b)(function(e){return{category:e.category}})(x),I=function(e){return{type:"SET_NOTE",payload:e}},P=function(e){return{type:"SET_NOTES",payload:e}},R=function(e){return{type:"REMOVE_NOTE",payload:e}},L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handlePin=function(e){E.put("/notes/".concat(e),{isPinned:!0},{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){var t=a.props.notes.map(function(t){return t._id===e.data._id?(t.isPinned=e.data.isPinned,t):t});a.props.dispatch(P(t))}).catch(function(e){console.log(e)})},a.handleUnPin=function(e){E.put("/notes/".concat(e),{isPinned:!1},{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){var t=a.props.notes.map(function(t){return t._id===e.data._id?(t.isPinned=e.data.isPinned,t):t});a.props.dispatch(P(t))}).catch(function(e){console.log(e)})},a.handleCopy=function(e){var t;e&&(t={title:e.title,body:e.body,category:e.category,tags:e.tags.map(function(e){return{tag:e.tag}}),isPinned:e.isPinned}),E.post("/notes",t,{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){a.props.dispatch(I(e.data))}).catch(function(e){console.log(e)})},a.handleDelete=function(e){E.delete("/notes/".concat(e),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){a.props.dispatch(R(e.data._id))}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.get("/notes",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.props.dispatch(P(t.data))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;console.log(this.props.notes);var t=this.props.notes.filter(function(e){return!0===e.isPinned}),a=this.props.notes.filter(function(e){return!1===e.isPinned});return o.a.createElement("div",null,0!==this.props.notes.length&&o.a.createElement("h1",null,"Listing notes   - ",this.props.notes.length),0!==t.length&&o.a.createElement("span",null,o.a.createElement("h2",null,"pinned list")),o.a.createElement("ul",null,t.map(function(t){return o.a.createElement("li",{key:t._id},o.a.createElement(g.b,{to:"/notes/".concat(t._id)},t.title),o.a.createElement("button",{onClick:function(){e.handleUnPin(t._id)}},"Unpin"),o.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&e.handleDelete(t._id)}},"delete"),o.a.createElement("button",{onClick:function(){e.handleCopy(t)}},"copy"))})),0!==a.length&&o.a.createElement("span",null,o.a.createElement("h2",null,"unpinned list")),o.a.createElement("ul",null,a.map(function(t){return o.a.createElement("li",{key:t._id},o.a.createElement(g.b,{to:"/notes/".concat(t._id)},t.title),o.a.createElement("button",{onClick:function(){e.handlePin(t._id)}},"pin"),o.a.createElement("button",{onClick:function(){window.confirm("Are you sure?")&&e.handleDelete(t._id)}},"delete"),o.a.createElement("button",{onClick:function(){e.handleCopy(t)}},"copy"))})),o.a.createElement(g.b,{className:"Link",to:"/notes/new"},"Add Note"))}}]),t}(o.a.Component),D=Object(p.b)(function(e){return{notes:e.notes}})(L),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={error:{}},a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=this;E.post("/notes",e,{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){e.data.hasOwnProperty("error")?t.setState(function(){return{error:e.data}}):t.props.history.push("/notes")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",{className:"h2"}," Add new note"),o.a.createElement(T,{handleSubmit:this.handleSubmit}),o.a.createElement(g.b,{className:"Link",to:"/notes"},"Back"),o.a.createElement(g.b,{to:"/categories/new"},"AddCategory"))}}]),t}(o.a.Component),M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleSubmit=function(e){E.post("/categories",e,{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){e.data.hasOwnProperty("errors")?console.log(e.data.errors):a.props.history.push("/categories")}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Add New Category"),o.a.createElement(N,{handleSubmit:this.handleSubmit}))}}]),t}(o.a.Component),U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleRemoveTag=function(e){console.log(e);var t=a.props.match.params.id;E.delete("/notes/removeTag?noteId=".concat(t,"&tagId=").concat(e),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){console.log(e.data),a.setState(function(){return{note:e.data}})}).catch(function(e){console.log(e)})},a.state={note:{}},a.handleRemove=a.handleRemove.bind(Object(j.a)(a)),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;E.get("/notes/".concat(t),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.setState(function(){return{note:t.data}})})}},{key:"handleRemove",value:function(e){var t=this,a=this.props.match.params.id;window.confirm("Are you sure?")&&E.delete("/notes/".concat(a),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(){t.props.history.push("/notes")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,this.state.note.title&&o.a.createElement("h2",null,this.state.note.title),this.state.note.body&&o.a.createElement("p",null,this.state.note.body),this.state.note.category&&o.a.createElement("p",null,"category-",o.a.createElement(g.b,{to:"/categories/".concat(this.state.note.category._id)},this.state.note.category.name)),this.state.note.tags&&o.a.createElement("pre",null,"tags -",o.a.createElement("ul",null,this.state.note.tags.map(function(t){return o.a.createElement("li",{key:t._id},o.a.createElement("span",null,t.tag.name,o.a.createElement("button",{onClick:function(){e.handleRemoveTag(t._id)}},"X")))}))),o.a.createElement("div",null,o.a.createElement(g.b,{className:"Link",to:"/notes/edit/".concat(this.props.match.params.id)},"Edit"),o.a.createElement("button",{onClick:this.handleRemove},"Delete"),o.a.createElement("br",null)),o.a.createElement("br",null),o.a.createElement("pre",null,o.a.createElement(g.b,{to:"/notes"},"Back")))}}]),t}(o.a.Component),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleRemove=function(){var e=a.props.match.params.id;E.delete("/categories/".concat(e),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){window.confirm("Are you Sure?")&&a.props.history.push("/categories")}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log(t),E.get("/categories/".concat(t),{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){e.dispatch(A(t.data)),e.despatch(P(t.data.notes))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,this.props.category.name),o.a.createElement("ul",null," ",o.a.createElement("b",null,"notes")," -"," ",this.props.notes.map(function(e){return e.note&&o.a.createElement("li",{key:e._id},o.a.createElement("span",null,o.a.createElement("p",null,e.note.title),o.a.createElement("p",null,e.note.body)))})),o.a.createElement(g.b,{className:"Link",to:"/notes"},"Back"),o.a.createElement(g.b,{className:"Link",to:"/categories/edit/".concat(this.props.match.params.id)},"Edit"),o.a.createElement("button",{onClick:this.handleRemove},"Delete"))}}]),t}(o.a.Component),G=Object(p.b)(function(e){return{notes:e.notes,category:e.category}})(F),H=function(e){return{type:"SET_USER",payload:e}},J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.get("/users/account",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){var a=t.data;e.props.dispatch(H(a)),e.props.history.push("/notes")}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"User Profile - ",this.props.user.username))}}]),t}(o.a.Component),V=Object(p.b)(function(e){return{user:e.user}})(J),W=a(19),Y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){var a=(t.target.type,t.target.value),n=t.target.name;e.setState(function(){return Object(W.a)({},n,a)})},e.handleSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};e.props.handleLogin(a)},e.state={email:"",password:""},e}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Login of user"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputEmail"},"Email"),o.a.createElement("div",null,o.a.createElement("input",{type:"email",className:"form-control col-sm-3",placeholder:"Email",name:"email",value:this.state.email,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Please don't Enter incorrect Email."))),o.a.createElement("br",null),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputPassword"},"Password"),o.a.createElement("div",null,o.a.createElement("input",{type:"password",className:"form-control col-sm-3",name:"password",placeholder:"password",value:this.state.password,onChange:this.handleChange}),o.a.createElement("br",null)),o.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"},"Please don't Enter incorrect Password.")),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}}]),t}(o.a.Component),z=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleLogin=function(e){E.post("/users/login",e).then(function(e){if(console.log(e.data),e.data.errors)alert(e.data.errors);else{var t=e.data.token;localStorage.setItem("userAuthToken",t),a.props.history.push("/users/account")}}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(Y,{handleLogin:this.handleLogin}))}}]),t}(o.a.Component),X=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.delete("/users/logout",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){localStorage.removeItem("userAuthToken"),console.log(e.props),e.props.dispatch({type:"RESET_USER"}),e.props.history.push("/users/login")})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h3",null,"Log out...."))}}]),t}(o.a.Component),q=Object(p.b)(function(e){return{user:e.user}})(X),K=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=(e.target.type,e.target.value),n=e.target.name;a.setState(function(){return Object(W.a)({},n,t)})},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.name,email:a.state.email,password:a.state.password};a.props.handleRegister(t)},a.state={name:"",email:"",password:""},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"User Registration"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputText"},"Username"),o.a.createElement("input",{type:"text",placeholder:"Enter user name",className:"form-control col-sm-3",name:"name",value:this.state.name,onChange:this.handleChange})),o.a.createElement("br",null),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputEmail"},"Email"),o.a.createElement("input",{type:"email",placeholder:"Enter email",className:"form-control col-sm-3",name:"email",value:this.state.email,onChange:this.handleChange})),o.a.createElement("br",null),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"inputPassword"},"Password"),o.a.createElement("input",{type:"password",placeholder:"Enter password",className:"form-control col-sm-3",name:"password",value:this.state.Password,onChange:this.handleChange}),o.a.createElement("br",null)),o.a.createElement("input",{type:"submit",value:"Submit",className:"btn btn-primary"})))}}]),t}(o.a.Component),Q=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleRegister=function(e){E.post("/users/register",e).then(function(e){e.data.errors?alert(e.data.message):(console.log(e.data),a.props.history.push("/users/login"))}).catch(function(e){console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(K,{handleRegister:this.handleRegister}))}}]),t}(o.a.Component),Z=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"list-group list-group-horizontal-xl"},d.a.isEmpty(localStorage.getItem("userAuthToken"))?o.a.createElement("div",null,o.a.createElement("li",{className:"list-group-item"},o.a.createElement(g.b,{to:"/users/register"},"Register")),o.a.createElement("li",{className:"list-group-item"},o.a.createElement(g.b,{to:"/users/login"},"Login"))):o.a.createElement("div",null,o.a.createElement("li",{className:"list-group-item"},o.a.createElement(g.b,{to:"/users/account"},"Account")),o.a.createElement("li",{className:"list-group-item"},o.a.createElement(g.b,{to:"/users/logout"},"Logout")))),o.a.createElement(b.c,null,o.a.createElement(b.a,{path:"/users/register",component:Q,exact:!0}),o.a.createElement(b.a,{path:"/users/login",component:z}),o.a.createElement(b.a,{path:"/users/account",component:V,exact:!0}),o.a.createElement(b.a,{path:"/users/logout",component:q}),o.a.createElement(b.a,{exact:!0,path:"/notes",component:D}),o.a.createElement(b.a,{exact:!0,path:"/notes/new",component:B}),o.a.createElement(b.a,{exact:!0,path:"/notes/edit/:id",component:C}),o.a.createElement(b.a,{path:"/notes/:id",component:U,exact:!0}),o.a.createElement(b.a,{exact:!0,path:"/categories",component:O}),o.a.createElement(b.a,{exact:!0,path:"/categories/new",component:M}),o.a.createElement(b.a,{path:"/categories/edit/:id",component:_,exact:!0}),o.a.createElement(b.a,{path:"/categories/:id",component:G,exact:!0}))))}}]),t}(o.a.Component),$=Object(p.b)(function(e){return{user:e.user}})(Z),ee=a(22),te=a(11),ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(te.a)({},t.payload);case"RESET_USER":return{};default:return Object(te.a)({},e)}},ne=[],oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTES":return Object(S.a)(t.payload);case"REMOVE_NOTE":return e.filter(function(e){return e._id!==t.payload});case"SET_NOTE":return[].concat(Object(S.a)(e),[t.payload]);default:return Object(S.a)(e)}},re=[],ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORIES":return Object(S.a)(t.payload);default:return Object(S.a)(e)}},le={},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_NOTE":return Object(te.a)({},t.payload);default:return Object(te.a)({},e)}},ie={},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CATEGORY":return Object(te.a)({},t.payload);default:return Object(te.a)({},e)}},me=[],he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TAGS":return Object(S.a)(t.payload);default:return Object(S.a)(e)}},de={},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TAG":return Object(te.a)({},t.payload);default:return Object(te.a)({},e)}},ge=function(){return Object(ee.c)(Object(ee.b)({user:ae,notes:oe,categories:ce,note:se,category:ue,tags:he,tag:pe}))}();ge.subscribe(function(){console.log("redux store state",ge.getState())}),console.log(ge.getState()),localStorage.getItem("userAuthToken")&&E.get("/users/account",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){ge.dispatch(H(e.data))});var be=o.a.createElement(p.a,{store:ge},o.a.createElement($,null));c.a.render(be,document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.20f786bb.chunk.js.map