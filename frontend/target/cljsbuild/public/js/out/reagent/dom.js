// Compiled by ClojureScript 1.10.597 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('react_dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__33433 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__33434 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__33434);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__33435 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__33436 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__33436);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__33435);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__33433);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__33438 = arguments.length;
switch (G__33438) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode(this$);
});
(reagent.impl.template.find_dom_node = reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__33440_33444 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__33441_33445 = null;
var count__33442_33446 = (0);
var i__33443_33447 = (0);
while(true){
if((i__33443_33447 < count__33442_33446)){
var v_33448 = cljs.core._nth.call(null,chunk__33441_33445,i__33443_33447);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33448);


var G__33449 = seq__33440_33444;
var G__33450 = chunk__33441_33445;
var G__33451 = count__33442_33446;
var G__33452 = (i__33443_33447 + (1));
seq__33440_33444 = G__33449;
chunk__33441_33445 = G__33450;
count__33442_33446 = G__33451;
i__33443_33447 = G__33452;
continue;
} else {
var temp__5735__auto___33453 = cljs.core.seq.call(null,seq__33440_33444);
if(temp__5735__auto___33453){
var seq__33440_33454__$1 = temp__5735__auto___33453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33440_33454__$1)){
var c__4609__auto___33455 = cljs.core.chunk_first.call(null,seq__33440_33454__$1);
var G__33456 = cljs.core.chunk_rest.call(null,seq__33440_33454__$1);
var G__33457 = c__4609__auto___33455;
var G__33458 = cljs.core.count.call(null,c__4609__auto___33455);
var G__33459 = (0);
seq__33440_33444 = G__33456;
chunk__33441_33445 = G__33457;
count__33442_33446 = G__33458;
i__33443_33447 = G__33459;
continue;
} else {
var v_33460 = cljs.core.first.call(null,seq__33440_33454__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_33460);


var G__33461 = cljs.core.next.call(null,seq__33440_33454__$1);
var G__33462 = null;
var G__33463 = (0);
var G__33464 = (0);
seq__33440_33444 = G__33461;
chunk__33441_33445 = G__33462;
count__33442_33446 = G__33463;
i__33443_33447 = G__33464;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1580050144515
