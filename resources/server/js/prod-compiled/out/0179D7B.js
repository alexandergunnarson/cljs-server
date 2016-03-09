goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12824__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__12824 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12825__i = 0, G__12825__a = new Array(arguments.length -  0);
while (G__12825__i < G__12825__a.length) {G__12825__a[G__12825__i] = arguments[G__12825__i + 0]; ++G__12825__i;}
  args = new cljs.core.IndexedSeq(G__12825__a,0);
} 
return G__12824__delegate.call(this,args);};
G__12824.cljs$lang$maxFixedArity = 0;
G__12824.cljs$lang$applyTo = (function (arglist__12826){
var args = cljs.core.seq(arglist__12826);
return G__12824__delegate(args);
});
G__12824.cljs$core$IFn$_invoke$arity$variadic = G__12824__delegate;
return G__12824;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__12827__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__12827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12828__i = 0, G__12828__a = new Array(arguments.length -  0);
while (G__12828__i < G__12828__a.length) {G__12828__a[G__12828__i] = arguments[G__12828__i + 0]; ++G__12828__i;}
  args = new cljs.core.IndexedSeq(G__12828__a,0);
} 
return G__12827__delegate.call(this,args);};
G__12827.cljs$lang$maxFixedArity = 0;
G__12827.cljs$lang$applyTo = (function (arglist__12829){
var args = cljs.core.seq(arglist__12829);
return G__12827__delegate(args);
});
G__12827.cljs$core$IFn$_invoke$arity$variadic = G__12827__delegate;
return G__12827;
})()
;

return null;
});
