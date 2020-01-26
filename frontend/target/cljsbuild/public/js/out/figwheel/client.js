// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e51359){if((e51359 instanceof Error)){
var e = e51359;
return "Error: Unable to stringify";
} else {
throw e51359;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__51362 = arguments.length;
switch (G__51362) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__51360_SHARP_){
if(typeof p1__51360_SHARP_ === 'string'){
return p1__51360_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__51360_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51365 = arguments.length;
var i__4790__auto___51366 = (0);
while(true){
if((i__4790__auto___51366 < len__4789__auto___51365)){
args__4795__auto__.push((arguments[i__4790__auto___51366]));

var G__51367 = (i__4790__auto___51366 + (1));
i__4790__auto___51366 = G__51367;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq51364){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51364));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51369 = arguments.length;
var i__4790__auto___51370 = (0);
while(true){
if((i__4790__auto___51370 < len__4789__auto___51369)){
args__4795__auto__.push((arguments[i__4790__auto___51370]));

var G__51371 = (i__4790__auto___51370 + (1));
i__4790__auto___51370 = G__51371;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq51368){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51368));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__51372){
var map__51373 = p__51372;
var map__51373__$1 = (((((!((map__51373 == null))))?(((((map__51373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51373):map__51373);
var message = cljs.core.get.call(null,map__51373__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__51373__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4185__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34868__auto___51452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_51424){
var state_val_51425 = (state_51424[(1)]);
if((state_val_51425 === (7))){
var inst_51420 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51426_51453 = state_51424__$1;
(statearr_51426_51453[(2)] = inst_51420);

(statearr_51426_51453[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (1))){
var state_51424__$1 = state_51424;
var statearr_51427_51454 = state_51424__$1;
(statearr_51427_51454[(2)] = null);

(statearr_51427_51454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (4))){
var inst_51377 = (state_51424[(7)]);
var inst_51377__$1 = (state_51424[(2)]);
var state_51424__$1 = (function (){var statearr_51428 = state_51424;
(statearr_51428[(7)] = inst_51377__$1);

return statearr_51428;
})();
if(cljs.core.truth_(inst_51377__$1)){
var statearr_51429_51455 = state_51424__$1;
(statearr_51429_51455[(1)] = (5));

} else {
var statearr_51430_51456 = state_51424__$1;
(statearr_51430_51456[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (15))){
var inst_51384 = (state_51424[(8)]);
var inst_51399 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51384);
var inst_51400 = cljs.core.first.call(null,inst_51399);
var inst_51401 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_51400);
var inst_51402 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51401)].join('');
var inst_51403 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_51402);
var state_51424__$1 = state_51424;
var statearr_51431_51457 = state_51424__$1;
(statearr_51431_51457[(2)] = inst_51403);

(statearr_51431_51457[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (13))){
var inst_51408 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51432_51458 = state_51424__$1;
(statearr_51432_51458[(2)] = inst_51408);

(statearr_51432_51458[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (6))){
var state_51424__$1 = state_51424;
var statearr_51433_51459 = state_51424__$1;
(statearr_51433_51459[(2)] = null);

(statearr_51433_51459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (17))){
var inst_51406 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51434_51460 = state_51424__$1;
(statearr_51434_51460[(2)] = inst_51406);

(statearr_51434_51460[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (3))){
var inst_51422 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51424__$1,inst_51422);
} else {
if((state_val_51425 === (12))){
var inst_51383 = (state_51424[(9)]);
var inst_51397 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_51383,opts);
var state_51424__$1 = state_51424;
if(inst_51397){
var statearr_51435_51461 = state_51424__$1;
(statearr_51435_51461[(1)] = (15));

} else {
var statearr_51436_51462 = state_51424__$1;
(statearr_51436_51462[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (2))){
var state_51424__$1 = state_51424;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51424__$1,(4),ch);
} else {
if((state_val_51425 === (11))){
var inst_51384 = (state_51424[(8)]);
var inst_51389 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51390 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_51384);
var inst_51391 = cljs.core.async.timeout.call(null,(1000));
var inst_51392 = [inst_51390,inst_51391];
var inst_51393 = (new cljs.core.PersistentVector(null,2,(5),inst_51389,inst_51392,null));
var state_51424__$1 = state_51424;
return cljs.core.async.ioc_alts_BANG_.call(null,state_51424__$1,(14),inst_51393);
} else {
if((state_val_51425 === (9))){
var inst_51384 = (state_51424[(8)]);
var inst_51410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_51411 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_51384);
var inst_51412 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51411);
var inst_51413 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51412)].join('');
var inst_51414 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_51413);
var state_51424__$1 = (function (){var statearr_51437 = state_51424;
(statearr_51437[(10)] = inst_51410);

return statearr_51437;
})();
var statearr_51438_51463 = state_51424__$1;
(statearr_51438_51463[(2)] = inst_51414);

(statearr_51438_51463[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (5))){
var inst_51377 = (state_51424[(7)]);
var inst_51379 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_51380 = (new cljs.core.PersistentArrayMap(null,2,inst_51379,null));
var inst_51381 = (new cljs.core.PersistentHashSet(null,inst_51380,null));
var inst_51382 = figwheel.client.focus_msgs.call(null,inst_51381,inst_51377);
var inst_51383 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_51382);
var inst_51384 = cljs.core.first.call(null,inst_51382);
var inst_51385 = figwheel.client.autoload_QMARK_.call(null);
var state_51424__$1 = (function (){var statearr_51439 = state_51424;
(statearr_51439[(8)] = inst_51384);

(statearr_51439[(9)] = inst_51383);

return statearr_51439;
})();
if(cljs.core.truth_(inst_51385)){
var statearr_51440_51464 = state_51424__$1;
(statearr_51440_51464[(1)] = (8));

} else {
var statearr_51441_51465 = state_51424__$1;
(statearr_51441_51465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (14))){
var inst_51395 = (state_51424[(2)]);
var state_51424__$1 = state_51424;
var statearr_51442_51466 = state_51424__$1;
(statearr_51442_51466[(2)] = inst_51395);

(statearr_51442_51466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (16))){
var state_51424__$1 = state_51424;
var statearr_51443_51467 = state_51424__$1;
(statearr_51443_51467[(2)] = null);

(statearr_51443_51467[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (10))){
var inst_51416 = (state_51424[(2)]);
var state_51424__$1 = (function (){var statearr_51444 = state_51424;
(statearr_51444[(11)] = inst_51416);

return statearr_51444;
})();
var statearr_51445_51468 = state_51424__$1;
(statearr_51445_51468[(2)] = null);

(statearr_51445_51468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51425 === (8))){
var inst_51383 = (state_51424[(9)]);
var inst_51387 = figwheel.client.reload_file_state_QMARK_.call(null,inst_51383,opts);
var state_51424__$1 = state_51424;
if(cljs.core.truth_(inst_51387)){
var statearr_51446_51469 = state_51424__$1;
(statearr_51446_51469[(1)] = (11));

} else {
var statearr_51447_51470 = state_51424__$1;
(statearr_51447_51470[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____0 = (function (){
var statearr_51448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51448[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__);

(statearr_51448[(1)] = (1));

return statearr_51448;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____1 = (function (state_51424){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_51424);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e51449){if((e51449 instanceof Object)){
var ex__34705__auto__ = e51449;
var statearr_51450_51471 = state_51424;
(statearr_51450_51471[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51424);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51472 = state_51424;
state_51424 = G__51472;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__ = function(state_51424){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____1.call(this,state_51424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34702__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_51451 = f__34869__auto__.call(null);
(statearr_51451[(6)] = c__34868__auto___51452);

return statearr_51451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__51473_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__51473_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_51479 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51475 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51476 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51477 = true;
var _STAR_print_fn_STAR__temp_val__51478 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51477);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51478);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51476);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51475);
}}catch (e51474){if((e51474 instanceof Error)){
var e = e51474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_51479], null));
} else {
var e = e51474;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__51480){
var map__51481 = p__51480;
var map__51481__$1 = (((((!((map__51481 == null))))?(((((map__51481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51481):map__51481);
var opts = map__51481__$1;
var build_id = cljs.core.get.call(null,map__51481__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__51483){
var vec__51484 = p__51483;
var seq__51485 = cljs.core.seq.call(null,vec__51484);
var first__51486 = cljs.core.first.call(null,seq__51485);
var seq__51485__$1 = cljs.core.next.call(null,seq__51485);
var map__51487 = first__51486;
var map__51487__$1 = (((((!((map__51487 == null))))?(((((map__51487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51487.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51487):map__51487);
var msg = map__51487__$1;
var msg_name = cljs.core.get.call(null,map__51487__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51485__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__51489){
var vec__51490 = p__51489;
var seq__51491 = cljs.core.seq.call(null,vec__51490);
var first__51492 = cljs.core.first.call(null,seq__51491);
var seq__51491__$1 = cljs.core.next.call(null,seq__51491);
var map__51493 = first__51492;
var map__51493__$1 = (((((!((map__51493 == null))))?(((((map__51493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51493):map__51493);
var msg = map__51493__$1;
var msg_name = cljs.core.get.call(null,map__51493__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51491__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__51495){
var map__51496 = p__51495;
var map__51496__$1 = (((((!((map__51496 == null))))?(((((map__51496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51496.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51496):map__51496);
var on_compile_warning = cljs.core.get.call(null,map__51496__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__51496__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__51498){
var vec__51499 = p__51498;
var seq__51500 = cljs.core.seq.call(null,vec__51499);
var first__51501 = cljs.core.first.call(null,seq__51500);
var seq__51500__$1 = cljs.core.next.call(null,seq__51500);
var map__51502 = first__51501;
var map__51502__$1 = (((((!((map__51502 == null))))?(((((map__51502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51502.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51502):map__51502);
var msg = map__51502__$1;
var msg_name = cljs.core.get.call(null,map__51502__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__51500__$1;
var pred__51504 = cljs.core._EQ_;
var expr__51505 = msg_name;
if(cljs.core.truth_(pred__51504.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__51505))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__51504.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__51505))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_51594){
var state_val_51595 = (state_51594[(1)]);
if((state_val_51595 === (7))){
var inst_51514 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
if(cljs.core.truth_(inst_51514)){
var statearr_51596_51643 = state_51594__$1;
(statearr_51596_51643[(1)] = (8));

} else {
var statearr_51597_51644 = state_51594__$1;
(statearr_51597_51644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (20))){
var inst_51588 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51598_51645 = state_51594__$1;
(statearr_51598_51645[(2)] = inst_51588);

(statearr_51598_51645[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (27))){
var inst_51584 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51599_51646 = state_51594__$1;
(statearr_51599_51646[(2)] = inst_51584);

(statearr_51599_51646[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (1))){
var inst_51507 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_51594__$1 = state_51594;
if(cljs.core.truth_(inst_51507)){
var statearr_51600_51647 = state_51594__$1;
(statearr_51600_51647[(1)] = (2));

} else {
var statearr_51601_51648 = state_51594__$1;
(statearr_51601_51648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (24))){
var inst_51586 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51602_51649 = state_51594__$1;
(statearr_51602_51649[(2)] = inst_51586);

(statearr_51602_51649[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (4))){
var inst_51592 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51594__$1,inst_51592);
} else {
if((state_val_51595 === (15))){
var inst_51590 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51603_51650 = state_51594__$1;
(statearr_51603_51650[(2)] = inst_51590);

(statearr_51603_51650[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (21))){
var inst_51543 = (state_51594[(2)]);
var inst_51544 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51545 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51544);
var state_51594__$1 = (function (){var statearr_51604 = state_51594;
(statearr_51604[(7)] = inst_51543);

return statearr_51604;
})();
var statearr_51605_51651 = state_51594__$1;
(statearr_51605_51651[(2)] = inst_51545);

(statearr_51605_51651[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (31))){
var inst_51573 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51573){
var statearr_51606_51652 = state_51594__$1;
(statearr_51606_51652[(1)] = (34));

} else {
var statearr_51607_51653 = state_51594__$1;
(statearr_51607_51653[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (32))){
var inst_51582 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51608_51654 = state_51594__$1;
(statearr_51608_51654[(2)] = inst_51582);

(statearr_51608_51654[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (33))){
var inst_51569 = (state_51594[(2)]);
var inst_51570 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51571 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51570);
var state_51594__$1 = (function (){var statearr_51609 = state_51594;
(statearr_51609[(8)] = inst_51569);

return statearr_51609;
})();
var statearr_51610_51655 = state_51594__$1;
(statearr_51610_51655[(2)] = inst_51571);

(statearr_51610_51655[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (13))){
var inst_51528 = figwheel.client.heads_up.clear.call(null);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(16),inst_51528);
} else {
if((state_val_51595 === (22))){
var inst_51549 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51550 = figwheel.client.heads_up.append_warning_message.call(null,inst_51549);
var state_51594__$1 = state_51594;
var statearr_51611_51656 = state_51594__$1;
(statearr_51611_51656[(2)] = inst_51550);

(statearr_51611_51656[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (36))){
var inst_51580 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51612_51657 = state_51594__$1;
(statearr_51612_51657[(2)] = inst_51580);

(statearr_51612_51657[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (29))){
var inst_51560 = (state_51594[(2)]);
var inst_51561 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51562 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51561);
var state_51594__$1 = (function (){var statearr_51613 = state_51594;
(statearr_51613[(9)] = inst_51560);

return statearr_51613;
})();
var statearr_51614_51658 = state_51594__$1;
(statearr_51614_51658[(2)] = inst_51562);

(statearr_51614_51658[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (6))){
var inst_51509 = (state_51594[(10)]);
var state_51594__$1 = state_51594;
var statearr_51615_51659 = state_51594__$1;
(statearr_51615_51659[(2)] = inst_51509);

(statearr_51615_51659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (28))){
var inst_51556 = (state_51594[(2)]);
var inst_51557 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51558 = figwheel.client.heads_up.display_warning.call(null,inst_51557);
var state_51594__$1 = (function (){var statearr_51616 = state_51594;
(statearr_51616[(11)] = inst_51556);

return statearr_51616;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(29),inst_51558);
} else {
if((state_val_51595 === (25))){
var inst_51554 = figwheel.client.heads_up.clear.call(null);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(28),inst_51554);
} else {
if((state_val_51595 === (34))){
var inst_51575 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(37),inst_51575);
} else {
if((state_val_51595 === (17))){
var inst_51534 = (state_51594[(2)]);
var inst_51535 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51536 = figwheel.client.auto_jump_to_error.call(null,opts,inst_51535);
var state_51594__$1 = (function (){var statearr_51617 = state_51594;
(statearr_51617[(12)] = inst_51534);

return statearr_51617;
})();
var statearr_51618_51660 = state_51594__$1;
(statearr_51618_51660[(2)] = inst_51536);

(statearr_51618_51660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (3))){
var inst_51526 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51526){
var statearr_51619_51661 = state_51594__$1;
(statearr_51619_51661[(1)] = (13));

} else {
var statearr_51620_51662 = state_51594__$1;
(statearr_51620_51662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (12))){
var inst_51522 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51621_51663 = state_51594__$1;
(statearr_51621_51663[(2)] = inst_51522);

(statearr_51621_51663[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (2))){
var inst_51509 = (state_51594[(10)]);
var inst_51509__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_51594__$1 = (function (){var statearr_51622 = state_51594;
(statearr_51622[(10)] = inst_51509__$1);

return statearr_51622;
})();
if(cljs.core.truth_(inst_51509__$1)){
var statearr_51623_51664 = state_51594__$1;
(statearr_51623_51664[(1)] = (5));

} else {
var statearr_51624_51665 = state_51594__$1;
(statearr_51624_51665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (23))){
var inst_51552 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51552){
var statearr_51625_51666 = state_51594__$1;
(statearr_51625_51666[(1)] = (25));

} else {
var statearr_51626_51667 = state_51594__$1;
(statearr_51626_51667[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (35))){
var state_51594__$1 = state_51594;
var statearr_51627_51668 = state_51594__$1;
(statearr_51627_51668[(2)] = null);

(statearr_51627_51668[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (19))){
var inst_51547 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51547){
var statearr_51628_51669 = state_51594__$1;
(statearr_51628_51669[(1)] = (22));

} else {
var statearr_51629_51670 = state_51594__$1;
(statearr_51629_51670[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (11))){
var inst_51518 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51630_51671 = state_51594__$1;
(statearr_51630_51671[(2)] = inst_51518);

(statearr_51630_51671[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (9))){
var inst_51520 = figwheel.client.heads_up.clear.call(null);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(12),inst_51520);
} else {
if((state_val_51595 === (5))){
var inst_51511 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_51594__$1 = state_51594;
var statearr_51631_51672 = state_51594__$1;
(statearr_51631_51672[(2)] = inst_51511);

(statearr_51631_51672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (14))){
var inst_51538 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51538){
var statearr_51632_51673 = state_51594__$1;
(statearr_51632_51673[(1)] = (18));

} else {
var statearr_51633_51674 = state_51594__$1;
(statearr_51633_51674[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (26))){
var inst_51564 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_51594__$1 = state_51594;
if(inst_51564){
var statearr_51634_51675 = state_51594__$1;
(statearr_51634_51675[(1)] = (30));

} else {
var statearr_51635_51676 = state_51594__$1;
(statearr_51635_51676[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (16))){
var inst_51530 = (state_51594[(2)]);
var inst_51531 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51532 = figwheel.client.heads_up.display_exception.call(null,inst_51531);
var state_51594__$1 = (function (){var statearr_51636 = state_51594;
(statearr_51636[(13)] = inst_51530);

return statearr_51636;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(17),inst_51532);
} else {
if((state_val_51595 === (30))){
var inst_51566 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51567 = figwheel.client.heads_up.display_warning.call(null,inst_51566);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(33),inst_51567);
} else {
if((state_val_51595 === (10))){
var inst_51524 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51637_51677 = state_51594__$1;
(statearr_51637_51677[(2)] = inst_51524);

(statearr_51637_51677[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (18))){
var inst_51540 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_51541 = figwheel.client.heads_up.display_exception.call(null,inst_51540);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(21),inst_51541);
} else {
if((state_val_51595 === (37))){
var inst_51577 = (state_51594[(2)]);
var state_51594__$1 = state_51594;
var statearr_51638_51678 = state_51594__$1;
(statearr_51638_51678[(2)] = inst_51577);

(statearr_51638_51678[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51595 === (8))){
var inst_51516 = figwheel.client.heads_up.flash_loaded.call(null);
var state_51594__$1 = state_51594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51594__$1,(11),inst_51516);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____0 = (function (){
var statearr_51639 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51639[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__);

(statearr_51639[(1)] = (1));

return statearr_51639;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____1 = (function (state_51594){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_51594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e51640){if((e51640 instanceof Object)){
var ex__34705__auto__ = e51640;
var statearr_51641_51679 = state_51594;
(statearr_51641_51679[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51680 = state_51594;
state_51594 = G__51680;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__ = function(state_51594){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____1.call(this,state_51594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_51642 = f__34869__auto__.call(null);
(statearr_51642[(6)] = c__34868__auto__);

return statearr_51642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));

return c__34868__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34868__auto___51709 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_51695){
var state_val_51696 = (state_51695[(1)]);
if((state_val_51696 === (1))){
var state_51695__$1 = state_51695;
var statearr_51697_51710 = state_51695__$1;
(statearr_51697_51710[(2)] = null);

(statearr_51697_51710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51696 === (2))){
var state_51695__$1 = state_51695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51695__$1,(4),ch);
} else {
if((state_val_51696 === (3))){
var inst_51693 = (state_51695[(2)]);
var state_51695__$1 = state_51695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51695__$1,inst_51693);
} else {
if((state_val_51696 === (4))){
var inst_51683 = (state_51695[(7)]);
var inst_51683__$1 = (state_51695[(2)]);
var state_51695__$1 = (function (){var statearr_51698 = state_51695;
(statearr_51698[(7)] = inst_51683__$1);

return statearr_51698;
})();
if(cljs.core.truth_(inst_51683__$1)){
var statearr_51699_51711 = state_51695__$1;
(statearr_51699_51711[(1)] = (5));

} else {
var statearr_51700_51712 = state_51695__$1;
(statearr_51700_51712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51696 === (5))){
var inst_51683 = (state_51695[(7)]);
var inst_51685 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_51683);
var state_51695__$1 = state_51695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51695__$1,(8),inst_51685);
} else {
if((state_val_51696 === (6))){
var state_51695__$1 = state_51695;
var statearr_51701_51713 = state_51695__$1;
(statearr_51701_51713[(2)] = null);

(statearr_51701_51713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51696 === (7))){
var inst_51691 = (state_51695[(2)]);
var state_51695__$1 = state_51695;
var statearr_51702_51714 = state_51695__$1;
(statearr_51702_51714[(2)] = inst_51691);

(statearr_51702_51714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51696 === (8))){
var inst_51687 = (state_51695[(2)]);
var state_51695__$1 = (function (){var statearr_51703 = state_51695;
(statearr_51703[(8)] = inst_51687);

return statearr_51703;
})();
var statearr_51704_51715 = state_51695__$1;
(statearr_51704_51715[(2)] = null);

(statearr_51704_51715[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34702__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34702__auto____0 = (function (){
var statearr_51705 = [null,null,null,null,null,null,null,null,null];
(statearr_51705[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34702__auto__);

(statearr_51705[(1)] = (1));

return statearr_51705;
});
var figwheel$client$heads_up_plugin_$_state_machine__34702__auto____1 = (function (state_51695){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_51695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e51706){if((e51706 instanceof Object)){
var ex__34705__auto__ = e51706;
var statearr_51707_51716 = state_51695;
(statearr_51707_51716[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51717 = state_51695;
state_51695 = G__51717;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34702__auto__ = function(state_51695){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34702__auto____1.call(this,state_51695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34702__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34702__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_51708 = f__34869__auto__.call(null);
(statearr_51708[(6)] = c__34868__auto___51709);

return statearr_51708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_51723){
var state_val_51724 = (state_51723[(1)]);
if((state_val_51724 === (1))){
var inst_51718 = cljs.core.async.timeout.call(null,(3000));
var state_51723__$1 = state_51723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51723__$1,(2),inst_51718);
} else {
if((state_val_51724 === (2))){
var inst_51720 = (state_51723[(2)]);
var inst_51721 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_51723__$1 = (function (){var statearr_51725 = state_51723;
(statearr_51725[(7)] = inst_51720);

return statearr_51725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51723__$1,inst_51721);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____0 = (function (){
var statearr_51726 = [null,null,null,null,null,null,null,null];
(statearr_51726[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__);

(statearr_51726[(1)] = (1));

return statearr_51726;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____1 = (function (state_51723){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_51723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e51727){if((e51727 instanceof Object)){
var ex__34705__auto__ = e51727;
var statearr_51728_51730 = state_51723;
(statearr_51728_51730[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51731 = state_51723;
state_51723 = G__51731;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__ = function(state_51723){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____1.call(this,state_51723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34702__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_51729 = f__34869__auto__.call(null);
(statearr_51729[(6)] = c__34868__auto__);

return statearr_51729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));

return c__34868__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_51738){
var state_val_51739 = (state_51738[(1)]);
if((state_val_51739 === (1))){
var inst_51732 = cljs.core.async.timeout.call(null,(2000));
var state_51738__$1 = state_51738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51738__$1,(2),inst_51732);
} else {
if((state_val_51739 === (2))){
var inst_51734 = (state_51738[(2)]);
var inst_51735 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_51736 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_51735);
var state_51738__$1 = (function (){var statearr_51740 = state_51738;
(statearr_51740[(7)] = inst_51734);

return statearr_51740;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51738__$1,inst_51736);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____0 = (function (){
var statearr_51741 = [null,null,null,null,null,null,null,null];
(statearr_51741[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__);

(statearr_51741[(1)] = (1));

return statearr_51741;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____1 = (function (state_51738){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_51738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e51742){if((e51742 instanceof Object)){
var ex__34705__auto__ = e51742;
var statearr_51743_51745 = state_51738;
(statearr_51743_51745[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51746 = state_51738;
state_51738 = G__51746;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__ = function(state_51738){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____1.call(this,state_51738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_51744 = f__34869__auto__.call(null);
(statearr_51744[(6)] = c__34868__auto__);

return statearr_51744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));

return c__34868__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__51747){
var map__51748 = p__51747;
var map__51748__$1 = (((((!((map__51748 == null))))?(((((map__51748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51748):map__51748);
var file = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__51750 = "";
var G__51750__$1 = (cljs.core.truth_(file)?[G__51750,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__51750);
var G__51750__$2 = (cljs.core.truth_(line)?[G__51750__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__51750__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = line;
if(cljs.core.truth_(and__4174__auto__)){
return column;
} else {
return and__4174__auto__;
}
})())){
return [G__51750__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__51750__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__51751){
var map__51752 = p__51751;
var map__51752__$1 = (((((!((map__51752 == null))))?(((((map__51752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51752):map__51752);
var ed = map__51752__$1;
var exception_data = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_51755 = (function (){var G__51754 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51754)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__51754;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_51755);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__51756){
var map__51757 = p__51756;
var map__51757__$1 = (((((!((map__51757 == null))))?(((((map__51757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51757):map__51757);
var w = map__51757__$1;
var message = cljs.core.get.call(null,map__51757__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"target/cljsbuild/public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4174__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4174__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__51759 = cljs.core.seq.call(null,plugins);
var chunk__51760 = null;
var count__51761 = (0);
var i__51762 = (0);
while(true){
if((i__51762 < count__51761)){
var vec__51769 = cljs.core._nth.call(null,chunk__51760,i__51762);
var k = cljs.core.nth.call(null,vec__51769,(0),null);
var plugin = cljs.core.nth.call(null,vec__51769,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51775 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51759,chunk__51760,count__51761,i__51762,pl_51775,vec__51769,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_51775.call(null,msg_hist);
});})(seq__51759,chunk__51760,count__51761,i__51762,pl_51775,vec__51769,k,plugin))
);
} else {
}


var G__51776 = seq__51759;
var G__51777 = chunk__51760;
var G__51778 = count__51761;
var G__51779 = (i__51762 + (1));
seq__51759 = G__51776;
chunk__51760 = G__51777;
count__51761 = G__51778;
i__51762 = G__51779;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__51759);
if(temp__5735__auto__){
var seq__51759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51759__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__51759__$1);
var G__51780 = cljs.core.chunk_rest.call(null,seq__51759__$1);
var G__51781 = c__4609__auto__;
var G__51782 = cljs.core.count.call(null,c__4609__auto__);
var G__51783 = (0);
seq__51759 = G__51780;
chunk__51760 = G__51781;
count__51761 = G__51782;
i__51762 = G__51783;
continue;
} else {
var vec__51772 = cljs.core.first.call(null,seq__51759__$1);
var k = cljs.core.nth.call(null,vec__51772,(0),null);
var plugin = cljs.core.nth.call(null,vec__51772,(1),null);
if(cljs.core.truth_(plugin)){
var pl_51784 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__51759,chunk__51760,count__51761,i__51762,pl_51784,vec__51772,k,plugin,seq__51759__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_51784.call(null,msg_hist);
});})(seq__51759,chunk__51760,count__51761,i__51762,pl_51784,vec__51772,k,plugin,seq__51759__$1,temp__5735__auto__))
);
} else {
}


var G__51785 = cljs.core.next.call(null,seq__51759__$1);
var G__51786 = null;
var G__51787 = (0);
var G__51788 = (0);
seq__51759 = G__51785;
chunk__51760 = G__51786;
count__51761 = G__51787;
i__51762 = G__51788;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__51790 = arguments.length;
switch (G__51790) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__51791_51796 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__51792_51797 = null;
var count__51793_51798 = (0);
var i__51794_51799 = (0);
while(true){
if((i__51794_51799 < count__51793_51798)){
var msg_51800 = cljs.core._nth.call(null,chunk__51792_51797,i__51794_51799);
figwheel.client.socket.handle_incoming_message.call(null,msg_51800);


var G__51801 = seq__51791_51796;
var G__51802 = chunk__51792_51797;
var G__51803 = count__51793_51798;
var G__51804 = (i__51794_51799 + (1));
seq__51791_51796 = G__51801;
chunk__51792_51797 = G__51802;
count__51793_51798 = G__51803;
i__51794_51799 = G__51804;
continue;
} else {
var temp__5735__auto___51805 = cljs.core.seq.call(null,seq__51791_51796);
if(temp__5735__auto___51805){
var seq__51791_51806__$1 = temp__5735__auto___51805;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51791_51806__$1)){
var c__4609__auto___51807 = cljs.core.chunk_first.call(null,seq__51791_51806__$1);
var G__51808 = cljs.core.chunk_rest.call(null,seq__51791_51806__$1);
var G__51809 = c__4609__auto___51807;
var G__51810 = cljs.core.count.call(null,c__4609__auto___51807);
var G__51811 = (0);
seq__51791_51796 = G__51808;
chunk__51792_51797 = G__51809;
count__51793_51798 = G__51810;
i__51794_51799 = G__51811;
continue;
} else {
var msg_51812 = cljs.core.first.call(null,seq__51791_51806__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_51812);


var G__51813 = cljs.core.next.call(null,seq__51791_51806__$1);
var G__51814 = null;
var G__51815 = (0);
var G__51816 = (0);
seq__51791_51796 = G__51813;
chunk__51792_51797 = G__51814;
count__51793_51798 = G__51815;
i__51794_51799 = G__51816;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4795__auto__ = [];
var len__4789__auto___51821 = arguments.length;
var i__4790__auto___51822 = (0);
while(true){
if((i__4790__auto___51822 < len__4789__auto___51821)){
args__4795__auto__.push((arguments[i__4790__auto___51822]));

var G__51823 = (i__4790__auto___51822 + (1));
i__4790__auto___51822 = G__51823;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__51818){
var map__51819 = p__51818;
var map__51819__$1 = (((((!((map__51819 == null))))?(((((map__51819.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51819.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51819):map__51819);
var opts = map__51819__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq51817){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51817));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e51824){if((e51824 instanceof Error)){
var e = e51824;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e51824;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__51825){
var map__51826 = p__51825;
var map__51826__$1 = (((((!((map__51826 == null))))?(((((map__51826.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51826.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51826):map__51826);
var msg_name = cljs.core.get.call(null,map__51826__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1579787430395
