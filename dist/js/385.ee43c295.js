"use strict";(self["webpackChunkboard_housedeal_todolist"]=self["webpackChunkboard_housedeal_todolist"]||[]).push([[385],{5385:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("b-container",{staticClass:"bv-example-row mt-3"},[e("b-row",[e("b-col",[e("b-alert",{attrs:{show:""}},[e("h3",[t._v("글목록")])])],1)],1),e("b-row",[e("b-col",[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("삭제처리중...")])],1)],1)],1)},s=[],l=(a(7658),a(6633)),o={name:"BoardDelete",created(){l.Z["delete"](`/board/${this.$route.params.articleno}`).then((({data:t})=>{let e="삭제 처리시 문제가 발생했습니다.";"success"===t&&(e="삭제가 완료되었습니다."),alert(e),this.$router.push({name:"boardlist"})}))}},n=o,u=a(1001),c=(0,u.Z)(n,r,s,!1,null,null,null),d=c.exports}}]);
//# sourceMappingURL=385.ee43c295.js.map