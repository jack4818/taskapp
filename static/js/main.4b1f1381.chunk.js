(this.webpackJsonptaskapp=this.webpackJsonptaskapp||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/done-1.f9ee2b9a.png"},15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),r=a(12),l=a.n(r),c=(a(20),a(8)),i=a(2),s=a(3),d=a(5),p=a(4),m=a(29),u=(a(21),a(7)),f=a(6),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getStyle=function(){return{opacity:e.props.todoItem.completed?"0.65":"1"}},e.getFavStar=function(){return{color:e.props.todoItem.fav?"#ffc600":"c4cbe2"}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.todoItem,t=e.id,a=e.title;return n.a.createElement("div",{className:"todoItem",style:this.getStyle()},n.a.createElement("p",null,n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",checked:this.props.todoItem.completed,onChange:this.props.toggleComplete.bind(this,t)}),a)),n.a.createElement("div",null,n.a.createElement("button",{className:"favBtn",onClick:this.props.toggleFav.bind(this,t),style:this.getFavStar()},n.a.createElement(f.a,{icon:u.b})),n.a.createElement("button",{className:"deleteBtn",onClick:this.props.deleteTodo.bind(this,t)},n.a.createElement(f.a,{icon:u.c}))))}}]),a}(o.Component),h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).getHeader=function(e){return{display:e.length>0?"block":"none"}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.todoItems.filter((function(e){return e.fav&&!e.completed})),a=this.props.todoItems.filter((function(e){return!e.completed&&!e.fav})),o=this.props.todoItems.filter((function(e){return e.completed}));return n.a.createElement("div",{className:"todoList"},n.a.createElement("h3",{style:this.getHeader(t)},"Priority Tasks"),t.map((function(t){return n.a.createElement(g,{key:t.id,todoItem:t,toggleComplete:e.props.toggleComplete,deleteTodo:e.props.deleteTodo,toggleFav:e.props.toggleFav})})),n.a.createElement("h3",{style:this.getHeader(a)},"Current Tasks"),a.map((function(t){return n.a.createElement(g,{key:t.id,todoItem:t,toggleComplete:e.props.toggleComplete,deleteTodo:e.props.deleteTodo,toggleFav:e.props.toggleFav})})),n.a.createElement("h3",{style:this.getHeader(o)},"Completed Tasks"),o.map((function(t){return n.a.createElement(g,{key:t.id,todoItem:t,toggleComplete:e.props.toggleComplete,deleteTodo:e.props.deleteTodo,toggleFav:e.props.toggleFav})})))}}]),a}(o.Component);h.defaultProps={todoItems:[]};var v=h,b=a(13),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={title:"",fav:!1},e.userTyping=function(t){e.setState(Object(b.a)({},t.target.name,t.target.value))},e.handleInputChange=function(t){e.setState({fav:!e.state.fav})},e.submitTodo=function(t){if(t.preventDefault(),""===e.state.title.trim())return null;e.props.addTodo(e.state.title,e.state.fav),e.setState({title:""}),e.setState({fav:!1})},e}return Object(s.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Add Task"),n.a.createElement("form",{onSubmit:this.submitTodo,autoComplete:"off"},n.a.createElement("div",{className:"formTextInput"},n.a.createElement("input",{type:"text",name:"title",placeholder:"",value:this.state.title,onChange:this.userTyping}),n.a.createElement("button",{type:"submit",className:"submitBtn"},n.a.createElement(f.a,{icon:u.a}))),n.a.createElement("div",{className:"priorityCheckbox"},n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",name:"urgent",checked:this.state.fav,onChange:this.handleInputChange}),"Priority"))))}}]),a}(o.Component),y=a(14),k=a.n(y);function C(){return n.a.createElement("div",{className:"header"},n.a.createElement("h1",null,"Tasks App"),n.a.createElement("img",{className:"headerImage",src:k.a,alt:"Man looking at to do list"}))}function O(){return n.a.createElement("footer",null,"Illustration by Sara Maese from ",n.a.createElement("a",{href:"https://icons8.com/"},"Icons8"))}var T=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={todoData:[]},e.toggleComplete=function(t){var a=Object(c.a)(e.state.todoData),o=a.find((function(e){return e.id===t}));o.completed=!o.completed,e.setState({todoData:a})},e.toggleFav=function(t){var a=Object(c.a)(e.state.todoData),o=a.find((function(e){return e.id===t}));o.fav=!o.fav,e.setState({todoData:a})},e.addTodo=function(t,a){var o=[{id:Object(m.a)(),title:t,completed:!1,fav:a}].concat(Object(c.a)(e.state.todoData));e.setState({todoData:o})},e.deleteTodo=function(t){var a=Object(c.a)(e.state.todoData.filter((function(e){return e.id!==t})));e.setState({todoData:a})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("todoData.items"));e&&this.setState({todoData:e})}},{key:"componentDidUpdate",value:function(){localStorage.setItem("todoData.items",JSON.stringify(this.state.todoData))}},{key:"render",value:function(){return n.a.createElement("div",{className:"siteWrapper"},n.a.createElement("div",{className:"appWrapper"},n.a.createElement(C,null),n.a.createElement(E,{addTodo:this.addTodo}),n.a.createElement(v,{todoItems:this.state.todoData,toggleComplete:this.toggleComplete,deleteTodo:this.deleteTodo,toggleFav:this.toggleFav})),n.a.createElement(O,null))}}]),a}(o.Component);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4b1f1381.chunk.js.map