(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{243:function(e,t,o){var r=o(250),d={space:"7aohbjnve3qn",accessToken:"KJIOJKZsB-6xze28H-HuiwcQHhUv2lngc5tjuDMn6LI"};e.exports={createClient:function(){return r.createClient(d)}}},251:function(e,t){},252:function(e,t){},302:function(e,t,o){var content=o(450);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(41).default)("63319662",content,!0,{sourceMap:!1})},449:function(e,t,o){"use strict";o(302)},450:function(e,t,o){var r=o(40)(!1);r.push([e.i,'body[data-v-4042e284]{margin:0}h1[data-v-4042e284]{color:#6f9ff8}.navbar-dark .navbar-nav .nav-link[data-v-4042e284]{color:#ecebe7;font-family:"Raleway",sans-serif;font-weight:500}.navbar-dark .navbar-nav .nav-link[data-v-4042e284] :hover{color:#f72444}.dropdown-menu[data-v-4042e284]{border-radius:0;margin-top:.7rem;background-color:#ecebe7}.dropdown-menu[data-v-4042e284] :hover{background-color:#fff}.navbar-dark .navbar-toggler[data-v-4042e284]{border:none}.navbar-dark .navbar-toggler .navbar-dark .navbar-toggler-icon[data-v-4042e284]:hover{color:#6f9ff8}.modal-header[data-v-4042e284]{background-color:#191816;color:#ecebe7;border-radius:0;border:none}.modal-header .close[data-v-4042e284]{color:#ecebe7;font-size:2em;opacity:1}.modal-header .close[data-v-4042e284]:hover{color:#f72444}.modal-footer[data-v-4042e284]{background-color:#ecebe7;border-radius:0;border:none}.modal-footer .btn-primary[data-v-4042e284]{background-color:#6f9ff8;border-radius:0;border:none}.modal-footer .btn-primary[data-v-4042e284] :hover{background-color:#f72444}.modal-footer .btn-secondary[data-v-4042e284]{background-color:#191816;border-radius:0;border:none}.modal-footer .btn-secondary[data-v-4042e284] :hover{background-color:#f72444}.modal-xl[data-v-4042e284]{max-width:99%}.modal-body[data-v-4042e284]{padding:0;border-radius:0;background-color:#ecebe7}.modal-body button[data-v-4042e284],.modal-body input[data-v-4042e284],.modal-body optgroup[data-v-4042e284],.modal-body select[data-v-4042e284],.modal-body textarea[data-v-4042e284]{color:#191816}.modal-content[data-v-4042e284]{border-radius:0}.custom-control-input:checked~.custom-control-label[data-v-4042e284]:before{color:#fff;border-color:#6f9ff8;background-color:#6f9ff8}.custom-checkbox .custom-control-label[data-v-4042e284]:before{border-radius:0}section[data-v-4042e284]{background-color:#ecebe7}.project-header[data-v-4042e284]{max-width:100%;background-color:#191816}.project-description[data-v-4042e284]{padding:2vh}@media only screen and (max-width:576px){.project-description[data-v-4042e284]{padding:0}}.project-description .title[data-v-4042e284]{padding:2vh 0 .5vh;font-weight:600}.project-description h4[data-v-4042e284]{color:#6f9ff8}.project-description h5[data-v-4042e284]{color:#f72444}.presentation-imgs img[data-v-4042e284]{padding-bottom:2vh;width:100%}.tags[data-v-4042e284]{padding:1em 0;margin-bottom:2em}.tag[data-v-4042e284]{margin:1vh}.tag[data-v-4042e284]:link,.tag[data-v-4042e284]:visited{color:#a0a0a0;text-decoration:none;display:inline-block;padding:.33333rem .5rem;line-height:1;border-radius:2px;border:1px solid #a0a0a0;margin-right:.5em}.tag[data-v-4042e284]:active,.tag[data-v-4042e284]:focus,.tag[data-v-4042e284]:hover{color:#606060;border-color:#606060}.image-one[data-v-4042e284],.last-img img[data-v-4042e284]{max-width:100%}.last-img img[data-v-4042e284]{vertical-align:middle}.img-view-modal[data-v-4042e284]{vertical-align:left;align-self:center}.modal-image[data-v-4042e284]{max-width:100%}',""]),e.exports=r},470:function(e,t,o){"use strict";o.r(t);var r=o(339),d=o.n(r),l=o(243),n=Object(l.createClient)(),c={components:{VueMarkdown:d.a},asyncData:function(e){var t=e.env,o=e.params;return n.getEntries({content_type:t.CTF_PROJECT_TYPE_ID,"fields.slug":o.slug}).then((function(e){return{post:e.items[0]}})).catch(console.error)}},v=(o(449),o(34)),component=Object(v.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dj-bg-white"},[o("header",{staticClass:"container-fluid dj-page-header pt-5"},[o("h1",{staticClass:"pt-5"},[e._v("\n      "+e._s(e.post.fields.client)+"\n    ")])]),e._v(" "),o("section",{staticClass:"container"},[o("b-row",[o("b-col",[o("img",{staticStyle:{"max-width":"100%","padding-top":"2vh"},attrs:{src:e.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=00",srcset:e.post.fields.heroImage.fields.file.url+"?w=350&h=87&fit=fill 350w, "+e.post.fields.heroImage.fields.file.url+"?w=1000&h=650&fit=fill 1000w, "+e.post.fields.heroImage.fields.file.url+"?w=2000&h=1000&fit=fill 2000w",size:"100vw",alt:e.post.fields.heroImage.fields.description}})])],1),e._v(" "),o("b-row",[o("b-col",{attrs:{md:"2"}}),e._v(" "),o("b-col",{attrs:{md:"8"}},[o("div",{staticClass:"project-description"},[o("div",{staticClass:"title"},[e._v("\n            Client:\n          ")]),e._v(" "),o("h4",[e._v(e._s(e.post.fields.client))]),e._v(" "),o("div",{staticClass:"title"},[e._v("\n            Industry:\n          ")]),e._v(" "),o("h5",[e._v("\n            "+e._s(e.post.fields.industry)+"\n          ")]),e._v(" "),o("div",{staticClass:"title"},[e._v("\n            Company Description:\n          ")]),e._v(" "),o("p",[e._v("\n            "+e._s(e.post.fields.description)+"\n          ")]),e._v(" "),o("div",{staticClass:"title"},[e._v("\n            Role:\n          ")]),e._v(" "),o("vue-markdown",[e._v("\n            "+e._s(e.post.fields.role)+"\n          ")]),e._v(" "),o("div",{staticClass:"title"},[e._v("\n            Tools Used:\n          ")]),e._v(" "),o("vue-markdown",[e._v("\n            "+e._s(e.post.fields.tools)+"\n          ")]),e._v(" "),o("div",{staticClass:"title"},[e._v("\n            Project Summary:\n          ")]),e._v(" "),o("vue-markdown",[e._v("\n            "+e._s(e.post.fields.projectSummary)+"\n          ")])],1)]),e._v(" "),o("b-col",{attrs:{md:"2"}})],1),e._v(" "),o("b-row",{staticClass:"p-2"},[o("b-col",{staticClass:"p-2 mx-auto presentation-imgs"},[o("div",[o("img",{staticClass:"modal-image",attrs:{src:e.post.fields.imageTwo.fields.file.url,fluid:""}})]),e._v(" "),o("div",[o("img",{staticClass:"modal-image",attrs:{src:e.post.fields.imageThree.fields.file.url,fluid:""}})]),e._v(" "),o("div",[o("img",{staticClass:"modal-image",attrs:{src:e.post.fields.imageFour.fields.file.url,fluid:""}})]),e._v(" "),o("div",[o("img",{staticStyle:{"max-width":"100%","padding-top":"2vh"},attrs:{src:e.post.fields.heroImage.fields.file.url+"?fit=scale&w=350&h=196",srcset:e.post.fields.heroImage.fields.file.url+"?w=350&h=87&fit=fill 350w, "+e.post.fields.heroImage.fields.file.url+"?w=1000&h=650&fit=fill 1000w, "+e.post.fields.heroImage.fields.file.url+"?w=2000&h=1000&fit=fill 2000w",size:"100vw",alt:e.post.fields.heroImage.fields.description}})]),e._v(" "),o("div",[o("img",{staticClass:"image-one",attrs:{src:e.post.fields.imageOne.fields.file.url,fluid:""}})])])],1),e._v(" "),o("b-row",[o("b-col",{attrs:{md:"3"}}),e._v(" "),o("b-col",{staticClass:"p-5",attrs:{md:"6"}},[o("div",{staticClass:"project-summary"})]),e._v(" "),o("b-col",{attrs:{md:"3"}})],1),e._v(" "),o("b-row",[o("b-col",{staticClass:"text-center"},[o("div",{staticClass:"pb-5"},[o("nuxt-link",{staticClass:"dj-button",attrs:{to:"/portfolio"}},[o("font-awesome-icon",{attrs:{icon:["fas","angle-double-right"]}}),e._v("\n            VIEW ALL PROJECTS\n          ")],1)],1)])],1)],1),e._v(" "),o("div",{staticClass:"container-fluid"},[o("b-row",{staticClass:"bg-white pt-5"},[o("b-col",[o("h5",{staticClass:"text-center dj-blue-text"},[e._v("\n          #tags\n        ")]),e._v(" "),o("div",{staticClass:"tags mx-auto text-center p-3"},e._l(e.post.fields.tags,(function(t){return o("nuxt-link",{key:t,staticClass:"tag",attrs:{to:{name:"tags-tag",params:{tag:t}}}},[e._v("\n            "+e._s(t)+"\n          ")])})),1)])],1)],1)])}),[],!1,null,"4042e284",null);t.default=component.exports}}]);