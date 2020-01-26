// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__32649__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32649 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32650__i = 0, G__32650__a = new Array(arguments.length -  0);
while (G__32650__i < G__32650__a.length) {G__32650__a[G__32650__i] = arguments[G__32650__i + 0]; ++G__32650__i;}
  args = new cljs.core.IndexedSeq(G__32650__a,0,null);
} 
return G__32649__delegate.call(this,args);};
G__32649.cljs$lang$maxFixedArity = 0;
G__32649.cljs$lang$applyTo = (function (arglist__32651){
var args = cljs.core.seq(arglist__32651);
return G__32649__delegate(args);
});
G__32649.cljs$core$IFn$_invoke$arity$variadic = G__32649__delegate;
return G__32649;
})()
);

(o.error = (function() { 
var G__32652__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32652 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32653__i = 0, G__32653__a = new Array(arguments.length -  0);
while (G__32653__i < G__32653__a.length) {G__32653__a[G__32653__i] = arguments[G__32653__i + 0]; ++G__32653__i;}
  args = new cljs.core.IndexedSeq(G__32653__a,0,null);
} 
return G__32652__delegate.call(this,args);};
G__32652.cljs$lang$maxFixedArity = 0;
G__32652.cljs$lang$applyTo = (function (arglist__32654){
var args = cljs.core.seq(arglist__32654);
return G__32652__delegate(args);
});
G__32652.cljs$core$IFn$_invoke$arity$variadic = G__32652__delegate;
return G__32652;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1580050130926
