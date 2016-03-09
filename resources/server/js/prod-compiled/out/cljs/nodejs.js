// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11058__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11058 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11059__i = 0, G__11059__a = new Array(arguments.length -  0);
while (G__11059__i < G__11059__a.length) {G__11059__a[G__11059__i] = arguments[G__11059__i + 0]; ++G__11059__i;}
  args = new cljs.core.IndexedSeq(G__11059__a,0);
} 
return G__11058__delegate.call(this,args);};
G__11058.cljs$lang$maxFixedArity = 0;
G__11058.cljs$lang$applyTo = (function (arglist__11060){
var args = cljs.core.seq(arglist__11060);
return G__11058__delegate(args);
});
G__11058.cljs$core$IFn$_invoke$arity$variadic = G__11058__delegate;
return G__11058;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11061__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11061 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11062__i = 0, G__11062__a = new Array(arguments.length -  0);
while (G__11062__i < G__11062__a.length) {G__11062__a[G__11062__i] = arguments[G__11062__i + 0]; ++G__11062__i;}
  args = new cljs.core.IndexedSeq(G__11062__a,0);
} 
return G__11061__delegate.call(this,args);};
G__11061.cljs$lang$maxFixedArity = 0;
G__11061.cljs$lang$applyTo = (function (arglist__11063){
var args = cljs.core.seq(arglist__11063);
return G__11061__delegate(args);
});
G__11061.cljs$core$IFn$_invoke$arity$variadic = G__11061__delegate;
return G__11061;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map