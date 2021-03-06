// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__51862__delegate = function (x__51841__auto__){
if(cljs.core.truth_(time_reporting.core.mount_root)){
return cljs.core.apply.call(null,time_reporting.core.mount_root,x__51841__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","time-reporting.core/mount-root","' is missing"].join(''));
}
};
var G__51862 = function (var_args){
var x__51841__auto__ = null;
if (arguments.length > 0) {
var G__51863__i = 0, G__51863__a = new Array(arguments.length -  0);
while (G__51863__i < G__51863__a.length) {G__51863__a[G__51863__i] = arguments[G__51863__i + 0]; ++G__51863__i;}
  x__51841__auto__ = new cljs.core.IndexedSeq(G__51863__a,0,null);
} 
return G__51862__delegate.call(this,x__51841__auto__);};
G__51862.cljs$lang$maxFixedArity = 0;
G__51862.cljs$lang$applyTo = (function (arglist__51864){
var x__51841__auto__ = cljs.core.seq(arglist__51864);
return G__51862__delegate(x__51841__auto__);
});
G__51862.cljs$core$IFn$_invoke$arity$variadic = G__51862__delegate;
return G__51862;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1579787430454
