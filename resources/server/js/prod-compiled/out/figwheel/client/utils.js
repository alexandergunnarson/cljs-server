// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client.utils');
goog.require('cljs.core');
goog.require('clojure.string');
figwheel.client.utils._STAR_print_debug_STAR_ = false;
figwheel.client.utils.html_env_QMARK_ = (function figwheel$client$utils$html_env_QMARK_(){
return goog.inHtmlDocument_();
});
figwheel.client.utils.node_env_QMARK_ = (function figwheel$client$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
figwheel.client.utils.host_env_QMARK_ = (function figwheel$client$utils$host_env_QMARK_(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"node","node",581201198);
} else {
return new cljs.core.Keyword(null,"html","html",-998796897);
}
});
figwheel.client.utils.base_url_path = (function figwheel$client$utils$base_url_path(){
return clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__9989_SHARP_,p2__9988_SHARP_){
return [cljs.core.str(p2__9988_SHARP_)].join('');
}));
});
figwheel.client.utils.dispatch_custom_event = (function figwheel$client$utils$dispatch_custom_event(event_name,data){
if(cljs.core.truth_((function (){var and__4657__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4657__auto__)){
return (window["CustomEvent"]);
} else {
return and__4657__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent(event_name,(function (){var obj9993 = {"detail":data};
return obj9993;
})())));
} else {
return null;
}
});
figwheel.client.utils.debug_prn = (function figwheel$client$utils$debug_prn(o){
if(cljs.core.truth_(figwheel.client.utils._STAR_print_debug_STAR_)){
var o__$1 = (((cljs.core.map_QMARK_.call(null,o)) || (cljs.core.seq_QMARK_.call(null,o)))?cljs.core.prn_str.call(null,o):o);
return console.log(o__$1);
} else {
return null;
}
});
figwheel.client.utils.log = (function figwheel$client$utils$log(var_args){
var args9998 = [];
var len__5727__auto___10004 = arguments.length;
var i__5728__auto___10005 = (0);
while(true){
if((i__5728__auto___10005 < len__5727__auto___10004)){
args9998.push((arguments[i__5728__auto___10005]));

var G__10006 = (i__5728__auto___10005 + (1));
i__5728__auto___10005 = G__10006;
continue;
} else {
}
break;
}

var G__10000 = args9998.length;
switch (G__10000) {
case 1:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9998.length)].join('')));

}
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$1 = (function (x){
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),x);
});

figwheel.client.utils.log.cljs$core$IFn$_invoke$arity$2 = (function (level,arg){
var f = (function (){var pred__10001 = cljs.core._EQ_;
var expr__10002 = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?level:new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(pred__10001.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),expr__10002))){
return ((function (pred__10001,expr__10002){
return (function (p1__9994_SHARP_){
return console.warn(p1__9994_SHARP_);
});
;})(pred__10001,expr__10002))
} else {
if(cljs.core.truth_(pred__10001.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),expr__10002))){
return ((function (pred__10001,expr__10002){
return (function (p1__9995_SHARP_){
return console.debug(p1__9995_SHARP_);
});
;})(pred__10001,expr__10002))
} else {
if(cljs.core.truth_(pred__10001.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__10002))){
return ((function (pred__10001,expr__10002){
return (function (p1__9996_SHARP_){
return console.error(p1__9996_SHARP_);
});
;})(pred__10001,expr__10002))
} else {
return ((function (pred__10001,expr__10002){
return (function (p1__9997_SHARP_){
return console.log(p1__9997_SHARP_);
});
;})(pred__10001,expr__10002))
}
}
}
})();
return f.call(null,arg);
});

figwheel.client.utils.log.cljs$lang$maxFixedArity = 2;
figwheel.client.utils.eval_helper = (function figwheel$client$utils$eval_helper(code,p__10008){
var map__10011 = p__10008;
var map__10011__$1 = ((((!((map__10011 == null)))?((((map__10011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10011):map__10011);
var opts = map__10011__$1;
var eval_fn = cljs.core.get.call(null,map__10011__$1,new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294));
if(cljs.core.truth_(eval_fn)){
return eval_fn.call(null,code,opts);
} else {
return eval(code);
}
});

//# sourceMappingURL=utils.js.map