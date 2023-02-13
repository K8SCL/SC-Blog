(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{338:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"http-req-处理过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http-req-处理过程"}},[t._v("#")]),t._v(" Http Req 处理过程")]),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/\napiserver-http-request-pipeline.drawio"}})],1),t._v(" "),s("h3",{attrs:{id:"回顾"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回顾"}},[t._v("#")]),t._v(" 回顾")]),t._v(" "),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"image","data-src":"https://cdn.staticaly.com/gh/brook-w/image-hosting@master/k8s/image.1wma4o78r1i8.webp",loading:"lazy"}})]),t._v(" "),s("h2",{attrs:{id:"default-filters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#default-filters"}},[t._v("#")]),t._v(" Default Filters")]),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/apiserver-filters.drawio"}})],1),t._v(" "),s("ul",[s("li",[s("h3",{attrs:{id:"withauthorization"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#withauthorization"}},[t._v("#")]),t._v(" WithAuthorization")])])]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// WithAuthorizationCheck passes all authorized requests on to handler, and returns a forbidden error otherwise.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithAuthorization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handler http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a authorizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Authorizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NegotiatedSerializer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Handler "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tklog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Warning")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Authorization is disabled"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" handler\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/** CUSTOM-ADD-LINE\n    // The HandlerFunc type is an adapter to allow the use of\n    // ordinary functions as HTTP handlers. If f is a function\n    // with the appropriate signature, HandlerFunc(f) is a\n    // Handler that calls f.\n    type HandlerFunc func(ResponseWriter, *Request)\n\n    // ServeHTTP calls f(w, r).\n    func (f HandlerFunc) ServeHTTP(w ResponseWriter, r *Request) {\n        f(w, r)\n    }\n    */")]),t._v("\n    \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("HandlerFunc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseWriter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Context")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\tattributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAuthorizerAttributes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tresponsewriters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InternalError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\tauthorized"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Authorize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// an authorizer like RBAC could encounter evaluation errors and still allow the request, so authorizer decision is checked before error here.")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" authorized "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" authorizer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DecisionAllow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\taudit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuditAnnotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\tdecisionAnnotationKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decisionAllow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\treasonAnnotationKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\thandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ServeHTTP")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" err "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\taudit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuditAnnotation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reasonAnnotationKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reasonError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\tresponsewriters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InternalError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\t\tklog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("V")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("InfoS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Forbidden"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"URI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestURI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reason"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\taudit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("AddAuditAnnotations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tdecisionAnnotationKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" decisionForbid"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\treasonAnnotationKey"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tresponsewriters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Forbidden")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attributes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" w"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reason"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"编解码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编解码"}},[t._v("#")]),t._v(" 编解码")]),t._v(" "),s("p",[s("u",[t._v("Http Payload 与 Go 结构实例之间的转换")])]),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/en-decode.drawio"}})],1),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/apiserver-en_decode-serializer.drawio"}})],1),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/apiserver-request-store.drawio"}})],1),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/apiserver-genericregistry.Store.drawio"}})],1),t._v(" "),s("ClientOnly",[s("DrawioComponent",{attrs:{src:"https://cdn.staticaly.com/gh/k8scl/assets-repo@master/k8scl/api-server/apiserver-req-store-resp.drawio"}})],1),t._v(" "),s("p",[t._v("关于编解码转换相关的内容可以参考"),s("u",{staticStyle:{color:"red"}},[t._v("《Kubernetes 编程》")]),t._v("此书")])],1)}),[],!1,null,null,null);s.default=r.exports}}]);