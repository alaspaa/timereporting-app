// Compiled by ClojureScript 1.10.597 {}
goog.provide('time_reporting.time.time');
goog.require('cljs.core');
goog.require('reagent.core');
time_reporting.time.time.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"total","total",1916810418),(95),new cljs.core.Keyword(null,"week","week",-1326473278),new cljs.core.PersistentArrayMap(null, 7, ["Monday",(1),"Tuesday",(2),"Wednesday",(3),"Thursday",(4),"Friday",(5),"Saturday",(6),"Sunday",(7)], null)], null));
time_reporting.time.time.cursor_total = reagent.core.cursor.call(null,time_reporting.time.time.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418)], null));
time_reporting.time.time.cursor_input = reagent.core.cursor.call(null,time_reporting.time.time.state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"week","week",-1326473278)], null));
time_reporting.time.time.convert_and_add = (function time_reporting$time$time$convert_and_add(x,y){
return ((x | (0)) + (y | (0)));
});
time_reporting.time.time.set_input = (function time_reporting$time$time$set_input(evt,key){
time_reporting.time.time.input_val = evt.target.value;

cljs.core.swap_BANG_.call(null,time_reporting.time.time.cursor_input,cljs.core.assoc,key,time_reporting.time.time.input_val);

cljs.core.reset_BANG_.call(null,time_reporting.time.time.cursor_total,cljs.core.reduce.call(null,time_reporting.time.time.convert_and_add,cljs.core.vals.call(null,cljs.core.deref.call(null,time_reporting.time.time.cursor_input))));

return cljs.core.println.call(null,cljs.core.deref.call(null,time_reporting.time.time.state));
});
time_reporting.time.time.header_row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4582__auto__ = (function time_reporting$time$time$iter__33632(s__33633){
return (new cljs.core.LazySeq(null,(function (){
var s__33633__$1 = s__33633;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33633__$1);
if(temp__5735__auto__){
var s__33633__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33633__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__33633__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__33635 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__33634 = (0);
while(true){
if((i__33634 < size__4581__auto__)){
var day = cljs.core._nth.call(null,c__4580__auto__,i__33634);
cljs.core.chunk_append.call(null,b__33635,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day"], null),cljs.core.key.call(null,day)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key.call(null,day)], null)));

var G__33636 = (i__33634 + (1));
i__33634 = G__33636;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33635),time_reporting$time$time$iter__33632.call(null,cljs.core.chunk_rest.call(null,s__33633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33635),null);
}
} else {
var day = cljs.core.first.call(null,s__33633__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"day"], null),cljs.core.key.call(null,day)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.key.call(null,day)], null)),time_reporting$time$time$iter__33632.call(null,cljs.core.rest.call(null,s__33633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.deref.call(null,time_reporting.time.time.cursor_input));
})()], null);
time_reporting.time.time.input_row = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.doall.call(null,(function (){var iter__4582__auto__ = (function time_reporting$time$time$iter__33637(s__33638){
return (new cljs.core.LazySeq(null,(function (){
var s__33638__$1 = s__33638;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__33638__$1);
if(temp__5735__auto__){
var s__33638__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33638__$2)){
var c__4580__auto__ = cljs.core.chunk_first.call(null,s__33638__$2);
var size__4581__auto__ = cljs.core.count.call(null,c__4580__auto__);
var b__33640 = cljs.core.chunk_buffer.call(null,size__4581__auto__);
if((function (){var i__33639 = (0);
while(true){
if((i__33639 < size__4581__auto__)){
var day = cljs.core._nth.call(null,c__4580__auto__,i__33639);
cljs.core.chunk_append.call(null,b__33640,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"class","class",-2030961996),"weekday",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__33639,day,c__4580__auto__,size__4581__auto__,b__33640,s__33638__$2,temp__5735__auto__){
return (function (evt){
return time_reporting.time.time.set_input.call(null,evt,cljs.core.key.call(null,day));
});})(i__33639,day,c__4580__auto__,size__4581__auto__,b__33640,s__33638__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))].join('')], null)));

var G__33641 = (i__33639 + (1));
i__33639 = G__33641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33640),time_reporting$time$time$iter__33637.call(null,cljs.core.chunk_rest.call(null,s__33638__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33640),null);
}
} else {
var day = cljs.core.first.call(null,s__33638__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"class","class",-2030961996),"weekday",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (day,s__33638__$2,temp__5735__auto__){
return (function (evt){
return time_reporting.time.time.set_input.call(null,evt,cljs.core.key.call(null,day));
});})(day,s__33638__$2,temp__5735__auto__))
], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,day)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((1))].join('')], null)),time_reporting$time$time$iter__33637.call(null,cljs.core.rest.call(null,s__33638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__.call(null,cljs.core.deref.call(null,time_reporting.time.time.cursor_input));
})())], null);
time_reporting.time.time.total_row = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"0",new cljs.core.Keyword(null,"class","class",-2030961996),"total",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"disabled",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,time_reporting.time.time.cursor_total)], null)], null)], null)], null);
time_reporting.time.time.time_page = (function time_reporting$time$time$time_page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Time reports"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),time_reporting.time.time.header_row,time_reporting.time.time.input_row,time_reporting.time.time.total_row], null)], null)], null);
});

//# sourceMappingURL=time.js.map?rel=1580050146836
