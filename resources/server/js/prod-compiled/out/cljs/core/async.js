// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async7189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7189 = (function (fn_handler,f,meta7190){
this.fn_handler = fn_handler;
this.f = f;
this.meta7190 = meta7190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7191,meta7190__$1){
var self__ = this;
var _7191__$1 = this;
return (new cljs.core.async.t_cljs$core$async7189(self__.fn_handler,self__.f,meta7190__$1));
});

cljs.core.async.t_cljs$core$async7189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7191){
var self__ = this;
var _7191__$1 = this;
return self__.meta7190;
});

cljs.core.async.t_cljs$core$async7189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async7189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async7189.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta7190","meta7190",-489488415,null)], null);
});

cljs.core.async.t_cljs$core$async7189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7189";

cljs.core.async.t_cljs$core$async7189.cljs$lang$ctorPrWriter = (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async7189");
});

cljs.core.async.__GT_t_cljs$core$async7189 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async7189(fn_handler__$1,f__$1,meta7190){
return (new cljs.core.async.t_cljs$core$async7189(fn_handler__$1,f__$1,meta7190));
});

}

return (new cljs.core.async.t_cljs$core$async7189(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args7194 = [];
var len__5727__auto___7197 = arguments.length;
var i__5728__auto___7198 = (0);
while(true){
if((i__5728__auto___7198 < len__5727__auto___7197)){
args7194.push((arguments[i__5728__auto___7198]));

var G__7199 = (i__5728__auto___7198 + (1));
i__5728__auto___7198 = G__7199;
continue;
} else {
}
break;
}

var G__7196 = args7194.length;
switch (G__7196) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7194.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args7201 = [];
var len__5727__auto___7204 = arguments.length;
var i__5728__auto___7205 = (0);
while(true){
if((i__5728__auto___7205 < len__5727__auto___7204)){
args7201.push((arguments[i__5728__auto___7205]));

var G__7206 = (i__5728__auto___7205 + (1));
i__5728__auto___7205 = G__7206;
continue;
} else {
}
break;
}

var G__7203 = args7201.length;
switch (G__7203) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7201.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_7208 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_7208);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_7208,ret){
return (function (){
return fn1.call(null,val_7208);
});})(val_7208,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args7209 = [];
var len__5727__auto___7212 = arguments.length;
var i__5728__auto___7213 = (0);
while(true){
if((i__5728__auto___7213 < len__5727__auto___7212)){
args7209.push((arguments[i__5728__auto___7213]));

var G__7214 = (i__5728__auto___7213 + (1));
i__5728__auto___7213 = G__7214;
continue;
} else {
}
break;
}

var G__7211 = args7209.length;
switch (G__7211) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7209.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5572__auto___7216 = n;
var x_7217 = (0);
while(true){
if((x_7217 < n__5572__auto___7216)){
(a[x_7217] = (0));

var G__7218 = (x_7217 + (1));
x_7217 = G__7218;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__7219 = (i + (1));
i = G__7219;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async7223 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7223 = (function (alt_flag,flag,meta7224){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta7224 = meta7224;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_7225,meta7224__$1){
var self__ = this;
var _7225__$1 = this;
return (new cljs.core.async.t_cljs$core$async7223(self__.alt_flag,self__.flag,meta7224__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_7225){
var self__ = this;
var _7225__$1 = this;
return self__.meta7224;
});})(flag))
;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async7223.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async7223.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta7224","meta7224",-969514698,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async7223.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7223.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7223";

cljs.core.async.t_cljs$core$async7223.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async7223");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async7223 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async7223(alt_flag__$1,flag__$1,meta7224){
return (new cljs.core.async.t_cljs$core$async7223(alt_flag__$1,flag__$1,meta7224));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async7223(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async7229 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async7229 = (function (alt_handler,flag,cb,meta7230){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta7230 = meta7230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7231,meta7230__$1){
var self__ = this;
var _7231__$1 = this;
return (new cljs.core.async.t_cljs$core$async7229(self__.alt_handler,self__.flag,self__.cb,meta7230__$1));
});

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7231){
var self__ = this;
var _7231__$1 = this;
return self__.meta7230;
});

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async7229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async7229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta7230","meta7230",1129732092,null)], null);
});

cljs.core.async.t_cljs$core$async7229.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async7229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async7229";

cljs.core.async.t_cljs$core$async7229.cljs$lang$ctorPrWriter = (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async7229");
});

cljs.core.async.__GT_t_cljs$core$async7229 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async7229(alt_handler__$1,flag__$1,cb__$1,meta7230){
return (new cljs.core.async.t_cljs$core$async7229(alt_handler__$1,flag__$1,cb__$1,meta7230));
});

}

return (new cljs.core.async.t_cljs$core$async7229(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7232_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7232_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__7233_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7233_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4669__auto__ = wport;
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return port;
}
})()], null));
} else {
var G__7234 = (i + (1));
i = G__7234;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4669__auto__ = ret;
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4657__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4657__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4657__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5734__auto__ = [];
var len__5727__auto___7240 = arguments.length;
var i__5728__auto___7241 = (0);
while(true){
if((i__5728__auto___7241 < len__5727__auto___7240)){
args__5734__auto__.push((arguments[i__5728__auto___7241]));

var G__7242 = (i__5728__auto___7241 + (1));
i__5728__auto___7241 = G__7242;
continue;
} else {
}
break;
}

var argseq__5735__auto__ = ((((1) < args__5734__auto__.length))?(new cljs.core.IndexedSeq(args__5734__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5735__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__7237){
var map__7238 = p__7237;
var map__7238__$1 = ((((!((map__7238 == null)))?((((map__7238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7238):map__7238);
var opts = map__7238__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq7235){
var G__7236 = cljs.core.first.call(null,seq7235);
var seq7235__$1 = cljs.core.next.call(null,seq7235);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__7236,seq7235__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args7243 = [];
var len__5727__auto___7293 = arguments.length;
var i__5728__auto___7294 = (0);
while(true){
if((i__5728__auto___7294 < len__5727__auto___7293)){
args7243.push((arguments[i__5728__auto___7294]));

var G__7295 = (i__5728__auto___7294 + (1));
i__5728__auto___7294 = G__7295;
continue;
} else {
}
break;
}

var G__7245 = args7243.length;
switch (G__7245) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7243.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7141__auto___7297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___7297){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___7297){
return (function (state_7269){
var state_val_7270 = (state_7269[(1)]);
if((state_val_7270 === (7))){
var inst_7265 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7271_7298 = state_7269__$1;
(statearr_7271_7298[(2)] = inst_7265);

(statearr_7271_7298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (1))){
var state_7269__$1 = state_7269;
var statearr_7272_7299 = state_7269__$1;
(statearr_7272_7299[(2)] = null);

(statearr_7272_7299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (4))){
var inst_7248 = (state_7269[(7)]);
var inst_7248__$1 = (state_7269[(2)]);
var inst_7249 = (inst_7248__$1 == null);
var state_7269__$1 = (function (){var statearr_7273 = state_7269;
(statearr_7273[(7)] = inst_7248__$1);

return statearr_7273;
})();
if(cljs.core.truth_(inst_7249)){
var statearr_7274_7300 = state_7269__$1;
(statearr_7274_7300[(1)] = (5));

} else {
var statearr_7275_7301 = state_7269__$1;
(statearr_7275_7301[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (13))){
var state_7269__$1 = state_7269;
var statearr_7276_7302 = state_7269__$1;
(statearr_7276_7302[(2)] = null);

(statearr_7276_7302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (6))){
var inst_7248 = (state_7269[(7)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7269__$1,(11),to,inst_7248);
} else {
if((state_val_7270 === (3))){
var inst_7267 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7269__$1,inst_7267);
} else {
if((state_val_7270 === (12))){
var state_7269__$1 = state_7269;
var statearr_7277_7303 = state_7269__$1;
(statearr_7277_7303[(2)] = null);

(statearr_7277_7303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (2))){
var state_7269__$1 = state_7269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7269__$1,(4),from);
} else {
if((state_val_7270 === (11))){
var inst_7258 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
if(cljs.core.truth_(inst_7258)){
var statearr_7278_7304 = state_7269__$1;
(statearr_7278_7304[(1)] = (12));

} else {
var statearr_7279_7305 = state_7269__$1;
(statearr_7279_7305[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (9))){
var state_7269__$1 = state_7269;
var statearr_7280_7306 = state_7269__$1;
(statearr_7280_7306[(2)] = null);

(statearr_7280_7306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (5))){
var state_7269__$1 = state_7269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7281_7307 = state_7269__$1;
(statearr_7281_7307[(1)] = (8));

} else {
var statearr_7282_7308 = state_7269__$1;
(statearr_7282_7308[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (14))){
var inst_7263 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7283_7309 = state_7269__$1;
(statearr_7283_7309[(2)] = inst_7263);

(statearr_7283_7309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (10))){
var inst_7255 = (state_7269[(2)]);
var state_7269__$1 = state_7269;
var statearr_7284_7310 = state_7269__$1;
(statearr_7284_7310[(2)] = inst_7255);

(statearr_7284_7310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7270 === (8))){
var inst_7252 = cljs.core.async.close_BANG_.call(null,to);
var state_7269__$1 = state_7269;
var statearr_7285_7311 = state_7269__$1;
(statearr_7285_7311[(2)] = inst_7252);

(statearr_7285_7311[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___7297))
;
return ((function (switch__7029__auto__,c__7141__auto___7297){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_7289 = [null,null,null,null,null,null,null,null];
(statearr_7289[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_7289[(1)] = (1));

return statearr_7289;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_7269){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7290){if((e7290 instanceof Object)){
var ex__7033__auto__ = e7290;
var statearr_7291_7312 = state_7269;
(statearr_7291_7312[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7290;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7313 = state_7269;
state_7269 = G__7313;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_7269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_7269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___7297))
})();
var state__7143__auto__ = (function (){var statearr_7292 = f__7142__auto__.call(null);
(statearr_7292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7297);

return statearr_7292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___7297))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__7497){
var vec__7498 = p__7497;
var v = cljs.core.nth.call(null,vec__7498,(0),null);
var p = cljs.core.nth.call(null,vec__7498,(1),null);
var job = vec__7498;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7141__auto___7680 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results){
return (function (state_7503){
var state_val_7504 = (state_7503[(1)]);
if((state_val_7504 === (1))){
var state_7503__$1 = state_7503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7503__$1,(2),res,v);
} else {
if((state_val_7504 === (2))){
var inst_7500 = (state_7503[(2)]);
var inst_7501 = cljs.core.async.close_BANG_.call(null,res);
var state_7503__$1 = (function (){var statearr_7505 = state_7503;
(statearr_7505[(7)] = inst_7500);

return statearr_7505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7503__$1,inst_7501);
} else {
return null;
}
}
});})(c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results))
;
return ((function (switch__7029__auto__,c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_7509 = [null,null,null,null,null,null,null,null];
(statearr_7509[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__);

(statearr_7509[(1)] = (1));

return statearr_7509;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1 = (function (state_7503){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7510){if((e7510 instanceof Object)){
var ex__7033__auto__ = e7510;
var statearr_7511_7681 = state_7503;
(statearr_7511_7681[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7682 = state_7503;
state_7503 = G__7682;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = function(state_7503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1.call(this,state_7503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results))
})();
var state__7143__auto__ = (function (){var statearr_7512 = f__7142__auto__.call(null);
(statearr_7512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7680);

return statearr_7512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___7680,res,vec__7498,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__7513){
var vec__7514 = p__7513;
var v = cljs.core.nth.call(null,vec__7514,(0),null);
var p = cljs.core.nth.call(null,vec__7514,(1),null);
var job = vec__7514;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5572__auto___7683 = n;
var __7684 = (0);
while(true){
if((__7684 < n__5572__auto___7683)){
var G__7515_7685 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__7515_7685) {
case "compute":
var c__7141__auto___7687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7684,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (__7684,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function (state_7528){
var state_val_7529 = (state_7528[(1)]);
if((state_val_7529 === (1))){
var state_7528__$1 = state_7528;
var statearr_7530_7688 = state_7528__$1;
(statearr_7530_7688[(2)] = null);

(statearr_7530_7688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7529 === (2))){
var state_7528__$1 = state_7528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7528__$1,(4),jobs);
} else {
if((state_val_7529 === (3))){
var inst_7526 = (state_7528[(2)]);
var state_7528__$1 = state_7528;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7528__$1,inst_7526);
} else {
if((state_val_7529 === (4))){
var inst_7518 = (state_7528[(2)]);
var inst_7519 = process.call(null,inst_7518);
var state_7528__$1 = state_7528;
if(cljs.core.truth_(inst_7519)){
var statearr_7531_7689 = state_7528__$1;
(statearr_7531_7689[(1)] = (5));

} else {
var statearr_7532_7690 = state_7528__$1;
(statearr_7532_7690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7529 === (5))){
var state_7528__$1 = state_7528;
var statearr_7533_7691 = state_7528__$1;
(statearr_7533_7691[(2)] = null);

(statearr_7533_7691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7529 === (6))){
var state_7528__$1 = state_7528;
var statearr_7534_7692 = state_7528__$1;
(statearr_7534_7692[(2)] = null);

(statearr_7534_7692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7529 === (7))){
var inst_7524 = (state_7528[(2)]);
var state_7528__$1 = state_7528;
var statearr_7535_7693 = state_7528__$1;
(statearr_7535_7693[(2)] = inst_7524);

(statearr_7535_7693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7684,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
;
return ((function (__7684,switch__7029__auto__,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_7539 = [null,null,null,null,null,null,null];
(statearr_7539[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__);

(statearr_7539[(1)] = (1));

return statearr_7539;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1 = (function (state_7528){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7540){if((e7540 instanceof Object)){
var ex__7033__auto__ = e7540;
var statearr_7541_7694 = state_7528;
(statearr_7541_7694[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7695 = state_7528;
state_7528 = G__7695;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = function(state_7528){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1.call(this,state_7528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__;
})()
;})(__7684,switch__7029__auto__,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
})();
var state__7143__auto__ = (function (){var statearr_7542 = f__7142__auto__.call(null);
(statearr_7542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7687);

return statearr_7542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(__7684,c__7141__auto___7687,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
);


break;
case "async":
var c__7141__auto___7696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__7684,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (__7684,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function (state_7555){
var state_val_7556 = (state_7555[(1)]);
if((state_val_7556 === (1))){
var state_7555__$1 = state_7555;
var statearr_7557_7697 = state_7555__$1;
(statearr_7557_7697[(2)] = null);

(statearr_7557_7697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7556 === (2))){
var state_7555__$1 = state_7555;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7555__$1,(4),jobs);
} else {
if((state_val_7556 === (3))){
var inst_7553 = (state_7555[(2)]);
var state_7555__$1 = state_7555;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7555__$1,inst_7553);
} else {
if((state_val_7556 === (4))){
var inst_7545 = (state_7555[(2)]);
var inst_7546 = async.call(null,inst_7545);
var state_7555__$1 = state_7555;
if(cljs.core.truth_(inst_7546)){
var statearr_7558_7698 = state_7555__$1;
(statearr_7558_7698[(1)] = (5));

} else {
var statearr_7559_7699 = state_7555__$1;
(statearr_7559_7699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7556 === (5))){
var state_7555__$1 = state_7555;
var statearr_7560_7700 = state_7555__$1;
(statearr_7560_7700[(2)] = null);

(statearr_7560_7700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7556 === (6))){
var state_7555__$1 = state_7555;
var statearr_7561_7701 = state_7555__$1;
(statearr_7561_7701[(2)] = null);

(statearr_7561_7701[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7556 === (7))){
var inst_7551 = (state_7555[(2)]);
var state_7555__$1 = state_7555;
var statearr_7562_7702 = state_7555__$1;
(statearr_7562_7702[(2)] = inst_7551);

(statearr_7562_7702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__7684,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
;
return ((function (__7684,switch__7029__auto__,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_7566 = [null,null,null,null,null,null,null];
(statearr_7566[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__);

(statearr_7566[(1)] = (1));

return statearr_7566;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1 = (function (state_7555){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7555);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7567){if((e7567 instanceof Object)){
var ex__7033__auto__ = e7567;
var statearr_7568_7703 = state_7555;
(statearr_7568_7703[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7704 = state_7555;
state_7555 = G__7704;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = function(state_7555){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1.call(this,state_7555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__;
})()
;})(__7684,switch__7029__auto__,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
})();
var state__7143__auto__ = (function (){var statearr_7569 = f__7142__auto__.call(null);
(statearr_7569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7696);

return statearr_7569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(__7684,c__7141__auto___7696,G__7515_7685,n__5572__auto___7683,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__7705 = (__7684 + (1));
__7684 = G__7705;
continue;
} else {
}
break;
}

var c__7141__auto___7706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___7706,jobs,results,process,async){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___7706,jobs,results,process,async){
return (function (state_7661){
var state_val_7662 = (state_7661[(1)]);
if((state_val_7662 === (1))){
var state_7661__$1 = state_7661;
var statearr_7663_7707 = state_7661__$1;
(statearr_7663_7707[(2)] = null);

(statearr_7663_7707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7662 === (2))){
var state_7661__$1 = state_7661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7661__$1,(4),from);
} else {
if((state_val_7662 === (3))){
var inst_7659 = (state_7661[(2)]);
var state_7661__$1 = state_7661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7661__$1,inst_7659);
} else {
if((state_val_7662 === (4))){
var inst_7642 = (state_7661[(7)]);
var inst_7642__$1 = (state_7661[(2)]);
var inst_7643 = (inst_7642__$1 == null);
var state_7661__$1 = (function (){var statearr_7664 = state_7661;
(statearr_7664[(7)] = inst_7642__$1);

return statearr_7664;
})();
if(cljs.core.truth_(inst_7643)){
var statearr_7665_7708 = state_7661__$1;
(statearr_7665_7708[(1)] = (5));

} else {
var statearr_7666_7709 = state_7661__$1;
(statearr_7666_7709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7662 === (5))){
var inst_7645 = cljs.core.async.close_BANG_.call(null,jobs);
var state_7661__$1 = state_7661;
var statearr_7667_7710 = state_7661__$1;
(statearr_7667_7710[(2)] = inst_7645);

(statearr_7667_7710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7662 === (6))){
var inst_7642 = (state_7661[(7)]);
var inst_7647 = (state_7661[(8)]);
var inst_7647__$1 = cljs.core.async.chan.call(null,(1));
var inst_7648 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_7649 = [inst_7642,inst_7647__$1];
var inst_7650 = (new cljs.core.PersistentVector(null,2,(5),inst_7648,inst_7649,null));
var state_7661__$1 = (function (){var statearr_7668 = state_7661;
(statearr_7668[(8)] = inst_7647__$1);

return statearr_7668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7661__$1,(8),jobs,inst_7650);
} else {
if((state_val_7662 === (7))){
var inst_7657 = (state_7661[(2)]);
var state_7661__$1 = state_7661;
var statearr_7669_7711 = state_7661__$1;
(statearr_7669_7711[(2)] = inst_7657);

(statearr_7669_7711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7662 === (8))){
var inst_7647 = (state_7661[(8)]);
var inst_7652 = (state_7661[(2)]);
var state_7661__$1 = (function (){var statearr_7670 = state_7661;
(statearr_7670[(9)] = inst_7652);

return statearr_7670;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7661__$1,(9),results,inst_7647);
} else {
if((state_val_7662 === (9))){
var inst_7654 = (state_7661[(2)]);
var state_7661__$1 = (function (){var statearr_7671 = state_7661;
(statearr_7671[(10)] = inst_7654);

return statearr_7671;
})();
var statearr_7672_7712 = state_7661__$1;
(statearr_7672_7712[(2)] = null);

(statearr_7672_7712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___7706,jobs,results,process,async))
;
return ((function (switch__7029__auto__,c__7141__auto___7706,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_7676 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_7676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__);

(statearr_7676[(1)] = (1));

return statearr_7676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1 = (function (state_7661){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7677){if((e7677 instanceof Object)){
var ex__7033__auto__ = e7677;
var statearr_7678_7713 = state_7661;
(statearr_7678_7713[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7714 = state_7661;
state_7661 = G__7714;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = function(state_7661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1.call(this,state_7661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___7706,jobs,results,process,async))
})();
var state__7143__auto__ = (function (){var statearr_7679 = f__7142__auto__.call(null);
(statearr_7679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7706);

return statearr_7679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___7706,jobs,results,process,async))
);


var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__,jobs,results,process,async){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__,jobs,results,process,async){
return (function (state_7607){
var state_val_7608 = (state_7607[(1)]);
if((state_val_7608 === (7))){
var inst_7603 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
var statearr_7609_7715 = state_7607__$1;
(statearr_7609_7715[(2)] = inst_7603);

(statearr_7609_7715[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (20))){
var state_7607__$1 = state_7607;
var statearr_7610_7716 = state_7607__$1;
(statearr_7610_7716[(2)] = null);

(statearr_7610_7716[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (1))){
var state_7607__$1 = state_7607;
var statearr_7611_7717 = state_7607__$1;
(statearr_7611_7717[(2)] = null);

(statearr_7611_7717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (4))){
var inst_7572 = (state_7607[(7)]);
var inst_7572__$1 = (state_7607[(2)]);
var inst_7573 = (inst_7572__$1 == null);
var state_7607__$1 = (function (){var statearr_7612 = state_7607;
(statearr_7612[(7)] = inst_7572__$1);

return statearr_7612;
})();
if(cljs.core.truth_(inst_7573)){
var statearr_7613_7718 = state_7607__$1;
(statearr_7613_7718[(1)] = (5));

} else {
var statearr_7614_7719 = state_7607__$1;
(statearr_7614_7719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (15))){
var inst_7585 = (state_7607[(8)]);
var state_7607__$1 = state_7607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7607__$1,(18),to,inst_7585);
} else {
if((state_val_7608 === (21))){
var inst_7598 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
var statearr_7615_7720 = state_7607__$1;
(statearr_7615_7720[(2)] = inst_7598);

(statearr_7615_7720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (13))){
var inst_7600 = (state_7607[(2)]);
var state_7607__$1 = (function (){var statearr_7616 = state_7607;
(statearr_7616[(9)] = inst_7600);

return statearr_7616;
})();
var statearr_7617_7721 = state_7607__$1;
(statearr_7617_7721[(2)] = null);

(statearr_7617_7721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (6))){
var inst_7572 = (state_7607[(7)]);
var state_7607__$1 = state_7607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7607__$1,(11),inst_7572);
} else {
if((state_val_7608 === (17))){
var inst_7593 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
if(cljs.core.truth_(inst_7593)){
var statearr_7618_7722 = state_7607__$1;
(statearr_7618_7722[(1)] = (19));

} else {
var statearr_7619_7723 = state_7607__$1;
(statearr_7619_7723[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (3))){
var inst_7605 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7607__$1,inst_7605);
} else {
if((state_val_7608 === (12))){
var inst_7582 = (state_7607[(10)]);
var state_7607__$1 = state_7607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7607__$1,(14),inst_7582);
} else {
if((state_val_7608 === (2))){
var state_7607__$1 = state_7607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7607__$1,(4),results);
} else {
if((state_val_7608 === (19))){
var state_7607__$1 = state_7607;
var statearr_7620_7724 = state_7607__$1;
(statearr_7620_7724[(2)] = null);

(statearr_7620_7724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (11))){
var inst_7582 = (state_7607[(2)]);
var state_7607__$1 = (function (){var statearr_7621 = state_7607;
(statearr_7621[(10)] = inst_7582);

return statearr_7621;
})();
var statearr_7622_7725 = state_7607__$1;
(statearr_7622_7725[(2)] = null);

(statearr_7622_7725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (9))){
var state_7607__$1 = state_7607;
var statearr_7623_7726 = state_7607__$1;
(statearr_7623_7726[(2)] = null);

(statearr_7623_7726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (5))){
var state_7607__$1 = state_7607;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7624_7727 = state_7607__$1;
(statearr_7624_7727[(1)] = (8));

} else {
var statearr_7625_7728 = state_7607__$1;
(statearr_7625_7728[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (14))){
var inst_7587 = (state_7607[(11)]);
var inst_7585 = (state_7607[(8)]);
var inst_7585__$1 = (state_7607[(2)]);
var inst_7586 = (inst_7585__$1 == null);
var inst_7587__$1 = cljs.core.not.call(null,inst_7586);
var state_7607__$1 = (function (){var statearr_7626 = state_7607;
(statearr_7626[(11)] = inst_7587__$1);

(statearr_7626[(8)] = inst_7585__$1);

return statearr_7626;
})();
if(inst_7587__$1){
var statearr_7627_7729 = state_7607__$1;
(statearr_7627_7729[(1)] = (15));

} else {
var statearr_7628_7730 = state_7607__$1;
(statearr_7628_7730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (16))){
var inst_7587 = (state_7607[(11)]);
var state_7607__$1 = state_7607;
var statearr_7629_7731 = state_7607__$1;
(statearr_7629_7731[(2)] = inst_7587);

(statearr_7629_7731[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (10))){
var inst_7579 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
var statearr_7630_7732 = state_7607__$1;
(statearr_7630_7732[(2)] = inst_7579);

(statearr_7630_7732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (18))){
var inst_7590 = (state_7607[(2)]);
var state_7607__$1 = state_7607;
var statearr_7631_7733 = state_7607__$1;
(statearr_7631_7733[(2)] = inst_7590);

(statearr_7631_7733[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7608 === (8))){
var inst_7576 = cljs.core.async.close_BANG_.call(null,to);
var state_7607__$1 = state_7607;
var statearr_7632_7734 = state_7607__$1;
(statearr_7632_7734[(2)] = inst_7576);

(statearr_7632_7734[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto__,jobs,results,process,async))
;
return ((function (switch__7029__auto__,c__7141__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_7636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__);

(statearr_7636[(1)] = (1));

return statearr_7636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1 = (function (state_7607){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7637){if((e7637 instanceof Object)){
var ex__7033__auto__ = e7637;
var statearr_7638_7735 = state_7607;
(statearr_7638_7735[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7736 = state_7607;
state_7607 = G__7736;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__ = function(state_7607){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1.call(this,state_7607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__,jobs,results,process,async))
})();
var state__7143__auto__ = (function (){var statearr_7639 = f__7142__auto__.call(null);
(statearr_7639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_7639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__,jobs,results,process,async))
);

return c__7141__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args7737 = [];
var len__5727__auto___7740 = arguments.length;
var i__5728__auto___7741 = (0);
while(true){
if((i__5728__auto___7741 < len__5727__auto___7740)){
args7737.push((arguments[i__5728__auto___7741]));

var G__7742 = (i__5728__auto___7741 + (1));
i__5728__auto___7741 = G__7742;
continue;
} else {
}
break;
}

var G__7739 = args7737.length;
switch (G__7739) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7737.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args7744 = [];
var len__5727__auto___7747 = arguments.length;
var i__5728__auto___7748 = (0);
while(true){
if((i__5728__auto___7748 < len__5727__auto___7747)){
args7744.push((arguments[i__5728__auto___7748]));

var G__7749 = (i__5728__auto___7748 + (1));
i__5728__auto___7748 = G__7749;
continue;
} else {
}
break;
}

var G__7746 = args7744.length;
switch (G__7746) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7744.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args7751 = [];
var len__5727__auto___7804 = arguments.length;
var i__5728__auto___7805 = (0);
while(true){
if((i__5728__auto___7805 < len__5727__auto___7804)){
args7751.push((arguments[i__5728__auto___7805]));

var G__7806 = (i__5728__auto___7805 + (1));
i__5728__auto___7805 = G__7806;
continue;
} else {
}
break;
}

var G__7753 = args7751.length;
switch (G__7753) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7751.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7141__auto___7808 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___7808,tc,fc){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___7808,tc,fc){
return (function (state_7779){
var state_val_7780 = (state_7779[(1)]);
if((state_val_7780 === (7))){
var inst_7775 = (state_7779[(2)]);
var state_7779__$1 = state_7779;
var statearr_7781_7809 = state_7779__$1;
(statearr_7781_7809[(2)] = inst_7775);

(statearr_7781_7809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (1))){
var state_7779__$1 = state_7779;
var statearr_7782_7810 = state_7779__$1;
(statearr_7782_7810[(2)] = null);

(statearr_7782_7810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (4))){
var inst_7756 = (state_7779[(7)]);
var inst_7756__$1 = (state_7779[(2)]);
var inst_7757 = (inst_7756__$1 == null);
var state_7779__$1 = (function (){var statearr_7783 = state_7779;
(statearr_7783[(7)] = inst_7756__$1);

return statearr_7783;
})();
if(cljs.core.truth_(inst_7757)){
var statearr_7784_7811 = state_7779__$1;
(statearr_7784_7811[(1)] = (5));

} else {
var statearr_7785_7812 = state_7779__$1;
(statearr_7785_7812[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (13))){
var state_7779__$1 = state_7779;
var statearr_7786_7813 = state_7779__$1;
(statearr_7786_7813[(2)] = null);

(statearr_7786_7813[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (6))){
var inst_7756 = (state_7779[(7)]);
var inst_7762 = p.call(null,inst_7756);
var state_7779__$1 = state_7779;
if(cljs.core.truth_(inst_7762)){
var statearr_7787_7814 = state_7779__$1;
(statearr_7787_7814[(1)] = (9));

} else {
var statearr_7788_7815 = state_7779__$1;
(statearr_7788_7815[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (3))){
var inst_7777 = (state_7779[(2)]);
var state_7779__$1 = state_7779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7779__$1,inst_7777);
} else {
if((state_val_7780 === (12))){
var state_7779__$1 = state_7779;
var statearr_7789_7816 = state_7779__$1;
(statearr_7789_7816[(2)] = null);

(statearr_7789_7816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (2))){
var state_7779__$1 = state_7779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7779__$1,(4),ch);
} else {
if((state_val_7780 === (11))){
var inst_7756 = (state_7779[(7)]);
var inst_7766 = (state_7779[(2)]);
var state_7779__$1 = state_7779;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7779__$1,(8),inst_7766,inst_7756);
} else {
if((state_val_7780 === (9))){
var state_7779__$1 = state_7779;
var statearr_7790_7817 = state_7779__$1;
(statearr_7790_7817[(2)] = tc);

(statearr_7790_7817[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (5))){
var inst_7759 = cljs.core.async.close_BANG_.call(null,tc);
var inst_7760 = cljs.core.async.close_BANG_.call(null,fc);
var state_7779__$1 = (function (){var statearr_7791 = state_7779;
(statearr_7791[(8)] = inst_7759);

return statearr_7791;
})();
var statearr_7792_7818 = state_7779__$1;
(statearr_7792_7818[(2)] = inst_7760);

(statearr_7792_7818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (14))){
var inst_7773 = (state_7779[(2)]);
var state_7779__$1 = state_7779;
var statearr_7793_7819 = state_7779__$1;
(statearr_7793_7819[(2)] = inst_7773);

(statearr_7793_7819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (10))){
var state_7779__$1 = state_7779;
var statearr_7794_7820 = state_7779__$1;
(statearr_7794_7820[(2)] = fc);

(statearr_7794_7820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7780 === (8))){
var inst_7768 = (state_7779[(2)]);
var state_7779__$1 = state_7779;
if(cljs.core.truth_(inst_7768)){
var statearr_7795_7821 = state_7779__$1;
(statearr_7795_7821[(1)] = (12));

} else {
var statearr_7796_7822 = state_7779__$1;
(statearr_7796_7822[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___7808,tc,fc))
;
return ((function (switch__7029__auto__,c__7141__auto___7808,tc,fc){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_7800 = [null,null,null,null,null,null,null,null,null];
(statearr_7800[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_7800[(1)] = (1));

return statearr_7800;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_7779){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7801){if((e7801 instanceof Object)){
var ex__7033__auto__ = e7801;
var statearr_7802_7823 = state_7779;
(statearr_7802_7823[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7824 = state_7779;
state_7779 = G__7824;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_7779){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_7779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___7808,tc,fc))
})();
var state__7143__auto__ = (function (){var statearr_7803 = f__7142__auto__.call(null);
(statearr_7803[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___7808);

return statearr_7803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___7808,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_7871){
var state_val_7872 = (state_7871[(1)]);
if((state_val_7872 === (1))){
var inst_7857 = init;
var state_7871__$1 = (function (){var statearr_7873 = state_7871;
(statearr_7873[(7)] = inst_7857);

return statearr_7873;
})();
var statearr_7874_7889 = state_7871__$1;
(statearr_7874_7889[(2)] = null);

(statearr_7874_7889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7872 === (2))){
var state_7871__$1 = state_7871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7871__$1,(4),ch);
} else {
if((state_val_7872 === (3))){
var inst_7869 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7871__$1,inst_7869);
} else {
if((state_val_7872 === (4))){
var inst_7860 = (state_7871[(8)]);
var inst_7860__$1 = (state_7871[(2)]);
var inst_7861 = (inst_7860__$1 == null);
var state_7871__$1 = (function (){var statearr_7875 = state_7871;
(statearr_7875[(8)] = inst_7860__$1);

return statearr_7875;
})();
if(cljs.core.truth_(inst_7861)){
var statearr_7876_7890 = state_7871__$1;
(statearr_7876_7890[(1)] = (5));

} else {
var statearr_7877_7891 = state_7871__$1;
(statearr_7877_7891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7872 === (5))){
var inst_7857 = (state_7871[(7)]);
var state_7871__$1 = state_7871;
var statearr_7878_7892 = state_7871__$1;
(statearr_7878_7892[(2)] = inst_7857);

(statearr_7878_7892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7872 === (6))){
var inst_7860 = (state_7871[(8)]);
var inst_7857 = (state_7871[(7)]);
var inst_7864 = f.call(null,inst_7857,inst_7860);
var inst_7857__$1 = inst_7864;
var state_7871__$1 = (function (){var statearr_7879 = state_7871;
(statearr_7879[(7)] = inst_7857__$1);

return statearr_7879;
})();
var statearr_7880_7893 = state_7871__$1;
(statearr_7880_7893[(2)] = null);

(statearr_7880_7893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7872 === (7))){
var inst_7867 = (state_7871[(2)]);
var state_7871__$1 = state_7871;
var statearr_7881_7894 = state_7871__$1;
(statearr_7881_7894[(2)] = inst_7867);

(statearr_7881_7894[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7030__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7030__auto____0 = (function (){
var statearr_7885 = [null,null,null,null,null,null,null,null,null];
(statearr_7885[(0)] = cljs$core$async$reduce_$_state_machine__7030__auto__);

(statearr_7885[(1)] = (1));

return statearr_7885;
});
var cljs$core$async$reduce_$_state_machine__7030__auto____1 = (function (state_7871){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7886){if((e7886 instanceof Object)){
var ex__7033__auto__ = e7886;
var statearr_7887_7895 = state_7871;
(statearr_7887_7895[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7886;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7896 = state_7871;
state_7871 = G__7896;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7030__auto__ = function(state_7871){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7030__auto____1.call(this,state_7871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7030__auto____0;
cljs$core$async$reduce_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7030__auto____1;
return cljs$core$async$reduce_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_7888 = f__7142__auto__.call(null);
(statearr_7888[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_7888;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args7897 = [];
var len__5727__auto___7949 = arguments.length;
var i__5728__auto___7950 = (0);
while(true){
if((i__5728__auto___7950 < len__5727__auto___7949)){
args7897.push((arguments[i__5728__auto___7950]));

var G__7951 = (i__5728__auto___7950 + (1));
i__5728__auto___7950 = G__7951;
continue;
} else {
}
break;
}

var G__7899 = args7897.length;
switch (G__7899) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7897.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_7924){
var state_val_7925 = (state_7924[(1)]);
if((state_val_7925 === (7))){
var inst_7906 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
var statearr_7926_7953 = state_7924__$1;
(statearr_7926_7953[(2)] = inst_7906);

(statearr_7926_7953[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (1))){
var inst_7900 = cljs.core.seq.call(null,coll);
var inst_7901 = inst_7900;
var state_7924__$1 = (function (){var statearr_7927 = state_7924;
(statearr_7927[(7)] = inst_7901);

return statearr_7927;
})();
var statearr_7928_7954 = state_7924__$1;
(statearr_7928_7954[(2)] = null);

(statearr_7928_7954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (4))){
var inst_7901 = (state_7924[(7)]);
var inst_7904 = cljs.core.first.call(null,inst_7901);
var state_7924__$1 = state_7924;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_7924__$1,(7),ch,inst_7904);
} else {
if((state_val_7925 === (13))){
var inst_7918 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
var statearr_7929_7955 = state_7924__$1;
(statearr_7929_7955[(2)] = inst_7918);

(statearr_7929_7955[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (6))){
var inst_7909 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
if(cljs.core.truth_(inst_7909)){
var statearr_7930_7956 = state_7924__$1;
(statearr_7930_7956[(1)] = (8));

} else {
var statearr_7931_7957 = state_7924__$1;
(statearr_7931_7957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (3))){
var inst_7922 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7924__$1,inst_7922);
} else {
if((state_val_7925 === (12))){
var state_7924__$1 = state_7924;
var statearr_7932_7958 = state_7924__$1;
(statearr_7932_7958[(2)] = null);

(statearr_7932_7958[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (2))){
var inst_7901 = (state_7924[(7)]);
var state_7924__$1 = state_7924;
if(cljs.core.truth_(inst_7901)){
var statearr_7933_7959 = state_7924__$1;
(statearr_7933_7959[(1)] = (4));

} else {
var statearr_7934_7960 = state_7924__$1;
(statearr_7934_7960[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (11))){
var inst_7915 = cljs.core.async.close_BANG_.call(null,ch);
var state_7924__$1 = state_7924;
var statearr_7935_7961 = state_7924__$1;
(statearr_7935_7961[(2)] = inst_7915);

(statearr_7935_7961[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (9))){
var state_7924__$1 = state_7924;
if(cljs.core.truth_(close_QMARK_)){
var statearr_7936_7962 = state_7924__$1;
(statearr_7936_7962[(1)] = (11));

} else {
var statearr_7937_7963 = state_7924__$1;
(statearr_7937_7963[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (5))){
var inst_7901 = (state_7924[(7)]);
var state_7924__$1 = state_7924;
var statearr_7938_7964 = state_7924__$1;
(statearr_7938_7964[(2)] = inst_7901);

(statearr_7938_7964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (10))){
var inst_7920 = (state_7924[(2)]);
var state_7924__$1 = state_7924;
var statearr_7939_7965 = state_7924__$1;
(statearr_7939_7965[(2)] = inst_7920);

(statearr_7939_7965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7925 === (8))){
var inst_7901 = (state_7924[(7)]);
var inst_7911 = cljs.core.next.call(null,inst_7901);
var inst_7901__$1 = inst_7911;
var state_7924__$1 = (function (){var statearr_7940 = state_7924;
(statearr_7940[(7)] = inst_7901__$1);

return statearr_7940;
})();
var statearr_7941_7966 = state_7924__$1;
(statearr_7941_7966[(2)] = null);

(statearr_7941_7966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_7945 = [null,null,null,null,null,null,null,null];
(statearr_7945[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_7945[(1)] = (1));

return statearr_7945;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_7924){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_7924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e7946){if((e7946 instanceof Object)){
var ex__7033__auto__ = e7946;
var statearr_7947_7967 = state_7924;
(statearr_7947_7967[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7968 = state_7924;
state_7924 = G__7968;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_7924){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_7924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_7948 = f__7142__auto__.call(null);
(statearr_7948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_7948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5324__auto__ = (((_ == null))?null:_);
var m__5325__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,_);
} else {
var m__5325__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5325__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,ch);
} else {
var m__5325__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m);
} else {
var m__5325__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8190 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8190 = (function (mult,ch,cs,meta8191){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta8191 = meta8191;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_8192,meta8191__$1){
var self__ = this;
var _8192__$1 = this;
return (new cljs.core.async.t_cljs$core$async8190(self__.mult,self__.ch,self__.cs,meta8191__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_8192){
var self__ = this;
var _8192__$1 = this;
return self__.meta8191;
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta8191","meta8191",1147085253,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async8190.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8190.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8190";

cljs.core.async.t_cljs$core$async8190.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async8190");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async8190 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async8190(mult__$1,ch__$1,cs__$1,meta8191){
return (new cljs.core.async.t_cljs$core$async8190(mult__$1,ch__$1,cs__$1,meta8191));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async8190(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7141__auto___8411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___8411,cs,m,dchan,dctr,done){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___8411,cs,m,dchan,dctr,done){
return (function (state_8323){
var state_val_8324 = (state_8323[(1)]);
if((state_val_8324 === (7))){
var inst_8319 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8325_8412 = state_8323__$1;
(statearr_8325_8412[(2)] = inst_8319);

(statearr_8325_8412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (20))){
var inst_8224 = (state_8323[(7)]);
var inst_8234 = cljs.core.first.call(null,inst_8224);
var inst_8235 = cljs.core.nth.call(null,inst_8234,(0),null);
var inst_8236 = cljs.core.nth.call(null,inst_8234,(1),null);
var state_8323__$1 = (function (){var statearr_8326 = state_8323;
(statearr_8326[(8)] = inst_8235);

return statearr_8326;
})();
if(cljs.core.truth_(inst_8236)){
var statearr_8327_8413 = state_8323__$1;
(statearr_8327_8413[(1)] = (22));

} else {
var statearr_8328_8414 = state_8323__$1;
(statearr_8328_8414[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (27))){
var inst_8266 = (state_8323[(9)]);
var inst_8271 = (state_8323[(10)]);
var inst_8195 = (state_8323[(11)]);
var inst_8264 = (state_8323[(12)]);
var inst_8271__$1 = cljs.core._nth.call(null,inst_8264,inst_8266);
var inst_8272 = cljs.core.async.put_BANG_.call(null,inst_8271__$1,inst_8195,done);
var state_8323__$1 = (function (){var statearr_8329 = state_8323;
(statearr_8329[(10)] = inst_8271__$1);

return statearr_8329;
})();
if(cljs.core.truth_(inst_8272)){
var statearr_8330_8415 = state_8323__$1;
(statearr_8330_8415[(1)] = (30));

} else {
var statearr_8331_8416 = state_8323__$1;
(statearr_8331_8416[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (1))){
var state_8323__$1 = state_8323;
var statearr_8332_8417 = state_8323__$1;
(statearr_8332_8417[(2)] = null);

(statearr_8332_8417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (24))){
var inst_8224 = (state_8323[(7)]);
var inst_8241 = (state_8323[(2)]);
var inst_8242 = cljs.core.next.call(null,inst_8224);
var inst_8204 = inst_8242;
var inst_8205 = null;
var inst_8206 = (0);
var inst_8207 = (0);
var state_8323__$1 = (function (){var statearr_8333 = state_8323;
(statearr_8333[(13)] = inst_8207);

(statearr_8333[(14)] = inst_8206);

(statearr_8333[(15)] = inst_8204);

(statearr_8333[(16)] = inst_8205);

(statearr_8333[(17)] = inst_8241);

return statearr_8333;
})();
var statearr_8334_8418 = state_8323__$1;
(statearr_8334_8418[(2)] = null);

(statearr_8334_8418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (39))){
var state_8323__$1 = state_8323;
var statearr_8338_8419 = state_8323__$1;
(statearr_8338_8419[(2)] = null);

(statearr_8338_8419[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (4))){
var inst_8195 = (state_8323[(11)]);
var inst_8195__$1 = (state_8323[(2)]);
var inst_8196 = (inst_8195__$1 == null);
var state_8323__$1 = (function (){var statearr_8339 = state_8323;
(statearr_8339[(11)] = inst_8195__$1);

return statearr_8339;
})();
if(cljs.core.truth_(inst_8196)){
var statearr_8340_8420 = state_8323__$1;
(statearr_8340_8420[(1)] = (5));

} else {
var statearr_8341_8421 = state_8323__$1;
(statearr_8341_8421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (15))){
var inst_8207 = (state_8323[(13)]);
var inst_8206 = (state_8323[(14)]);
var inst_8204 = (state_8323[(15)]);
var inst_8205 = (state_8323[(16)]);
var inst_8220 = (state_8323[(2)]);
var inst_8221 = (inst_8207 + (1));
var tmp8335 = inst_8206;
var tmp8336 = inst_8204;
var tmp8337 = inst_8205;
var inst_8204__$1 = tmp8336;
var inst_8205__$1 = tmp8337;
var inst_8206__$1 = tmp8335;
var inst_8207__$1 = inst_8221;
var state_8323__$1 = (function (){var statearr_8342 = state_8323;
(statearr_8342[(13)] = inst_8207__$1);

(statearr_8342[(14)] = inst_8206__$1);

(statearr_8342[(15)] = inst_8204__$1);

(statearr_8342[(16)] = inst_8205__$1);

(statearr_8342[(19)] = inst_8220);

return statearr_8342;
})();
var statearr_8343_8422 = state_8323__$1;
(statearr_8343_8422[(2)] = null);

(statearr_8343_8422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (21))){
var inst_8245 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8347_8423 = state_8323__$1;
(statearr_8347_8423[(2)] = inst_8245);

(statearr_8347_8423[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (31))){
var inst_8271 = (state_8323[(10)]);
var inst_8275 = done.call(null,null);
var inst_8276 = cljs.core.async.untap_STAR_.call(null,m,inst_8271);
var state_8323__$1 = (function (){var statearr_8348 = state_8323;
(statearr_8348[(18)] = inst_8275);

return statearr_8348;
})();
var statearr_8349_8424 = state_8323__$1;
(statearr_8349_8424[(2)] = inst_8276);

(statearr_8349_8424[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (32))){
var inst_8266 = (state_8323[(9)]);
var inst_8265 = (state_8323[(20)]);
var inst_8263 = (state_8323[(21)]);
var inst_8264 = (state_8323[(12)]);
var inst_8278 = (state_8323[(2)]);
var inst_8279 = (inst_8266 + (1));
var tmp8344 = inst_8265;
var tmp8345 = inst_8263;
var tmp8346 = inst_8264;
var inst_8263__$1 = tmp8345;
var inst_8264__$1 = tmp8346;
var inst_8265__$1 = tmp8344;
var inst_8266__$1 = inst_8279;
var state_8323__$1 = (function (){var statearr_8350 = state_8323;
(statearr_8350[(9)] = inst_8266__$1);

(statearr_8350[(25)] = inst_8278);

(statearr_8350[(20)] = inst_8265__$1);

(statearr_8350[(21)] = inst_8263__$1);

(statearr_8350[(12)] = inst_8264__$1);

return statearr_8350;
})();
var statearr_8351_8425 = state_8323__$1;
(statearr_8351_8425[(2)] = null);

(statearr_8351_8425[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (40))){
var inst_8291 = (state_8323[(22)]);
var inst_8295 = done.call(null,null);
var inst_8296 = cljs.core.async.untap_STAR_.call(null,m,inst_8291);
var state_8323__$1 = (function (){var statearr_8352 = state_8323;
(statearr_8352[(23)] = inst_8295);

return statearr_8352;
})();
var statearr_8353_8426 = state_8323__$1;
(statearr_8353_8426[(2)] = inst_8296);

(statearr_8353_8426[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (33))){
var inst_8282 = (state_8323[(24)]);
var inst_8284 = cljs.core.chunked_seq_QMARK_.call(null,inst_8282);
var state_8323__$1 = state_8323;
if(inst_8284){
var statearr_8354_8427 = state_8323__$1;
(statearr_8354_8427[(1)] = (36));

} else {
var statearr_8355_8428 = state_8323__$1;
(statearr_8355_8428[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (13))){
var inst_8214 = (state_8323[(26)]);
var inst_8217 = cljs.core.async.close_BANG_.call(null,inst_8214);
var state_8323__$1 = state_8323;
var statearr_8356_8429 = state_8323__$1;
(statearr_8356_8429[(2)] = inst_8217);

(statearr_8356_8429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (22))){
var inst_8235 = (state_8323[(8)]);
var inst_8238 = cljs.core.async.close_BANG_.call(null,inst_8235);
var state_8323__$1 = state_8323;
var statearr_8357_8430 = state_8323__$1;
(statearr_8357_8430[(2)] = inst_8238);

(statearr_8357_8430[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (36))){
var inst_8282 = (state_8323[(24)]);
var inst_8286 = cljs.core.chunk_first.call(null,inst_8282);
var inst_8287 = cljs.core.chunk_rest.call(null,inst_8282);
var inst_8288 = cljs.core.count.call(null,inst_8286);
var inst_8263 = inst_8287;
var inst_8264 = inst_8286;
var inst_8265 = inst_8288;
var inst_8266 = (0);
var state_8323__$1 = (function (){var statearr_8358 = state_8323;
(statearr_8358[(9)] = inst_8266);

(statearr_8358[(20)] = inst_8265);

(statearr_8358[(21)] = inst_8263);

(statearr_8358[(12)] = inst_8264);

return statearr_8358;
})();
var statearr_8359_8431 = state_8323__$1;
(statearr_8359_8431[(2)] = null);

(statearr_8359_8431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (41))){
var inst_8282 = (state_8323[(24)]);
var inst_8298 = (state_8323[(2)]);
var inst_8299 = cljs.core.next.call(null,inst_8282);
var inst_8263 = inst_8299;
var inst_8264 = null;
var inst_8265 = (0);
var inst_8266 = (0);
var state_8323__$1 = (function (){var statearr_8360 = state_8323;
(statearr_8360[(9)] = inst_8266);

(statearr_8360[(20)] = inst_8265);

(statearr_8360[(27)] = inst_8298);

(statearr_8360[(21)] = inst_8263);

(statearr_8360[(12)] = inst_8264);

return statearr_8360;
})();
var statearr_8361_8432 = state_8323__$1;
(statearr_8361_8432[(2)] = null);

(statearr_8361_8432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (43))){
var state_8323__$1 = state_8323;
var statearr_8362_8433 = state_8323__$1;
(statearr_8362_8433[(2)] = null);

(statearr_8362_8433[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (29))){
var inst_8307 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8363_8434 = state_8323__$1;
(statearr_8363_8434[(2)] = inst_8307);

(statearr_8363_8434[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (44))){
var inst_8316 = (state_8323[(2)]);
var state_8323__$1 = (function (){var statearr_8364 = state_8323;
(statearr_8364[(28)] = inst_8316);

return statearr_8364;
})();
var statearr_8365_8435 = state_8323__$1;
(statearr_8365_8435[(2)] = null);

(statearr_8365_8435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (6))){
var inst_8255 = (state_8323[(29)]);
var inst_8254 = cljs.core.deref.call(null,cs);
var inst_8255__$1 = cljs.core.keys.call(null,inst_8254);
var inst_8256 = cljs.core.count.call(null,inst_8255__$1);
var inst_8257 = cljs.core.reset_BANG_.call(null,dctr,inst_8256);
var inst_8262 = cljs.core.seq.call(null,inst_8255__$1);
var inst_8263 = inst_8262;
var inst_8264 = null;
var inst_8265 = (0);
var inst_8266 = (0);
var state_8323__$1 = (function (){var statearr_8366 = state_8323;
(statearr_8366[(29)] = inst_8255__$1);

(statearr_8366[(9)] = inst_8266);

(statearr_8366[(20)] = inst_8265);

(statearr_8366[(21)] = inst_8263);

(statearr_8366[(30)] = inst_8257);

(statearr_8366[(12)] = inst_8264);

return statearr_8366;
})();
var statearr_8367_8436 = state_8323__$1;
(statearr_8367_8436[(2)] = null);

(statearr_8367_8436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (28))){
var inst_8263 = (state_8323[(21)]);
var inst_8282 = (state_8323[(24)]);
var inst_8282__$1 = cljs.core.seq.call(null,inst_8263);
var state_8323__$1 = (function (){var statearr_8368 = state_8323;
(statearr_8368[(24)] = inst_8282__$1);

return statearr_8368;
})();
if(inst_8282__$1){
var statearr_8369_8437 = state_8323__$1;
(statearr_8369_8437[(1)] = (33));

} else {
var statearr_8370_8438 = state_8323__$1;
(statearr_8370_8438[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (25))){
var inst_8266 = (state_8323[(9)]);
var inst_8265 = (state_8323[(20)]);
var inst_8268 = (inst_8266 < inst_8265);
var inst_8269 = inst_8268;
var state_8323__$1 = state_8323;
if(cljs.core.truth_(inst_8269)){
var statearr_8371_8439 = state_8323__$1;
(statearr_8371_8439[(1)] = (27));

} else {
var statearr_8372_8440 = state_8323__$1;
(statearr_8372_8440[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (34))){
var state_8323__$1 = state_8323;
var statearr_8373_8441 = state_8323__$1;
(statearr_8373_8441[(2)] = null);

(statearr_8373_8441[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (17))){
var state_8323__$1 = state_8323;
var statearr_8374_8442 = state_8323__$1;
(statearr_8374_8442[(2)] = null);

(statearr_8374_8442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (3))){
var inst_8321 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8323__$1,inst_8321);
} else {
if((state_val_8324 === (12))){
var inst_8250 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8375_8443 = state_8323__$1;
(statearr_8375_8443[(2)] = inst_8250);

(statearr_8375_8443[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (2))){
var state_8323__$1 = state_8323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8323__$1,(4),ch);
} else {
if((state_val_8324 === (23))){
var state_8323__$1 = state_8323;
var statearr_8376_8444 = state_8323__$1;
(statearr_8376_8444[(2)] = null);

(statearr_8376_8444[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (35))){
var inst_8305 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8377_8445 = state_8323__$1;
(statearr_8377_8445[(2)] = inst_8305);

(statearr_8377_8445[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (19))){
var inst_8224 = (state_8323[(7)]);
var inst_8228 = cljs.core.chunk_first.call(null,inst_8224);
var inst_8229 = cljs.core.chunk_rest.call(null,inst_8224);
var inst_8230 = cljs.core.count.call(null,inst_8228);
var inst_8204 = inst_8229;
var inst_8205 = inst_8228;
var inst_8206 = inst_8230;
var inst_8207 = (0);
var state_8323__$1 = (function (){var statearr_8378 = state_8323;
(statearr_8378[(13)] = inst_8207);

(statearr_8378[(14)] = inst_8206);

(statearr_8378[(15)] = inst_8204);

(statearr_8378[(16)] = inst_8205);

return statearr_8378;
})();
var statearr_8379_8446 = state_8323__$1;
(statearr_8379_8446[(2)] = null);

(statearr_8379_8446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (11))){
var inst_8224 = (state_8323[(7)]);
var inst_8204 = (state_8323[(15)]);
var inst_8224__$1 = cljs.core.seq.call(null,inst_8204);
var state_8323__$1 = (function (){var statearr_8380 = state_8323;
(statearr_8380[(7)] = inst_8224__$1);

return statearr_8380;
})();
if(inst_8224__$1){
var statearr_8381_8447 = state_8323__$1;
(statearr_8381_8447[(1)] = (16));

} else {
var statearr_8382_8448 = state_8323__$1;
(statearr_8382_8448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (9))){
var inst_8252 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8383_8449 = state_8323__$1;
(statearr_8383_8449[(2)] = inst_8252);

(statearr_8383_8449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (5))){
var inst_8202 = cljs.core.deref.call(null,cs);
var inst_8203 = cljs.core.seq.call(null,inst_8202);
var inst_8204 = inst_8203;
var inst_8205 = null;
var inst_8206 = (0);
var inst_8207 = (0);
var state_8323__$1 = (function (){var statearr_8384 = state_8323;
(statearr_8384[(13)] = inst_8207);

(statearr_8384[(14)] = inst_8206);

(statearr_8384[(15)] = inst_8204);

(statearr_8384[(16)] = inst_8205);

return statearr_8384;
})();
var statearr_8385_8450 = state_8323__$1;
(statearr_8385_8450[(2)] = null);

(statearr_8385_8450[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (14))){
var state_8323__$1 = state_8323;
var statearr_8386_8451 = state_8323__$1;
(statearr_8386_8451[(2)] = null);

(statearr_8386_8451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (45))){
var inst_8313 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8387_8452 = state_8323__$1;
(statearr_8387_8452[(2)] = inst_8313);

(statearr_8387_8452[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (26))){
var inst_8255 = (state_8323[(29)]);
var inst_8309 = (state_8323[(2)]);
var inst_8310 = cljs.core.seq.call(null,inst_8255);
var state_8323__$1 = (function (){var statearr_8388 = state_8323;
(statearr_8388[(31)] = inst_8309);

return statearr_8388;
})();
if(inst_8310){
var statearr_8389_8453 = state_8323__$1;
(statearr_8389_8453[(1)] = (42));

} else {
var statearr_8390_8454 = state_8323__$1;
(statearr_8390_8454[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (16))){
var inst_8224 = (state_8323[(7)]);
var inst_8226 = cljs.core.chunked_seq_QMARK_.call(null,inst_8224);
var state_8323__$1 = state_8323;
if(inst_8226){
var statearr_8391_8455 = state_8323__$1;
(statearr_8391_8455[(1)] = (19));

} else {
var statearr_8392_8456 = state_8323__$1;
(statearr_8392_8456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (38))){
var inst_8302 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8393_8457 = state_8323__$1;
(statearr_8393_8457[(2)] = inst_8302);

(statearr_8393_8457[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (30))){
var state_8323__$1 = state_8323;
var statearr_8394_8458 = state_8323__$1;
(statearr_8394_8458[(2)] = null);

(statearr_8394_8458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (10))){
var inst_8207 = (state_8323[(13)]);
var inst_8205 = (state_8323[(16)]);
var inst_8213 = cljs.core._nth.call(null,inst_8205,inst_8207);
var inst_8214 = cljs.core.nth.call(null,inst_8213,(0),null);
var inst_8215 = cljs.core.nth.call(null,inst_8213,(1),null);
var state_8323__$1 = (function (){var statearr_8395 = state_8323;
(statearr_8395[(26)] = inst_8214);

return statearr_8395;
})();
if(cljs.core.truth_(inst_8215)){
var statearr_8396_8459 = state_8323__$1;
(statearr_8396_8459[(1)] = (13));

} else {
var statearr_8397_8460 = state_8323__$1;
(statearr_8397_8460[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (18))){
var inst_8248 = (state_8323[(2)]);
var state_8323__$1 = state_8323;
var statearr_8398_8461 = state_8323__$1;
(statearr_8398_8461[(2)] = inst_8248);

(statearr_8398_8461[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (42))){
var state_8323__$1 = state_8323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8323__$1,(45),dchan);
} else {
if((state_val_8324 === (37))){
var inst_8195 = (state_8323[(11)]);
var inst_8291 = (state_8323[(22)]);
var inst_8282 = (state_8323[(24)]);
var inst_8291__$1 = cljs.core.first.call(null,inst_8282);
var inst_8292 = cljs.core.async.put_BANG_.call(null,inst_8291__$1,inst_8195,done);
var state_8323__$1 = (function (){var statearr_8399 = state_8323;
(statearr_8399[(22)] = inst_8291__$1);

return statearr_8399;
})();
if(cljs.core.truth_(inst_8292)){
var statearr_8400_8462 = state_8323__$1;
(statearr_8400_8462[(1)] = (39));

} else {
var statearr_8401_8463 = state_8323__$1;
(statearr_8401_8463[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8324 === (8))){
var inst_8207 = (state_8323[(13)]);
var inst_8206 = (state_8323[(14)]);
var inst_8209 = (inst_8207 < inst_8206);
var inst_8210 = inst_8209;
var state_8323__$1 = state_8323;
if(cljs.core.truth_(inst_8210)){
var statearr_8402_8464 = state_8323__$1;
(statearr_8402_8464[(1)] = (10));

} else {
var statearr_8403_8465 = state_8323__$1;
(statearr_8403_8465[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___8411,cs,m,dchan,dctr,done))
;
return ((function (switch__7029__auto__,c__7141__auto___8411,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7030__auto__ = null;
var cljs$core$async$mult_$_state_machine__7030__auto____0 = (function (){
var statearr_8407 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8407[(0)] = cljs$core$async$mult_$_state_machine__7030__auto__);

(statearr_8407[(1)] = (1));

return statearr_8407;
});
var cljs$core$async$mult_$_state_machine__7030__auto____1 = (function (state_8323){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_8323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e8408){if((e8408 instanceof Object)){
var ex__7033__auto__ = e8408;
var statearr_8409_8466 = state_8323;
(statearr_8409_8466[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8467 = state_8323;
state_8323 = G__8467;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7030__auto__ = function(state_8323){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7030__auto____1.call(this,state_8323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7030__auto____0;
cljs$core$async$mult_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7030__auto____1;
return cljs$core$async$mult_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___8411,cs,m,dchan,dctr,done))
})();
var state__7143__auto__ = (function (){var statearr_8410 = f__7142__auto__.call(null);
(statearr_8410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___8411);

return statearr_8410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___8411,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args8468 = [];
var len__5727__auto___8471 = arguments.length;
var i__5728__auto___8472 = (0);
while(true){
if((i__5728__auto___8472 < len__5727__auto___8471)){
args8468.push((arguments[i__5728__auto___8472]));

var G__8473 = (i__5728__auto___8472 + (1));
i__5728__auto___8472 = G__8473;
continue;
} else {
}
break;
}

var G__8470 = args8468.length;
switch (G__8470) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8468.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,ch);
} else {
var m__5325__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,ch);
} else {
var m__5325__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m);
} else {
var m__5325__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,state_map);
} else {
var m__5325__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5324__auto__ = (((m == null))?null:m);
var m__5325__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,m,mode);
} else {
var m__5325__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5734__auto__ = [];
var len__5727__auto___8485 = arguments.length;
var i__5728__auto___8486 = (0);
while(true){
if((i__5728__auto___8486 < len__5727__auto___8485)){
args__5734__auto__.push((arguments[i__5728__auto___8486]));

var G__8487 = (i__5728__auto___8486 + (1));
i__5728__auto___8486 = G__8487;
continue;
} else {
}
break;
}

var argseq__5735__auto__ = ((((3) < args__5734__auto__.length))?(new cljs.core.IndexedSeq(args__5734__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5735__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__8479){
var map__8480 = p__8479;
var map__8480__$1 = ((((!((map__8480 == null)))?((((map__8480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8480):map__8480);
var opts = map__8480__$1;
var statearr_8482_8488 = state;
(statearr_8482_8488[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__8480,map__8480__$1,opts){
return (function (val){
var statearr_8483_8489 = state;
(statearr_8483_8489[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__8480,map__8480__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_8484_8490 = state;
(statearr_8484_8490[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq8475){
var G__8476 = cljs.core.first.call(null,seq8475);
var seq8475__$1 = cljs.core.next.call(null,seq8475);
var G__8477 = cljs.core.first.call(null,seq8475__$1);
var seq8475__$2 = cljs.core.next.call(null,seq8475__$1);
var G__8478 = cljs.core.first.call(null,seq8475__$2);
var seq8475__$3 = cljs.core.next.call(null,seq8475__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__8476,G__8477,G__8478,seq8475__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async8654 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8654 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta8655){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta8655 = meta8655;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8656,meta8655__$1){
var self__ = this;
var _8656__$1 = this;
return (new cljs.core.async.t_cljs$core$async8654(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta8655__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_8656){
var self__ = this;
var _8656__$1 = this;
return self__.meta8655;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta8655","meta8655",371552465,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async8654.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8654.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8654";

cljs.core.async.t_cljs$core$async8654.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async8654");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async8654 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async8654(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8655){
return (new cljs.core.async.t_cljs$core$async8654(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta8655));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async8654(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7141__auto___8817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_8754){
var state_val_8755 = (state_8754[(1)]);
if((state_val_8755 === (7))){
var inst_8672 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
var statearr_8756_8818 = state_8754__$1;
(statearr_8756_8818[(2)] = inst_8672);

(statearr_8756_8818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (20))){
var inst_8684 = (state_8754[(7)]);
var state_8754__$1 = state_8754;
var statearr_8757_8819 = state_8754__$1;
(statearr_8757_8819[(2)] = inst_8684);

(statearr_8757_8819[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (27))){
var state_8754__$1 = state_8754;
var statearr_8758_8820 = state_8754__$1;
(statearr_8758_8820[(2)] = null);

(statearr_8758_8820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (1))){
var inst_8660 = (state_8754[(8)]);
var inst_8660__$1 = calc_state.call(null);
var inst_8662 = (inst_8660__$1 == null);
var inst_8663 = cljs.core.not.call(null,inst_8662);
var state_8754__$1 = (function (){var statearr_8759 = state_8754;
(statearr_8759[(8)] = inst_8660__$1);

return statearr_8759;
})();
if(inst_8663){
var statearr_8760_8821 = state_8754__$1;
(statearr_8760_8821[(1)] = (2));

} else {
var statearr_8761_8822 = state_8754__$1;
(statearr_8761_8822[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (24))){
var inst_8714 = (state_8754[(9)]);
var inst_8728 = (state_8754[(10)]);
var inst_8707 = (state_8754[(11)]);
var inst_8728__$1 = inst_8707.call(null,inst_8714);
var state_8754__$1 = (function (){var statearr_8762 = state_8754;
(statearr_8762[(10)] = inst_8728__$1);

return statearr_8762;
})();
if(cljs.core.truth_(inst_8728__$1)){
var statearr_8763_8823 = state_8754__$1;
(statearr_8763_8823[(1)] = (29));

} else {
var statearr_8764_8824 = state_8754__$1;
(statearr_8764_8824[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (4))){
var inst_8675 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8675)){
var statearr_8765_8825 = state_8754__$1;
(statearr_8765_8825[(1)] = (8));

} else {
var statearr_8766_8826 = state_8754__$1;
(statearr_8766_8826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (15))){
var inst_8701 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8701)){
var statearr_8767_8827 = state_8754__$1;
(statearr_8767_8827[(1)] = (19));

} else {
var statearr_8768_8828 = state_8754__$1;
(statearr_8768_8828[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (21))){
var inst_8706 = (state_8754[(12)]);
var inst_8706__$1 = (state_8754[(2)]);
var inst_8707 = cljs.core.get.call(null,inst_8706__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8708 = cljs.core.get.call(null,inst_8706__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8709 = cljs.core.get.call(null,inst_8706__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_8754__$1 = (function (){var statearr_8769 = state_8754;
(statearr_8769[(12)] = inst_8706__$1);

(statearr_8769[(11)] = inst_8707);

(statearr_8769[(14)] = inst_8708);

return statearr_8769;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_8754__$1,(22),inst_8709);
} else {
if((state_val_8755 === (31))){
var inst_8736 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8736)){
var statearr_8770_8829 = state_8754__$1;
(statearr_8770_8829[(1)] = (32));

} else {
var statearr_8771_8830 = state_8754__$1;
(statearr_8771_8830[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (32))){
var inst_8713 = (state_8754[(13)]);
var state_8754__$1 = state_8754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8754__$1,(35),out,inst_8713);
} else {
if((state_val_8755 === (33))){
var inst_8706 = (state_8754[(12)]);
var inst_8684 = inst_8706;
var state_8754__$1 = (function (){var statearr_8772 = state_8754;
(statearr_8772[(7)] = inst_8684);

return statearr_8772;
})();
var statearr_8773_8831 = state_8754__$1;
(statearr_8773_8831[(2)] = null);

(statearr_8773_8831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (13))){
var inst_8684 = (state_8754[(7)]);
var inst_8691 = inst_8684.cljs$lang$protocol_mask$partition0$;
var inst_8692 = (inst_8691 & (64));
var inst_8693 = inst_8684.cljs$core$ISeq$;
var inst_8694 = (inst_8692) || (inst_8693);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8694)){
var statearr_8774_8832 = state_8754__$1;
(statearr_8774_8832[(1)] = (16));

} else {
var statearr_8775_8833 = state_8754__$1;
(statearr_8775_8833[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (22))){
var inst_8714 = (state_8754[(9)]);
var inst_8713 = (state_8754[(13)]);
var inst_8712 = (state_8754[(2)]);
var inst_8713__$1 = cljs.core.nth.call(null,inst_8712,(0),null);
var inst_8714__$1 = cljs.core.nth.call(null,inst_8712,(1),null);
var inst_8715 = (inst_8713__$1 == null);
var inst_8716 = cljs.core._EQ_.call(null,inst_8714__$1,change);
var inst_8717 = (inst_8715) || (inst_8716);
var state_8754__$1 = (function (){var statearr_8776 = state_8754;
(statearr_8776[(9)] = inst_8714__$1);

(statearr_8776[(13)] = inst_8713__$1);

return statearr_8776;
})();
if(cljs.core.truth_(inst_8717)){
var statearr_8777_8834 = state_8754__$1;
(statearr_8777_8834[(1)] = (23));

} else {
var statearr_8778_8835 = state_8754__$1;
(statearr_8778_8835[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (36))){
var inst_8706 = (state_8754[(12)]);
var inst_8684 = inst_8706;
var state_8754__$1 = (function (){var statearr_8779 = state_8754;
(statearr_8779[(7)] = inst_8684);

return statearr_8779;
})();
var statearr_8780_8836 = state_8754__$1;
(statearr_8780_8836[(2)] = null);

(statearr_8780_8836[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (29))){
var inst_8728 = (state_8754[(10)]);
var state_8754__$1 = state_8754;
var statearr_8781_8837 = state_8754__$1;
(statearr_8781_8837[(2)] = inst_8728);

(statearr_8781_8837[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (6))){
var state_8754__$1 = state_8754;
var statearr_8782_8838 = state_8754__$1;
(statearr_8782_8838[(2)] = false);

(statearr_8782_8838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (28))){
var inst_8724 = (state_8754[(2)]);
var inst_8725 = calc_state.call(null);
var inst_8684 = inst_8725;
var state_8754__$1 = (function (){var statearr_8783 = state_8754;
(statearr_8783[(15)] = inst_8724);

(statearr_8783[(7)] = inst_8684);

return statearr_8783;
})();
var statearr_8784_8839 = state_8754__$1;
(statearr_8784_8839[(2)] = null);

(statearr_8784_8839[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (25))){
var inst_8750 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
var statearr_8785_8840 = state_8754__$1;
(statearr_8785_8840[(2)] = inst_8750);

(statearr_8785_8840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (34))){
var inst_8748 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
var statearr_8786_8841 = state_8754__$1;
(statearr_8786_8841[(2)] = inst_8748);

(statearr_8786_8841[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (17))){
var state_8754__$1 = state_8754;
var statearr_8787_8842 = state_8754__$1;
(statearr_8787_8842[(2)] = false);

(statearr_8787_8842[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (3))){
var state_8754__$1 = state_8754;
var statearr_8788_8843 = state_8754__$1;
(statearr_8788_8843[(2)] = false);

(statearr_8788_8843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (12))){
var inst_8752 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8754__$1,inst_8752);
} else {
if((state_val_8755 === (2))){
var inst_8660 = (state_8754[(8)]);
var inst_8665 = inst_8660.cljs$lang$protocol_mask$partition0$;
var inst_8666 = (inst_8665 & (64));
var inst_8667 = inst_8660.cljs$core$ISeq$;
var inst_8668 = (inst_8666) || (inst_8667);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8668)){
var statearr_8789_8844 = state_8754__$1;
(statearr_8789_8844[(1)] = (5));

} else {
var statearr_8790_8845 = state_8754__$1;
(statearr_8790_8845[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (23))){
var inst_8713 = (state_8754[(13)]);
var inst_8719 = (inst_8713 == null);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8719)){
var statearr_8791_8846 = state_8754__$1;
(statearr_8791_8846[(1)] = (26));

} else {
var statearr_8792_8847 = state_8754__$1;
(statearr_8792_8847[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (35))){
var inst_8739 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
if(cljs.core.truth_(inst_8739)){
var statearr_8793_8848 = state_8754__$1;
(statearr_8793_8848[(1)] = (36));

} else {
var statearr_8794_8849 = state_8754__$1;
(statearr_8794_8849[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (19))){
var inst_8684 = (state_8754[(7)]);
var inst_8703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8684);
var state_8754__$1 = state_8754;
var statearr_8795_8850 = state_8754__$1;
(statearr_8795_8850[(2)] = inst_8703);

(statearr_8795_8850[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (11))){
var inst_8684 = (state_8754[(7)]);
var inst_8688 = (inst_8684 == null);
var inst_8689 = cljs.core.not.call(null,inst_8688);
var state_8754__$1 = state_8754;
if(inst_8689){
var statearr_8796_8851 = state_8754__$1;
(statearr_8796_8851[(1)] = (13));

} else {
var statearr_8797_8852 = state_8754__$1;
(statearr_8797_8852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (9))){
var inst_8660 = (state_8754[(8)]);
var state_8754__$1 = state_8754;
var statearr_8798_8853 = state_8754__$1;
(statearr_8798_8853[(2)] = inst_8660);

(statearr_8798_8853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (5))){
var state_8754__$1 = state_8754;
var statearr_8799_8854 = state_8754__$1;
(statearr_8799_8854[(2)] = true);

(statearr_8799_8854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (14))){
var state_8754__$1 = state_8754;
var statearr_8800_8855 = state_8754__$1;
(statearr_8800_8855[(2)] = false);

(statearr_8800_8855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (26))){
var inst_8714 = (state_8754[(9)]);
var inst_8721 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_8714);
var state_8754__$1 = state_8754;
var statearr_8801_8856 = state_8754__$1;
(statearr_8801_8856[(2)] = inst_8721);

(statearr_8801_8856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (16))){
var state_8754__$1 = state_8754;
var statearr_8802_8857 = state_8754__$1;
(statearr_8802_8857[(2)] = true);

(statearr_8802_8857[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (38))){
var inst_8744 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
var statearr_8803_8858 = state_8754__$1;
(statearr_8803_8858[(2)] = inst_8744);

(statearr_8803_8858[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (30))){
var inst_8714 = (state_8754[(9)]);
var inst_8707 = (state_8754[(11)]);
var inst_8708 = (state_8754[(14)]);
var inst_8731 = cljs.core.empty_QMARK_.call(null,inst_8707);
var inst_8732 = inst_8708.call(null,inst_8714);
var inst_8733 = cljs.core.not.call(null,inst_8732);
var inst_8734 = (inst_8731) && (inst_8733);
var state_8754__$1 = state_8754;
var statearr_8804_8859 = state_8754__$1;
(statearr_8804_8859[(2)] = inst_8734);

(statearr_8804_8859[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (10))){
var inst_8660 = (state_8754[(8)]);
var inst_8680 = (state_8754[(2)]);
var inst_8681 = cljs.core.get.call(null,inst_8680,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_8682 = cljs.core.get.call(null,inst_8680,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_8683 = cljs.core.get.call(null,inst_8680,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_8684 = inst_8660;
var state_8754__$1 = (function (){var statearr_8805 = state_8754;
(statearr_8805[(16)] = inst_8681);

(statearr_8805[(17)] = inst_8683);

(statearr_8805[(7)] = inst_8684);

(statearr_8805[(18)] = inst_8682);

return statearr_8805;
})();
var statearr_8806_8860 = state_8754__$1;
(statearr_8806_8860[(2)] = null);

(statearr_8806_8860[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (18))){
var inst_8698 = (state_8754[(2)]);
var state_8754__$1 = state_8754;
var statearr_8807_8861 = state_8754__$1;
(statearr_8807_8861[(2)] = inst_8698);

(statearr_8807_8861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (37))){
var state_8754__$1 = state_8754;
var statearr_8808_8862 = state_8754__$1;
(statearr_8808_8862[(2)] = null);

(statearr_8808_8862[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8755 === (8))){
var inst_8660 = (state_8754[(8)]);
var inst_8677 = cljs.core.apply.call(null,cljs.core.hash_map,inst_8660);
var state_8754__$1 = state_8754;
var statearr_8809_8863 = state_8754__$1;
(statearr_8809_8863[(2)] = inst_8677);

(statearr_8809_8863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7029__auto__,c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7030__auto__ = null;
var cljs$core$async$mix_$_state_machine__7030__auto____0 = (function (){
var statearr_8813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8813[(0)] = cljs$core$async$mix_$_state_machine__7030__auto__);

(statearr_8813[(1)] = (1));

return statearr_8813;
});
var cljs$core$async$mix_$_state_machine__7030__auto____1 = (function (state_8754){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_8754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e8814){if((e8814 instanceof Object)){
var ex__7033__auto__ = e8814;
var statearr_8815_8864 = state_8754;
(statearr_8815_8864[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8814;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__8865 = state_8754;
state_8754 = G__8865;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7030__auto__ = function(state_8754){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7030__auto____1.call(this,state_8754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7030__auto____0;
cljs$core$async$mix_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7030__auto____1;
return cljs$core$async$mix_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7143__auto__ = (function (){var statearr_8816 = f__7142__auto__.call(null);
(statearr_8816[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___8817);

return statearr_8816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___8817,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5324__auto__ = (((p == null))?null:p);
var m__5325__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5325__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5324__auto__ = (((p == null))?null:p);
var m__5325__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,p,v,ch);
} else {
var m__5325__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args8866 = [];
var len__5727__auto___8869 = arguments.length;
var i__5728__auto___8870 = (0);
while(true){
if((i__5728__auto___8870 < len__5727__auto___8869)){
args8866.push((arguments[i__5728__auto___8870]));

var G__8871 = (i__5728__auto___8870 + (1));
i__5728__auto___8870 = G__8871;
continue;
} else {
}
break;
}

var G__8868 = args8866.length;
switch (G__8868) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8866.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5324__auto__ = (((p == null))?null:p);
var m__5325__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,p);
} else {
var m__5325__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5324__auto__ = (((p == null))?null:p);
var m__5325__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5324__auto__)]);
if(!((m__5325__auto__ == null))){
return m__5325__auto__.call(null,p,v);
} else {
var m__5325__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5325__auto____$1 == null))){
return m__5325__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args8874 = [];
var len__5727__auto___8999 = arguments.length;
var i__5728__auto___9000 = (0);
while(true){
if((i__5728__auto___9000 < len__5727__auto___8999)){
args8874.push((arguments[i__5728__auto___9000]));

var G__9001 = (i__5728__auto___9000 + (1));
i__5728__auto___9000 = G__9001;
continue;
} else {
}
break;
}

var G__8876 = args8874.length;
switch (G__8876) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8874.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4669__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4669__auto__,mults){
return (function (p1__8873_SHARP_){
if(cljs.core.truth_(p1__8873_SHARP_.call(null,topic))){
return p1__8873_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__8873_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4669__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async8877 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async8877 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta8878){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta8878 = meta8878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_8879,meta8878__$1){
var self__ = this;
var _8879__$1 = this;
return (new cljs.core.async.t_cljs$core$async8877(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta8878__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_8879){
var self__ = this;
var _8879__$1 = this;
return self__.meta8878;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta8878","meta8878",551456299,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async8877.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async8877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async8877";

cljs.core.async.t_cljs$core$async8877.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async8877");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async8877 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async8877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8878){
return (new cljs.core.async.t_cljs$core$async8877(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta8878));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async8877(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7141__auto___9003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9003,mults,ensure_mult,p){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9003,mults,ensure_mult,p){
return (function (state_8951){
var state_val_8952 = (state_8951[(1)]);
if((state_val_8952 === (7))){
var inst_8947 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8953_9004 = state_8951__$1;
(statearr_8953_9004[(2)] = inst_8947);

(statearr_8953_9004[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (20))){
var state_8951__$1 = state_8951;
var statearr_8954_9005 = state_8951__$1;
(statearr_8954_9005[(2)] = null);

(statearr_8954_9005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (1))){
var state_8951__$1 = state_8951;
var statearr_8955_9006 = state_8951__$1;
(statearr_8955_9006[(2)] = null);

(statearr_8955_9006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (24))){
var inst_8930 = (state_8951[(7)]);
var inst_8939 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_8930);
var state_8951__$1 = state_8951;
var statearr_8956_9007 = state_8951__$1;
(statearr_8956_9007[(2)] = inst_8939);

(statearr_8956_9007[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (4))){
var inst_8882 = (state_8951[(8)]);
var inst_8882__$1 = (state_8951[(2)]);
var inst_8883 = (inst_8882__$1 == null);
var state_8951__$1 = (function (){var statearr_8957 = state_8951;
(statearr_8957[(8)] = inst_8882__$1);

return statearr_8957;
})();
if(cljs.core.truth_(inst_8883)){
var statearr_8958_9008 = state_8951__$1;
(statearr_8958_9008[(1)] = (5));

} else {
var statearr_8959_9009 = state_8951__$1;
(statearr_8959_9009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (15))){
var inst_8924 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8960_9010 = state_8951__$1;
(statearr_8960_9010[(2)] = inst_8924);

(statearr_8960_9010[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (21))){
var inst_8944 = (state_8951[(2)]);
var state_8951__$1 = (function (){var statearr_8961 = state_8951;
(statearr_8961[(9)] = inst_8944);

return statearr_8961;
})();
var statearr_8962_9011 = state_8951__$1;
(statearr_8962_9011[(2)] = null);

(statearr_8962_9011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (13))){
var inst_8906 = (state_8951[(10)]);
var inst_8908 = cljs.core.chunked_seq_QMARK_.call(null,inst_8906);
var state_8951__$1 = state_8951;
if(inst_8908){
var statearr_8963_9012 = state_8951__$1;
(statearr_8963_9012[(1)] = (16));

} else {
var statearr_8964_9013 = state_8951__$1;
(statearr_8964_9013[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (22))){
var inst_8936 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
if(cljs.core.truth_(inst_8936)){
var statearr_8965_9014 = state_8951__$1;
(statearr_8965_9014[(1)] = (23));

} else {
var statearr_8966_9015 = state_8951__$1;
(statearr_8966_9015[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (6))){
var inst_8932 = (state_8951[(11)]);
var inst_8930 = (state_8951[(7)]);
var inst_8882 = (state_8951[(8)]);
var inst_8930__$1 = topic_fn.call(null,inst_8882);
var inst_8931 = cljs.core.deref.call(null,mults);
var inst_8932__$1 = cljs.core.get.call(null,inst_8931,inst_8930__$1);
var state_8951__$1 = (function (){var statearr_8967 = state_8951;
(statearr_8967[(11)] = inst_8932__$1);

(statearr_8967[(7)] = inst_8930__$1);

return statearr_8967;
})();
if(cljs.core.truth_(inst_8932__$1)){
var statearr_8968_9016 = state_8951__$1;
(statearr_8968_9016[(1)] = (19));

} else {
var statearr_8969_9017 = state_8951__$1;
(statearr_8969_9017[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (25))){
var inst_8941 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8970_9018 = state_8951__$1;
(statearr_8970_9018[(2)] = inst_8941);

(statearr_8970_9018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (17))){
var inst_8906 = (state_8951[(10)]);
var inst_8915 = cljs.core.first.call(null,inst_8906);
var inst_8916 = cljs.core.async.muxch_STAR_.call(null,inst_8915);
var inst_8917 = cljs.core.async.close_BANG_.call(null,inst_8916);
var inst_8918 = cljs.core.next.call(null,inst_8906);
var inst_8892 = inst_8918;
var inst_8893 = null;
var inst_8894 = (0);
var inst_8895 = (0);
var state_8951__$1 = (function (){var statearr_8971 = state_8951;
(statearr_8971[(12)] = inst_8893);

(statearr_8971[(13)] = inst_8892);

(statearr_8971[(14)] = inst_8917);

(statearr_8971[(15)] = inst_8894);

(statearr_8971[(16)] = inst_8895);

return statearr_8971;
})();
var statearr_8972_9019 = state_8951__$1;
(statearr_8972_9019[(2)] = null);

(statearr_8972_9019[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (3))){
var inst_8949 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8951__$1,inst_8949);
} else {
if((state_val_8952 === (12))){
var inst_8926 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8973_9020 = state_8951__$1;
(statearr_8973_9020[(2)] = inst_8926);

(statearr_8973_9020[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (2))){
var state_8951__$1 = state_8951;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8951__$1,(4),ch);
} else {
if((state_val_8952 === (23))){
var state_8951__$1 = state_8951;
var statearr_8974_9021 = state_8951__$1;
(statearr_8974_9021[(2)] = null);

(statearr_8974_9021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (19))){
var inst_8932 = (state_8951[(11)]);
var inst_8882 = (state_8951[(8)]);
var inst_8934 = cljs.core.async.muxch_STAR_.call(null,inst_8932);
var state_8951__$1 = state_8951;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8951__$1,(22),inst_8934,inst_8882);
} else {
if((state_val_8952 === (11))){
var inst_8892 = (state_8951[(13)]);
var inst_8906 = (state_8951[(10)]);
var inst_8906__$1 = cljs.core.seq.call(null,inst_8892);
var state_8951__$1 = (function (){var statearr_8975 = state_8951;
(statearr_8975[(10)] = inst_8906__$1);

return statearr_8975;
})();
if(inst_8906__$1){
var statearr_8976_9022 = state_8951__$1;
(statearr_8976_9022[(1)] = (13));

} else {
var statearr_8977_9023 = state_8951__$1;
(statearr_8977_9023[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (9))){
var inst_8928 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8978_9024 = state_8951__$1;
(statearr_8978_9024[(2)] = inst_8928);

(statearr_8978_9024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (5))){
var inst_8889 = cljs.core.deref.call(null,mults);
var inst_8890 = cljs.core.vals.call(null,inst_8889);
var inst_8891 = cljs.core.seq.call(null,inst_8890);
var inst_8892 = inst_8891;
var inst_8893 = null;
var inst_8894 = (0);
var inst_8895 = (0);
var state_8951__$1 = (function (){var statearr_8979 = state_8951;
(statearr_8979[(12)] = inst_8893);

(statearr_8979[(13)] = inst_8892);

(statearr_8979[(15)] = inst_8894);

(statearr_8979[(16)] = inst_8895);

return statearr_8979;
})();
var statearr_8980_9025 = state_8951__$1;
(statearr_8980_9025[(2)] = null);

(statearr_8980_9025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (14))){
var state_8951__$1 = state_8951;
var statearr_8984_9026 = state_8951__$1;
(statearr_8984_9026[(2)] = null);

(statearr_8984_9026[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (16))){
var inst_8906 = (state_8951[(10)]);
var inst_8910 = cljs.core.chunk_first.call(null,inst_8906);
var inst_8911 = cljs.core.chunk_rest.call(null,inst_8906);
var inst_8912 = cljs.core.count.call(null,inst_8910);
var inst_8892 = inst_8911;
var inst_8893 = inst_8910;
var inst_8894 = inst_8912;
var inst_8895 = (0);
var state_8951__$1 = (function (){var statearr_8985 = state_8951;
(statearr_8985[(12)] = inst_8893);

(statearr_8985[(13)] = inst_8892);

(statearr_8985[(15)] = inst_8894);

(statearr_8985[(16)] = inst_8895);

return statearr_8985;
})();
var statearr_8986_9027 = state_8951__$1;
(statearr_8986_9027[(2)] = null);

(statearr_8986_9027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (10))){
var inst_8893 = (state_8951[(12)]);
var inst_8892 = (state_8951[(13)]);
var inst_8894 = (state_8951[(15)]);
var inst_8895 = (state_8951[(16)]);
var inst_8900 = cljs.core._nth.call(null,inst_8893,inst_8895);
var inst_8901 = cljs.core.async.muxch_STAR_.call(null,inst_8900);
var inst_8902 = cljs.core.async.close_BANG_.call(null,inst_8901);
var inst_8903 = (inst_8895 + (1));
var tmp8981 = inst_8893;
var tmp8982 = inst_8892;
var tmp8983 = inst_8894;
var inst_8892__$1 = tmp8982;
var inst_8893__$1 = tmp8981;
var inst_8894__$1 = tmp8983;
var inst_8895__$1 = inst_8903;
var state_8951__$1 = (function (){var statearr_8987 = state_8951;
(statearr_8987[(12)] = inst_8893__$1);

(statearr_8987[(13)] = inst_8892__$1);

(statearr_8987[(17)] = inst_8902);

(statearr_8987[(15)] = inst_8894__$1);

(statearr_8987[(16)] = inst_8895__$1);

return statearr_8987;
})();
var statearr_8988_9028 = state_8951__$1;
(statearr_8988_9028[(2)] = null);

(statearr_8988_9028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (18))){
var inst_8921 = (state_8951[(2)]);
var state_8951__$1 = state_8951;
var statearr_8989_9029 = state_8951__$1;
(statearr_8989_9029[(2)] = inst_8921);

(statearr_8989_9029[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_8952 === (8))){
var inst_8894 = (state_8951[(15)]);
var inst_8895 = (state_8951[(16)]);
var inst_8897 = (inst_8895 < inst_8894);
var inst_8898 = inst_8897;
var state_8951__$1 = state_8951;
if(cljs.core.truth_(inst_8898)){
var statearr_8990_9030 = state_8951__$1;
(statearr_8990_9030[(1)] = (10));

} else {
var statearr_8991_9031 = state_8951__$1;
(statearr_8991_9031[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9003,mults,ensure_mult,p))
;
return ((function (switch__7029__auto__,c__7141__auto___9003,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_8995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_8995[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_8995[(1)] = (1));

return statearr_8995;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_8951){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_8951);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e8996){if((e8996 instanceof Object)){
var ex__7033__auto__ = e8996;
var statearr_8997_9032 = state_8951;
(statearr_8997_9032[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8951);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e8996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9033 = state_8951;
state_8951 = G__9033;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_8951){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_8951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9003,mults,ensure_mult,p))
})();
var state__7143__auto__ = (function (){var statearr_8998 = f__7142__auto__.call(null);
(statearr_8998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9003);

return statearr_8998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9003,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args9034 = [];
var len__5727__auto___9037 = arguments.length;
var i__5728__auto___9038 = (0);
while(true){
if((i__5728__auto___9038 < len__5727__auto___9037)){
args9034.push((arguments[i__5728__auto___9038]));

var G__9039 = (i__5728__auto___9038 + (1));
i__5728__auto___9038 = G__9039;
continue;
} else {
}
break;
}

var G__9036 = args9034.length;
switch (G__9036) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9034.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args9041 = [];
var len__5727__auto___9044 = arguments.length;
var i__5728__auto___9045 = (0);
while(true){
if((i__5728__auto___9045 < len__5727__auto___9044)){
args9041.push((arguments[i__5728__auto___9045]));

var G__9046 = (i__5728__auto___9045 + (1));
i__5728__auto___9045 = G__9046;
continue;
} else {
}
break;
}

var G__9043 = args9041.length;
switch (G__9043) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9041.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args9048 = [];
var len__5727__auto___9119 = arguments.length;
var i__5728__auto___9120 = (0);
while(true){
if((i__5728__auto___9120 < len__5727__auto___9119)){
args9048.push((arguments[i__5728__auto___9120]));

var G__9121 = (i__5728__auto___9120 + (1));
i__5728__auto___9120 = G__9121;
continue;
} else {
}
break;
}

var G__9050 = args9048.length;
switch (G__9050) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9048.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7141__auto___9123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_9089){
var state_val_9090 = (state_9089[(1)]);
if((state_val_9090 === (7))){
var state_9089__$1 = state_9089;
var statearr_9091_9124 = state_9089__$1;
(statearr_9091_9124[(2)] = null);

(statearr_9091_9124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (1))){
var state_9089__$1 = state_9089;
var statearr_9092_9125 = state_9089__$1;
(statearr_9092_9125[(2)] = null);

(statearr_9092_9125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (4))){
var inst_9053 = (state_9089[(7)]);
var inst_9055 = (inst_9053 < cnt);
var state_9089__$1 = state_9089;
if(cljs.core.truth_(inst_9055)){
var statearr_9093_9126 = state_9089__$1;
(statearr_9093_9126[(1)] = (6));

} else {
var statearr_9094_9127 = state_9089__$1;
(statearr_9094_9127[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (15))){
var inst_9085 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9095_9128 = state_9089__$1;
(statearr_9095_9128[(2)] = inst_9085);

(statearr_9095_9128[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (13))){
var inst_9078 = cljs.core.async.close_BANG_.call(null,out);
var state_9089__$1 = state_9089;
var statearr_9096_9129 = state_9089__$1;
(statearr_9096_9129[(2)] = inst_9078);

(statearr_9096_9129[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (6))){
var state_9089__$1 = state_9089;
var statearr_9097_9130 = state_9089__$1;
(statearr_9097_9130[(2)] = null);

(statearr_9097_9130[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (3))){
var inst_9087 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9089__$1,inst_9087);
} else {
if((state_val_9090 === (12))){
var inst_9075 = (state_9089[(8)]);
var inst_9075__$1 = (state_9089[(2)]);
var inst_9076 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_9075__$1);
var state_9089__$1 = (function (){var statearr_9098 = state_9089;
(statearr_9098[(8)] = inst_9075__$1);

return statearr_9098;
})();
if(cljs.core.truth_(inst_9076)){
var statearr_9099_9131 = state_9089__$1;
(statearr_9099_9131[(1)] = (13));

} else {
var statearr_9100_9132 = state_9089__$1;
(statearr_9100_9132[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (2))){
var inst_9052 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_9053 = (0);
var state_9089__$1 = (function (){var statearr_9101 = state_9089;
(statearr_9101[(9)] = inst_9052);

(statearr_9101[(7)] = inst_9053);

return statearr_9101;
})();
var statearr_9102_9133 = state_9089__$1;
(statearr_9102_9133[(2)] = null);

(statearr_9102_9133[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (11))){
var inst_9053 = (state_9089[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_9089,(10),Object,null,(9));
var inst_9062 = chs__$1.call(null,inst_9053);
var inst_9063 = done.call(null,inst_9053);
var inst_9064 = cljs.core.async.take_BANG_.call(null,inst_9062,inst_9063);
var state_9089__$1 = state_9089;
var statearr_9103_9134 = state_9089__$1;
(statearr_9103_9134[(2)] = inst_9064);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (9))){
var inst_9053 = (state_9089[(7)]);
var inst_9066 = (state_9089[(2)]);
var inst_9067 = (inst_9053 + (1));
var inst_9053__$1 = inst_9067;
var state_9089__$1 = (function (){var statearr_9104 = state_9089;
(statearr_9104[(7)] = inst_9053__$1);

(statearr_9104[(11)] = inst_9066);

return statearr_9104;
})();
var statearr_9105_9135 = state_9089__$1;
(statearr_9105_9135[(2)] = null);

(statearr_9105_9135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (5))){
var inst_9073 = (state_9089[(2)]);
var state_9089__$1 = (function (){var statearr_9106 = state_9089;
(statearr_9106[(10)] = inst_9073);

return statearr_9106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9089__$1,(12),dchan);
} else {
if((state_val_9090 === (14))){
var inst_9075 = (state_9089[(8)]);
var inst_9080 = cljs.core.apply.call(null,f,inst_9075);
var state_9089__$1 = state_9089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9089__$1,(16),out,inst_9080);
} else {
if((state_val_9090 === (16))){
var inst_9082 = (state_9089[(2)]);
var state_9089__$1 = (function (){var statearr_9107 = state_9089;
(statearr_9107[(12)] = inst_9082);

return statearr_9107;
})();
var statearr_9108_9136 = state_9089__$1;
(statearr_9108_9136[(2)] = null);

(statearr_9108_9136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (10))){
var inst_9057 = (state_9089[(2)]);
var inst_9058 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_9089__$1 = (function (){var statearr_9109 = state_9089;
(statearr_9109[(13)] = inst_9057);

return statearr_9109;
})();
var statearr_9110_9137 = state_9089__$1;
(statearr_9110_9137[(2)] = inst_9058);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9089__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9090 === (8))){
var inst_9071 = (state_9089[(2)]);
var state_9089__$1 = state_9089;
var statearr_9111_9138 = state_9089__$1;
(statearr_9111_9138[(2)] = inst_9071);

(statearr_9111_9138[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7029__auto__,c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9115[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9115[(1)] = (1));

return statearr_9115;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9089){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9116){if((e9116 instanceof Object)){
var ex__7033__auto__ = e9116;
var statearr_9117_9139 = state_9089;
(statearr_9117_9139[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9140 = state_9089;
state_9089 = G__9140;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7143__auto__ = (function (){var statearr_9118 = f__7142__auto__.call(null);
(statearr_9118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9123);

return statearr_9118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9123,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args9142 = [];
var len__5727__auto___9198 = arguments.length;
var i__5728__auto___9199 = (0);
while(true){
if((i__5728__auto___9199 < len__5727__auto___9198)){
args9142.push((arguments[i__5728__auto___9199]));

var G__9200 = (i__5728__auto___9199 + (1));
i__5728__auto___9199 = G__9200;
continue;
} else {
}
break;
}

var G__9144 = args9142.length;
switch (G__9144) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9142.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9202,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9202,out){
return (function (state_9174){
var state_val_9175 = (state_9174[(1)]);
if((state_val_9175 === (7))){
var inst_9153 = (state_9174[(7)]);
var inst_9154 = (state_9174[(8)]);
var inst_9153__$1 = (state_9174[(2)]);
var inst_9154__$1 = cljs.core.nth.call(null,inst_9153__$1,(0),null);
var inst_9155 = cljs.core.nth.call(null,inst_9153__$1,(1),null);
var inst_9156 = (inst_9154__$1 == null);
var state_9174__$1 = (function (){var statearr_9176 = state_9174;
(statearr_9176[(7)] = inst_9153__$1);

(statearr_9176[(8)] = inst_9154__$1);

(statearr_9176[(10)] = inst_9155);

return statearr_9176;
})();
if(cljs.core.truth_(inst_9156)){
var statearr_9177_9203 = state_9174__$1;
(statearr_9177_9203[(1)] = (8));

} else {
var statearr_9178_9204 = state_9174__$1;
(statearr_9178_9204[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (1))){
var inst_9145 = cljs.core.vec.call(null,chs);
var inst_9146 = inst_9145;
var state_9174__$1 = (function (){var statearr_9179 = state_9174;
(statearr_9179[(9)] = inst_9146);

return statearr_9179;
})();
var statearr_9180_9205 = state_9174__$1;
(statearr_9180_9205[(2)] = null);

(statearr_9180_9205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (4))){
var inst_9146 = (state_9174[(9)]);
var state_9174__$1 = state_9174;
return cljs.core.async.ioc_alts_BANG_.call(null,state_9174__$1,(7),inst_9146);
} else {
if((state_val_9175 === (6))){
var inst_9170 = (state_9174[(2)]);
var state_9174__$1 = state_9174;
var statearr_9181_9206 = state_9174__$1;
(statearr_9181_9206[(2)] = inst_9170);

(statearr_9181_9206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (3))){
var inst_9172 = (state_9174[(2)]);
var state_9174__$1 = state_9174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9174__$1,inst_9172);
} else {
if((state_val_9175 === (2))){
var inst_9146 = (state_9174[(9)]);
var inst_9148 = cljs.core.count.call(null,inst_9146);
var inst_9149 = (inst_9148 > (0));
var state_9174__$1 = state_9174;
if(cljs.core.truth_(inst_9149)){
var statearr_9183_9207 = state_9174__$1;
(statearr_9183_9207[(1)] = (4));

} else {
var statearr_9184_9208 = state_9174__$1;
(statearr_9184_9208[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (11))){
var inst_9146 = (state_9174[(9)]);
var inst_9163 = (state_9174[(2)]);
var tmp9182 = inst_9146;
var inst_9146__$1 = tmp9182;
var state_9174__$1 = (function (){var statearr_9185 = state_9174;
(statearr_9185[(11)] = inst_9163);

(statearr_9185[(9)] = inst_9146__$1);

return statearr_9185;
})();
var statearr_9186_9209 = state_9174__$1;
(statearr_9186_9209[(2)] = null);

(statearr_9186_9209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (9))){
var inst_9154 = (state_9174[(8)]);
var state_9174__$1 = state_9174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9174__$1,(11),out,inst_9154);
} else {
if((state_val_9175 === (5))){
var inst_9168 = cljs.core.async.close_BANG_.call(null,out);
var state_9174__$1 = state_9174;
var statearr_9187_9210 = state_9174__$1;
(statearr_9187_9210[(2)] = inst_9168);

(statearr_9187_9210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (10))){
var inst_9166 = (state_9174[(2)]);
var state_9174__$1 = state_9174;
var statearr_9188_9211 = state_9174__$1;
(statearr_9188_9211[(2)] = inst_9166);

(statearr_9188_9211[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9175 === (8))){
var inst_9153 = (state_9174[(7)]);
var inst_9146 = (state_9174[(9)]);
var inst_9154 = (state_9174[(8)]);
var inst_9155 = (state_9174[(10)]);
var inst_9158 = (function (){var cs = inst_9146;
var vec__9151 = inst_9153;
var v = inst_9154;
var c = inst_9155;
return ((function (cs,vec__9151,v,c,inst_9153,inst_9146,inst_9154,inst_9155,state_val_9175,c__7141__auto___9202,out){
return (function (p1__9141_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__9141_SHARP_);
});
;})(cs,vec__9151,v,c,inst_9153,inst_9146,inst_9154,inst_9155,state_val_9175,c__7141__auto___9202,out))
})();
var inst_9159 = cljs.core.filterv.call(null,inst_9158,inst_9146);
var inst_9146__$1 = inst_9159;
var state_9174__$1 = (function (){var statearr_9189 = state_9174;
(statearr_9189[(9)] = inst_9146__$1);

return statearr_9189;
})();
var statearr_9190_9212 = state_9174__$1;
(statearr_9190_9212[(2)] = null);

(statearr_9190_9212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9202,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9202,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9194[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9194[(1)] = (1));

return statearr_9194;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9174){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9195){if((e9195 instanceof Object)){
var ex__7033__auto__ = e9195;
var statearr_9196_9213 = state_9174;
(statearr_9196_9213[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9214 = state_9174;
state_9174 = G__9214;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9202,out))
})();
var state__7143__auto__ = (function (){var statearr_9197 = f__7142__auto__.call(null);
(statearr_9197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9202);

return statearr_9197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9202,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args9215 = [];
var len__5727__auto___9264 = arguments.length;
var i__5728__auto___9265 = (0);
while(true){
if((i__5728__auto___9265 < len__5727__auto___9264)){
args9215.push((arguments[i__5728__auto___9265]));

var G__9266 = (i__5728__auto___9265 + (1));
i__5728__auto___9265 = G__9266;
continue;
} else {
}
break;
}

var G__9217 = args9215.length;
switch (G__9217) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9215.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9268,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9268,out){
return (function (state_9241){
var state_val_9242 = (state_9241[(1)]);
if((state_val_9242 === (7))){
var inst_9223 = (state_9241[(7)]);
var inst_9223__$1 = (state_9241[(2)]);
var inst_9224 = (inst_9223__$1 == null);
var inst_9225 = cljs.core.not.call(null,inst_9224);
var state_9241__$1 = (function (){var statearr_9243 = state_9241;
(statearr_9243[(7)] = inst_9223__$1);

return statearr_9243;
})();
if(inst_9225){
var statearr_9244_9269 = state_9241__$1;
(statearr_9244_9269[(1)] = (8));

} else {
var statearr_9245_9270 = state_9241__$1;
(statearr_9245_9270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (1))){
var inst_9218 = (0);
var state_9241__$1 = (function (){var statearr_9246 = state_9241;
(statearr_9246[(8)] = inst_9218);

return statearr_9246;
})();
var statearr_9247_9271 = state_9241__$1;
(statearr_9247_9271[(2)] = null);

(statearr_9247_9271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (4))){
var state_9241__$1 = state_9241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9241__$1,(7),ch);
} else {
if((state_val_9242 === (6))){
var inst_9236 = (state_9241[(2)]);
var state_9241__$1 = state_9241;
var statearr_9248_9272 = state_9241__$1;
(statearr_9248_9272[(2)] = inst_9236);

(statearr_9248_9272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (3))){
var inst_9238 = (state_9241[(2)]);
var inst_9239 = cljs.core.async.close_BANG_.call(null,out);
var state_9241__$1 = (function (){var statearr_9249 = state_9241;
(statearr_9249[(9)] = inst_9238);

return statearr_9249;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9241__$1,inst_9239);
} else {
if((state_val_9242 === (2))){
var inst_9218 = (state_9241[(8)]);
var inst_9220 = (inst_9218 < n);
var state_9241__$1 = state_9241;
if(cljs.core.truth_(inst_9220)){
var statearr_9250_9273 = state_9241__$1;
(statearr_9250_9273[(1)] = (4));

} else {
var statearr_9251_9274 = state_9241__$1;
(statearr_9251_9274[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (11))){
var inst_9218 = (state_9241[(8)]);
var inst_9228 = (state_9241[(2)]);
var inst_9229 = (inst_9218 + (1));
var inst_9218__$1 = inst_9229;
var state_9241__$1 = (function (){var statearr_9252 = state_9241;
(statearr_9252[(8)] = inst_9218__$1);

(statearr_9252[(10)] = inst_9228);

return statearr_9252;
})();
var statearr_9253_9275 = state_9241__$1;
(statearr_9253_9275[(2)] = null);

(statearr_9253_9275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (9))){
var state_9241__$1 = state_9241;
var statearr_9254_9276 = state_9241__$1;
(statearr_9254_9276[(2)] = null);

(statearr_9254_9276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (5))){
var state_9241__$1 = state_9241;
var statearr_9255_9277 = state_9241__$1;
(statearr_9255_9277[(2)] = null);

(statearr_9255_9277[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (10))){
var inst_9233 = (state_9241[(2)]);
var state_9241__$1 = state_9241;
var statearr_9256_9278 = state_9241__$1;
(statearr_9256_9278[(2)] = inst_9233);

(statearr_9256_9278[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9242 === (8))){
var inst_9223 = (state_9241[(7)]);
var state_9241__$1 = state_9241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9241__$1,(11),out,inst_9223);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9268,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9268,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9260[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9260[(1)] = (1));

return statearr_9260;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9241){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9261){if((e9261 instanceof Object)){
var ex__7033__auto__ = e9261;
var statearr_9262_9279 = state_9241;
(statearr_9262_9279[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9280 = state_9241;
state_9241 = G__9280;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9268,out))
})();
var state__7143__auto__ = (function (){var statearr_9263 = f__7142__auto__.call(null);
(statearr_9263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9268);

return statearr_9263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9268,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9288 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9288 = (function (map_LT_,f,ch,meta9289){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9289 = meta9289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9290,meta9289__$1){
var self__ = this;
var _9290__$1 = this;
return (new cljs.core.async.t_cljs$core$async9288(self__.map_LT_,self__.f,self__.ch,meta9289__$1));
});

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9290){
var self__ = this;
var _9290__$1 = this;
return self__.meta9289;
});

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async9291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9291 = (function (map_LT_,f,ch,meta9289,_,fn1,meta9292){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta9289 = meta9289;
this._ = _;
this.fn1 = fn1;
this.meta9292 = meta9292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9293,meta9292__$1){
var self__ = this;
var _9293__$1 = this;
return (new cljs.core.async.t_cljs$core$async9291(self__.map_LT_,self__.f,self__.ch,self__.meta9289,self__._,self__.fn1,meta9292__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async9291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9293){
var self__ = this;
var _9293__$1 = this;
return self__.meta9292;
});})(___$1))
;

cljs.core.async.t_cljs$core$async9291.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__9281_SHARP_){
return f1.call(null,(((p1__9281_SHARP_ == null))?null:self__.f.call(null,p1__9281_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async9291.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9289","meta9289",-2139802721,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async9288","cljs.core.async/t_cljs$core$async9288",-1296430869,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta9292","meta9292",1182993958,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async9291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9291";

cljs.core.async.t_cljs$core$async9291.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async9291");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async9291 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9291(map_LT___$1,f__$1,ch__$1,meta9289__$1,___$2,fn1__$1,meta9292){
return (new cljs.core.async.t_cljs$core$async9291(map_LT___$1,f__$1,ch__$1,meta9289__$1,___$2,fn1__$1,meta9292));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async9291(self__.map_LT_,self__.f,self__.ch,self__.meta9289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4657__auto__ = ret;
if(cljs.core.truth_(and__4657__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4657__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async9288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9289","meta9289",-2139802721,null)], null);
});

cljs.core.async.t_cljs$core$async9288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9288";

cljs.core.async.t_cljs$core$async9288.cljs$lang$ctorPrWriter = (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async9288");
});

cljs.core.async.__GT_t_cljs$core$async9288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async9288(map_LT___$1,f__$1,ch__$1,meta9289){
return (new cljs.core.async.t_cljs$core$async9288(map_LT___$1,f__$1,ch__$1,meta9289));
});

}

return (new cljs.core.async.t_cljs$core$async9288(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async9297 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9297 = (function (map_GT_,f,ch,meta9298){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta9298 = meta9298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9299,meta9298__$1){
var self__ = this;
var _9299__$1 = this;
return (new cljs.core.async.t_cljs$core$async9297(self__.map_GT_,self__.f,self__.ch,meta9298__$1));
});

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9299){
var self__ = this;
var _9299__$1 = this;
return self__.meta9298;
});

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async9297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9298","meta9298",276733054,null)], null);
});

cljs.core.async.t_cljs$core$async9297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9297";

cljs.core.async.t_cljs$core$async9297.cljs$lang$ctorPrWriter = (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async9297");
});

cljs.core.async.__GT_t_cljs$core$async9297 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async9297(map_GT___$1,f__$1,ch__$1,meta9298){
return (new cljs.core.async.t_cljs$core$async9297(map_GT___$1,f__$1,ch__$1,meta9298));
});

}

return (new cljs.core.async.t_cljs$core$async9297(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async9303 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9303 = (function (filter_GT_,p,ch,meta9304){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta9304 = meta9304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9305,meta9304__$1){
var self__ = this;
var _9305__$1 = this;
return (new cljs.core.async.t_cljs$core$async9303(self__.filter_GT_,self__.p,self__.ch,meta9304__$1));
});

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9305){
var self__ = this;
var _9305__$1 = this;
return self__.meta9304;
});

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async9303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async9303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta9304","meta9304",525103852,null)], null);
});

cljs.core.async.t_cljs$core$async9303.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9303";

cljs.core.async.t_cljs$core$async9303.cljs$lang$ctorPrWriter = (function (this__5267__auto__,writer__5268__auto__,opt__5269__auto__){
return cljs.core._write.call(null,writer__5268__auto__,"cljs.core.async/t_cljs$core$async9303");
});

cljs.core.async.__GT_t_cljs$core$async9303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async9303(filter_GT___$1,p__$1,ch__$1,meta9304){
return (new cljs.core.async.t_cljs$core$async9303(filter_GT___$1,p__$1,ch__$1,meta9304));
});

}

return (new cljs.core.async.t_cljs$core$async9303(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args9306 = [];
var len__5727__auto___9350 = arguments.length;
var i__5728__auto___9351 = (0);
while(true){
if((i__5728__auto___9351 < len__5727__auto___9350)){
args9306.push((arguments[i__5728__auto___9351]));

var G__9352 = (i__5728__auto___9351 + (1));
i__5728__auto___9351 = G__9352;
continue;
} else {
}
break;
}

var G__9308 = args9306.length;
switch (G__9308) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9306.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9354,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9354,out){
return (function (state_9329){
var state_val_9330 = (state_9329[(1)]);
if((state_val_9330 === (7))){
var inst_9325 = (state_9329[(2)]);
var state_9329__$1 = state_9329;
var statearr_9331_9355 = state_9329__$1;
(statearr_9331_9355[(2)] = inst_9325);

(statearr_9331_9355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (1))){
var state_9329__$1 = state_9329;
var statearr_9332_9356 = state_9329__$1;
(statearr_9332_9356[(2)] = null);

(statearr_9332_9356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (4))){
var inst_9311 = (state_9329[(7)]);
var inst_9311__$1 = (state_9329[(2)]);
var inst_9312 = (inst_9311__$1 == null);
var state_9329__$1 = (function (){var statearr_9333 = state_9329;
(statearr_9333[(7)] = inst_9311__$1);

return statearr_9333;
})();
if(cljs.core.truth_(inst_9312)){
var statearr_9334_9357 = state_9329__$1;
(statearr_9334_9357[(1)] = (5));

} else {
var statearr_9335_9358 = state_9329__$1;
(statearr_9335_9358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (6))){
var inst_9311 = (state_9329[(7)]);
var inst_9316 = p.call(null,inst_9311);
var state_9329__$1 = state_9329;
if(cljs.core.truth_(inst_9316)){
var statearr_9336_9359 = state_9329__$1;
(statearr_9336_9359[(1)] = (8));

} else {
var statearr_9337_9360 = state_9329__$1;
(statearr_9337_9360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (3))){
var inst_9327 = (state_9329[(2)]);
var state_9329__$1 = state_9329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9329__$1,inst_9327);
} else {
if((state_val_9330 === (2))){
var state_9329__$1 = state_9329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9329__$1,(4),ch);
} else {
if((state_val_9330 === (11))){
var inst_9319 = (state_9329[(2)]);
var state_9329__$1 = state_9329;
var statearr_9338_9361 = state_9329__$1;
(statearr_9338_9361[(2)] = inst_9319);

(statearr_9338_9361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (9))){
var state_9329__$1 = state_9329;
var statearr_9339_9362 = state_9329__$1;
(statearr_9339_9362[(2)] = null);

(statearr_9339_9362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (5))){
var inst_9314 = cljs.core.async.close_BANG_.call(null,out);
var state_9329__$1 = state_9329;
var statearr_9340_9363 = state_9329__$1;
(statearr_9340_9363[(2)] = inst_9314);

(statearr_9340_9363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (10))){
var inst_9322 = (state_9329[(2)]);
var state_9329__$1 = (function (){var statearr_9341 = state_9329;
(statearr_9341[(8)] = inst_9322);

return statearr_9341;
})();
var statearr_9342_9364 = state_9329__$1;
(statearr_9342_9364[(2)] = null);

(statearr_9342_9364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9330 === (8))){
var inst_9311 = (state_9329[(7)]);
var state_9329__$1 = state_9329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9329__$1,(11),out,inst_9311);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9354,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9354,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9346 = [null,null,null,null,null,null,null,null,null];
(statearr_9346[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9346[(1)] = (1));

return statearr_9346;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9329){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9347){if((e9347 instanceof Object)){
var ex__7033__auto__ = e9347;
var statearr_9348_9365 = state_9329;
(statearr_9348_9365[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9347;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9366 = state_9329;
state_9329 = G__9366;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9329){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9354,out))
})();
var state__7143__auto__ = (function (){var statearr_9349 = f__7142__auto__.call(null);
(statearr_9349[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9354);

return statearr_9349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9354,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args9367 = [];
var len__5727__auto___9370 = arguments.length;
var i__5728__auto___9371 = (0);
while(true){
if((i__5728__auto___9371 < len__5727__auto___9370)){
args9367.push((arguments[i__5728__auto___9371]));

var G__9372 = (i__5728__auto___9371 + (1));
i__5728__auto___9371 = G__9372;
continue;
} else {
}
break;
}

var G__9369 = args9367.length;
switch (G__9369) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9367.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_9539){
var state_val_9540 = (state_9539[(1)]);
if((state_val_9540 === (7))){
var inst_9535 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
var statearr_9541_9582 = state_9539__$1;
(statearr_9541_9582[(2)] = inst_9535);

(statearr_9541_9582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (20))){
var inst_9505 = (state_9539[(7)]);
var inst_9516 = (state_9539[(2)]);
var inst_9517 = cljs.core.next.call(null,inst_9505);
var inst_9491 = inst_9517;
var inst_9492 = null;
var inst_9493 = (0);
var inst_9494 = (0);
var state_9539__$1 = (function (){var statearr_9542 = state_9539;
(statearr_9542[(8)] = inst_9516);

(statearr_9542[(10)] = inst_9492);

(statearr_9542[(11)] = inst_9493);

(statearr_9542[(12)] = inst_9491);

(statearr_9542[(13)] = inst_9494);

return statearr_9542;
})();
var statearr_9543_9583 = state_9539__$1;
(statearr_9543_9583[(2)] = null);

(statearr_9543_9583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (1))){
var state_9539__$1 = state_9539;
var statearr_9544_9584 = state_9539__$1;
(statearr_9544_9584[(2)] = null);

(statearr_9544_9584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (4))){
var inst_9480 = (state_9539[(9)]);
var inst_9480__$1 = (state_9539[(2)]);
var inst_9481 = (inst_9480__$1 == null);
var state_9539__$1 = (function (){var statearr_9545 = state_9539;
(statearr_9545[(9)] = inst_9480__$1);

return statearr_9545;
})();
if(cljs.core.truth_(inst_9481)){
var statearr_9546_9585 = state_9539__$1;
(statearr_9546_9585[(1)] = (5));

} else {
var statearr_9547_9586 = state_9539__$1;
(statearr_9547_9586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (15))){
var state_9539__$1 = state_9539;
var statearr_9551_9587 = state_9539__$1;
(statearr_9551_9587[(2)] = null);

(statearr_9551_9587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (21))){
var state_9539__$1 = state_9539;
var statearr_9552_9588 = state_9539__$1;
(statearr_9552_9588[(2)] = null);

(statearr_9552_9588[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (13))){
var inst_9492 = (state_9539[(10)]);
var inst_9493 = (state_9539[(11)]);
var inst_9491 = (state_9539[(12)]);
var inst_9494 = (state_9539[(13)]);
var inst_9501 = (state_9539[(2)]);
var inst_9502 = (inst_9494 + (1));
var tmp9548 = inst_9492;
var tmp9549 = inst_9493;
var tmp9550 = inst_9491;
var inst_9491__$1 = tmp9550;
var inst_9492__$1 = tmp9548;
var inst_9493__$1 = tmp9549;
var inst_9494__$1 = inst_9502;
var state_9539__$1 = (function (){var statearr_9553 = state_9539;
(statearr_9553[(14)] = inst_9501);

(statearr_9553[(10)] = inst_9492__$1);

(statearr_9553[(11)] = inst_9493__$1);

(statearr_9553[(12)] = inst_9491__$1);

(statearr_9553[(13)] = inst_9494__$1);

return statearr_9553;
})();
var statearr_9554_9589 = state_9539__$1;
(statearr_9554_9589[(2)] = null);

(statearr_9554_9589[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (22))){
var state_9539__$1 = state_9539;
var statearr_9555_9590 = state_9539__$1;
(statearr_9555_9590[(2)] = null);

(statearr_9555_9590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (6))){
var inst_9480 = (state_9539[(9)]);
var inst_9489 = f.call(null,inst_9480);
var inst_9490 = cljs.core.seq.call(null,inst_9489);
var inst_9491 = inst_9490;
var inst_9492 = null;
var inst_9493 = (0);
var inst_9494 = (0);
var state_9539__$1 = (function (){var statearr_9556 = state_9539;
(statearr_9556[(10)] = inst_9492);

(statearr_9556[(11)] = inst_9493);

(statearr_9556[(12)] = inst_9491);

(statearr_9556[(13)] = inst_9494);

return statearr_9556;
})();
var statearr_9557_9591 = state_9539__$1;
(statearr_9557_9591[(2)] = null);

(statearr_9557_9591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (17))){
var inst_9505 = (state_9539[(7)]);
var inst_9509 = cljs.core.chunk_first.call(null,inst_9505);
var inst_9510 = cljs.core.chunk_rest.call(null,inst_9505);
var inst_9511 = cljs.core.count.call(null,inst_9509);
var inst_9491 = inst_9510;
var inst_9492 = inst_9509;
var inst_9493 = inst_9511;
var inst_9494 = (0);
var state_9539__$1 = (function (){var statearr_9558 = state_9539;
(statearr_9558[(10)] = inst_9492);

(statearr_9558[(11)] = inst_9493);

(statearr_9558[(12)] = inst_9491);

(statearr_9558[(13)] = inst_9494);

return statearr_9558;
})();
var statearr_9559_9592 = state_9539__$1;
(statearr_9559_9592[(2)] = null);

(statearr_9559_9592[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (3))){
var inst_9537 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9539__$1,inst_9537);
} else {
if((state_val_9540 === (12))){
var inst_9525 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
var statearr_9560_9593 = state_9539__$1;
(statearr_9560_9593[(2)] = inst_9525);

(statearr_9560_9593[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (2))){
var state_9539__$1 = state_9539;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9539__$1,(4),in$);
} else {
if((state_val_9540 === (23))){
var inst_9533 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
var statearr_9561_9594 = state_9539__$1;
(statearr_9561_9594[(2)] = inst_9533);

(statearr_9561_9594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (19))){
var inst_9520 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
var statearr_9562_9595 = state_9539__$1;
(statearr_9562_9595[(2)] = inst_9520);

(statearr_9562_9595[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (11))){
var inst_9505 = (state_9539[(7)]);
var inst_9491 = (state_9539[(12)]);
var inst_9505__$1 = cljs.core.seq.call(null,inst_9491);
var state_9539__$1 = (function (){var statearr_9563 = state_9539;
(statearr_9563[(7)] = inst_9505__$1);

return statearr_9563;
})();
if(inst_9505__$1){
var statearr_9564_9596 = state_9539__$1;
(statearr_9564_9596[(1)] = (14));

} else {
var statearr_9565_9597 = state_9539__$1;
(statearr_9565_9597[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (9))){
var inst_9527 = (state_9539[(2)]);
var inst_9528 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_9539__$1 = (function (){var statearr_9566 = state_9539;
(statearr_9566[(15)] = inst_9527);

return statearr_9566;
})();
if(cljs.core.truth_(inst_9528)){
var statearr_9567_9598 = state_9539__$1;
(statearr_9567_9598[(1)] = (21));

} else {
var statearr_9568_9599 = state_9539__$1;
(statearr_9568_9599[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (5))){
var inst_9483 = cljs.core.async.close_BANG_.call(null,out);
var state_9539__$1 = state_9539;
var statearr_9569_9600 = state_9539__$1;
(statearr_9569_9600[(2)] = inst_9483);

(statearr_9569_9600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (14))){
var inst_9505 = (state_9539[(7)]);
var inst_9507 = cljs.core.chunked_seq_QMARK_.call(null,inst_9505);
var state_9539__$1 = state_9539;
if(inst_9507){
var statearr_9570_9601 = state_9539__$1;
(statearr_9570_9601[(1)] = (17));

} else {
var statearr_9571_9602 = state_9539__$1;
(statearr_9571_9602[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (16))){
var inst_9523 = (state_9539[(2)]);
var state_9539__$1 = state_9539;
var statearr_9572_9603 = state_9539__$1;
(statearr_9572_9603[(2)] = inst_9523);

(statearr_9572_9603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9540 === (10))){
var inst_9492 = (state_9539[(10)]);
var inst_9494 = (state_9539[(13)]);
var inst_9499 = cljs.core._nth.call(null,inst_9492,inst_9494);
var state_9539__$1 = state_9539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9539__$1,(13),out,inst_9499);
} else {
if((state_val_9540 === (18))){
var inst_9505 = (state_9539[(7)]);
var inst_9514 = cljs.core.first.call(null,inst_9505);
var state_9539__$1 = state_9539;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9539__$1,(20),out,inst_9514);
} else {
if((state_val_9540 === (8))){
var inst_9493 = (state_9539[(11)]);
var inst_9494 = (state_9539[(13)]);
var inst_9496 = (inst_9494 < inst_9493);
var inst_9497 = inst_9496;
var state_9539__$1 = state_9539;
if(cljs.core.truth_(inst_9497)){
var statearr_9573_9604 = state_9539__$1;
(statearr_9573_9604[(1)] = (10));

} else {
var statearr_9574_9605 = state_9539__$1;
(statearr_9574_9605[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____0 = (function (){
var statearr_9578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9578[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__);

(statearr_9578[(1)] = (1));

return statearr_9578;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____1 = (function (state_9539){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9539);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9579){if((e9579 instanceof Object)){
var ex__7033__auto__ = e9579;
var statearr_9580_9606 = state_9539;
(statearr_9580_9606[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9539);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9607 = state_9539;
state_9539 = G__9607;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__ = function(state_9539){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____1.call(this,state_9539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7030__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_9581 = f__7142__auto__.call(null);
(statearr_9581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_9581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args9608 = [];
var len__5727__auto___9611 = arguments.length;
var i__5728__auto___9612 = (0);
while(true){
if((i__5728__auto___9612 < len__5727__auto___9611)){
args9608.push((arguments[i__5728__auto___9612]));

var G__9613 = (i__5728__auto___9612 + (1));
i__5728__auto___9612 = G__9613;
continue;
} else {
}
break;
}

var G__9610 = args9608.length;
switch (G__9610) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9608.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args9615 = [];
var len__5727__auto___9618 = arguments.length;
var i__5728__auto___9619 = (0);
while(true){
if((i__5728__auto___9619 < len__5727__auto___9618)){
args9615.push((arguments[i__5728__auto___9619]));

var G__9620 = (i__5728__auto___9619 + (1));
i__5728__auto___9619 = G__9620;
continue;
} else {
}
break;
}

var G__9617 = args9615.length;
switch (G__9617) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9615.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args9622 = [];
var len__5727__auto___9673 = arguments.length;
var i__5728__auto___9674 = (0);
while(true){
if((i__5728__auto___9674 < len__5727__auto___9673)){
args9622.push((arguments[i__5728__auto___9674]));

var G__9675 = (i__5728__auto___9674 + (1));
i__5728__auto___9674 = G__9675;
continue;
} else {
}
break;
}

var G__9624 = args9622.length;
switch (G__9624) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9622.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9677,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9677,out){
return (function (state_9648){
var state_val_9649 = (state_9648[(1)]);
if((state_val_9649 === (7))){
var inst_9643 = (state_9648[(2)]);
var state_9648__$1 = state_9648;
var statearr_9650_9678 = state_9648__$1;
(statearr_9650_9678[(2)] = inst_9643);

(statearr_9650_9678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (1))){
var inst_9625 = null;
var state_9648__$1 = (function (){var statearr_9651 = state_9648;
(statearr_9651[(7)] = inst_9625);

return statearr_9651;
})();
var statearr_9652_9679 = state_9648__$1;
(statearr_9652_9679[(2)] = null);

(statearr_9652_9679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (4))){
var inst_9628 = (state_9648[(8)]);
var inst_9628__$1 = (state_9648[(2)]);
var inst_9629 = (inst_9628__$1 == null);
var inst_9630 = cljs.core.not.call(null,inst_9629);
var state_9648__$1 = (function (){var statearr_9653 = state_9648;
(statearr_9653[(8)] = inst_9628__$1);

return statearr_9653;
})();
if(inst_9630){
var statearr_9654_9680 = state_9648__$1;
(statearr_9654_9680[(1)] = (5));

} else {
var statearr_9655_9681 = state_9648__$1;
(statearr_9655_9681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (6))){
var state_9648__$1 = state_9648;
var statearr_9656_9682 = state_9648__$1;
(statearr_9656_9682[(2)] = null);

(statearr_9656_9682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (3))){
var inst_9645 = (state_9648[(2)]);
var inst_9646 = cljs.core.async.close_BANG_.call(null,out);
var state_9648__$1 = (function (){var statearr_9657 = state_9648;
(statearr_9657[(9)] = inst_9645);

return statearr_9657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9648__$1,inst_9646);
} else {
if((state_val_9649 === (2))){
var state_9648__$1 = state_9648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9648__$1,(4),ch);
} else {
if((state_val_9649 === (11))){
var inst_9628 = (state_9648[(8)]);
var inst_9637 = (state_9648[(2)]);
var inst_9625 = inst_9628;
var state_9648__$1 = (function (){var statearr_9658 = state_9648;
(statearr_9658[(10)] = inst_9637);

(statearr_9658[(7)] = inst_9625);

return statearr_9658;
})();
var statearr_9659_9683 = state_9648__$1;
(statearr_9659_9683[(2)] = null);

(statearr_9659_9683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (9))){
var inst_9628 = (state_9648[(8)]);
var state_9648__$1 = state_9648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9648__$1,(11),out,inst_9628);
} else {
if((state_val_9649 === (5))){
var inst_9625 = (state_9648[(7)]);
var inst_9628 = (state_9648[(8)]);
var inst_9632 = cljs.core._EQ_.call(null,inst_9628,inst_9625);
var state_9648__$1 = state_9648;
if(inst_9632){
var statearr_9661_9684 = state_9648__$1;
(statearr_9661_9684[(1)] = (8));

} else {
var statearr_9662_9685 = state_9648__$1;
(statearr_9662_9685[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (10))){
var inst_9640 = (state_9648[(2)]);
var state_9648__$1 = state_9648;
var statearr_9663_9686 = state_9648__$1;
(statearr_9663_9686[(2)] = inst_9640);

(statearr_9663_9686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9649 === (8))){
var inst_9625 = (state_9648[(7)]);
var tmp9660 = inst_9625;
var inst_9625__$1 = tmp9660;
var state_9648__$1 = (function (){var statearr_9664 = state_9648;
(statearr_9664[(7)] = inst_9625__$1);

return statearr_9664;
})();
var statearr_9665_9687 = state_9648__$1;
(statearr_9665_9687[(2)] = null);

(statearr_9665_9687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9677,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9677,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9669 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9669[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9669[(1)] = (1));

return statearr_9669;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9648){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9670){if((e9670 instanceof Object)){
var ex__7033__auto__ = e9670;
var statearr_9671_9688 = state_9648;
(statearr_9671_9688[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9689 = state_9648;
state_9648 = G__9689;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9648){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9677,out))
})();
var state__7143__auto__ = (function (){var statearr_9672 = f__7142__auto__.call(null);
(statearr_9672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9677);

return statearr_9672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9677,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args9690 = [];
var len__5727__auto___9760 = arguments.length;
var i__5728__auto___9761 = (0);
while(true){
if((i__5728__auto___9761 < len__5727__auto___9760)){
args9690.push((arguments[i__5728__auto___9761]));

var G__9762 = (i__5728__auto___9761 + (1));
i__5728__auto___9761 = G__9762;
continue;
} else {
}
break;
}

var G__9692 = args9690.length;
switch (G__9692) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9690.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9764,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9764,out){
return (function (state_9730){
var state_val_9731 = (state_9730[(1)]);
if((state_val_9731 === (7))){
var inst_9726 = (state_9730[(2)]);
var state_9730__$1 = state_9730;
var statearr_9732_9765 = state_9730__$1;
(statearr_9732_9765[(2)] = inst_9726);

(statearr_9732_9765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (1))){
var inst_9693 = (new Array(n));
var inst_9694 = inst_9693;
var inst_9695 = (0);
var state_9730__$1 = (function (){var statearr_9733 = state_9730;
(statearr_9733[(7)] = inst_9694);

(statearr_9733[(9)] = inst_9695);

return statearr_9733;
})();
var statearr_9734_9766 = state_9730__$1;
(statearr_9734_9766[(2)] = null);

(statearr_9734_9766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (4))){
var inst_9698 = (state_9730[(8)]);
var inst_9698__$1 = (state_9730[(2)]);
var inst_9699 = (inst_9698__$1 == null);
var inst_9700 = cljs.core.not.call(null,inst_9699);
var state_9730__$1 = (function (){var statearr_9735 = state_9730;
(statearr_9735[(8)] = inst_9698__$1);

return statearr_9735;
})();
if(inst_9700){
var statearr_9736_9767 = state_9730__$1;
(statearr_9736_9767[(1)] = (5));

} else {
var statearr_9737_9768 = state_9730__$1;
(statearr_9737_9768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (15))){
var inst_9720 = (state_9730[(2)]);
var state_9730__$1 = state_9730;
var statearr_9738_9769 = state_9730__$1;
(statearr_9738_9769[(2)] = inst_9720);

(statearr_9738_9769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (13))){
var state_9730__$1 = state_9730;
var statearr_9739_9770 = state_9730__$1;
(statearr_9739_9770[(2)] = null);

(statearr_9739_9770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (6))){
var inst_9695 = (state_9730[(9)]);
var inst_9716 = (inst_9695 > (0));
var state_9730__$1 = state_9730;
if(cljs.core.truth_(inst_9716)){
var statearr_9740_9771 = state_9730__$1;
(statearr_9740_9771[(1)] = (12));

} else {
var statearr_9741_9772 = state_9730__$1;
(statearr_9741_9772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (3))){
var inst_9728 = (state_9730[(2)]);
var state_9730__$1 = state_9730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9730__$1,inst_9728);
} else {
if((state_val_9731 === (12))){
var inst_9694 = (state_9730[(7)]);
var inst_9718 = cljs.core.vec.call(null,inst_9694);
var state_9730__$1 = state_9730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9730__$1,(15),out,inst_9718);
} else {
if((state_val_9731 === (2))){
var state_9730__$1 = state_9730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9730__$1,(4),ch);
} else {
if((state_val_9731 === (11))){
var inst_9710 = (state_9730[(2)]);
var inst_9711 = (new Array(n));
var inst_9694 = inst_9711;
var inst_9695 = (0);
var state_9730__$1 = (function (){var statearr_9742 = state_9730;
(statearr_9742[(7)] = inst_9694);

(statearr_9742[(9)] = inst_9695);

(statearr_9742[(12)] = inst_9710);

return statearr_9742;
})();
var statearr_9743_9773 = state_9730__$1;
(statearr_9743_9773[(2)] = null);

(statearr_9743_9773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (9))){
var inst_9694 = (state_9730[(7)]);
var inst_9708 = cljs.core.vec.call(null,inst_9694);
var state_9730__$1 = state_9730;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9730__$1,(11),out,inst_9708);
} else {
if((state_val_9731 === (5))){
var inst_9694 = (state_9730[(7)]);
var inst_9695 = (state_9730[(9)]);
var inst_9703 = (state_9730[(10)]);
var inst_9698 = (state_9730[(8)]);
var inst_9702 = (inst_9694[inst_9695] = inst_9698);
var inst_9703__$1 = (inst_9695 + (1));
var inst_9704 = (inst_9703__$1 < n);
var state_9730__$1 = (function (){var statearr_9744 = state_9730;
(statearr_9744[(11)] = inst_9702);

(statearr_9744[(10)] = inst_9703__$1);

return statearr_9744;
})();
if(cljs.core.truth_(inst_9704)){
var statearr_9745_9774 = state_9730__$1;
(statearr_9745_9774[(1)] = (8));

} else {
var statearr_9746_9775 = state_9730__$1;
(statearr_9746_9775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (14))){
var inst_9723 = (state_9730[(2)]);
var inst_9724 = cljs.core.async.close_BANG_.call(null,out);
var state_9730__$1 = (function (){var statearr_9748 = state_9730;
(statearr_9748[(13)] = inst_9723);

return statearr_9748;
})();
var statearr_9749_9776 = state_9730__$1;
(statearr_9749_9776[(2)] = inst_9724);

(statearr_9749_9776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (10))){
var inst_9714 = (state_9730[(2)]);
var state_9730__$1 = state_9730;
var statearr_9750_9777 = state_9730__$1;
(statearr_9750_9777[(2)] = inst_9714);

(statearr_9750_9777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9731 === (8))){
var inst_9694 = (state_9730[(7)]);
var inst_9703 = (state_9730[(10)]);
var tmp9747 = inst_9694;
var inst_9694__$1 = tmp9747;
var inst_9695 = inst_9703;
var state_9730__$1 = (function (){var statearr_9751 = state_9730;
(statearr_9751[(7)] = inst_9694__$1);

(statearr_9751[(9)] = inst_9695);

return statearr_9751;
})();
var statearr_9752_9778 = state_9730__$1;
(statearr_9752_9778[(2)] = null);

(statearr_9752_9778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9764,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9764,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9756[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9756[(1)] = (1));

return statearr_9756;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9730){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9757){if((e9757 instanceof Object)){
var ex__7033__auto__ = e9757;
var statearr_9758_9779 = state_9730;
(statearr_9758_9779[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9780 = state_9730;
state_9730 = G__9780;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9730){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9764,out))
})();
var state__7143__auto__ = (function (){var statearr_9759 = f__7142__auto__.call(null);
(statearr_9759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9764);

return statearr_9759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9764,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args9781 = [];
var len__5727__auto___9855 = arguments.length;
var i__5728__auto___9856 = (0);
while(true){
if((i__5728__auto___9856 < len__5727__auto___9855)){
args9781.push((arguments[i__5728__auto___9856]));

var G__9857 = (i__5728__auto___9856 + (1));
i__5728__auto___9856 = G__9857;
continue;
} else {
}
break;
}

var G__9783 = args9781.length;
switch (G__9783) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9781.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7141__auto___9859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___9859,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___9859,out){
return (function (state_9825){
var state_val_9826 = (state_9825[(1)]);
if((state_val_9826 === (7))){
var inst_9821 = (state_9825[(2)]);
var state_9825__$1 = state_9825;
var statearr_9827_9860 = state_9825__$1;
(statearr_9827_9860[(2)] = inst_9821);

(statearr_9827_9860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (1))){
var inst_9784 = [];
var inst_9785 = inst_9784;
var inst_9786 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_9825__$1 = (function (){var statearr_9828 = state_9825;
(statearr_9828[(7)] = inst_9786);

(statearr_9828[(9)] = inst_9785);

return statearr_9828;
})();
var statearr_9829_9861 = state_9825__$1;
(statearr_9829_9861[(2)] = null);

(statearr_9829_9861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (4))){
var inst_9789 = (state_9825[(8)]);
var inst_9789__$1 = (state_9825[(2)]);
var inst_9790 = (inst_9789__$1 == null);
var inst_9791 = cljs.core.not.call(null,inst_9790);
var state_9825__$1 = (function (){var statearr_9830 = state_9825;
(statearr_9830[(8)] = inst_9789__$1);

return statearr_9830;
})();
if(inst_9791){
var statearr_9831_9862 = state_9825__$1;
(statearr_9831_9862[(1)] = (5));

} else {
var statearr_9832_9863 = state_9825__$1;
(statearr_9832_9863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (15))){
var inst_9815 = (state_9825[(2)]);
var state_9825__$1 = state_9825;
var statearr_9833_9864 = state_9825__$1;
(statearr_9833_9864[(2)] = inst_9815);

(statearr_9833_9864[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (13))){
var state_9825__$1 = state_9825;
var statearr_9834_9865 = state_9825__$1;
(statearr_9834_9865[(2)] = null);

(statearr_9834_9865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (6))){
var inst_9785 = (state_9825[(9)]);
var inst_9810 = inst_9785.length;
var inst_9811 = (inst_9810 > (0));
var state_9825__$1 = state_9825;
if(cljs.core.truth_(inst_9811)){
var statearr_9835_9866 = state_9825__$1;
(statearr_9835_9866[(1)] = (12));

} else {
var statearr_9836_9867 = state_9825__$1;
(statearr_9836_9867[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (3))){
var inst_9823 = (state_9825[(2)]);
var state_9825__$1 = state_9825;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9825__$1,inst_9823);
} else {
if((state_val_9826 === (12))){
var inst_9785 = (state_9825[(9)]);
var inst_9813 = cljs.core.vec.call(null,inst_9785);
var state_9825__$1 = state_9825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9825__$1,(15),out,inst_9813);
} else {
if((state_val_9826 === (2))){
var state_9825__$1 = state_9825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9825__$1,(4),ch);
} else {
if((state_val_9826 === (11))){
var inst_9789 = (state_9825[(8)]);
var inst_9793 = (state_9825[(10)]);
var inst_9803 = (state_9825[(2)]);
var inst_9804 = [];
var inst_9805 = inst_9804.push(inst_9789);
var inst_9785 = inst_9804;
var inst_9786 = inst_9793;
var state_9825__$1 = (function (){var statearr_9837 = state_9825;
(statearr_9837[(11)] = inst_9805);

(statearr_9837[(7)] = inst_9786);

(statearr_9837[(12)] = inst_9803);

(statearr_9837[(9)] = inst_9785);

return statearr_9837;
})();
var statearr_9838_9868 = state_9825__$1;
(statearr_9838_9868[(2)] = null);

(statearr_9838_9868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (9))){
var inst_9785 = (state_9825[(9)]);
var inst_9801 = cljs.core.vec.call(null,inst_9785);
var state_9825__$1 = state_9825;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9825__$1,(11),out,inst_9801);
} else {
if((state_val_9826 === (5))){
var inst_9786 = (state_9825[(7)]);
var inst_9789 = (state_9825[(8)]);
var inst_9793 = (state_9825[(10)]);
var inst_9793__$1 = f.call(null,inst_9789);
var inst_9794 = cljs.core._EQ_.call(null,inst_9793__$1,inst_9786);
var inst_9795 = cljs.core.keyword_identical_QMARK_.call(null,inst_9786,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_9796 = (inst_9794) || (inst_9795);
var state_9825__$1 = (function (){var statearr_9839 = state_9825;
(statearr_9839[(10)] = inst_9793__$1);

return statearr_9839;
})();
if(cljs.core.truth_(inst_9796)){
var statearr_9840_9869 = state_9825__$1;
(statearr_9840_9869[(1)] = (8));

} else {
var statearr_9841_9870 = state_9825__$1;
(statearr_9841_9870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (14))){
var inst_9818 = (state_9825[(2)]);
var inst_9819 = cljs.core.async.close_BANG_.call(null,out);
var state_9825__$1 = (function (){var statearr_9843 = state_9825;
(statearr_9843[(13)] = inst_9818);

return statearr_9843;
})();
var statearr_9844_9871 = state_9825__$1;
(statearr_9844_9871[(2)] = inst_9819);

(statearr_9844_9871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (10))){
var inst_9808 = (state_9825[(2)]);
var state_9825__$1 = state_9825;
var statearr_9845_9872 = state_9825__$1;
(statearr_9845_9872[(2)] = inst_9808);

(statearr_9845_9872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9826 === (8))){
var inst_9789 = (state_9825[(8)]);
var inst_9793 = (state_9825[(10)]);
var inst_9785 = (state_9825[(9)]);
var inst_9798 = inst_9785.push(inst_9789);
var tmp9842 = inst_9785;
var inst_9785__$1 = tmp9842;
var inst_9786 = inst_9793;
var state_9825__$1 = (function (){var statearr_9846 = state_9825;
(statearr_9846[(7)] = inst_9786);

(statearr_9846[(14)] = inst_9798);

(statearr_9846[(9)] = inst_9785__$1);

return statearr_9846;
})();
var statearr_9847_9873 = state_9825__$1;
(statearr_9847_9873[(2)] = null);

(statearr_9847_9873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7141__auto___9859,out))
;
return ((function (switch__7029__auto__,c__7141__auto___9859,out){
return (function() {
var cljs$core$async$state_machine__7030__auto__ = null;
var cljs$core$async$state_machine__7030__auto____0 = (function (){
var statearr_9851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9851[(0)] = cljs$core$async$state_machine__7030__auto__);

(statearr_9851[(1)] = (1));

return statearr_9851;
});
var cljs$core$async$state_machine__7030__auto____1 = (function (state_9825){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_9825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e9852){if((e9852 instanceof Object)){
var ex__7033__auto__ = e9852;
var statearr_9853_9874 = state_9825;
(statearr_9853_9874[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9875 = state_9825;
state_9825 = G__9875;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
cljs$core$async$state_machine__7030__auto__ = function(state_9825){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7030__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7030__auto____1.call(this,state_9825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7030__auto____0;
cljs$core$async$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7030__auto____1;
return cljs$core$async$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___9859,out))
})();
var state__7143__auto__ = (function (){var statearr_9854 = f__7142__auto__.call(null);
(statearr_9854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___9859);

return statearr_9854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___9859,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map