(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{194:function(t,e,s){},212:function(t,e,s){"use strict";s(194)},245:function(t,e,s){"use strict";s.r(e);var n={data:function(){return{show:!1}},methods:{showTip:function(){this.show=!this.show}}},i=(s(212),s(0)),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("hr"),t._v(" "),[s("div",[s("button",{staticClass:"btn",on:{click:t.showTip}},[t._v("答案提示")]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("\n        【宏任务，微任务】\n        【Macrotasks => 一般会将dom事件、ajax事件、setTimeout、script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。 放入到这个队列中。】\n        【Microtasks => 一般会将Promise、process.nextTicks、Object.observe、MutationObserver放入这个队列中。】\n      ")]),t._v(" "),s("p",[t._v("异步：setTimeout、setInterval、ajax、eventListener 等")]),t._v(" "),s("p",[t._v("\n        3、略\n      ")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("\n        7、略\n      ")]),t._v(" "),t._m(8)])])]],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"常见面试题1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见面试题1"}},[this._v("#")]),this._v(" 常见面试题1")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[t._v("1、var let const 的区别")]),t._v(" "),s("li",[t._v("2、介绍一下 JavaScript 中的事件循环（event loop）& JavaScript 中异步有哪些")]),t._v(" "),s("li",[t._v("3、用 setTimeout 实现 setInterval")]),t._v(" "),s("li",[t._v("4、什么是跨域 & 解决方案")]),t._v(" "),s("li",[t._v("5、call、apply、bind 区别")]),t._v(" "),s("li",[t._v("6、addEventListener 第三个参数是什么意思")]),t._v(" "),s("li",[t._v("7、统计一篇英文文章中哪个单词出现的次数最多")]),t._v(" "),s("li",[t._v("8、vue 中如何实现数据的双向绑定")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        1、"),e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/let",target:"_blank"}},[this._v("http://es6.ruanyifeng.com/#docs/let")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        2、【有一些浏览器会输出：'script start'、'script end'、'setTimeout'、'promise1'、'promise2'。这些浏览器将会在 'setTimeout' 之后输出 Promise 的回调函数，这看起来像是这类浏览器不支持 microtask 而将 Promise 的回调函数作为一个新的 task 来执行。】\n        "),e("br"),this._v("\n        【如果说把 Promise 当做一个新的 task 来执行的话，这将会造成一些性能上的问题，因为 Promise 的回调函数可能会被延迟执行，因为在每一个 task 执行结束后浏览器可能会进行一些渲染工作。】\n      ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://www.cnblogs.com/dong-xu/p/7000163.html"}},[this._v("深入理解 JavaScript 事件循环（一）— event loop")]),this._v(" "),e("br"),this._v(" "),e("a",{attrs:{href:"https://www.cnblogs.com/dong-xu/p/7000139.html"}},[this._v("[译]深入理解 JavaScript 事件循环（二）— task and microtask")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        4、"),e("a",{attrs:{href:"https://blog.csdn.net/csdn_yudong/article/details/54346536"}},[this._v("js和jquery使用jsonp解决跨域")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        5、"),e("a",{attrs:{href:"https://blog.csdn.net/csdn_yudong/article/details/78730844"}},[this._v("清晰明了搞懂 call、apply、bind 的区别")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        6、"),e("a",{attrs:{href:"https://blog.csdn.net/csdn_yudong/article/details/70156293"}},[this._v("[JavaScript]onclick、addEventListener、attachEvent详解")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("\n        8、"),e("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/reactivity.html"}},[this._v("Vue 深入响应式原理")])])}],!1,null,null,null);e.default=r.exports}}]);