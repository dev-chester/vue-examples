webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});s("rxKx"),s("7t+N"),s("0lrd"),s("X0eL");var a=s("7+uW"),n=s("Gu7T"),i=s.n(n),r=new a.a,c={name:"Chat",props:{n:{type:Number,required:!0,default:-1}},data:function(){return{messages:[],inputMessage:""}},methods:{sendMessage:function(){r.$emit("new-message",{from:"chat "+this.n,body:this.inputMessage,at:Date.now()}),this.inputMessage=""}},created:function(){var e=this;r.$on("new-message",function(t){e.messages=[t].concat(i()(e.messages))})}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat"},[s("h5",[e._v("chat "+e._s(e.n))]),e._v(" "),s("div",{staticClass:"row"},[s("label",{attrs:{for:"input-message"}},[e._v("Message")]),e._v(" "),s("div",{staticClass:"input-field col s12"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.inputMessage,expression:"inputMessage"}],staticClass:"validate",attrs:{placeholder:"message",id:"input-message",type:"text"},domProps:{value:e.inputMessage},on:{change:e.sendMessage,input:function(t){t.target.composing||(e.inputMessage=t.target.value)}}})])]),e._v(" "),e._l(e.messages,function(t){return s("ul",[s("li",[e._v("message from "+e._s(t.from)+": "+e._s(t.body))])])})],2)},staticRenderFns:[]},u={name:"ChatApp",components:{Chat:s("VU/8")(c,o,!1,null,null,null).exports},data:function(){return{name:"Chat App"}}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chat-container"},[s("head",{staticClass:"header"},[s("h3",[e._v(e._s(e.name))])]),e._v(" "),s("Chat",{staticClass:"left-chat",attrs:{n:1}}),e._v(" "),s("Chat",{staticClass:"right-chat",attrs:{n:2}})],1)},staticRenderFns:[]};var p=s("VU/8")(u,l,!1,function(e){s("TAUh")},null,null).exports;a.a.config.productionTip=!1,new a.a({el:"#app",components:{ChatApp:p},template:"<ChatApp/>"})},TAUh:function(e,t){},X0eL:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.00533f365d58a55f3c17.js.map