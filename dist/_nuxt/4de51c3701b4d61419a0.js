(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{221:function(t,e,o){var content=o(232);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(54).default)("8bed6840",content,!0,{sourceMap:!1})},231:function(t,e,o){"use strict";var n=o(221);o.n(n).a},232:function(t,e,o){(e=o(53)(!1)).push([t.i,"body[data-v-1064c6e9]{background:#f1f1f1;font-family:Roboto,sans-serif}.contact-form[data-v-1064c6e9]{font-family:16px;margin:0 auto;max-width:600px;width:100%}.contact-form h2[data-v-1064c6e9]{text-align:center}.contact-form .separator[data-v-1064c6e9]{border-bottom:1px solid #ccc;margin-bottom:15px}.contact-form .form[data-v-1064c6e9]{display:flex;flex-direction:column;font-size:16px}.contact-form_title[data-v-1064c6e9]{color:#333;text-align:left;font-size:28px}.contact-form input[type=email][data-v-1064c6e9],.contact-form input[type=text][data-v-1064c6e9],.contact-form textarea[data-v-1064c6e9]{border:1px solid #e8e8e8;font-family:Roboto,sans-serif;padding:10px 7px;margin-bottom:15px;outline:none}.contact-form textarea[data-v-1064c6e9]{resize:none}.contact-form .button[data-v-1064c6e9]{background:#da552f;border:1px solid #da552f;color:#fff;cursor:pointer;padding:10px 50px;text-align:center;text-transform:uppercase}.contact-form .button[data-v-1064c6e9]:hover{background:#ea532a;border:1px solid #ea532a}.contact-form .button[data-v-1064c6e9],.contact-form input[type=email][data-v-1064c6e9],.contact-form input[type=text][data-v-1064c6e9],.contact-form textarea[data-v-1064c6e9]{font-size:15px;border-radius:3px}",""]),t.exports=e},263:function(t,e,o){"use strict";o.r(e);var n={name:"app",data:function(){return{contact:{name:"",email:"",message:""},isSending:!1}},methods:{clearForm:function(){for(var t in this.contact)this.contact[t]=""},onSubmit:function(t){var e=this;t.preventDefault(),this.isSending=!0,setTimeout((function(){var form=new FormData;for(var t in e.contact)form.append(t,e.contact[t]);e.$http.post("/app.php",form).then((function(t){console.log(t),e.clearForm(),e.isSending=!1})).catch((function(t){console.log(t)}))}),1e3)}}},c=(o(231),o(45)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"contact-form",attrs:{id:"contact-form"}},[o("h2",[t._v("Contact")]),t._v(" "),o("div",{staticClass:"separator"}),t._v(" "),t.isSending?o("div",{staticClass:"loading"},[t._v("Sending...")]):t._e(),t._v(" "),o("form",{staticClass:"form",on:{submit:t.onSubmit}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.name,expression:"contact.name"}],attrs:{required:"",name:"name",placeholder:"Name",type:"text",autocomplete:"off"},domProps:{value:t.contact.name},on:{input:function(e){e.target.composing||t.$set(t.contact,"name",e.target.value)}}}),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.contact.email,expression:"contact.email"}],attrs:{required:"",name:"email",placeholder:"E-mail",type:"email",autocomplete:"off"},domProps:{value:t.contact.email},on:{input:function(e){e.target.composing||t.$set(t.contact,"email",e.target.value)}}}),t._v(" "),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.contact.message,expression:"contact.message"}],attrs:{name:"message",rows:"4",placeholder:"Message"},domProps:{value:t.contact.message},on:{input:function(e){e.target.composing||t.$set(t.contact,"message",e.target.value)}}}),t._v(" "),o("button",{staticClass:"button"},[t._v("Send")])])])}),[],!1,null,"1064c6e9",null);e.default=component.exports}}]);