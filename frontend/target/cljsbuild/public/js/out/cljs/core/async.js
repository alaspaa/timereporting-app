// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__43129 = arguments.length;
switch (G__43129) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43130 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43130 = (function (f,blockable,meta43131){
this.f = f;
this.blockable = blockable;
this.meta43131 = meta43131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43132,meta43131__$1){
var self__ = this;
var _43132__$1 = this;
return (new cljs.core.async.t_cljs$core$async43130(self__.f,self__.blockable,meta43131__$1));
}));

(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43132){
var self__ = this;
var _43132__$1 = this;
return self__.meta43131;
}));

(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async43130.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async43130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta43131","meta43131",1246205991,null)], null);
}));

(cljs.core.async.t_cljs$core$async43130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43130");

(cljs.core.async.t_cljs$core$async43130.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43130.
 */
cljs.core.async.__GT_t_cljs$core$async43130 = (function cljs$core$async$__GT_t_cljs$core$async43130(f__$1,blockable__$1,meta43131){
return (new cljs.core.async.t_cljs$core$async43130(f__$1,blockable__$1,meta43131));
});

}

return (new cljs.core.async.t_cljs$core$async43130(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__43136 = arguments.length;
switch (G__43136) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__43139 = arguments.length;
switch (G__43139) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__43142 = arguments.length;
switch (G__43142) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_43144 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_43144);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_43144);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
var G__43146 = arguments.length;
switch (G__43146) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___43148 = n;
var x_43149 = (0);
while(true){
if((x_43149 < n__4666__auto___43148)){
(a[x_43149] = (0));

var G__43150 = (x_43149 + (1));
x_43149 = G__43150;
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

var G__43151 = (i + (1));
i = G__43151;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43152 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43152 = (function (flag,meta43153){
this.flag = flag;
this.meta43153 = meta43153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43154,meta43153__$1){
var self__ = this;
var _43154__$1 = this;
return (new cljs.core.async.t_cljs$core$async43152(self__.flag,meta43153__$1));
}));

(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43154){
var self__ = this;
var _43154__$1 = this;
return self__.meta43153;
}));

(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43152.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async43152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta43153","meta43153",-928168443,null)], null);
}));

(cljs.core.async.t_cljs$core$async43152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43152");

(cljs.core.async.t_cljs$core$async43152.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43152.
 */
cljs.core.async.__GT_t_cljs$core$async43152 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async43152(flag__$1,meta43153){
return (new cljs.core.async.t_cljs$core$async43152(flag__$1,meta43153));
});

}

return (new cljs.core.async.t_cljs$core$async43152(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43155 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43155 = (function (flag,cb,meta43156){
this.flag = flag;
this.cb = cb;
this.meta43156 = meta43156;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43157,meta43156__$1){
var self__ = this;
var _43157__$1 = this;
return (new cljs.core.async.t_cljs$core$async43155(self__.flag,self__.cb,meta43156__$1));
}));

(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43157){
var self__ = this;
var _43157__$1 = this;
return self__.meta43156;
}));

(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43155.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async43155.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta43156","meta43156",-938007732,null)], null);
}));

(cljs.core.async.t_cljs$core$async43155.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43155.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43155");

(cljs.core.async.t_cljs$core$async43155.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43155");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43155.
 */
cljs.core.async.__GT_t_cljs$core$async43155 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async43155(flag__$1,cb__$1,meta43156){
return (new cljs.core.async.t_cljs$core$async43155(flag__$1,cb__$1,meta43156));
});

}

return (new cljs.core.async.t_cljs$core$async43155(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__43158_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43158_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__43159_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__43159_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43160 = (i + (1));
i = G__43160;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4795__auto__ = [];
var len__4789__auto___43166 = arguments.length;
var i__4790__auto___43167 = (0);
while(true){
if((i__4790__auto___43167 < len__4789__auto___43166)){
args__4795__auto__.push((arguments[i__4790__auto___43167]));

var G__43168 = (i__4790__auto___43167 + (1));
i__4790__auto___43167 = G__43168;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__43163){
var map__43164 = p__43163;
var map__43164__$1 = (((((!((map__43164 == null))))?(((((map__43164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43164):map__43164);
var opts = map__43164__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq43161){
var G__43162 = cljs.core.first.call(null,seq43161);
var seq43161__$1 = cljs.core.next.call(null,seq43161);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43162,seq43161__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__43170 = arguments.length;
switch (G__43170) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35094__auto___43216 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43194){
var state_val_43195 = (state_43194[(1)]);
if((state_val_43195 === (7))){
var inst_43190 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43196_43217 = state_43194__$1;
(statearr_43196_43217[(2)] = inst_43190);

(statearr_43196_43217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (1))){
var state_43194__$1 = state_43194;
var statearr_43197_43218 = state_43194__$1;
(statearr_43197_43218[(2)] = null);

(statearr_43197_43218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (4))){
var inst_43173 = (state_43194[(7)]);
var inst_43173__$1 = (state_43194[(2)]);
var inst_43174 = (inst_43173__$1 == null);
var state_43194__$1 = (function (){var statearr_43198 = state_43194;
(statearr_43198[(7)] = inst_43173__$1);

return statearr_43198;
})();
if(cljs.core.truth_(inst_43174)){
var statearr_43199_43219 = state_43194__$1;
(statearr_43199_43219[(1)] = (5));

} else {
var statearr_43200_43220 = state_43194__$1;
(statearr_43200_43220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (13))){
var state_43194__$1 = state_43194;
var statearr_43201_43221 = state_43194__$1;
(statearr_43201_43221[(2)] = null);

(statearr_43201_43221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (6))){
var inst_43173 = (state_43194[(7)]);
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43194__$1,(11),to,inst_43173);
} else {
if((state_val_43195 === (3))){
var inst_43192 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43194__$1,inst_43192);
} else {
if((state_val_43195 === (12))){
var state_43194__$1 = state_43194;
var statearr_43202_43222 = state_43194__$1;
(statearr_43202_43222[(2)] = null);

(statearr_43202_43222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (2))){
var state_43194__$1 = state_43194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43194__$1,(4),from);
} else {
if((state_val_43195 === (11))){
var inst_43183 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
if(cljs.core.truth_(inst_43183)){
var statearr_43203_43223 = state_43194__$1;
(statearr_43203_43223[(1)] = (12));

} else {
var statearr_43204_43224 = state_43194__$1;
(statearr_43204_43224[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (9))){
var state_43194__$1 = state_43194;
var statearr_43205_43225 = state_43194__$1;
(statearr_43205_43225[(2)] = null);

(statearr_43205_43225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (5))){
var state_43194__$1 = state_43194;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43206_43226 = state_43194__$1;
(statearr_43206_43226[(1)] = (8));

} else {
var statearr_43207_43227 = state_43194__$1;
(statearr_43207_43227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (14))){
var inst_43188 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43208_43228 = state_43194__$1;
(statearr_43208_43228[(2)] = inst_43188);

(statearr_43208_43228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (10))){
var inst_43180 = (state_43194[(2)]);
var state_43194__$1 = state_43194;
var statearr_43209_43229 = state_43194__$1;
(statearr_43209_43229[(2)] = inst_43180);

(statearr_43209_43229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43195 === (8))){
var inst_43177 = cljs.core.async.close_BANG_.call(null,to);
var state_43194__$1 = state_43194;
var statearr_43210_43230 = state_43194__$1;
(statearr_43210_43230[(2)] = inst_43177);

(statearr_43210_43230[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_43211 = [null,null,null,null,null,null,null,null];
(statearr_43211[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_43211[(1)] = (1));

return statearr_43211;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_43194){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43212){if((e43212 instanceof Object)){
var ex__34931__auto__ = e43212;
var statearr_43213_43231 = state_43194;
(statearr_43213_43231[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43232 = state_43194;
state_43194 = G__43232;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_43194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_43194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43214 = f__35095__auto__.call(null);
(statearr_43214[(6)] = c__35094__auto___43216);

return statearr_43214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__43233){
var vec__43234 = p__43233;
var v = cljs.core.nth.call(null,vec__43234,(0),null);
var p = cljs.core.nth.call(null,vec__43234,(1),null);
var job = vec__43234;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35094__auto___43405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43241){
var state_val_43242 = (state_43241[(1)]);
if((state_val_43242 === (1))){
var state_43241__$1 = state_43241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43241__$1,(2),res,v);
} else {
if((state_val_43242 === (2))){
var inst_43238 = (state_43241[(2)]);
var inst_43239 = cljs.core.async.close_BANG_.call(null,res);
var state_43241__$1 = (function (){var statearr_43243 = state_43241;
(statearr_43243[(7)] = inst_43238);

return statearr_43243;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43241__$1,inst_43239);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_43244 = [null,null,null,null,null,null,null,null];
(statearr_43244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__);

(statearr_43244[(1)] = (1));

return statearr_43244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1 = (function (state_43241){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43245){if((e43245 instanceof Object)){
var ex__34931__auto__ = e43245;
var statearr_43246_43406 = state_43241;
(statearr_43246_43406[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43407 = state_43241;
state_43241 = G__43407;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = function(state_43241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1.call(this,state_43241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43247 = f__35095__auto__.call(null);
(statearr_43247[(6)] = c__35094__auto___43405);

return statearr_43247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__43248){
var vec__43249 = p__43248;
var v = cljs.core.nth.call(null,vec__43249,(0),null);
var p = cljs.core.nth.call(null,vec__43249,(1),null);
var job = vec__43249;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4666__auto___43408 = n;
var __43409 = (0);
while(true){
if((__43409 < n__4666__auto___43408)){
var G__43252_43410 = type;
var G__43252_43411__$1 = (((G__43252_43410 instanceof cljs.core.Keyword))?G__43252_43410.fqn:null);
switch (G__43252_43411__$1) {
case "compute":
var c__35094__auto___43413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43409,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = ((function (__43409,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function (state_43265){
var state_val_43266 = (state_43265[(1)]);
if((state_val_43266 === (1))){
var state_43265__$1 = state_43265;
var statearr_43267_43414 = state_43265__$1;
(statearr_43267_43414[(2)] = null);

(statearr_43267_43414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43266 === (2))){
var state_43265__$1 = state_43265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43265__$1,(4),jobs);
} else {
if((state_val_43266 === (3))){
var inst_43263 = (state_43265[(2)]);
var state_43265__$1 = state_43265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43265__$1,inst_43263);
} else {
if((state_val_43266 === (4))){
var inst_43255 = (state_43265[(2)]);
var inst_43256 = process.call(null,inst_43255);
var state_43265__$1 = state_43265;
if(cljs.core.truth_(inst_43256)){
var statearr_43268_43415 = state_43265__$1;
(statearr_43268_43415[(1)] = (5));

} else {
var statearr_43269_43416 = state_43265__$1;
(statearr_43269_43416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43266 === (5))){
var state_43265__$1 = state_43265;
var statearr_43270_43417 = state_43265__$1;
(statearr_43270_43417[(2)] = null);

(statearr_43270_43417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43266 === (6))){
var state_43265__$1 = state_43265;
var statearr_43271_43418 = state_43265__$1;
(statearr_43271_43418[(2)] = null);

(statearr_43271_43418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43266 === (7))){
var inst_43261 = (state_43265[(2)]);
var state_43265__$1 = state_43265;
var statearr_43272_43419 = state_43265__$1;
(statearr_43272_43419[(2)] = inst_43261);

(statearr_43272_43419[(1)] = (3));


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
});})(__43409,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
;
return ((function (__43409,switch__34927__auto__,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_43273 = [null,null,null,null,null,null,null];
(statearr_43273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__);

(statearr_43273[(1)] = (1));

return statearr_43273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1 = (function (state_43265){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43274){if((e43274 instanceof Object)){
var ex__34931__auto__ = e43274;
var statearr_43275_43420 = state_43265;
(statearr_43275_43420[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43421 = state_43265;
state_43265 = G__43421;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = function(state_43265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1.call(this,state_43265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__;
})()
;})(__43409,switch__34927__auto__,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
})();
var state__35096__auto__ = (function (){var statearr_43276 = f__35095__auto__.call(null);
(statearr_43276[(6)] = c__35094__auto___43413);

return statearr_43276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
});})(__43409,c__35094__auto___43413,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
);


break;
case "async":
var c__35094__auto___43422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__43409,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = ((function (__43409,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function (state_43289){
var state_val_43290 = (state_43289[(1)]);
if((state_val_43290 === (1))){
var state_43289__$1 = state_43289;
var statearr_43291_43423 = state_43289__$1;
(statearr_43291_43423[(2)] = null);

(statearr_43291_43423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (2))){
var state_43289__$1 = state_43289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43289__$1,(4),jobs);
} else {
if((state_val_43290 === (3))){
var inst_43287 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43289__$1,inst_43287);
} else {
if((state_val_43290 === (4))){
var inst_43279 = (state_43289[(2)]);
var inst_43280 = async.call(null,inst_43279);
var state_43289__$1 = state_43289;
if(cljs.core.truth_(inst_43280)){
var statearr_43292_43424 = state_43289__$1;
(statearr_43292_43424[(1)] = (5));

} else {
var statearr_43293_43425 = state_43289__$1;
(statearr_43293_43425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (5))){
var state_43289__$1 = state_43289;
var statearr_43294_43426 = state_43289__$1;
(statearr_43294_43426[(2)] = null);

(statearr_43294_43426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (6))){
var state_43289__$1 = state_43289;
var statearr_43295_43427 = state_43289__$1;
(statearr_43295_43427[(2)] = null);

(statearr_43295_43427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43290 === (7))){
var inst_43285 = (state_43289[(2)]);
var state_43289__$1 = state_43289;
var statearr_43296_43428 = state_43289__$1;
(statearr_43296_43428[(2)] = inst_43285);

(statearr_43296_43428[(1)] = (3));


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
});})(__43409,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
;
return ((function (__43409,switch__34927__auto__,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_43297 = [null,null,null,null,null,null,null];
(statearr_43297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__);

(statearr_43297[(1)] = (1));

return statearr_43297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1 = (function (state_43289){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43298){if((e43298 instanceof Object)){
var ex__34931__auto__ = e43298;
var statearr_43299_43429 = state_43289;
(statearr_43299_43429[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43430 = state_43289;
state_43289 = G__43430;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = function(state_43289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1.call(this,state_43289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__;
})()
;})(__43409,switch__34927__auto__,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
})();
var state__35096__auto__ = (function (){var statearr_43300 = f__35095__auto__.call(null);
(statearr_43300[(6)] = c__35094__auto___43422);

return statearr_43300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
});})(__43409,c__35094__auto___43422,G__43252_43410,G__43252_43411__$1,n__4666__auto___43408,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43252_43411__$1)].join('')));

}

var G__43431 = (__43409 + (1));
__43409 = G__43431;
continue;
} else {
}
break;
}

var c__35094__auto___43432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43322){
var state_val_43323 = (state_43322[(1)]);
if((state_val_43323 === (7))){
var inst_43318 = (state_43322[(2)]);
var state_43322__$1 = state_43322;
var statearr_43324_43433 = state_43322__$1;
(statearr_43324_43433[(2)] = inst_43318);

(statearr_43324_43433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (1))){
var state_43322__$1 = state_43322;
var statearr_43325_43434 = state_43322__$1;
(statearr_43325_43434[(2)] = null);

(statearr_43325_43434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (4))){
var inst_43303 = (state_43322[(7)]);
var inst_43303__$1 = (state_43322[(2)]);
var inst_43304 = (inst_43303__$1 == null);
var state_43322__$1 = (function (){var statearr_43326 = state_43322;
(statearr_43326[(7)] = inst_43303__$1);

return statearr_43326;
})();
if(cljs.core.truth_(inst_43304)){
var statearr_43327_43435 = state_43322__$1;
(statearr_43327_43435[(1)] = (5));

} else {
var statearr_43328_43436 = state_43322__$1;
(statearr_43328_43436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (6))){
var inst_43303 = (state_43322[(7)]);
var inst_43308 = (state_43322[(8)]);
var inst_43308__$1 = cljs.core.async.chan.call(null,(1));
var inst_43309 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43310 = [inst_43303,inst_43308__$1];
var inst_43311 = (new cljs.core.PersistentVector(null,2,(5),inst_43309,inst_43310,null));
var state_43322__$1 = (function (){var statearr_43329 = state_43322;
(statearr_43329[(8)] = inst_43308__$1);

return statearr_43329;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43322__$1,(8),jobs,inst_43311);
} else {
if((state_val_43323 === (3))){
var inst_43320 = (state_43322[(2)]);
var state_43322__$1 = state_43322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43322__$1,inst_43320);
} else {
if((state_val_43323 === (2))){
var state_43322__$1 = state_43322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43322__$1,(4),from);
} else {
if((state_val_43323 === (9))){
var inst_43315 = (state_43322[(2)]);
var state_43322__$1 = (function (){var statearr_43330 = state_43322;
(statearr_43330[(9)] = inst_43315);

return statearr_43330;
})();
var statearr_43331_43437 = state_43322__$1;
(statearr_43331_43437[(2)] = null);

(statearr_43331_43437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (5))){
var inst_43306 = cljs.core.async.close_BANG_.call(null,jobs);
var state_43322__$1 = state_43322;
var statearr_43332_43438 = state_43322__$1;
(statearr_43332_43438[(2)] = inst_43306);

(statearr_43332_43438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43323 === (8))){
var inst_43308 = (state_43322[(8)]);
var inst_43313 = (state_43322[(2)]);
var state_43322__$1 = (function (){var statearr_43333 = state_43322;
(statearr_43333[(10)] = inst_43313);

return statearr_43333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43322__$1,(9),results,inst_43308);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_43334 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__);

(statearr_43334[(1)] = (1));

return statearr_43334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1 = (function (state_43322){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43335){if((e43335 instanceof Object)){
var ex__34931__auto__ = e43335;
var statearr_43336_43439 = state_43322;
(statearr_43336_43439[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43440 = state_43322;
state_43322 = G__43440;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = function(state_43322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1.call(this,state_43322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43337 = f__35095__auto__.call(null);
(statearr_43337[(6)] = c__35094__auto___43432);

return statearr_43337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


var c__35094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43375){
var state_val_43376 = (state_43375[(1)]);
if((state_val_43376 === (7))){
var inst_43371 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
var statearr_43377_43441 = state_43375__$1;
(statearr_43377_43441[(2)] = inst_43371);

(statearr_43377_43441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (20))){
var state_43375__$1 = state_43375;
var statearr_43378_43442 = state_43375__$1;
(statearr_43378_43442[(2)] = null);

(statearr_43378_43442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (1))){
var state_43375__$1 = state_43375;
var statearr_43379_43443 = state_43375__$1;
(statearr_43379_43443[(2)] = null);

(statearr_43379_43443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (4))){
var inst_43340 = (state_43375[(7)]);
var inst_43340__$1 = (state_43375[(2)]);
var inst_43341 = (inst_43340__$1 == null);
var state_43375__$1 = (function (){var statearr_43380 = state_43375;
(statearr_43380[(7)] = inst_43340__$1);

return statearr_43380;
})();
if(cljs.core.truth_(inst_43341)){
var statearr_43381_43444 = state_43375__$1;
(statearr_43381_43444[(1)] = (5));

} else {
var statearr_43382_43445 = state_43375__$1;
(statearr_43382_43445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (15))){
var inst_43353 = (state_43375[(8)]);
var state_43375__$1 = state_43375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43375__$1,(18),to,inst_43353);
} else {
if((state_val_43376 === (21))){
var inst_43366 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
var statearr_43383_43446 = state_43375__$1;
(statearr_43383_43446[(2)] = inst_43366);

(statearr_43383_43446[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (13))){
var inst_43368 = (state_43375[(2)]);
var state_43375__$1 = (function (){var statearr_43384 = state_43375;
(statearr_43384[(9)] = inst_43368);

return statearr_43384;
})();
var statearr_43385_43447 = state_43375__$1;
(statearr_43385_43447[(2)] = null);

(statearr_43385_43447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (6))){
var inst_43340 = (state_43375[(7)]);
var state_43375__$1 = state_43375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43375__$1,(11),inst_43340);
} else {
if((state_val_43376 === (17))){
var inst_43361 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
if(cljs.core.truth_(inst_43361)){
var statearr_43386_43448 = state_43375__$1;
(statearr_43386_43448[(1)] = (19));

} else {
var statearr_43387_43449 = state_43375__$1;
(statearr_43387_43449[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (3))){
var inst_43373 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43375__$1,inst_43373);
} else {
if((state_val_43376 === (12))){
var inst_43350 = (state_43375[(10)]);
var state_43375__$1 = state_43375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43375__$1,(14),inst_43350);
} else {
if((state_val_43376 === (2))){
var state_43375__$1 = state_43375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43375__$1,(4),results);
} else {
if((state_val_43376 === (19))){
var state_43375__$1 = state_43375;
var statearr_43388_43450 = state_43375__$1;
(statearr_43388_43450[(2)] = null);

(statearr_43388_43450[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (11))){
var inst_43350 = (state_43375[(2)]);
var state_43375__$1 = (function (){var statearr_43389 = state_43375;
(statearr_43389[(10)] = inst_43350);

return statearr_43389;
})();
var statearr_43390_43451 = state_43375__$1;
(statearr_43390_43451[(2)] = null);

(statearr_43390_43451[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (9))){
var state_43375__$1 = state_43375;
var statearr_43391_43452 = state_43375__$1;
(statearr_43391_43452[(2)] = null);

(statearr_43391_43452[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (5))){
var state_43375__$1 = state_43375;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43392_43453 = state_43375__$1;
(statearr_43392_43453[(1)] = (8));

} else {
var statearr_43393_43454 = state_43375__$1;
(statearr_43393_43454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (14))){
var inst_43353 = (state_43375[(8)]);
var inst_43353__$1 = (state_43375[(2)]);
var inst_43354 = (inst_43353__$1 == null);
var inst_43355 = cljs.core.not.call(null,inst_43354);
var state_43375__$1 = (function (){var statearr_43394 = state_43375;
(statearr_43394[(8)] = inst_43353__$1);

return statearr_43394;
})();
if(inst_43355){
var statearr_43395_43455 = state_43375__$1;
(statearr_43395_43455[(1)] = (15));

} else {
var statearr_43396_43456 = state_43375__$1;
(statearr_43396_43456[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (16))){
var state_43375__$1 = state_43375;
var statearr_43397_43457 = state_43375__$1;
(statearr_43397_43457[(2)] = false);

(statearr_43397_43457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (10))){
var inst_43347 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
var statearr_43398_43458 = state_43375__$1;
(statearr_43398_43458[(2)] = inst_43347);

(statearr_43398_43458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (18))){
var inst_43358 = (state_43375[(2)]);
var state_43375__$1 = state_43375;
var statearr_43399_43459 = state_43375__$1;
(statearr_43399_43459[(2)] = inst_43358);

(statearr_43399_43459[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43376 === (8))){
var inst_43344 = cljs.core.async.close_BANG_.call(null,to);
var state_43375__$1 = state_43375;
var statearr_43400_43460 = state_43375__$1;
(statearr_43400_43460[(2)] = inst_43344);

(statearr_43400_43460[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_43401 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43401[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__);

(statearr_43401[(1)] = (1));

return statearr_43401;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1 = (function (state_43375){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43402){if((e43402 instanceof Object)){
var ex__34931__auto__ = e43402;
var statearr_43403_43461 = state_43375;
(statearr_43403_43461[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43462 = state_43375;
state_43375 = G__43462;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__ = function(state_43375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1.call(this,state_43375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43404 = f__35095__auto__.call(null);
(statearr_43404[(6)] = c__35094__auto__);

return statearr_43404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));

return c__35094__auto__;
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
var G__43464 = arguments.length;
switch (G__43464) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__43467 = arguments.length;
switch (G__43467) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__43470 = arguments.length;
switch (G__43470) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35094__auto___43519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43496){
var state_val_43497 = (state_43496[(1)]);
if((state_val_43497 === (7))){
var inst_43492 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
var statearr_43498_43520 = state_43496__$1;
(statearr_43498_43520[(2)] = inst_43492);

(statearr_43498_43520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (1))){
var state_43496__$1 = state_43496;
var statearr_43499_43521 = state_43496__$1;
(statearr_43499_43521[(2)] = null);

(statearr_43499_43521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (4))){
var inst_43473 = (state_43496[(7)]);
var inst_43473__$1 = (state_43496[(2)]);
var inst_43474 = (inst_43473__$1 == null);
var state_43496__$1 = (function (){var statearr_43500 = state_43496;
(statearr_43500[(7)] = inst_43473__$1);

return statearr_43500;
})();
if(cljs.core.truth_(inst_43474)){
var statearr_43501_43522 = state_43496__$1;
(statearr_43501_43522[(1)] = (5));

} else {
var statearr_43502_43523 = state_43496__$1;
(statearr_43502_43523[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (13))){
var state_43496__$1 = state_43496;
var statearr_43503_43524 = state_43496__$1;
(statearr_43503_43524[(2)] = null);

(statearr_43503_43524[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (6))){
var inst_43473 = (state_43496[(7)]);
var inst_43479 = p.call(null,inst_43473);
var state_43496__$1 = state_43496;
if(cljs.core.truth_(inst_43479)){
var statearr_43504_43525 = state_43496__$1;
(statearr_43504_43525[(1)] = (9));

} else {
var statearr_43505_43526 = state_43496__$1;
(statearr_43505_43526[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (3))){
var inst_43494 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43496__$1,inst_43494);
} else {
if((state_val_43497 === (12))){
var state_43496__$1 = state_43496;
var statearr_43506_43527 = state_43496__$1;
(statearr_43506_43527[(2)] = null);

(statearr_43506_43527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (2))){
var state_43496__$1 = state_43496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43496__$1,(4),ch);
} else {
if((state_val_43497 === (11))){
var inst_43473 = (state_43496[(7)]);
var inst_43483 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43496__$1,(8),inst_43483,inst_43473);
} else {
if((state_val_43497 === (9))){
var state_43496__$1 = state_43496;
var statearr_43507_43528 = state_43496__$1;
(statearr_43507_43528[(2)] = tc);

(statearr_43507_43528[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (5))){
var inst_43476 = cljs.core.async.close_BANG_.call(null,tc);
var inst_43477 = cljs.core.async.close_BANG_.call(null,fc);
var state_43496__$1 = (function (){var statearr_43508 = state_43496;
(statearr_43508[(8)] = inst_43476);

return statearr_43508;
})();
var statearr_43509_43529 = state_43496__$1;
(statearr_43509_43529[(2)] = inst_43477);

(statearr_43509_43529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (14))){
var inst_43490 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
var statearr_43510_43530 = state_43496__$1;
(statearr_43510_43530[(2)] = inst_43490);

(statearr_43510_43530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (10))){
var state_43496__$1 = state_43496;
var statearr_43511_43531 = state_43496__$1;
(statearr_43511_43531[(2)] = fc);

(statearr_43511_43531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43497 === (8))){
var inst_43485 = (state_43496[(2)]);
var state_43496__$1 = state_43496;
if(cljs.core.truth_(inst_43485)){
var statearr_43512_43532 = state_43496__$1;
(statearr_43512_43532[(1)] = (12));

} else {
var statearr_43513_43533 = state_43496__$1;
(statearr_43513_43533[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_43514 = [null,null,null,null,null,null,null,null,null];
(statearr_43514[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_43514[(1)] = (1));

return statearr_43514;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_43496){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43515){if((e43515 instanceof Object)){
var ex__34931__auto__ = e43515;
var statearr_43516_43534 = state_43496;
(statearr_43516_43534[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43535 = state_43496;
state_43496 = G__43535;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_43496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_43496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43517 = f__35095__auto__.call(null);
(statearr_43517[(6)] = c__35094__auto___43519);

return statearr_43517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43556){
var state_val_43557 = (state_43556[(1)]);
if((state_val_43557 === (7))){
var inst_43552 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43558_43576 = state_43556__$1;
(statearr_43558_43576[(2)] = inst_43552);

(statearr_43558_43576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (1))){
var inst_43536 = init;
var state_43556__$1 = (function (){var statearr_43559 = state_43556;
(statearr_43559[(7)] = inst_43536);

return statearr_43559;
})();
var statearr_43560_43577 = state_43556__$1;
(statearr_43560_43577[(2)] = null);

(statearr_43560_43577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (4))){
var inst_43539 = (state_43556[(8)]);
var inst_43539__$1 = (state_43556[(2)]);
var inst_43540 = (inst_43539__$1 == null);
var state_43556__$1 = (function (){var statearr_43561 = state_43556;
(statearr_43561[(8)] = inst_43539__$1);

return statearr_43561;
})();
if(cljs.core.truth_(inst_43540)){
var statearr_43562_43578 = state_43556__$1;
(statearr_43562_43578[(1)] = (5));

} else {
var statearr_43563_43579 = state_43556__$1;
(statearr_43563_43579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (6))){
var inst_43536 = (state_43556[(7)]);
var inst_43539 = (state_43556[(8)]);
var inst_43543 = (state_43556[(9)]);
var inst_43543__$1 = f.call(null,inst_43536,inst_43539);
var inst_43544 = cljs.core.reduced_QMARK_.call(null,inst_43543__$1);
var state_43556__$1 = (function (){var statearr_43564 = state_43556;
(statearr_43564[(9)] = inst_43543__$1);

return statearr_43564;
})();
if(inst_43544){
var statearr_43565_43580 = state_43556__$1;
(statearr_43565_43580[(1)] = (8));

} else {
var statearr_43566_43581 = state_43556__$1;
(statearr_43566_43581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (3))){
var inst_43554 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43556__$1,inst_43554);
} else {
if((state_val_43557 === (2))){
var state_43556__$1 = state_43556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43556__$1,(4),ch);
} else {
if((state_val_43557 === (9))){
var inst_43543 = (state_43556[(9)]);
var inst_43536 = inst_43543;
var state_43556__$1 = (function (){var statearr_43567 = state_43556;
(statearr_43567[(7)] = inst_43536);

return statearr_43567;
})();
var statearr_43568_43582 = state_43556__$1;
(statearr_43568_43582[(2)] = null);

(statearr_43568_43582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (5))){
var inst_43536 = (state_43556[(7)]);
var state_43556__$1 = state_43556;
var statearr_43569_43583 = state_43556__$1;
(statearr_43569_43583[(2)] = inst_43536);

(statearr_43569_43583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (10))){
var inst_43550 = (state_43556[(2)]);
var state_43556__$1 = state_43556;
var statearr_43570_43584 = state_43556__$1;
(statearr_43570_43584[(2)] = inst_43550);

(statearr_43570_43584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43557 === (8))){
var inst_43543 = (state_43556[(9)]);
var inst_43546 = cljs.core.deref.call(null,inst_43543);
var state_43556__$1 = state_43556;
var statearr_43571_43585 = state_43556__$1;
(statearr_43571_43585[(2)] = inst_43546);

(statearr_43571_43585[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__34928__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34928__auto____0 = (function (){
var statearr_43572 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43572[(0)] = cljs$core$async$reduce_$_state_machine__34928__auto__);

(statearr_43572[(1)] = (1));

return statearr_43572;
});
var cljs$core$async$reduce_$_state_machine__34928__auto____1 = (function (state_43556){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43573){if((e43573 instanceof Object)){
var ex__34931__auto__ = e43573;
var statearr_43574_43586 = state_43556;
(statearr_43574_43586[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43587 = state_43556;
state_43556 = G__43587;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34928__auto__ = function(state_43556){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34928__auto____1.call(this,state_43556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34928__auto____0;
cljs$core$async$reduce_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34928__auto____1;
return cljs$core$async$reduce_$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43575 = f__35095__auto__.call(null);
(statearr_43575[(6)] = c__35094__auto__);

return statearr_43575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));

return c__35094__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43593){
var state_val_43594 = (state_43593[(1)]);
if((state_val_43594 === (1))){
var inst_43588 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43593__$1,(2),inst_43588);
} else {
if((state_val_43594 === (2))){
var inst_43590 = (state_43593[(2)]);
var inst_43591 = f__$1.call(null,inst_43590);
var state_43593__$1 = state_43593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43593__$1,inst_43591);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__34928__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34928__auto____0 = (function (){
var statearr_43595 = [null,null,null,null,null,null,null];
(statearr_43595[(0)] = cljs$core$async$transduce_$_state_machine__34928__auto__);

(statearr_43595[(1)] = (1));

return statearr_43595;
});
var cljs$core$async$transduce_$_state_machine__34928__auto____1 = (function (state_43593){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43596){if((e43596 instanceof Object)){
var ex__34931__auto__ = e43596;
var statearr_43597_43599 = state_43593;
(statearr_43597_43599[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43596;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43600 = state_43593;
state_43593 = G__43600;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34928__auto__ = function(state_43593){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34928__auto____1.call(this,state_43593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34928__auto____0;
cljs$core$async$transduce_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34928__auto____1;
return cljs$core$async$transduce_$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43598 = f__35095__auto__.call(null);
(statearr_43598[(6)] = c__35094__auto__);

return statearr_43598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));

return c__35094__auto__;
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
var G__43602 = arguments.length;
switch (G__43602) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43627){
var state_val_43628 = (state_43627[(1)]);
if((state_val_43628 === (7))){
var inst_43609 = (state_43627[(2)]);
var state_43627__$1 = state_43627;
var statearr_43629_43650 = state_43627__$1;
(statearr_43629_43650[(2)] = inst_43609);

(statearr_43629_43650[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (1))){
var inst_43603 = cljs.core.seq.call(null,coll);
var inst_43604 = inst_43603;
var state_43627__$1 = (function (){var statearr_43630 = state_43627;
(statearr_43630[(7)] = inst_43604);

return statearr_43630;
})();
var statearr_43631_43651 = state_43627__$1;
(statearr_43631_43651[(2)] = null);

(statearr_43631_43651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (4))){
var inst_43604 = (state_43627[(7)]);
var inst_43607 = cljs.core.first.call(null,inst_43604);
var state_43627__$1 = state_43627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43627__$1,(7),ch,inst_43607);
} else {
if((state_val_43628 === (13))){
var inst_43621 = (state_43627[(2)]);
var state_43627__$1 = state_43627;
var statearr_43632_43652 = state_43627__$1;
(statearr_43632_43652[(2)] = inst_43621);

(statearr_43632_43652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (6))){
var inst_43612 = (state_43627[(2)]);
var state_43627__$1 = state_43627;
if(cljs.core.truth_(inst_43612)){
var statearr_43633_43653 = state_43627__$1;
(statearr_43633_43653[(1)] = (8));

} else {
var statearr_43634_43654 = state_43627__$1;
(statearr_43634_43654[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (3))){
var inst_43625 = (state_43627[(2)]);
var state_43627__$1 = state_43627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43627__$1,inst_43625);
} else {
if((state_val_43628 === (12))){
var state_43627__$1 = state_43627;
var statearr_43635_43655 = state_43627__$1;
(statearr_43635_43655[(2)] = null);

(statearr_43635_43655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (2))){
var inst_43604 = (state_43627[(7)]);
var state_43627__$1 = state_43627;
if(cljs.core.truth_(inst_43604)){
var statearr_43636_43656 = state_43627__$1;
(statearr_43636_43656[(1)] = (4));

} else {
var statearr_43637_43657 = state_43627__$1;
(statearr_43637_43657[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (11))){
var inst_43618 = cljs.core.async.close_BANG_.call(null,ch);
var state_43627__$1 = state_43627;
var statearr_43638_43658 = state_43627__$1;
(statearr_43638_43658[(2)] = inst_43618);

(statearr_43638_43658[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (9))){
var state_43627__$1 = state_43627;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43639_43659 = state_43627__$1;
(statearr_43639_43659[(1)] = (11));

} else {
var statearr_43640_43660 = state_43627__$1;
(statearr_43640_43660[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (5))){
var inst_43604 = (state_43627[(7)]);
var state_43627__$1 = state_43627;
var statearr_43641_43661 = state_43627__$1;
(statearr_43641_43661[(2)] = inst_43604);

(statearr_43641_43661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (10))){
var inst_43623 = (state_43627[(2)]);
var state_43627__$1 = state_43627;
var statearr_43642_43662 = state_43627__$1;
(statearr_43642_43662[(2)] = inst_43623);

(statearr_43642_43662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43628 === (8))){
var inst_43604 = (state_43627[(7)]);
var inst_43614 = cljs.core.next.call(null,inst_43604);
var inst_43604__$1 = inst_43614;
var state_43627__$1 = (function (){var statearr_43643 = state_43627;
(statearr_43643[(7)] = inst_43604__$1);

return statearr_43643;
})();
var statearr_43644_43663 = state_43627__$1;
(statearr_43644_43663[(2)] = null);

(statearr_43644_43663[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_43645 = [null,null,null,null,null,null,null,null];
(statearr_43645[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_43645[(1)] = (1));

return statearr_43645;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_43627){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43646){if((e43646 instanceof Object)){
var ex__34931__auto__ = e43646;
var statearr_43647_43664 = state_43627;
(statearr_43647_43664[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43646;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43665 = state_43627;
state_43627 = G__43665;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_43627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_43627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43648 = f__35095__auto__.call(null);
(statearr_43648[(6)] = c__35094__auto__);

return statearr_43648;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));

return c__35094__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,_);
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43666 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43666 = (function (ch,cs,meta43667){
this.ch = ch;
this.cs = cs;
this.meta43667 = meta43667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43668,meta43667__$1){
var self__ = this;
var _43668__$1 = this;
return (new cljs.core.async.t_cljs$core$async43666(self__.ch,self__.cs,meta43667__$1));
}));

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43668){
var self__ = this;
var _43668__$1 = this;
return self__.meta43667;
}));

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43666.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43667","meta43667",556450501,null)], null);
}));

(cljs.core.async.t_cljs$core$async43666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43666");

(cljs.core.async.t_cljs$core$async43666.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43666.
 */
cljs.core.async.__GT_t_cljs$core$async43666 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43666(ch__$1,cs__$1,meta43667){
return (new cljs.core.async.t_cljs$core$async43666(ch__$1,cs__$1,meta43667));
});

}

return (new cljs.core.async.t_cljs$core$async43666(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__35094__auto___43888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_43803){
var state_val_43804 = (state_43803[(1)]);
if((state_val_43804 === (7))){
var inst_43799 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43805_43889 = state_43803__$1;
(statearr_43805_43889[(2)] = inst_43799);

(statearr_43805_43889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (20))){
var inst_43702 = (state_43803[(7)]);
var inst_43714 = cljs.core.first.call(null,inst_43702);
var inst_43715 = cljs.core.nth.call(null,inst_43714,(0),null);
var inst_43716 = cljs.core.nth.call(null,inst_43714,(1),null);
var state_43803__$1 = (function (){var statearr_43806 = state_43803;
(statearr_43806[(8)] = inst_43715);

return statearr_43806;
})();
if(cljs.core.truth_(inst_43716)){
var statearr_43807_43890 = state_43803__$1;
(statearr_43807_43890[(1)] = (22));

} else {
var statearr_43808_43891 = state_43803__$1;
(statearr_43808_43891[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (27))){
var inst_43744 = (state_43803[(9)]);
var inst_43671 = (state_43803[(10)]);
var inst_43751 = (state_43803[(11)]);
var inst_43746 = (state_43803[(12)]);
var inst_43751__$1 = cljs.core._nth.call(null,inst_43744,inst_43746);
var inst_43752 = cljs.core.async.put_BANG_.call(null,inst_43751__$1,inst_43671,done);
var state_43803__$1 = (function (){var statearr_43809 = state_43803;
(statearr_43809[(11)] = inst_43751__$1);

return statearr_43809;
})();
if(cljs.core.truth_(inst_43752)){
var statearr_43810_43892 = state_43803__$1;
(statearr_43810_43892[(1)] = (30));

} else {
var statearr_43811_43893 = state_43803__$1;
(statearr_43811_43893[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (1))){
var state_43803__$1 = state_43803;
var statearr_43812_43894 = state_43803__$1;
(statearr_43812_43894[(2)] = null);

(statearr_43812_43894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (24))){
var inst_43702 = (state_43803[(7)]);
var inst_43721 = (state_43803[(2)]);
var inst_43722 = cljs.core.next.call(null,inst_43702);
var inst_43680 = inst_43722;
var inst_43681 = null;
var inst_43682 = (0);
var inst_43683 = (0);
var state_43803__$1 = (function (){var statearr_43813 = state_43803;
(statearr_43813[(13)] = inst_43683);

(statearr_43813[(14)] = inst_43680);

(statearr_43813[(15)] = inst_43682);

(statearr_43813[(16)] = inst_43721);

(statearr_43813[(17)] = inst_43681);

return statearr_43813;
})();
var statearr_43814_43895 = state_43803__$1;
(statearr_43814_43895[(2)] = null);

(statearr_43814_43895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (39))){
var state_43803__$1 = state_43803;
var statearr_43818_43896 = state_43803__$1;
(statearr_43818_43896[(2)] = null);

(statearr_43818_43896[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (4))){
var inst_43671 = (state_43803[(10)]);
var inst_43671__$1 = (state_43803[(2)]);
var inst_43672 = (inst_43671__$1 == null);
var state_43803__$1 = (function (){var statearr_43819 = state_43803;
(statearr_43819[(10)] = inst_43671__$1);

return statearr_43819;
})();
if(cljs.core.truth_(inst_43672)){
var statearr_43820_43897 = state_43803__$1;
(statearr_43820_43897[(1)] = (5));

} else {
var statearr_43821_43898 = state_43803__$1;
(statearr_43821_43898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (15))){
var inst_43683 = (state_43803[(13)]);
var inst_43680 = (state_43803[(14)]);
var inst_43682 = (state_43803[(15)]);
var inst_43681 = (state_43803[(17)]);
var inst_43698 = (state_43803[(2)]);
var inst_43699 = (inst_43683 + (1));
var tmp43815 = inst_43680;
var tmp43816 = inst_43682;
var tmp43817 = inst_43681;
var inst_43680__$1 = tmp43815;
var inst_43681__$1 = tmp43817;
var inst_43682__$1 = tmp43816;
var inst_43683__$1 = inst_43699;
var state_43803__$1 = (function (){var statearr_43822 = state_43803;
(statearr_43822[(18)] = inst_43698);

(statearr_43822[(13)] = inst_43683__$1);

(statearr_43822[(14)] = inst_43680__$1);

(statearr_43822[(15)] = inst_43682__$1);

(statearr_43822[(17)] = inst_43681__$1);

return statearr_43822;
})();
var statearr_43823_43899 = state_43803__$1;
(statearr_43823_43899[(2)] = null);

(statearr_43823_43899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (21))){
var inst_43725 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43827_43900 = state_43803__$1;
(statearr_43827_43900[(2)] = inst_43725);

(statearr_43827_43900[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (31))){
var inst_43751 = (state_43803[(11)]);
var inst_43755 = done.call(null,null);
var inst_43756 = cljs.core.async.untap_STAR_.call(null,m,inst_43751);
var state_43803__$1 = (function (){var statearr_43828 = state_43803;
(statearr_43828[(19)] = inst_43755);

return statearr_43828;
})();
var statearr_43829_43901 = state_43803__$1;
(statearr_43829_43901[(2)] = inst_43756);

(statearr_43829_43901[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (32))){
var inst_43743 = (state_43803[(20)]);
var inst_43744 = (state_43803[(9)]);
var inst_43746 = (state_43803[(12)]);
var inst_43745 = (state_43803[(21)]);
var inst_43758 = (state_43803[(2)]);
var inst_43759 = (inst_43746 + (1));
var tmp43824 = inst_43743;
var tmp43825 = inst_43744;
var tmp43826 = inst_43745;
var inst_43743__$1 = tmp43824;
var inst_43744__$1 = tmp43825;
var inst_43745__$1 = tmp43826;
var inst_43746__$1 = inst_43759;
var state_43803__$1 = (function (){var statearr_43830 = state_43803;
(statearr_43830[(20)] = inst_43743__$1);

(statearr_43830[(9)] = inst_43744__$1);

(statearr_43830[(12)] = inst_43746__$1);

(statearr_43830[(21)] = inst_43745__$1);

(statearr_43830[(22)] = inst_43758);

return statearr_43830;
})();
var statearr_43831_43902 = state_43803__$1;
(statearr_43831_43902[(2)] = null);

(statearr_43831_43902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (40))){
var inst_43771 = (state_43803[(23)]);
var inst_43775 = done.call(null,null);
var inst_43776 = cljs.core.async.untap_STAR_.call(null,m,inst_43771);
var state_43803__$1 = (function (){var statearr_43832 = state_43803;
(statearr_43832[(24)] = inst_43775);

return statearr_43832;
})();
var statearr_43833_43903 = state_43803__$1;
(statearr_43833_43903[(2)] = inst_43776);

(statearr_43833_43903[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (33))){
var inst_43762 = (state_43803[(25)]);
var inst_43764 = cljs.core.chunked_seq_QMARK_.call(null,inst_43762);
var state_43803__$1 = state_43803;
if(inst_43764){
var statearr_43834_43904 = state_43803__$1;
(statearr_43834_43904[(1)] = (36));

} else {
var statearr_43835_43905 = state_43803__$1;
(statearr_43835_43905[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (13))){
var inst_43692 = (state_43803[(26)]);
var inst_43695 = cljs.core.async.close_BANG_.call(null,inst_43692);
var state_43803__$1 = state_43803;
var statearr_43836_43906 = state_43803__$1;
(statearr_43836_43906[(2)] = inst_43695);

(statearr_43836_43906[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (22))){
var inst_43715 = (state_43803[(8)]);
var inst_43718 = cljs.core.async.close_BANG_.call(null,inst_43715);
var state_43803__$1 = state_43803;
var statearr_43837_43907 = state_43803__$1;
(statearr_43837_43907[(2)] = inst_43718);

(statearr_43837_43907[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (36))){
var inst_43762 = (state_43803[(25)]);
var inst_43766 = cljs.core.chunk_first.call(null,inst_43762);
var inst_43767 = cljs.core.chunk_rest.call(null,inst_43762);
var inst_43768 = cljs.core.count.call(null,inst_43766);
var inst_43743 = inst_43767;
var inst_43744 = inst_43766;
var inst_43745 = inst_43768;
var inst_43746 = (0);
var state_43803__$1 = (function (){var statearr_43838 = state_43803;
(statearr_43838[(20)] = inst_43743);

(statearr_43838[(9)] = inst_43744);

(statearr_43838[(12)] = inst_43746);

(statearr_43838[(21)] = inst_43745);

return statearr_43838;
})();
var statearr_43839_43908 = state_43803__$1;
(statearr_43839_43908[(2)] = null);

(statearr_43839_43908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (41))){
var inst_43762 = (state_43803[(25)]);
var inst_43778 = (state_43803[(2)]);
var inst_43779 = cljs.core.next.call(null,inst_43762);
var inst_43743 = inst_43779;
var inst_43744 = null;
var inst_43745 = (0);
var inst_43746 = (0);
var state_43803__$1 = (function (){var statearr_43840 = state_43803;
(statearr_43840[(27)] = inst_43778);

(statearr_43840[(20)] = inst_43743);

(statearr_43840[(9)] = inst_43744);

(statearr_43840[(12)] = inst_43746);

(statearr_43840[(21)] = inst_43745);

return statearr_43840;
})();
var statearr_43841_43909 = state_43803__$1;
(statearr_43841_43909[(2)] = null);

(statearr_43841_43909[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (43))){
var state_43803__$1 = state_43803;
var statearr_43842_43910 = state_43803__$1;
(statearr_43842_43910[(2)] = null);

(statearr_43842_43910[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (29))){
var inst_43787 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43843_43911 = state_43803__$1;
(statearr_43843_43911[(2)] = inst_43787);

(statearr_43843_43911[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (44))){
var inst_43796 = (state_43803[(2)]);
var state_43803__$1 = (function (){var statearr_43844 = state_43803;
(statearr_43844[(28)] = inst_43796);

return statearr_43844;
})();
var statearr_43845_43912 = state_43803__$1;
(statearr_43845_43912[(2)] = null);

(statearr_43845_43912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (6))){
var inst_43735 = (state_43803[(29)]);
var inst_43734 = cljs.core.deref.call(null,cs);
var inst_43735__$1 = cljs.core.keys.call(null,inst_43734);
var inst_43736 = cljs.core.count.call(null,inst_43735__$1);
var inst_43737 = cljs.core.reset_BANG_.call(null,dctr,inst_43736);
var inst_43742 = cljs.core.seq.call(null,inst_43735__$1);
var inst_43743 = inst_43742;
var inst_43744 = null;
var inst_43745 = (0);
var inst_43746 = (0);
var state_43803__$1 = (function (){var statearr_43846 = state_43803;
(statearr_43846[(30)] = inst_43737);

(statearr_43846[(20)] = inst_43743);

(statearr_43846[(9)] = inst_43744);

(statearr_43846[(29)] = inst_43735__$1);

(statearr_43846[(12)] = inst_43746);

(statearr_43846[(21)] = inst_43745);

return statearr_43846;
})();
var statearr_43847_43913 = state_43803__$1;
(statearr_43847_43913[(2)] = null);

(statearr_43847_43913[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (28))){
var inst_43762 = (state_43803[(25)]);
var inst_43743 = (state_43803[(20)]);
var inst_43762__$1 = cljs.core.seq.call(null,inst_43743);
var state_43803__$1 = (function (){var statearr_43848 = state_43803;
(statearr_43848[(25)] = inst_43762__$1);

return statearr_43848;
})();
if(inst_43762__$1){
var statearr_43849_43914 = state_43803__$1;
(statearr_43849_43914[(1)] = (33));

} else {
var statearr_43850_43915 = state_43803__$1;
(statearr_43850_43915[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (25))){
var inst_43746 = (state_43803[(12)]);
var inst_43745 = (state_43803[(21)]);
var inst_43748 = (inst_43746 < inst_43745);
var inst_43749 = inst_43748;
var state_43803__$1 = state_43803;
if(cljs.core.truth_(inst_43749)){
var statearr_43851_43916 = state_43803__$1;
(statearr_43851_43916[(1)] = (27));

} else {
var statearr_43852_43917 = state_43803__$1;
(statearr_43852_43917[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (34))){
var state_43803__$1 = state_43803;
var statearr_43853_43918 = state_43803__$1;
(statearr_43853_43918[(2)] = null);

(statearr_43853_43918[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (17))){
var state_43803__$1 = state_43803;
var statearr_43854_43919 = state_43803__$1;
(statearr_43854_43919[(2)] = null);

(statearr_43854_43919[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (3))){
var inst_43801 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43803__$1,inst_43801);
} else {
if((state_val_43804 === (12))){
var inst_43730 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43855_43920 = state_43803__$1;
(statearr_43855_43920[(2)] = inst_43730);

(statearr_43855_43920[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (2))){
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43803__$1,(4),ch);
} else {
if((state_val_43804 === (23))){
var state_43803__$1 = state_43803;
var statearr_43856_43921 = state_43803__$1;
(statearr_43856_43921[(2)] = null);

(statearr_43856_43921[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (35))){
var inst_43785 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43857_43922 = state_43803__$1;
(statearr_43857_43922[(2)] = inst_43785);

(statearr_43857_43922[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (19))){
var inst_43702 = (state_43803[(7)]);
var inst_43706 = cljs.core.chunk_first.call(null,inst_43702);
var inst_43707 = cljs.core.chunk_rest.call(null,inst_43702);
var inst_43708 = cljs.core.count.call(null,inst_43706);
var inst_43680 = inst_43707;
var inst_43681 = inst_43706;
var inst_43682 = inst_43708;
var inst_43683 = (0);
var state_43803__$1 = (function (){var statearr_43858 = state_43803;
(statearr_43858[(13)] = inst_43683);

(statearr_43858[(14)] = inst_43680);

(statearr_43858[(15)] = inst_43682);

(statearr_43858[(17)] = inst_43681);

return statearr_43858;
})();
var statearr_43859_43923 = state_43803__$1;
(statearr_43859_43923[(2)] = null);

(statearr_43859_43923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (11))){
var inst_43680 = (state_43803[(14)]);
var inst_43702 = (state_43803[(7)]);
var inst_43702__$1 = cljs.core.seq.call(null,inst_43680);
var state_43803__$1 = (function (){var statearr_43860 = state_43803;
(statearr_43860[(7)] = inst_43702__$1);

return statearr_43860;
})();
if(inst_43702__$1){
var statearr_43861_43924 = state_43803__$1;
(statearr_43861_43924[(1)] = (16));

} else {
var statearr_43862_43925 = state_43803__$1;
(statearr_43862_43925[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (9))){
var inst_43732 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43863_43926 = state_43803__$1;
(statearr_43863_43926[(2)] = inst_43732);

(statearr_43863_43926[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (5))){
var inst_43678 = cljs.core.deref.call(null,cs);
var inst_43679 = cljs.core.seq.call(null,inst_43678);
var inst_43680 = inst_43679;
var inst_43681 = null;
var inst_43682 = (0);
var inst_43683 = (0);
var state_43803__$1 = (function (){var statearr_43864 = state_43803;
(statearr_43864[(13)] = inst_43683);

(statearr_43864[(14)] = inst_43680);

(statearr_43864[(15)] = inst_43682);

(statearr_43864[(17)] = inst_43681);

return statearr_43864;
})();
var statearr_43865_43927 = state_43803__$1;
(statearr_43865_43927[(2)] = null);

(statearr_43865_43927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (14))){
var state_43803__$1 = state_43803;
var statearr_43866_43928 = state_43803__$1;
(statearr_43866_43928[(2)] = null);

(statearr_43866_43928[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (45))){
var inst_43793 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43867_43929 = state_43803__$1;
(statearr_43867_43929[(2)] = inst_43793);

(statearr_43867_43929[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (26))){
var inst_43735 = (state_43803[(29)]);
var inst_43789 = (state_43803[(2)]);
var inst_43790 = cljs.core.seq.call(null,inst_43735);
var state_43803__$1 = (function (){var statearr_43868 = state_43803;
(statearr_43868[(31)] = inst_43789);

return statearr_43868;
})();
if(inst_43790){
var statearr_43869_43930 = state_43803__$1;
(statearr_43869_43930[(1)] = (42));

} else {
var statearr_43870_43931 = state_43803__$1;
(statearr_43870_43931[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (16))){
var inst_43702 = (state_43803[(7)]);
var inst_43704 = cljs.core.chunked_seq_QMARK_.call(null,inst_43702);
var state_43803__$1 = state_43803;
if(inst_43704){
var statearr_43871_43932 = state_43803__$1;
(statearr_43871_43932[(1)] = (19));

} else {
var statearr_43872_43933 = state_43803__$1;
(statearr_43872_43933[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (38))){
var inst_43782 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43873_43934 = state_43803__$1;
(statearr_43873_43934[(2)] = inst_43782);

(statearr_43873_43934[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (30))){
var state_43803__$1 = state_43803;
var statearr_43874_43935 = state_43803__$1;
(statearr_43874_43935[(2)] = null);

(statearr_43874_43935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (10))){
var inst_43683 = (state_43803[(13)]);
var inst_43681 = (state_43803[(17)]);
var inst_43691 = cljs.core._nth.call(null,inst_43681,inst_43683);
var inst_43692 = cljs.core.nth.call(null,inst_43691,(0),null);
var inst_43693 = cljs.core.nth.call(null,inst_43691,(1),null);
var state_43803__$1 = (function (){var statearr_43875 = state_43803;
(statearr_43875[(26)] = inst_43692);

return statearr_43875;
})();
if(cljs.core.truth_(inst_43693)){
var statearr_43876_43936 = state_43803__$1;
(statearr_43876_43936[(1)] = (13));

} else {
var statearr_43877_43937 = state_43803__$1;
(statearr_43877_43937[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (18))){
var inst_43728 = (state_43803[(2)]);
var state_43803__$1 = state_43803;
var statearr_43878_43938 = state_43803__$1;
(statearr_43878_43938[(2)] = inst_43728);

(statearr_43878_43938[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (42))){
var state_43803__$1 = state_43803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43803__$1,(45),dchan);
} else {
if((state_val_43804 === (37))){
var inst_43762 = (state_43803[(25)]);
var inst_43671 = (state_43803[(10)]);
var inst_43771 = (state_43803[(23)]);
var inst_43771__$1 = cljs.core.first.call(null,inst_43762);
var inst_43772 = cljs.core.async.put_BANG_.call(null,inst_43771__$1,inst_43671,done);
var state_43803__$1 = (function (){var statearr_43879 = state_43803;
(statearr_43879[(23)] = inst_43771__$1);

return statearr_43879;
})();
if(cljs.core.truth_(inst_43772)){
var statearr_43880_43939 = state_43803__$1;
(statearr_43880_43939[(1)] = (39));

} else {
var statearr_43881_43940 = state_43803__$1;
(statearr_43881_43940[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43804 === (8))){
var inst_43683 = (state_43803[(13)]);
var inst_43682 = (state_43803[(15)]);
var inst_43685 = (inst_43683 < inst_43682);
var inst_43686 = inst_43685;
var state_43803__$1 = state_43803;
if(cljs.core.truth_(inst_43686)){
var statearr_43882_43941 = state_43803__$1;
(statearr_43882_43941[(1)] = (10));

} else {
var statearr_43883_43942 = state_43803__$1;
(statearr_43883_43942[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__34928__auto__ = null;
var cljs$core$async$mult_$_state_machine__34928__auto____0 = (function (){
var statearr_43884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43884[(0)] = cljs$core$async$mult_$_state_machine__34928__auto__);

(statearr_43884[(1)] = (1));

return statearr_43884;
});
var cljs$core$async$mult_$_state_machine__34928__auto____1 = (function (state_43803){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_43803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e43885){if((e43885 instanceof Object)){
var ex__34931__auto__ = e43885;
var statearr_43886_43943 = state_43803;
(statearr_43886_43943[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43944 = state_43803;
state_43803 = G__43944;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34928__auto__ = function(state_43803){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34928__auto____1.call(this,state_43803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34928__auto____0;
cljs$core$async$mult_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34928__auto____1;
return cljs$core$async$mult_$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_43887 = f__35095__auto__.call(null);
(statearr_43887[(6)] = c__35094__auto___43888);

return statearr_43887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__43946 = arguments.length;
switch (G__43946) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m);
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,state_map);
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,m,mode);
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___43958 = arguments.length;
var i__4790__auto___43959 = (0);
while(true){
if((i__4790__auto___43959 < len__4789__auto___43958)){
args__4795__auto__.push((arguments[i__4790__auto___43959]));

var G__43960 = (i__4790__auto___43959 + (1));
i__4790__auto___43959 = G__43960;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43952){
var map__43953 = p__43952;
var map__43953__$1 = (((((!((map__43953 == null))))?(((((map__43953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43953):map__43953);
var opts = map__43953__$1;
var statearr_43955_43961 = state;
(statearr_43955_43961[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_43956_43962 = state;
(statearr_43956_43962[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_43957_43963 = state;
(statearr_43957_43963[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43948){
var G__43949 = cljs.core.first.call(null,seq43948);
var seq43948__$1 = cljs.core.next.call(null,seq43948);
var G__43950 = cljs.core.first.call(null,seq43948__$1);
var seq43948__$2 = cljs.core.next.call(null,seq43948__$1);
var G__43951 = cljs.core.first.call(null,seq43948__$2);
var seq43948__$3 = cljs.core.next.call(null,seq43948__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43949,G__43950,G__43951,seq43948__$3);
}));

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
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43964 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43964 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43965){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43965 = meta43965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43966,meta43965__$1){
var self__ = this;
var _43966__$1 = this;
return (new cljs.core.async.t_cljs$core$async43964(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43965__$1));
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43966){
var self__ = this;
var _43966__$1 = this;
return self__.meta43965;
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43964.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async43964.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43965","meta43965",2009745125,null)], null);
}));

(cljs.core.async.t_cljs$core$async43964.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43964.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43964");

(cljs.core.async.t_cljs$core$async43964.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async43964");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43964.
 */
cljs.core.async.__GT_t_cljs$core$async43964 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43964(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43965){
return (new cljs.core.async.t_cljs$core$async43964(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43965));
});

}

return (new cljs.core.async.t_cljs$core$async43964(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35094__auto___44128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44068){
var state_val_44069 = (state_44068[(1)]);
if((state_val_44069 === (7))){
var inst_43983 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44070_44129 = state_44068__$1;
(statearr_44070_44129[(2)] = inst_43983);

(statearr_44070_44129[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (20))){
var inst_43995 = (state_44068[(7)]);
var state_44068__$1 = state_44068;
var statearr_44071_44130 = state_44068__$1;
(statearr_44071_44130[(2)] = inst_43995);

(statearr_44071_44130[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (27))){
var state_44068__$1 = state_44068;
var statearr_44072_44131 = state_44068__$1;
(statearr_44072_44131[(2)] = null);

(statearr_44072_44131[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (1))){
var inst_43970 = (state_44068[(8)]);
var inst_43970__$1 = calc_state.call(null);
var inst_43972 = (inst_43970__$1 == null);
var inst_43973 = cljs.core.not.call(null,inst_43972);
var state_44068__$1 = (function (){var statearr_44073 = state_44068;
(statearr_44073[(8)] = inst_43970__$1);

return statearr_44073;
})();
if(inst_43973){
var statearr_44074_44132 = state_44068__$1;
(statearr_44074_44132[(1)] = (2));

} else {
var statearr_44075_44133 = state_44068__$1;
(statearr_44075_44133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (24))){
var inst_44019 = (state_44068[(9)]);
var inst_44042 = (state_44068[(10)]);
var inst_44028 = (state_44068[(11)]);
var inst_44042__$1 = inst_44019.call(null,inst_44028);
var state_44068__$1 = (function (){var statearr_44076 = state_44068;
(statearr_44076[(10)] = inst_44042__$1);

return statearr_44076;
})();
if(cljs.core.truth_(inst_44042__$1)){
var statearr_44077_44134 = state_44068__$1;
(statearr_44077_44134[(1)] = (29));

} else {
var statearr_44078_44135 = state_44068__$1;
(statearr_44078_44135[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (4))){
var inst_43986 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_43986)){
var statearr_44079_44136 = state_44068__$1;
(statearr_44079_44136[(1)] = (8));

} else {
var statearr_44080_44137 = state_44068__$1;
(statearr_44080_44137[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (15))){
var inst_44013 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44013)){
var statearr_44081_44138 = state_44068__$1;
(statearr_44081_44138[(1)] = (19));

} else {
var statearr_44082_44139 = state_44068__$1;
(statearr_44082_44139[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (21))){
var inst_44018 = (state_44068[(12)]);
var inst_44018__$1 = (state_44068[(2)]);
var inst_44019 = cljs.core.get.call(null,inst_44018__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_44020 = cljs.core.get.call(null,inst_44018__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_44021 = cljs.core.get.call(null,inst_44018__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_44068__$1 = (function (){var statearr_44083 = state_44068;
(statearr_44083[(9)] = inst_44019);

(statearr_44083[(13)] = inst_44020);

(statearr_44083[(12)] = inst_44018__$1);

return statearr_44083;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_44068__$1,(22),inst_44021);
} else {
if((state_val_44069 === (31))){
var inst_44050 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44050)){
var statearr_44084_44140 = state_44068__$1;
(statearr_44084_44140[(1)] = (32));

} else {
var statearr_44085_44141 = state_44068__$1;
(statearr_44085_44141[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (32))){
var inst_44027 = (state_44068[(14)]);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44068__$1,(35),out,inst_44027);
} else {
if((state_val_44069 === (33))){
var inst_44018 = (state_44068[(12)]);
var inst_43995 = inst_44018;
var state_44068__$1 = (function (){var statearr_44086 = state_44068;
(statearr_44086[(7)] = inst_43995);

return statearr_44086;
})();
var statearr_44087_44142 = state_44068__$1;
(statearr_44087_44142[(2)] = null);

(statearr_44087_44142[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (13))){
var inst_43995 = (state_44068[(7)]);
var inst_44002 = inst_43995.cljs$lang$protocol_mask$partition0$;
var inst_44003 = (inst_44002 & (64));
var inst_44004 = inst_43995.cljs$core$ISeq$;
var inst_44005 = (cljs.core.PROTOCOL_SENTINEL === inst_44004);
var inst_44006 = ((inst_44003) || (inst_44005));
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44006)){
var statearr_44088_44143 = state_44068__$1;
(statearr_44088_44143[(1)] = (16));

} else {
var statearr_44089_44144 = state_44068__$1;
(statearr_44089_44144[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (22))){
var inst_44028 = (state_44068[(11)]);
var inst_44027 = (state_44068[(14)]);
var inst_44026 = (state_44068[(2)]);
var inst_44027__$1 = cljs.core.nth.call(null,inst_44026,(0),null);
var inst_44028__$1 = cljs.core.nth.call(null,inst_44026,(1),null);
var inst_44029 = (inst_44027__$1 == null);
var inst_44030 = cljs.core._EQ_.call(null,inst_44028__$1,change);
var inst_44031 = ((inst_44029) || (inst_44030));
var state_44068__$1 = (function (){var statearr_44090 = state_44068;
(statearr_44090[(11)] = inst_44028__$1);

(statearr_44090[(14)] = inst_44027__$1);

return statearr_44090;
})();
if(cljs.core.truth_(inst_44031)){
var statearr_44091_44145 = state_44068__$1;
(statearr_44091_44145[(1)] = (23));

} else {
var statearr_44092_44146 = state_44068__$1;
(statearr_44092_44146[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (36))){
var inst_44018 = (state_44068[(12)]);
var inst_43995 = inst_44018;
var state_44068__$1 = (function (){var statearr_44093 = state_44068;
(statearr_44093[(7)] = inst_43995);

return statearr_44093;
})();
var statearr_44094_44147 = state_44068__$1;
(statearr_44094_44147[(2)] = null);

(statearr_44094_44147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (29))){
var inst_44042 = (state_44068[(10)]);
var state_44068__$1 = state_44068;
var statearr_44095_44148 = state_44068__$1;
(statearr_44095_44148[(2)] = inst_44042);

(statearr_44095_44148[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (6))){
var state_44068__$1 = state_44068;
var statearr_44096_44149 = state_44068__$1;
(statearr_44096_44149[(2)] = false);

(statearr_44096_44149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (28))){
var inst_44038 = (state_44068[(2)]);
var inst_44039 = calc_state.call(null);
var inst_43995 = inst_44039;
var state_44068__$1 = (function (){var statearr_44097 = state_44068;
(statearr_44097[(15)] = inst_44038);

(statearr_44097[(7)] = inst_43995);

return statearr_44097;
})();
var statearr_44098_44150 = state_44068__$1;
(statearr_44098_44150[(2)] = null);

(statearr_44098_44150[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (25))){
var inst_44064 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44099_44151 = state_44068__$1;
(statearr_44099_44151[(2)] = inst_44064);

(statearr_44099_44151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (34))){
var inst_44062 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44100_44152 = state_44068__$1;
(statearr_44100_44152[(2)] = inst_44062);

(statearr_44100_44152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (17))){
var state_44068__$1 = state_44068;
var statearr_44101_44153 = state_44068__$1;
(statearr_44101_44153[(2)] = false);

(statearr_44101_44153[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (3))){
var state_44068__$1 = state_44068;
var statearr_44102_44154 = state_44068__$1;
(statearr_44102_44154[(2)] = false);

(statearr_44102_44154[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (12))){
var inst_44066 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44068__$1,inst_44066);
} else {
if((state_val_44069 === (2))){
var inst_43970 = (state_44068[(8)]);
var inst_43975 = inst_43970.cljs$lang$protocol_mask$partition0$;
var inst_43976 = (inst_43975 & (64));
var inst_43977 = inst_43970.cljs$core$ISeq$;
var inst_43978 = (cljs.core.PROTOCOL_SENTINEL === inst_43977);
var inst_43979 = ((inst_43976) || (inst_43978));
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_43979)){
var statearr_44103_44155 = state_44068__$1;
(statearr_44103_44155[(1)] = (5));

} else {
var statearr_44104_44156 = state_44068__$1;
(statearr_44104_44156[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (23))){
var inst_44027 = (state_44068[(14)]);
var inst_44033 = (inst_44027 == null);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44033)){
var statearr_44105_44157 = state_44068__$1;
(statearr_44105_44157[(1)] = (26));

} else {
var statearr_44106_44158 = state_44068__$1;
(statearr_44106_44158[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (35))){
var inst_44053 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
if(cljs.core.truth_(inst_44053)){
var statearr_44107_44159 = state_44068__$1;
(statearr_44107_44159[(1)] = (36));

} else {
var statearr_44108_44160 = state_44068__$1;
(statearr_44108_44160[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (19))){
var inst_43995 = (state_44068[(7)]);
var inst_44015 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43995);
var state_44068__$1 = state_44068;
var statearr_44109_44161 = state_44068__$1;
(statearr_44109_44161[(2)] = inst_44015);

(statearr_44109_44161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (11))){
var inst_43995 = (state_44068[(7)]);
var inst_43999 = (inst_43995 == null);
var inst_44000 = cljs.core.not.call(null,inst_43999);
var state_44068__$1 = state_44068;
if(inst_44000){
var statearr_44110_44162 = state_44068__$1;
(statearr_44110_44162[(1)] = (13));

} else {
var statearr_44111_44163 = state_44068__$1;
(statearr_44111_44163[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (9))){
var inst_43970 = (state_44068[(8)]);
var state_44068__$1 = state_44068;
var statearr_44112_44164 = state_44068__$1;
(statearr_44112_44164[(2)] = inst_43970);

(statearr_44112_44164[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (5))){
var state_44068__$1 = state_44068;
var statearr_44113_44165 = state_44068__$1;
(statearr_44113_44165[(2)] = true);

(statearr_44113_44165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (14))){
var state_44068__$1 = state_44068;
var statearr_44114_44166 = state_44068__$1;
(statearr_44114_44166[(2)] = false);

(statearr_44114_44166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (26))){
var inst_44028 = (state_44068[(11)]);
var inst_44035 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_44028);
var state_44068__$1 = state_44068;
var statearr_44115_44167 = state_44068__$1;
(statearr_44115_44167[(2)] = inst_44035);

(statearr_44115_44167[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (16))){
var state_44068__$1 = state_44068;
var statearr_44116_44168 = state_44068__$1;
(statearr_44116_44168[(2)] = true);

(statearr_44116_44168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (38))){
var inst_44058 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44117_44169 = state_44068__$1;
(statearr_44117_44169[(2)] = inst_44058);

(statearr_44117_44169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (30))){
var inst_44019 = (state_44068[(9)]);
var inst_44020 = (state_44068[(13)]);
var inst_44028 = (state_44068[(11)]);
var inst_44045 = cljs.core.empty_QMARK_.call(null,inst_44019);
var inst_44046 = inst_44020.call(null,inst_44028);
var inst_44047 = cljs.core.not.call(null,inst_44046);
var inst_44048 = ((inst_44045) && (inst_44047));
var state_44068__$1 = state_44068;
var statearr_44118_44170 = state_44068__$1;
(statearr_44118_44170[(2)] = inst_44048);

(statearr_44118_44170[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (10))){
var inst_43970 = (state_44068[(8)]);
var inst_43991 = (state_44068[(2)]);
var inst_43992 = cljs.core.get.call(null,inst_43991,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43993 = cljs.core.get.call(null,inst_43991,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43994 = cljs.core.get.call(null,inst_43991,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43995 = inst_43970;
var state_44068__$1 = (function (){var statearr_44119 = state_44068;
(statearr_44119[(16)] = inst_43994);

(statearr_44119[(17)] = inst_43992);

(statearr_44119[(18)] = inst_43993);

(statearr_44119[(7)] = inst_43995);

return statearr_44119;
})();
var statearr_44120_44171 = state_44068__$1;
(statearr_44120_44171[(2)] = null);

(statearr_44120_44171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (18))){
var inst_44010 = (state_44068[(2)]);
var state_44068__$1 = state_44068;
var statearr_44121_44172 = state_44068__$1;
(statearr_44121_44172[(2)] = inst_44010);

(statearr_44121_44172[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (37))){
var state_44068__$1 = state_44068;
var statearr_44122_44173 = state_44068__$1;
(statearr_44122_44173[(2)] = null);

(statearr_44122_44173[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44069 === (8))){
var inst_43970 = (state_44068[(8)]);
var inst_43988 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43970);
var state_44068__$1 = state_44068;
var statearr_44123_44174 = state_44068__$1;
(statearr_44123_44174[(2)] = inst_43988);

(statearr_44123_44174[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__34928__auto__ = null;
var cljs$core$async$mix_$_state_machine__34928__auto____0 = (function (){
var statearr_44124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44124[(0)] = cljs$core$async$mix_$_state_machine__34928__auto__);

(statearr_44124[(1)] = (1));

return statearr_44124;
});
var cljs$core$async$mix_$_state_machine__34928__auto____1 = (function (state_44068){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44125){if((e44125 instanceof Object)){
var ex__34931__auto__ = e44125;
var statearr_44126_44175 = state_44068;
(statearr_44126_44175[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44176 = state_44068;
state_44068 = G__44176;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34928__auto__ = function(state_44068){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34928__auto____1.call(this,state_44068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34928__auto____0;
cljs$core$async$mix_$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34928__auto____1;
return cljs$core$async$mix_$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44127 = f__35095__auto__.call(null);
(statearr_44127[(6)] = c__35094__auto___44128);

return statearr_44127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v,ch);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__44178 = arguments.length;
switch (G__44178) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return m__4488__auto__.call(null,p,v);
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return m__4485__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__44182 = arguments.length;
switch (G__44182) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__44180_SHARP_){
if(cljs.core.truth_(p1__44180_SHARP_.call(null,topic))){
return p1__44180_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__44180_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44183 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44183 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta44184){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta44184 = meta44184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44185,meta44184__$1){
var self__ = this;
var _44185__$1 = this;
return (new cljs.core.async.t_cljs$core$async44183(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta44184__$1));
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44185){
var self__ = this;
var _44185__$1 = this;
return self__.meta44184;
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async44183.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async44183.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta44184","meta44184",-1171196335,null)], null);
}));

(cljs.core.async.t_cljs$core$async44183.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44183.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44183");

(cljs.core.async.t_cljs$core$async44183.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44183");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44183.
 */
cljs.core.async.__GT_t_cljs$core$async44183 = (function cljs$core$async$__GT_t_cljs$core$async44183(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44184){
return (new cljs.core.async.t_cljs$core$async44183(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta44184));
});

}

return (new cljs.core.async.t_cljs$core$async44183(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35094__auto___44303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44257){
var state_val_44258 = (state_44257[(1)]);
if((state_val_44258 === (7))){
var inst_44253 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44259_44304 = state_44257__$1;
(statearr_44259_44304[(2)] = inst_44253);

(statearr_44259_44304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (20))){
var state_44257__$1 = state_44257;
var statearr_44260_44305 = state_44257__$1;
(statearr_44260_44305[(2)] = null);

(statearr_44260_44305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (1))){
var state_44257__$1 = state_44257;
var statearr_44261_44306 = state_44257__$1;
(statearr_44261_44306[(2)] = null);

(statearr_44261_44306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (24))){
var inst_44236 = (state_44257[(7)]);
var inst_44245 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_44236);
var state_44257__$1 = state_44257;
var statearr_44262_44307 = state_44257__$1;
(statearr_44262_44307[(2)] = inst_44245);

(statearr_44262_44307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (4))){
var inst_44188 = (state_44257[(8)]);
var inst_44188__$1 = (state_44257[(2)]);
var inst_44189 = (inst_44188__$1 == null);
var state_44257__$1 = (function (){var statearr_44263 = state_44257;
(statearr_44263[(8)] = inst_44188__$1);

return statearr_44263;
})();
if(cljs.core.truth_(inst_44189)){
var statearr_44264_44308 = state_44257__$1;
(statearr_44264_44308[(1)] = (5));

} else {
var statearr_44265_44309 = state_44257__$1;
(statearr_44265_44309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (15))){
var inst_44230 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44266_44310 = state_44257__$1;
(statearr_44266_44310[(2)] = inst_44230);

(statearr_44266_44310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (21))){
var inst_44250 = (state_44257[(2)]);
var state_44257__$1 = (function (){var statearr_44267 = state_44257;
(statearr_44267[(9)] = inst_44250);

return statearr_44267;
})();
var statearr_44268_44311 = state_44257__$1;
(statearr_44268_44311[(2)] = null);

(statearr_44268_44311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (13))){
var inst_44212 = (state_44257[(10)]);
var inst_44214 = cljs.core.chunked_seq_QMARK_.call(null,inst_44212);
var state_44257__$1 = state_44257;
if(inst_44214){
var statearr_44269_44312 = state_44257__$1;
(statearr_44269_44312[(1)] = (16));

} else {
var statearr_44270_44313 = state_44257__$1;
(statearr_44270_44313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (22))){
var inst_44242 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
if(cljs.core.truth_(inst_44242)){
var statearr_44271_44314 = state_44257__$1;
(statearr_44271_44314[(1)] = (23));

} else {
var statearr_44272_44315 = state_44257__$1;
(statearr_44272_44315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (6))){
var inst_44188 = (state_44257[(8)]);
var inst_44236 = (state_44257[(7)]);
var inst_44238 = (state_44257[(11)]);
var inst_44236__$1 = topic_fn.call(null,inst_44188);
var inst_44237 = cljs.core.deref.call(null,mults);
var inst_44238__$1 = cljs.core.get.call(null,inst_44237,inst_44236__$1);
var state_44257__$1 = (function (){var statearr_44273 = state_44257;
(statearr_44273[(7)] = inst_44236__$1);

(statearr_44273[(11)] = inst_44238__$1);

return statearr_44273;
})();
if(cljs.core.truth_(inst_44238__$1)){
var statearr_44274_44316 = state_44257__$1;
(statearr_44274_44316[(1)] = (19));

} else {
var statearr_44275_44317 = state_44257__$1;
(statearr_44275_44317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (25))){
var inst_44247 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44276_44318 = state_44257__$1;
(statearr_44276_44318[(2)] = inst_44247);

(statearr_44276_44318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (17))){
var inst_44212 = (state_44257[(10)]);
var inst_44221 = cljs.core.first.call(null,inst_44212);
var inst_44222 = cljs.core.async.muxch_STAR_.call(null,inst_44221);
var inst_44223 = cljs.core.async.close_BANG_.call(null,inst_44222);
var inst_44224 = cljs.core.next.call(null,inst_44212);
var inst_44198 = inst_44224;
var inst_44199 = null;
var inst_44200 = (0);
var inst_44201 = (0);
var state_44257__$1 = (function (){var statearr_44277 = state_44257;
(statearr_44277[(12)] = inst_44199);

(statearr_44277[(13)] = inst_44198);

(statearr_44277[(14)] = inst_44200);

(statearr_44277[(15)] = inst_44201);

(statearr_44277[(16)] = inst_44223);

return statearr_44277;
})();
var statearr_44278_44319 = state_44257__$1;
(statearr_44278_44319[(2)] = null);

(statearr_44278_44319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (3))){
var inst_44255 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44257__$1,inst_44255);
} else {
if((state_val_44258 === (12))){
var inst_44232 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44279_44320 = state_44257__$1;
(statearr_44279_44320[(2)] = inst_44232);

(statearr_44279_44320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (2))){
var state_44257__$1 = state_44257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44257__$1,(4),ch);
} else {
if((state_val_44258 === (23))){
var state_44257__$1 = state_44257;
var statearr_44280_44321 = state_44257__$1;
(statearr_44280_44321[(2)] = null);

(statearr_44280_44321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (19))){
var inst_44188 = (state_44257[(8)]);
var inst_44238 = (state_44257[(11)]);
var inst_44240 = cljs.core.async.muxch_STAR_.call(null,inst_44238);
var state_44257__$1 = state_44257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44257__$1,(22),inst_44240,inst_44188);
} else {
if((state_val_44258 === (11))){
var inst_44212 = (state_44257[(10)]);
var inst_44198 = (state_44257[(13)]);
var inst_44212__$1 = cljs.core.seq.call(null,inst_44198);
var state_44257__$1 = (function (){var statearr_44281 = state_44257;
(statearr_44281[(10)] = inst_44212__$1);

return statearr_44281;
})();
if(inst_44212__$1){
var statearr_44282_44322 = state_44257__$1;
(statearr_44282_44322[(1)] = (13));

} else {
var statearr_44283_44323 = state_44257__$1;
(statearr_44283_44323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (9))){
var inst_44234 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44284_44324 = state_44257__$1;
(statearr_44284_44324[(2)] = inst_44234);

(statearr_44284_44324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (5))){
var inst_44195 = cljs.core.deref.call(null,mults);
var inst_44196 = cljs.core.vals.call(null,inst_44195);
var inst_44197 = cljs.core.seq.call(null,inst_44196);
var inst_44198 = inst_44197;
var inst_44199 = null;
var inst_44200 = (0);
var inst_44201 = (0);
var state_44257__$1 = (function (){var statearr_44285 = state_44257;
(statearr_44285[(12)] = inst_44199);

(statearr_44285[(13)] = inst_44198);

(statearr_44285[(14)] = inst_44200);

(statearr_44285[(15)] = inst_44201);

return statearr_44285;
})();
var statearr_44286_44325 = state_44257__$1;
(statearr_44286_44325[(2)] = null);

(statearr_44286_44325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (14))){
var state_44257__$1 = state_44257;
var statearr_44290_44326 = state_44257__$1;
(statearr_44290_44326[(2)] = null);

(statearr_44290_44326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (16))){
var inst_44212 = (state_44257[(10)]);
var inst_44216 = cljs.core.chunk_first.call(null,inst_44212);
var inst_44217 = cljs.core.chunk_rest.call(null,inst_44212);
var inst_44218 = cljs.core.count.call(null,inst_44216);
var inst_44198 = inst_44217;
var inst_44199 = inst_44216;
var inst_44200 = inst_44218;
var inst_44201 = (0);
var state_44257__$1 = (function (){var statearr_44291 = state_44257;
(statearr_44291[(12)] = inst_44199);

(statearr_44291[(13)] = inst_44198);

(statearr_44291[(14)] = inst_44200);

(statearr_44291[(15)] = inst_44201);

return statearr_44291;
})();
var statearr_44292_44327 = state_44257__$1;
(statearr_44292_44327[(2)] = null);

(statearr_44292_44327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (10))){
var inst_44199 = (state_44257[(12)]);
var inst_44198 = (state_44257[(13)]);
var inst_44200 = (state_44257[(14)]);
var inst_44201 = (state_44257[(15)]);
var inst_44206 = cljs.core._nth.call(null,inst_44199,inst_44201);
var inst_44207 = cljs.core.async.muxch_STAR_.call(null,inst_44206);
var inst_44208 = cljs.core.async.close_BANG_.call(null,inst_44207);
var inst_44209 = (inst_44201 + (1));
var tmp44287 = inst_44199;
var tmp44288 = inst_44198;
var tmp44289 = inst_44200;
var inst_44198__$1 = tmp44288;
var inst_44199__$1 = tmp44287;
var inst_44200__$1 = tmp44289;
var inst_44201__$1 = inst_44209;
var state_44257__$1 = (function (){var statearr_44293 = state_44257;
(statearr_44293[(12)] = inst_44199__$1);

(statearr_44293[(17)] = inst_44208);

(statearr_44293[(13)] = inst_44198__$1);

(statearr_44293[(14)] = inst_44200__$1);

(statearr_44293[(15)] = inst_44201__$1);

return statearr_44293;
})();
var statearr_44294_44328 = state_44257__$1;
(statearr_44294_44328[(2)] = null);

(statearr_44294_44328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (18))){
var inst_44227 = (state_44257[(2)]);
var state_44257__$1 = state_44257;
var statearr_44295_44329 = state_44257__$1;
(statearr_44295_44329[(2)] = inst_44227);

(statearr_44295_44329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44258 === (8))){
var inst_44200 = (state_44257[(14)]);
var inst_44201 = (state_44257[(15)]);
var inst_44203 = (inst_44201 < inst_44200);
var inst_44204 = inst_44203;
var state_44257__$1 = state_44257;
if(cljs.core.truth_(inst_44204)){
var statearr_44296_44330 = state_44257__$1;
(statearr_44296_44330[(1)] = (10));

} else {
var statearr_44297_44331 = state_44257__$1;
(statearr_44297_44331[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44298[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44298[(1)] = (1));

return statearr_44298;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44257){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44299){if((e44299 instanceof Object)){
var ex__34931__auto__ = e44299;
var statearr_44300_44332 = state_44257;
(statearr_44300_44332[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44333 = state_44257;
state_44257 = G__44333;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44301 = f__35095__auto__.call(null);
(statearr_44301[(6)] = c__35094__auto___44303);

return statearr_44301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__44335 = arguments.length;
switch (G__44335) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__44338 = arguments.length;
switch (G__44338) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__44341 = arguments.length;
switch (G__44341) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__35094__auto___44408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44380){
var state_val_44381 = (state_44380[(1)]);
if((state_val_44381 === (7))){
var state_44380__$1 = state_44380;
var statearr_44382_44409 = state_44380__$1;
(statearr_44382_44409[(2)] = null);

(statearr_44382_44409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (1))){
var state_44380__$1 = state_44380;
var statearr_44383_44410 = state_44380__$1;
(statearr_44383_44410[(2)] = null);

(statearr_44383_44410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (4))){
var inst_44344 = (state_44380[(7)]);
var inst_44346 = (inst_44344 < cnt);
var state_44380__$1 = state_44380;
if(cljs.core.truth_(inst_44346)){
var statearr_44384_44411 = state_44380__$1;
(statearr_44384_44411[(1)] = (6));

} else {
var statearr_44385_44412 = state_44380__$1;
(statearr_44385_44412[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (15))){
var inst_44376 = (state_44380[(2)]);
var state_44380__$1 = state_44380;
var statearr_44386_44413 = state_44380__$1;
(statearr_44386_44413[(2)] = inst_44376);

(statearr_44386_44413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (13))){
var inst_44369 = cljs.core.async.close_BANG_.call(null,out);
var state_44380__$1 = state_44380;
var statearr_44387_44414 = state_44380__$1;
(statearr_44387_44414[(2)] = inst_44369);

(statearr_44387_44414[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (6))){
var state_44380__$1 = state_44380;
var statearr_44388_44415 = state_44380__$1;
(statearr_44388_44415[(2)] = null);

(statearr_44388_44415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (3))){
var inst_44378 = (state_44380[(2)]);
var state_44380__$1 = state_44380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44380__$1,inst_44378);
} else {
if((state_val_44381 === (12))){
var inst_44366 = (state_44380[(8)]);
var inst_44366__$1 = (state_44380[(2)]);
var inst_44367 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_44366__$1);
var state_44380__$1 = (function (){var statearr_44389 = state_44380;
(statearr_44389[(8)] = inst_44366__$1);

return statearr_44389;
})();
if(cljs.core.truth_(inst_44367)){
var statearr_44390_44416 = state_44380__$1;
(statearr_44390_44416[(1)] = (13));

} else {
var statearr_44391_44417 = state_44380__$1;
(statearr_44391_44417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (2))){
var inst_44343 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_44344 = (0);
var state_44380__$1 = (function (){var statearr_44392 = state_44380;
(statearr_44392[(9)] = inst_44343);

(statearr_44392[(7)] = inst_44344);

return statearr_44392;
})();
var statearr_44393_44418 = state_44380__$1;
(statearr_44393_44418[(2)] = null);

(statearr_44393_44418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (11))){
var inst_44344 = (state_44380[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_44380,(10),Object,null,(9));
var inst_44353 = chs__$1.call(null,inst_44344);
var inst_44354 = done.call(null,inst_44344);
var inst_44355 = cljs.core.async.take_BANG_.call(null,inst_44353,inst_44354);
var state_44380__$1 = state_44380;
var statearr_44394_44419 = state_44380__$1;
(statearr_44394_44419[(2)] = inst_44355);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (9))){
var inst_44344 = (state_44380[(7)]);
var inst_44357 = (state_44380[(2)]);
var inst_44358 = (inst_44344 + (1));
var inst_44344__$1 = inst_44358;
var state_44380__$1 = (function (){var statearr_44395 = state_44380;
(statearr_44395[(7)] = inst_44344__$1);

(statearr_44395[(10)] = inst_44357);

return statearr_44395;
})();
var statearr_44396_44420 = state_44380__$1;
(statearr_44396_44420[(2)] = null);

(statearr_44396_44420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (5))){
var inst_44364 = (state_44380[(2)]);
var state_44380__$1 = (function (){var statearr_44397 = state_44380;
(statearr_44397[(11)] = inst_44364);

return statearr_44397;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44380__$1,(12),dchan);
} else {
if((state_val_44381 === (14))){
var inst_44366 = (state_44380[(8)]);
var inst_44371 = cljs.core.apply.call(null,f,inst_44366);
var state_44380__$1 = state_44380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44380__$1,(16),out,inst_44371);
} else {
if((state_val_44381 === (16))){
var inst_44373 = (state_44380[(2)]);
var state_44380__$1 = (function (){var statearr_44398 = state_44380;
(statearr_44398[(12)] = inst_44373);

return statearr_44398;
})();
var statearr_44399_44421 = state_44380__$1;
(statearr_44399_44421[(2)] = null);

(statearr_44399_44421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (10))){
var inst_44348 = (state_44380[(2)]);
var inst_44349 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_44380__$1 = (function (){var statearr_44400 = state_44380;
(statearr_44400[(13)] = inst_44348);

return statearr_44400;
})();
var statearr_44401_44422 = state_44380__$1;
(statearr_44401_44422[(2)] = inst_44349);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44380__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44381 === (8))){
var inst_44362 = (state_44380[(2)]);
var state_44380__$1 = state_44380;
var statearr_44402_44423 = state_44380__$1;
(statearr_44402_44423[(2)] = inst_44362);

(statearr_44402_44423[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44403[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44403[(1)] = (1));

return statearr_44403;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44380){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44404){if((e44404 instanceof Object)){
var ex__34931__auto__ = e44404;
var statearr_44405_44424 = state_44380;
(statearr_44405_44424[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44425 = state_44380;
state_44380 = G__44425;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44406 = f__35095__auto__.call(null);
(statearr_44406[(6)] = c__35094__auto___44408);

return statearr_44406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__44428 = arguments.length;
switch (G__44428) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44460){
var state_val_44461 = (state_44460[(1)]);
if((state_val_44461 === (7))){
var inst_44439 = (state_44460[(7)]);
var inst_44440 = (state_44460[(8)]);
var inst_44439__$1 = (state_44460[(2)]);
var inst_44440__$1 = cljs.core.nth.call(null,inst_44439__$1,(0),null);
var inst_44441 = cljs.core.nth.call(null,inst_44439__$1,(1),null);
var inst_44442 = (inst_44440__$1 == null);
var state_44460__$1 = (function (){var statearr_44462 = state_44460;
(statearr_44462[(7)] = inst_44439__$1);

(statearr_44462[(8)] = inst_44440__$1);

(statearr_44462[(9)] = inst_44441);

return statearr_44462;
})();
if(cljs.core.truth_(inst_44442)){
var statearr_44463_44483 = state_44460__$1;
(statearr_44463_44483[(1)] = (8));

} else {
var statearr_44464_44484 = state_44460__$1;
(statearr_44464_44484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (1))){
var inst_44429 = cljs.core.vec.call(null,chs);
var inst_44430 = inst_44429;
var state_44460__$1 = (function (){var statearr_44465 = state_44460;
(statearr_44465[(10)] = inst_44430);

return statearr_44465;
})();
var statearr_44466_44485 = state_44460__$1;
(statearr_44466_44485[(2)] = null);

(statearr_44466_44485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (4))){
var inst_44430 = (state_44460[(10)]);
var state_44460__$1 = state_44460;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44460__$1,(7),inst_44430);
} else {
if((state_val_44461 === (6))){
var inst_44456 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
var statearr_44467_44486 = state_44460__$1;
(statearr_44467_44486[(2)] = inst_44456);

(statearr_44467_44486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (3))){
var inst_44458 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44460__$1,inst_44458);
} else {
if((state_val_44461 === (2))){
var inst_44430 = (state_44460[(10)]);
var inst_44432 = cljs.core.count.call(null,inst_44430);
var inst_44433 = (inst_44432 > (0));
var state_44460__$1 = state_44460;
if(cljs.core.truth_(inst_44433)){
var statearr_44469_44487 = state_44460__$1;
(statearr_44469_44487[(1)] = (4));

} else {
var statearr_44470_44488 = state_44460__$1;
(statearr_44470_44488[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (11))){
var inst_44430 = (state_44460[(10)]);
var inst_44449 = (state_44460[(2)]);
var tmp44468 = inst_44430;
var inst_44430__$1 = tmp44468;
var state_44460__$1 = (function (){var statearr_44471 = state_44460;
(statearr_44471[(10)] = inst_44430__$1);

(statearr_44471[(11)] = inst_44449);

return statearr_44471;
})();
var statearr_44472_44489 = state_44460__$1;
(statearr_44472_44489[(2)] = null);

(statearr_44472_44489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (9))){
var inst_44440 = (state_44460[(8)]);
var state_44460__$1 = state_44460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44460__$1,(11),out,inst_44440);
} else {
if((state_val_44461 === (5))){
var inst_44454 = cljs.core.async.close_BANG_.call(null,out);
var state_44460__$1 = state_44460;
var statearr_44473_44490 = state_44460__$1;
(statearr_44473_44490[(2)] = inst_44454);

(statearr_44473_44490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (10))){
var inst_44452 = (state_44460[(2)]);
var state_44460__$1 = state_44460;
var statearr_44474_44491 = state_44460__$1;
(statearr_44474_44491[(2)] = inst_44452);

(statearr_44474_44491[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44461 === (8))){
var inst_44439 = (state_44460[(7)]);
var inst_44430 = (state_44460[(10)]);
var inst_44440 = (state_44460[(8)]);
var inst_44441 = (state_44460[(9)]);
var inst_44444 = (function (){var cs = inst_44430;
var vec__44435 = inst_44439;
var v = inst_44440;
var c = inst_44441;
return (function (p1__44426_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__44426_SHARP_);
});
})();
var inst_44445 = cljs.core.filterv.call(null,inst_44444,inst_44430);
var inst_44430__$1 = inst_44445;
var state_44460__$1 = (function (){var statearr_44475 = state_44460;
(statearr_44475[(10)] = inst_44430__$1);

return statearr_44475;
})();
var statearr_44476_44492 = state_44460__$1;
(statearr_44476_44492[(2)] = null);

(statearr_44476_44492[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44477 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44477[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44477[(1)] = (1));

return statearr_44477;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44460){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44478){if((e44478 instanceof Object)){
var ex__34931__auto__ = e44478;
var statearr_44479_44493 = state_44460;
(statearr_44479_44493[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44478;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44494 = state_44460;
state_44460 = G__44494;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44480 = f__35095__auto__.call(null);
(statearr_44480[(6)] = c__35094__auto___44482);

return statearr_44480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__44496 = arguments.length;
switch (G__44496) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44520){
var state_val_44521 = (state_44520[(1)]);
if((state_val_44521 === (7))){
var inst_44502 = (state_44520[(7)]);
var inst_44502__$1 = (state_44520[(2)]);
var inst_44503 = (inst_44502__$1 == null);
var inst_44504 = cljs.core.not.call(null,inst_44503);
var state_44520__$1 = (function (){var statearr_44522 = state_44520;
(statearr_44522[(7)] = inst_44502__$1);

return statearr_44522;
})();
if(inst_44504){
var statearr_44523_44542 = state_44520__$1;
(statearr_44523_44542[(1)] = (8));

} else {
var statearr_44524_44543 = state_44520__$1;
(statearr_44524_44543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (1))){
var inst_44497 = (0);
var state_44520__$1 = (function (){var statearr_44525 = state_44520;
(statearr_44525[(8)] = inst_44497);

return statearr_44525;
})();
var statearr_44526_44544 = state_44520__$1;
(statearr_44526_44544[(2)] = null);

(statearr_44526_44544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (4))){
var state_44520__$1 = state_44520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44520__$1,(7),ch);
} else {
if((state_val_44521 === (6))){
var inst_44515 = (state_44520[(2)]);
var state_44520__$1 = state_44520;
var statearr_44527_44545 = state_44520__$1;
(statearr_44527_44545[(2)] = inst_44515);

(statearr_44527_44545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (3))){
var inst_44517 = (state_44520[(2)]);
var inst_44518 = cljs.core.async.close_BANG_.call(null,out);
var state_44520__$1 = (function (){var statearr_44528 = state_44520;
(statearr_44528[(9)] = inst_44517);

return statearr_44528;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44520__$1,inst_44518);
} else {
if((state_val_44521 === (2))){
var inst_44497 = (state_44520[(8)]);
var inst_44499 = (inst_44497 < n);
var state_44520__$1 = state_44520;
if(cljs.core.truth_(inst_44499)){
var statearr_44529_44546 = state_44520__$1;
(statearr_44529_44546[(1)] = (4));

} else {
var statearr_44530_44547 = state_44520__$1;
(statearr_44530_44547[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (11))){
var inst_44497 = (state_44520[(8)]);
var inst_44507 = (state_44520[(2)]);
var inst_44508 = (inst_44497 + (1));
var inst_44497__$1 = inst_44508;
var state_44520__$1 = (function (){var statearr_44531 = state_44520;
(statearr_44531[(10)] = inst_44507);

(statearr_44531[(8)] = inst_44497__$1);

return statearr_44531;
})();
var statearr_44532_44548 = state_44520__$1;
(statearr_44532_44548[(2)] = null);

(statearr_44532_44548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (9))){
var state_44520__$1 = state_44520;
var statearr_44533_44549 = state_44520__$1;
(statearr_44533_44549[(2)] = null);

(statearr_44533_44549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (5))){
var state_44520__$1 = state_44520;
var statearr_44534_44550 = state_44520__$1;
(statearr_44534_44550[(2)] = null);

(statearr_44534_44550[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (10))){
var inst_44512 = (state_44520[(2)]);
var state_44520__$1 = state_44520;
var statearr_44535_44551 = state_44520__$1;
(statearr_44535_44551[(2)] = inst_44512);

(statearr_44535_44551[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44521 === (8))){
var inst_44502 = (state_44520[(7)]);
var state_44520__$1 = state_44520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44520__$1,(11),out,inst_44502);
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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44536 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44536[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44536[(1)] = (1));

return statearr_44536;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44520){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44537){if((e44537 instanceof Object)){
var ex__34931__auto__ = e44537;
var statearr_44538_44552 = state_44520;
(statearr_44538_44552[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44553 = state_44520;
state_44520 = G__44553;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44539 = f__35095__auto__.call(null);
(statearr_44539[(6)] = c__35094__auto___44541);

return statearr_44539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44555 = (function (f,ch,meta44556){
this.f = f;
this.ch = ch;
this.meta44556 = meta44556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44557,meta44556__$1){
var self__ = this;
var _44557__$1 = this;
return (new cljs.core.async.t_cljs$core$async44555(self__.f,self__.ch,meta44556__$1));
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44557){
var self__ = this;
var _44557__$1 = this;
return self__.meta44556;
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44558 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44558 = (function (f,ch,meta44556,_,fn1,meta44559){
this.f = f;
this.ch = ch;
this.meta44556 = meta44556;
this._ = _;
this.fn1 = fn1;
this.meta44559 = meta44559;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44560,meta44559__$1){
var self__ = this;
var _44560__$1 = this;
return (new cljs.core.async.t_cljs$core$async44558(self__.f,self__.ch,self__.meta44556,self__._,self__.fn1,meta44559__$1));
}));

(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44560){
var self__ = this;
var _44560__$1 = this;
return self__.meta44559;
}));

(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44558.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__44554_SHARP_){
return f1.call(null,(((p1__44554_SHARP_ == null))?null:self__.f.call(null,p1__44554_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async44558.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44556","meta44556",-1386839712,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44555","cljs.core.async/t_cljs$core$async44555",1230604811,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44559","meta44559",-312432062,null)], null);
}));

(cljs.core.async.t_cljs$core$async44558.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44558.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44558");

(cljs.core.async.t_cljs$core$async44558.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44558");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44558.
 */
cljs.core.async.__GT_t_cljs$core$async44558 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44558(f__$1,ch__$1,meta44556__$1,___$2,fn1__$1,meta44559){
return (new cljs.core.async.t_cljs$core$async44558(f__$1,ch__$1,meta44556__$1,___$2,fn1__$1,meta44559));
});

}

return (new cljs.core.async.t_cljs$core$async44558(self__.f,self__.ch,self__.meta44556,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44555.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44556","meta44556",-1386839712,null)], null);
}));

(cljs.core.async.t_cljs$core$async44555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44555");

(cljs.core.async.t_cljs$core$async44555.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44555.
 */
cljs.core.async.__GT_t_cljs$core$async44555 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44555(f__$1,ch__$1,meta44556){
return (new cljs.core.async.t_cljs$core$async44555(f__$1,ch__$1,meta44556));
});

}

return (new cljs.core.async.t_cljs$core$async44555(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44561 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44561 = (function (f,ch,meta44562){
this.f = f;
this.ch = ch;
this.meta44562 = meta44562;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44563,meta44562__$1){
var self__ = this;
var _44563__$1 = this;
return (new cljs.core.async.t_cljs$core$async44561(self__.f,self__.ch,meta44562__$1));
}));

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44563){
var self__ = this;
var _44563__$1 = this;
return self__.meta44562;
}));

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44561.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async44561.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44562","meta44562",-541005387,null)], null);
}));

(cljs.core.async.t_cljs$core$async44561.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44561.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44561");

(cljs.core.async.t_cljs$core$async44561.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44561");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44561.
 */
cljs.core.async.__GT_t_cljs$core$async44561 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44561(f__$1,ch__$1,meta44562){
return (new cljs.core.async.t_cljs$core$async44561(f__$1,ch__$1,meta44562));
});

}

return (new cljs.core.async.t_cljs$core$async44561(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44564 = (function (p,ch,meta44565){
this.p = p;
this.ch = ch;
this.meta44565 = meta44565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44566,meta44565__$1){
var self__ = this;
var _44566__$1 = this;
return (new cljs.core.async.t_cljs$core$async44564(self__.p,self__.ch,meta44565__$1));
}));

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44566){
var self__ = this;
var _44566__$1 = this;
return self__.meta44565;
}));

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44564.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44565","meta44565",-1874153324,null)], null);
}));

(cljs.core.async.t_cljs$core$async44564.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44564.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44564");

(cljs.core.async.t_cljs$core$async44564.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"cljs.core.async/t_cljs$core$async44564");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44564.
 */
cljs.core.async.__GT_t_cljs$core$async44564 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44564(p__$1,ch__$1,meta44565){
return (new cljs.core.async.t_cljs$core$async44564(p__$1,ch__$1,meta44565));
});

}

return (new cljs.core.async.t_cljs$core$async44564(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44568 = arguments.length;
switch (G__44568) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44589){
var state_val_44590 = (state_44589[(1)]);
if((state_val_44590 === (7))){
var inst_44585 = (state_44589[(2)]);
var state_44589__$1 = state_44589;
var statearr_44591_44609 = state_44589__$1;
(statearr_44591_44609[(2)] = inst_44585);

(statearr_44591_44609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (1))){
var state_44589__$1 = state_44589;
var statearr_44592_44610 = state_44589__$1;
(statearr_44592_44610[(2)] = null);

(statearr_44592_44610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (4))){
var inst_44571 = (state_44589[(7)]);
var inst_44571__$1 = (state_44589[(2)]);
var inst_44572 = (inst_44571__$1 == null);
var state_44589__$1 = (function (){var statearr_44593 = state_44589;
(statearr_44593[(7)] = inst_44571__$1);

return statearr_44593;
})();
if(cljs.core.truth_(inst_44572)){
var statearr_44594_44611 = state_44589__$1;
(statearr_44594_44611[(1)] = (5));

} else {
var statearr_44595_44612 = state_44589__$1;
(statearr_44595_44612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (6))){
var inst_44571 = (state_44589[(7)]);
var inst_44576 = p.call(null,inst_44571);
var state_44589__$1 = state_44589;
if(cljs.core.truth_(inst_44576)){
var statearr_44596_44613 = state_44589__$1;
(statearr_44596_44613[(1)] = (8));

} else {
var statearr_44597_44614 = state_44589__$1;
(statearr_44597_44614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (3))){
var inst_44587 = (state_44589[(2)]);
var state_44589__$1 = state_44589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44589__$1,inst_44587);
} else {
if((state_val_44590 === (2))){
var state_44589__$1 = state_44589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44589__$1,(4),ch);
} else {
if((state_val_44590 === (11))){
var inst_44579 = (state_44589[(2)]);
var state_44589__$1 = state_44589;
var statearr_44598_44615 = state_44589__$1;
(statearr_44598_44615[(2)] = inst_44579);

(statearr_44598_44615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (9))){
var state_44589__$1 = state_44589;
var statearr_44599_44616 = state_44589__$1;
(statearr_44599_44616[(2)] = null);

(statearr_44599_44616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (5))){
var inst_44574 = cljs.core.async.close_BANG_.call(null,out);
var state_44589__$1 = state_44589;
var statearr_44600_44617 = state_44589__$1;
(statearr_44600_44617[(2)] = inst_44574);

(statearr_44600_44617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (10))){
var inst_44582 = (state_44589[(2)]);
var state_44589__$1 = (function (){var statearr_44601 = state_44589;
(statearr_44601[(8)] = inst_44582);

return statearr_44601;
})();
var statearr_44602_44618 = state_44589__$1;
(statearr_44602_44618[(2)] = null);

(statearr_44602_44618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44590 === (8))){
var inst_44571 = (state_44589[(7)]);
var state_44589__$1 = state_44589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44589__$1,(11),out,inst_44571);
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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44603 = [null,null,null,null,null,null,null,null,null];
(statearr_44603[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44603[(1)] = (1));

return statearr_44603;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44589){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44604){if((e44604 instanceof Object)){
var ex__34931__auto__ = e44604;
var statearr_44605_44619 = state_44589;
(statearr_44605_44619[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44604;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44620 = state_44589;
state_44589 = G__44620;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44606 = f__35095__auto__.call(null);
(statearr_44606[(6)] = c__35094__auto___44608);

return statearr_44606;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44622 = arguments.length;
switch (G__44622) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35094__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44685){
var state_val_44686 = (state_44685[(1)]);
if((state_val_44686 === (7))){
var inst_44681 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44687_44725 = state_44685__$1;
(statearr_44687_44725[(2)] = inst_44681);

(statearr_44687_44725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (20))){
var inst_44651 = (state_44685[(7)]);
var inst_44662 = (state_44685[(2)]);
var inst_44663 = cljs.core.next.call(null,inst_44651);
var inst_44637 = inst_44663;
var inst_44638 = null;
var inst_44639 = (0);
var inst_44640 = (0);
var state_44685__$1 = (function (){var statearr_44688 = state_44685;
(statearr_44688[(8)] = inst_44662);

(statearr_44688[(9)] = inst_44639);

(statearr_44688[(10)] = inst_44637);

(statearr_44688[(11)] = inst_44640);

(statearr_44688[(12)] = inst_44638);

return statearr_44688;
})();
var statearr_44689_44726 = state_44685__$1;
(statearr_44689_44726[(2)] = null);

(statearr_44689_44726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (1))){
var state_44685__$1 = state_44685;
var statearr_44690_44727 = state_44685__$1;
(statearr_44690_44727[(2)] = null);

(statearr_44690_44727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (4))){
var inst_44626 = (state_44685[(13)]);
var inst_44626__$1 = (state_44685[(2)]);
var inst_44627 = (inst_44626__$1 == null);
var state_44685__$1 = (function (){var statearr_44691 = state_44685;
(statearr_44691[(13)] = inst_44626__$1);

return statearr_44691;
})();
if(cljs.core.truth_(inst_44627)){
var statearr_44692_44728 = state_44685__$1;
(statearr_44692_44728[(1)] = (5));

} else {
var statearr_44693_44729 = state_44685__$1;
(statearr_44693_44729[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (15))){
var state_44685__$1 = state_44685;
var statearr_44697_44730 = state_44685__$1;
(statearr_44697_44730[(2)] = null);

(statearr_44697_44730[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (21))){
var state_44685__$1 = state_44685;
var statearr_44698_44731 = state_44685__$1;
(statearr_44698_44731[(2)] = null);

(statearr_44698_44731[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (13))){
var inst_44639 = (state_44685[(9)]);
var inst_44637 = (state_44685[(10)]);
var inst_44640 = (state_44685[(11)]);
var inst_44638 = (state_44685[(12)]);
var inst_44647 = (state_44685[(2)]);
var inst_44648 = (inst_44640 + (1));
var tmp44694 = inst_44639;
var tmp44695 = inst_44637;
var tmp44696 = inst_44638;
var inst_44637__$1 = tmp44695;
var inst_44638__$1 = tmp44696;
var inst_44639__$1 = tmp44694;
var inst_44640__$1 = inst_44648;
var state_44685__$1 = (function (){var statearr_44699 = state_44685;
(statearr_44699[(9)] = inst_44639__$1);

(statearr_44699[(14)] = inst_44647);

(statearr_44699[(10)] = inst_44637__$1);

(statearr_44699[(11)] = inst_44640__$1);

(statearr_44699[(12)] = inst_44638__$1);

return statearr_44699;
})();
var statearr_44700_44732 = state_44685__$1;
(statearr_44700_44732[(2)] = null);

(statearr_44700_44732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (22))){
var state_44685__$1 = state_44685;
var statearr_44701_44733 = state_44685__$1;
(statearr_44701_44733[(2)] = null);

(statearr_44701_44733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (6))){
var inst_44626 = (state_44685[(13)]);
var inst_44635 = f.call(null,inst_44626);
var inst_44636 = cljs.core.seq.call(null,inst_44635);
var inst_44637 = inst_44636;
var inst_44638 = null;
var inst_44639 = (0);
var inst_44640 = (0);
var state_44685__$1 = (function (){var statearr_44702 = state_44685;
(statearr_44702[(9)] = inst_44639);

(statearr_44702[(10)] = inst_44637);

(statearr_44702[(11)] = inst_44640);

(statearr_44702[(12)] = inst_44638);

return statearr_44702;
})();
var statearr_44703_44734 = state_44685__$1;
(statearr_44703_44734[(2)] = null);

(statearr_44703_44734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (17))){
var inst_44651 = (state_44685[(7)]);
var inst_44655 = cljs.core.chunk_first.call(null,inst_44651);
var inst_44656 = cljs.core.chunk_rest.call(null,inst_44651);
var inst_44657 = cljs.core.count.call(null,inst_44655);
var inst_44637 = inst_44656;
var inst_44638 = inst_44655;
var inst_44639 = inst_44657;
var inst_44640 = (0);
var state_44685__$1 = (function (){var statearr_44704 = state_44685;
(statearr_44704[(9)] = inst_44639);

(statearr_44704[(10)] = inst_44637);

(statearr_44704[(11)] = inst_44640);

(statearr_44704[(12)] = inst_44638);

return statearr_44704;
})();
var statearr_44705_44735 = state_44685__$1;
(statearr_44705_44735[(2)] = null);

(statearr_44705_44735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (3))){
var inst_44683 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44685__$1,inst_44683);
} else {
if((state_val_44686 === (12))){
var inst_44671 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44706_44736 = state_44685__$1;
(statearr_44706_44736[(2)] = inst_44671);

(statearr_44706_44736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (2))){
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44685__$1,(4),in$);
} else {
if((state_val_44686 === (23))){
var inst_44679 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44707_44737 = state_44685__$1;
(statearr_44707_44737[(2)] = inst_44679);

(statearr_44707_44737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (19))){
var inst_44666 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44708_44738 = state_44685__$1;
(statearr_44708_44738[(2)] = inst_44666);

(statearr_44708_44738[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (11))){
var inst_44651 = (state_44685[(7)]);
var inst_44637 = (state_44685[(10)]);
var inst_44651__$1 = cljs.core.seq.call(null,inst_44637);
var state_44685__$1 = (function (){var statearr_44709 = state_44685;
(statearr_44709[(7)] = inst_44651__$1);

return statearr_44709;
})();
if(inst_44651__$1){
var statearr_44710_44739 = state_44685__$1;
(statearr_44710_44739[(1)] = (14));

} else {
var statearr_44711_44740 = state_44685__$1;
(statearr_44711_44740[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (9))){
var inst_44673 = (state_44685[(2)]);
var inst_44674 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_44685__$1 = (function (){var statearr_44712 = state_44685;
(statearr_44712[(15)] = inst_44673);

return statearr_44712;
})();
if(cljs.core.truth_(inst_44674)){
var statearr_44713_44741 = state_44685__$1;
(statearr_44713_44741[(1)] = (21));

} else {
var statearr_44714_44742 = state_44685__$1;
(statearr_44714_44742[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (5))){
var inst_44629 = cljs.core.async.close_BANG_.call(null,out);
var state_44685__$1 = state_44685;
var statearr_44715_44743 = state_44685__$1;
(statearr_44715_44743[(2)] = inst_44629);

(statearr_44715_44743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (14))){
var inst_44651 = (state_44685[(7)]);
var inst_44653 = cljs.core.chunked_seq_QMARK_.call(null,inst_44651);
var state_44685__$1 = state_44685;
if(inst_44653){
var statearr_44716_44744 = state_44685__$1;
(statearr_44716_44744[(1)] = (17));

} else {
var statearr_44717_44745 = state_44685__$1;
(statearr_44717_44745[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (16))){
var inst_44669 = (state_44685[(2)]);
var state_44685__$1 = state_44685;
var statearr_44718_44746 = state_44685__$1;
(statearr_44718_44746[(2)] = inst_44669);

(statearr_44718_44746[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44686 === (10))){
var inst_44640 = (state_44685[(11)]);
var inst_44638 = (state_44685[(12)]);
var inst_44645 = cljs.core._nth.call(null,inst_44638,inst_44640);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44685__$1,(13),out,inst_44645);
} else {
if((state_val_44686 === (18))){
var inst_44651 = (state_44685[(7)]);
var inst_44660 = cljs.core.first.call(null,inst_44651);
var state_44685__$1 = state_44685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44685__$1,(20),out,inst_44660);
} else {
if((state_val_44686 === (8))){
var inst_44639 = (state_44685[(9)]);
var inst_44640 = (state_44685[(11)]);
var inst_44642 = (inst_44640 < inst_44639);
var inst_44643 = inst_44642;
var state_44685__$1 = state_44685;
if(cljs.core.truth_(inst_44643)){
var statearr_44719_44747 = state_44685__$1;
(statearr_44719_44747[(1)] = (10));

} else {
var statearr_44720_44748 = state_44685__$1;
(statearr_44720_44748[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____0 = (function (){
var statearr_44721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44721[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__);

(statearr_44721[(1)] = (1));

return statearr_44721;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____1 = (function (state_44685){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44722){if((e44722 instanceof Object)){
var ex__34931__auto__ = e44722;
var statearr_44723_44749 = state_44685;
(statearr_44723_44749[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44750 = state_44685;
state_44685 = G__44750;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__ = function(state_44685){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____1.call(this,state_44685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34928__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44724 = f__35095__auto__.call(null);
(statearr_44724[(6)] = c__35094__auto__);

return statearr_44724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));

return c__35094__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44752 = arguments.length;
switch (G__44752) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__44755 = arguments.length;
switch (G__44755) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__44758 = arguments.length;
switch (G__44758) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44782){
var state_val_44783 = (state_44782[(1)]);
if((state_val_44783 === (7))){
var inst_44777 = (state_44782[(2)]);
var state_44782__$1 = state_44782;
var statearr_44784_44806 = state_44782__$1;
(statearr_44784_44806[(2)] = inst_44777);

(statearr_44784_44806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (1))){
var inst_44759 = null;
var state_44782__$1 = (function (){var statearr_44785 = state_44782;
(statearr_44785[(7)] = inst_44759);

return statearr_44785;
})();
var statearr_44786_44807 = state_44782__$1;
(statearr_44786_44807[(2)] = null);

(statearr_44786_44807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (4))){
var inst_44762 = (state_44782[(8)]);
var inst_44762__$1 = (state_44782[(2)]);
var inst_44763 = (inst_44762__$1 == null);
var inst_44764 = cljs.core.not.call(null,inst_44763);
var state_44782__$1 = (function (){var statearr_44787 = state_44782;
(statearr_44787[(8)] = inst_44762__$1);

return statearr_44787;
})();
if(inst_44764){
var statearr_44788_44808 = state_44782__$1;
(statearr_44788_44808[(1)] = (5));

} else {
var statearr_44789_44809 = state_44782__$1;
(statearr_44789_44809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (6))){
var state_44782__$1 = state_44782;
var statearr_44790_44810 = state_44782__$1;
(statearr_44790_44810[(2)] = null);

(statearr_44790_44810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (3))){
var inst_44779 = (state_44782[(2)]);
var inst_44780 = cljs.core.async.close_BANG_.call(null,out);
var state_44782__$1 = (function (){var statearr_44791 = state_44782;
(statearr_44791[(9)] = inst_44779);

return statearr_44791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44782__$1,inst_44780);
} else {
if((state_val_44783 === (2))){
var state_44782__$1 = state_44782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44782__$1,(4),ch);
} else {
if((state_val_44783 === (11))){
var inst_44762 = (state_44782[(8)]);
var inst_44771 = (state_44782[(2)]);
var inst_44759 = inst_44762;
var state_44782__$1 = (function (){var statearr_44792 = state_44782;
(statearr_44792[(10)] = inst_44771);

(statearr_44792[(7)] = inst_44759);

return statearr_44792;
})();
var statearr_44793_44811 = state_44782__$1;
(statearr_44793_44811[(2)] = null);

(statearr_44793_44811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (9))){
var inst_44762 = (state_44782[(8)]);
var state_44782__$1 = state_44782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44782__$1,(11),out,inst_44762);
} else {
if((state_val_44783 === (5))){
var inst_44762 = (state_44782[(8)]);
var inst_44759 = (state_44782[(7)]);
var inst_44766 = cljs.core._EQ_.call(null,inst_44762,inst_44759);
var state_44782__$1 = state_44782;
if(inst_44766){
var statearr_44795_44812 = state_44782__$1;
(statearr_44795_44812[(1)] = (8));

} else {
var statearr_44796_44813 = state_44782__$1;
(statearr_44796_44813[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (10))){
var inst_44774 = (state_44782[(2)]);
var state_44782__$1 = state_44782;
var statearr_44797_44814 = state_44782__$1;
(statearr_44797_44814[(2)] = inst_44774);

(statearr_44797_44814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44783 === (8))){
var inst_44759 = (state_44782[(7)]);
var tmp44794 = inst_44759;
var inst_44759__$1 = tmp44794;
var state_44782__$1 = (function (){var statearr_44798 = state_44782;
(statearr_44798[(7)] = inst_44759__$1);

return statearr_44798;
})();
var statearr_44799_44815 = state_44782__$1;
(statearr_44799_44815[(2)] = null);

(statearr_44799_44815[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44800 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44800[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44800[(1)] = (1));

return statearr_44800;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44782){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44801){if((e44801 instanceof Object)){
var ex__34931__auto__ = e44801;
var statearr_44802_44816 = state_44782;
(statearr_44802_44816[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44801;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44817 = state_44782;
state_44782 = G__44817;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44803 = f__35095__auto__.call(null);
(statearr_44803[(6)] = c__35094__auto___44805);

return statearr_44803;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44819 = arguments.length;
switch (G__44819) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44857){
var state_val_44858 = (state_44857[(1)]);
if((state_val_44858 === (7))){
var inst_44853 = (state_44857[(2)]);
var state_44857__$1 = state_44857;
var statearr_44859_44886 = state_44857__$1;
(statearr_44859_44886[(2)] = inst_44853);

(statearr_44859_44886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (1))){
var inst_44820 = (new Array(n));
var inst_44821 = inst_44820;
var inst_44822 = (0);
var state_44857__$1 = (function (){var statearr_44860 = state_44857;
(statearr_44860[(7)] = inst_44822);

(statearr_44860[(8)] = inst_44821);

return statearr_44860;
})();
var statearr_44861_44887 = state_44857__$1;
(statearr_44861_44887[(2)] = null);

(statearr_44861_44887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (4))){
var inst_44825 = (state_44857[(9)]);
var inst_44825__$1 = (state_44857[(2)]);
var inst_44826 = (inst_44825__$1 == null);
var inst_44827 = cljs.core.not.call(null,inst_44826);
var state_44857__$1 = (function (){var statearr_44862 = state_44857;
(statearr_44862[(9)] = inst_44825__$1);

return statearr_44862;
})();
if(inst_44827){
var statearr_44863_44888 = state_44857__$1;
(statearr_44863_44888[(1)] = (5));

} else {
var statearr_44864_44889 = state_44857__$1;
(statearr_44864_44889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (15))){
var inst_44847 = (state_44857[(2)]);
var state_44857__$1 = state_44857;
var statearr_44865_44890 = state_44857__$1;
(statearr_44865_44890[(2)] = inst_44847);

(statearr_44865_44890[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (13))){
var state_44857__$1 = state_44857;
var statearr_44866_44891 = state_44857__$1;
(statearr_44866_44891[(2)] = null);

(statearr_44866_44891[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (6))){
var inst_44822 = (state_44857[(7)]);
var inst_44843 = (inst_44822 > (0));
var state_44857__$1 = state_44857;
if(cljs.core.truth_(inst_44843)){
var statearr_44867_44892 = state_44857__$1;
(statearr_44867_44892[(1)] = (12));

} else {
var statearr_44868_44893 = state_44857__$1;
(statearr_44868_44893[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (3))){
var inst_44855 = (state_44857[(2)]);
var state_44857__$1 = state_44857;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44857__$1,inst_44855);
} else {
if((state_val_44858 === (12))){
var inst_44821 = (state_44857[(8)]);
var inst_44845 = cljs.core.vec.call(null,inst_44821);
var state_44857__$1 = state_44857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44857__$1,(15),out,inst_44845);
} else {
if((state_val_44858 === (2))){
var state_44857__$1 = state_44857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44857__$1,(4),ch);
} else {
if((state_val_44858 === (11))){
var inst_44837 = (state_44857[(2)]);
var inst_44838 = (new Array(n));
var inst_44821 = inst_44838;
var inst_44822 = (0);
var state_44857__$1 = (function (){var statearr_44869 = state_44857;
(statearr_44869[(7)] = inst_44822);

(statearr_44869[(10)] = inst_44837);

(statearr_44869[(8)] = inst_44821);

return statearr_44869;
})();
var statearr_44870_44894 = state_44857__$1;
(statearr_44870_44894[(2)] = null);

(statearr_44870_44894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (9))){
var inst_44821 = (state_44857[(8)]);
var inst_44835 = cljs.core.vec.call(null,inst_44821);
var state_44857__$1 = state_44857;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44857__$1,(11),out,inst_44835);
} else {
if((state_val_44858 === (5))){
var inst_44822 = (state_44857[(7)]);
var inst_44825 = (state_44857[(9)]);
var inst_44830 = (state_44857[(11)]);
var inst_44821 = (state_44857[(8)]);
var inst_44829 = (inst_44821[inst_44822] = inst_44825);
var inst_44830__$1 = (inst_44822 + (1));
var inst_44831 = (inst_44830__$1 < n);
var state_44857__$1 = (function (){var statearr_44871 = state_44857;
(statearr_44871[(12)] = inst_44829);

(statearr_44871[(11)] = inst_44830__$1);

return statearr_44871;
})();
if(cljs.core.truth_(inst_44831)){
var statearr_44872_44895 = state_44857__$1;
(statearr_44872_44895[(1)] = (8));

} else {
var statearr_44873_44896 = state_44857__$1;
(statearr_44873_44896[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (14))){
var inst_44850 = (state_44857[(2)]);
var inst_44851 = cljs.core.async.close_BANG_.call(null,out);
var state_44857__$1 = (function (){var statearr_44875 = state_44857;
(statearr_44875[(13)] = inst_44850);

return statearr_44875;
})();
var statearr_44876_44897 = state_44857__$1;
(statearr_44876_44897[(2)] = inst_44851);

(statearr_44876_44897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (10))){
var inst_44841 = (state_44857[(2)]);
var state_44857__$1 = state_44857;
var statearr_44877_44898 = state_44857__$1;
(statearr_44877_44898[(2)] = inst_44841);

(statearr_44877_44898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44858 === (8))){
var inst_44830 = (state_44857[(11)]);
var inst_44821 = (state_44857[(8)]);
var tmp44874 = inst_44821;
var inst_44821__$1 = tmp44874;
var inst_44822 = inst_44830;
var state_44857__$1 = (function (){var statearr_44878 = state_44857;
(statearr_44878[(7)] = inst_44822);

(statearr_44878[(8)] = inst_44821__$1);

return statearr_44878;
})();
var statearr_44879_44899 = state_44857__$1;
(statearr_44879_44899[(2)] = null);

(statearr_44879_44899[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__34928__auto__ = null;
var cljs$core$async$state_machine__34928__auto____0 = (function (){
var statearr_44880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44880[(0)] = cljs$core$async$state_machine__34928__auto__);

(statearr_44880[(1)] = (1));

return statearr_44880;
});
var cljs$core$async$state_machine__34928__auto____1 = (function (state_44857){
while(true){
var ret_value__34929__auto__ = (function (){try{while(true){
var result__34930__auto__ = switch__34927__auto__.call(null,state_44857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34930__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34930__auto__;
}
break;
}
}catch (e44881){if((e44881 instanceof Object)){
var ex__34931__auto__ = e44881;
var statearr_44882_44900 = state_44857;
(statearr_44882_44900[(5)] = ex__34931__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34929__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44901 = state_44857;
state_44857 = G__44901;
continue;
} else {
return ret_value__34929__auto__;
}
break;
}
});
cljs$core$async$state_machine__34928__auto__ = function(state_44857){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34928__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34928__auto____1.call(this,state_44857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34928__auto____0;
cljs$core$async$state_machine__34928__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34928__auto____1;
return cljs$core$async$state_machine__34928__auto__;
})()
})();
var state__35096__auto__ = (function (){var statearr_44883 = f__35095__auto__.call(null);
(statearr_44883[(6)] = c__35094__auto___44885);

return statearr_44883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35096__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44903 = arguments.length;
switch (G__44903) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35094__auto___44973 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__35095__auto__ = (function (){var switch__34927__auto__ = (function (state_44945){
var state_val_44946 = (state_44945[(1)]);
if((state_val_44946 === (7))){
var inst_44941 = (state_44945[(2)]);
var state_44945__$1 = state_44945;
var statearr_4