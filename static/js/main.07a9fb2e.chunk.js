(this["webpackJsonpmh-things"]=this["webpackJsonpmh-things"]||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),u=(a(27),a(7)),o=a(5),c=a(9),s=a(10),m=a(11),p=a(12),d=a(13),h=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={rowData:[],filtered:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/yb00/mh-things/source/json/skill_pages.json").then((function(e){return e.json()})).then((function(t){var a,n=[],l=Object(c.a)(t);try{for(l.s();!(a=l.n()).done;){var r,i=a.value,u=1,o=Object(c.a)(i.decos);try{for(o.s();!(r=o.n()).done;){var s=r.value;n.push({skill:s,page:i.page,row:u}),u+=1}}catch(m){o.e(m)}finally{o.f()}}}catch(m){l.e(m)}finally{l.f()}e.setState({rowData:n,filtered:n})}))}},{key:"onSkillInputTextChange",value:function(e){this.setState({filtered:this.state.rowData.filter((function(t){return-1!==t.skill.toUpperCase().indexOf(e.target.value.toUpperCase())}))})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title"},"Filter Table"),l.a.createElement("input",{id:"skill-input",type:"text",className:"skill-input",placeholder:"Skill Name",onChange:this.onSkillInputTextChange.bind(this)}),l.a.createElement("table",{className:"skill-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{style:{width:"60%"}},"Skill Name"),l.a.createElement("th",{style:{width:"20%"}},"Page Number"),l.a.createElement("th",{style:{width:"20%"}},"Row Number"))),l.a.createElement("tbody",null,this.state.filtered.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,e.skill),l.a.createElement("td",null,e.page),l.a.createElement("td",null,e.row))})))))}}]),a}(l.a.Component),E=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).addSkill=function(e){var t=n.state.set,a=t.indexOf(e.target.textContent);-1!==a?(t.splice(a,1),n.setState({set:t})):(t.push(e.target.textContent),n.setState({set:t}))},n.state={skills:[],filtered:[],set:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mhw-db.com/skills").then((function(e){return e.json()})).then((function(t){var a,n=[],l=Object(c.a)(t);try{for(l.s();!(a=l.n()).done;){var r=a.value;n.push({name:r.name,description:r.description})}}catch(i){l.e(i)}finally{l.f()}e.setState({skills:n,filtered:n})}))}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title"},"Armor Set Searcher"),l.a.createElement("div",{className:"column"},l.a.createElement("table",{className:"skill-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Skill Name"))),l.a.createElement("tbody",null,this.state.filtered.map((function(t){return l.a.createElement("tr",null,l.a.createElement("td",{onClick:e.addSkill},l.a.createElement("p",{title:t.description,className:"tooltip"},t.name)))})))))))}}]),a}(n.Component),f=(a(28),function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{className:"navbar-link",to:"/mh-things/"},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{className:"navbar-link",to:"/mh-things/skill-filter"},"Filter Page")),l.a.createElement("li",null,l.a.createElement(u.b,{className:"navbar-link",to:"/mh-things/ass"},"Armor Set Search")),l.a.createElement("li",null,l.a.createElement(u.b,{className:"navbar-link",to:"/mh-things/about"},"About"))))}),b=function(){return l.a.createElement("main",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/mh-things",component:g}),l.a.createElement(o.a,{path:"/mh-things/about",component:v}),l.a.createElement(o.a,{path:"/mh-things/skill-filter",component:h}),l.a.createElement(o.a,{path:"/mh-things/ass",component:E})))},g=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title"},"Home Page"),l.a.createElement("p",null,"Elit ullamco id labore fugiat esse mollit deserunt culpa nisi adipisicing irure reprehenderit ipsum."),l.a.createElement("p",null,"Ex ut exercitation quis id eiusmod cillum deserunt culpa proident exercitation fugiat aliquip Lorem. Ipsum aliqua in tempor irure laboris reprehenderit veniam nostrud pariatur ex eiusmod labore deserunt nisi. Nulla enim consequat pariatur occaecat ullamco nostrud voluptate est anim voluptate. Voluptate reprehenderit labore et proident id et mollit irure ut. Dolore ea quis aute tempor ad nostrud ut cillum anim tempor aute reprehenderit. Ea eu sint est fugiat laborum cillum exercitation dolor non eu quis minim minim deserunt. Fugiat aliquip dolor culpa ut mollit mollit enim."))},v=function(){return l.a.createElement("div",null,l.a.createElement("h1",{className:"page-title"},"About"),l.a.createElement("p",null,"Elit ullamco id labore fugiat esse mollit deserunt culpa nisi adipisicing irure reprehenderit ipsum."),l.a.createElement("p",null,"Ex ut exercitation quis id eiusmod cillum deserunt culpa proident exercitation fugiat aliquip Lorem. Ipsum aliqua in tempor irure laboris reprehenderit veniam nostrud pariatur ex eiusmod labore deserunt nisi. Nulla enim consequat pariatur occaecat ullamco nostrud voluptate est anim voluptate. Voluptate reprehenderit labore et proident id et mollit irure ut. Dolore ea quis aute tempor ad nostrud ut cillum anim tempor aute reprehenderit. Ea eu sint est fugiat laborum cillum exercitation dolor non eu quis minim minim deserunt. Fugiat aliquip dolor culpa ut mollit mollit enim."))},k=function(){return l.a.createElement(u.a,null,l.a.createElement(f,null),l.a.createElement(b,null))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.07a9fb2e.chunk.js.map