// Compiled by ClojureScript 1.10.597 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50349){
var map__50350 = p__50349;
var map__50350__$1 = (((((!((map__50350 == null))))?(((((map__50350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50350):map__50350);
var m = map__50350__$1;
var n = cljs.core.get.call(null,map__50350__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__50350__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50352_50384 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50353_50385 = null;
var count__50354_50386 = (0);
var i__50355_50387 = (0);
while(true){
if((i__50355_50387 < count__50354_50386)){
var f_50388 = cljs.core._nth.call(null,chunk__50353_50385,i__50355_50387);
cljs.core.println.call(null,"  ",f_50388);


var G__50389 = seq__50352_50384;
var G__50390 = chunk__50353_50385;
var G__50391 = count__50354_50386;
var G__50392 = (i__50355_50387 + (1));
seq__50352_50384 = G__50389;
chunk__50353_50385 = G__50390;
count__50354_50386 = G__50391;
i__50355_50387 = G__50392;
continue;
} else {
var temp__5735__auto___50393 = cljs.core.seq.call(null,seq__50352_50384);
if(temp__5735__auto___50393){
var seq__50352_50394__$1 = temp__5735__auto___50393;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50352_50394__$1)){
var c__4609__auto___50395 = cljs.core.chunk_first.call(null,seq__50352_50394__$1);
var G__50396 = cljs.core.chunk_rest.call(null,seq__50352_50394__$1);
var G__50397 = c__4609__auto___50395;
var G__50398 = cljs.core.count.call(null,c__4609__auto___50395);
var G__50399 = (0);
seq__50352_50384 = G__50396;
chunk__50353_50385 = G__50397;
count__50354_50386 = G__50398;
i__50355_50387 = G__50399;
continue;
} else {
var f_50400 = cljs.core.first.call(null,seq__50352_50394__$1);
cljs.core.println.call(null,"  ",f_50400);


var G__50401 = cljs.core.next.call(null,seq__50352_50394__$1);
var G__50402 = null;
var G__50403 = (0);
var G__50404 = (0);
seq__50352_50384 = G__50401;
chunk__50353_50385 = G__50402;
count__50354_50386 = G__50403;
i__50355_50387 = G__50404;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50405 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_50405);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_50405)))?cljs.core.second.call(null,arglists_50405):arglists_50405));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50356_50406 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50357_50407 = null;
var count__50358_50408 = (0);
var i__50359_50409 = (0);
while(true){
if((i__50359_50409 < count__50358_50408)){
var vec__50370_50410 = cljs.core._nth.call(null,chunk__50357_50407,i__50359_50409);
var name_50411 = cljs.core.nth.call(null,vec__50370_50410,(0),null);
var map__50373_50412 = cljs.core.nth.call(null,vec__50370_50410,(1),null);
var map__50373_50413__$1 = (((((!((map__50373_50412 == null))))?(((((map__50373_50412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50373_50412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50373_50412):map__50373_50412);
var doc_50414 = cljs.core.get.call(null,map__50373_50413__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50415 = cljs.core.get.call(null,map__50373_50413__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50411);

cljs.core.println.call(null," ",arglists_50415);

if(cljs.core.truth_(doc_50414)){
cljs.core.println.call(null," ",doc_50414);
} else {
}


var G__50416 = seq__50356_50406;
var G__50417 = chunk__50357_50407;
var G__50418 = count__50358_50408;
var G__50419 = (i__50359_50409 + (1));
seq__50356_50406 = G__50416;
chunk__50357_50407 = G__50417;
count__50358_50408 = G__50418;
i__50359_50409 = G__50419;
continue;
} else {
var temp__5735__auto___50420 = cljs.core.seq.call(null,seq__50356_50406);
if(temp__5735__auto___50420){
var seq__50356_50421__$1 = temp__5735__auto___50420;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50356_50421__$1)){
var c__4609__auto___50422 = cljs.core.chunk_first.call(null,seq__50356_50421__$1);
var G__50423 = cljs.core.chunk_rest.call(null,seq__50356_50421__$1);
var G__50424 = c__4609__auto___50422;
var G__50425 = cljs.core.count.call(null,c__4609__auto___50422);
var G__50426 = (0);
seq__50356_50406 = G__50423;
chunk__50357_50407 = G__50424;
count__50358_50408 = G__50425;
i__50359_50409 = G__50426;
continue;
} else {
var vec__50375_50427 = cljs.core.first.call(null,seq__50356_50421__$1);
var name_50428 = cljs.core.nth.call(null,vec__50375_50427,(0),null);
var map__50378_50429 = cljs.core.nth.call(null,vec__50375_50427,(1),null);
var map__50378_50430__$1 = (((((!((map__50378_50429 == null))))?(((((map__50378_50429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50378_50429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50378_50429):map__50378_50429);
var doc_50431 = cljs.core.get.call(null,map__50378_50430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50432 = cljs.core.get.call(null,map__50378_50430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_50428);

cljs.core.println.call(null," ",arglists_50432);

if(cljs.core.truth_(doc_50431)){
cljs.core.println.call(null," ",doc_50431);
} else {
}


var G__50433 = cljs.core.next.call(null,seq__50356_50421__$1);
var G__50434 = null;
var G__50435 = (0);
var G__50436 = (0);
seq__50356_50406 = G__50433;
chunk__50357_50407 = G__50434;
count__50358_50408 = G__50435;
i__50359_50409 = G__50436;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__50380 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50381 = null;
var count__50382 = (0);
var i__50383 = (0);
while(true){
if((i__50383 < count__50382)){
var role = cljs.core._nth.call(null,chunk__50381,i__50383);
var temp__5735__auto___50437__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50437__$1)){
var spec_50438 = temp__5735__auto___50437__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50438));
} else {
}


var G__50439 = seq__50380;
var G__50440 = chunk__50381;
var G__50441 = count__50382;
var G__50442 = (i__50383 + (1));
seq__50380 = G__50439;
chunk__50381 = G__50440;
count__50382 = G__50441;
i__50383 = G__50442;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__50380);
if(temp__5735__auto____$1){
var seq__50380__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50380__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__50380__$1);
var G__50443 = cljs.core.chunk_rest.call(null,seq__50380__$1);
var G__50444 = c__4609__auto__;
var G__50445 = cljs.core.count.call(null,c__4609__auto__);
var G__50446 = (0);
seq__50380 = G__50443;
chunk__50381 = G__50444;
count__50382 = G__50445;
i__50383 = G__50446;
continue;
} else {
var role = cljs.core.first.call(null,seq__50380__$1);
var temp__5735__auto___50447__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___50447__$2)){
var spec_50448 = temp__5735__auto___50447__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_50448));
} else {
}


var G__50449 = cljs.core.next.call(null,seq__50380__$1);
var G__50450 = null;
var G__50451 = (0);
var G__50452 = (0);
seq__50380 = G__50449;
chunk__50381 = G__50450;
count__50382 = G__50451;
i__50383 = G__50452;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50453 = cljs.core.conj.call(null,via,t);
var G__50454 = cljs.core.ex_cause.call(null,t);
via = G__50453;
t = G__50454;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50457 = datafied_throwable;
var map__50457__$1 = (((((!((map__50457 == null))))?(((((map__50457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50457):map__50457);
var via = cljs.core.get.call(null,map__50457__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__50457__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__50457__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50458 = cljs.core.last.call(null,via);
var map__50458__$1 = (((((!((map__50458 == null))))?(((((map__50458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50458):map__50458);
var type = cljs.core.get.call(null,map__50458__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__50458__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__50458__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50459 = data;
var map__50459__$1 = (((((!((map__50459 == null))))?(((((map__50459.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50459.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50459):map__50459);
var problems = cljs.core.get.call(null,map__50459__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__50459__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__50459__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50460 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__50460__$1 = (((((!((map__50460 == null))))?(((((map__50460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50460):map__50460);
var top_data = map__50460__$1;
var source = cljs.core.get.call(null,map__50460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__50465 = phase;
var G__50465__$1 = (((G__50465 instanceof cljs.core.Keyword))?G__50465.fqn:null);
switch (G__50465__$1) {
case "read-source":
var map__50466 = data;
var map__50466__$1 = (((((!((map__50466 == null))))?(((((map__50466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50466):map__50466);
var line = cljs.core.get.call(null,map__50466__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__50466__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50468 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__50468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__50468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50468);
var G__50468__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__50468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50468__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__50468__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50468__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50469 = top_data;
var G__50469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__50469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50469);
var G__50469__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__50469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50469__$1);
var G__50469__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__50469__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50469__$2);
var G__50469__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__50469__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50469__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__50469__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50469__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50470 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__50470,(0),null);
var method = cljs.core.nth.call(null,vec__50470,(1),null);
var file = cljs.core.nth.call(null,vec__50470,(2),null);
var line = cljs.core.nth.call(null,vec__50470,(3),null);
var G__50473 = top_data;
var G__50473__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__50473,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50473);
var G__50473__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__50473__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50473__$1);
var G__50473__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.call(null,G__50473__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50473__$2);
var G__50473__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__50473__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50473__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__50473__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50473__$4;
}

break;
case "execution":
var vec__50474 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__50474,(0),null);
var method = cljs.core.nth.call(null,vec__50474,(1),null);
var file = cljs.core.nth.call(null,vec__50474,(2),null);
var line = cljs.core.nth.call(null,vec__50474,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__50456_SHARP_){
var or__4185__auto__ = (p1__50456_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__50456_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__50477 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50477__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__50477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50477);
var G__50477__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__50477__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50477__$1);
var G__50477__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.call(null,G__50477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50477__$2);
var G__50477__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__50477__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__50477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50477__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50465__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50481){
var map__50482 = p__50481;
var map__50482__$1 = (((((!((map__50482 == null))))?(((((map__50482.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50482.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50482):map__50482);
var triage_data = map__50482__$1;
var phase = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__50482__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50484 = phase;
var G__50484__$1 = (((G__50484 instanceof cljs.core.Keyword))?G__50484.fqn:null);
switch (G__50484__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50485_50494 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50486_50495 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50487_50496 = true;
var _STAR_print_fn_STAR__temp_val__50488_50497 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50487_50496);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50488_50497);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__50479_SHARP_){
return cljs.core.dissoc.call(null,p1__50479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50486_50495);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50485_50494);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50489_50498 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50490_50499 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50491_50500 = true;
var _STAR_print_fn_STAR__temp_val__50492_50501 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50491_50500);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50492_50501);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__50480_SHARP_){
return cljs.core.dissoc.call(null,p1__50480_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50490_50499);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50489_50498);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50484__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1579787429700
