// Compiled by ClojureScript 1.10.597 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4185__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4185__auto__){
return or__4185__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4185__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return ((goog.string.startsWith("clojure.",name)) || (goog.string.startsWith("goog.",name)));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__48037_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__48037_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (v,k,_){
return goog.object.forEach(v,(function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__48038 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__48039 = null;
var count__48040 = (0);
var i__48041 = (0);
while(true){
if((i__48041 < count__48040)){
var n = cljs.core._nth.call(null,chunk__48039,i__48041);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__48042 = seq__48038;
var G__48043 = chunk__48039;
var G__48044 = count__48040;
var G__48045 = (i__48041 + (1));
seq__48038 = G__48042;
chunk__48039 = G__48043;
count__48040 = G__48044;
i__48041 = G__48045;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48038);
if(temp__5735__auto__){
var seq__48038__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48038__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__48038__$1);
var G__48046 = cljs.core.chunk_rest.call(null,seq__48038__$1);
var G__48047 = c__4609__auto__;
var G__48048 = cljs.core.count.call(null,c__4609__auto__);
var G__48049 = (0);
seq__48038 = G__48046;
chunk__48039 = G__48047;
count__48040 = G__48048;
i__48041 = G__48049;
continue;
} else {
var n = cljs.core.first.call(null,seq__48038__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__48050 = cljs.core.next.call(null,seq__48038__$1);
var G__48051 = null;
var G__48052 = (0);
var G__48053 = (0);
seq__48038 = G__48050;
chunk__48039 = G__48051;
count__48040 = G__48052;
i__48041 = G__48053;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__48054){
var vec__48055 = p__48054;
var _ = cljs.core.nth.call(null,vec__48055,(0),null);
var v = cljs.core.nth.call(null,vec__48055,(1),null);
var and__4174__auto__ = v;
if(cljs.core.truth_(and__4174__auto__)){
return v.call(null,dep);
} else {
return and__4174__auto__;
}
}),cljs.core.filter.call(null,(function (p__48058){
var vec__48059 = p__48058;
var k = cljs.core.nth.call(null,vec__48059,(0),null);
var v = cljs.core.nth.call(null,vec__48059,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__48071_48079 = cljs.core.seq.call(null,deps);
var chunk__48072_48080 = null;
var count__48073_48081 = (0);
var i__48074_48082 = (0);
while(true){
if((i__48074_48082 < count__48073_48081)){
var dep_48083 = cljs.core._nth.call(null,chunk__48072_48080,i__48074_48082);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_48083;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48083));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48083,(depth + (1)),state);
} else {
}


var G__48084 = seq__48071_48079;
var G__48085 = chunk__48072_48080;
var G__48086 = count__48073_48081;
var G__48087 = (i__48074_48082 + (1));
seq__48071_48079 = G__48084;
chunk__48072_48080 = G__48085;
count__48073_48081 = G__48086;
i__48074_48082 = G__48087;
continue;
} else {
var temp__5735__auto___48088 = cljs.core.seq.call(null,seq__48071_48079);
if(temp__5735__auto___48088){
var seq__48071_48089__$1 = temp__5735__auto___48088;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48071_48089__$1)){
var c__4609__auto___48090 = cljs.core.chunk_first.call(null,seq__48071_48089__$1);
var G__48091 = cljs.core.chunk_rest.call(null,seq__48071_48089__$1);
var G__48092 = c__4609__auto___48090;
var G__48093 = cljs.core.count.call(null,c__4609__auto___48090);
var G__48094 = (0);
seq__48071_48079 = G__48091;
chunk__48072_48080 = G__48092;
count__48073_48081 = G__48093;
i__48074_48082 = G__48094;
continue;
} else {
var dep_48095 = cljs.core.first.call(null,seq__48071_48089__$1);
if(cljs.core.truth_((function (){var and__4174__auto__ = dep_48095;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_48095));
} else {
return and__4174__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_48095,(depth + (1)),state);
} else {
}


var G__48096 = cljs.core.next.call(null,seq__48071_48089__$1);
var G__48097 = null;
var G__48098 = (0);
var G__48099 = (0);
seq__48071_48079 = G__48096;
chunk__48072_48080 = G__48097;
count__48073_48081 = G__48098;
i__48074_48082 = G__48099;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__48075){
var vec__48076 = p__48075;
var seq__48077 = cljs.core.seq.call(null,vec__48076);
var first__48078 = cljs.core.first.call(null,seq__48077);
var seq__48077__$1 = cljs.core.next.call(null,seq__48077);
var x = first__48078;
var xs = seq__48077__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__48062_SHARP_){
return clojure.set.difference.call(null,p1__48062_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__48100 = cljs.core.seq.call(null,provides);
var chunk__48101 = null;
var count__48102 = (0);
var i__48103 = (0);
while(true){
if((i__48103 < count__48102)){
var prov = cljs.core._nth.call(null,chunk__48101,i__48103);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48112_48120 = cljs.core.seq.call(null,requires);
var chunk__48113_48121 = null;
var count__48114_48122 = (0);
var i__48115_48123 = (0);
while(true){
if((i__48115_48123 < count__48114_48122)){
var req_48124 = cljs.core._nth.call(null,chunk__48113_48121,i__48115_48123);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48124,prov);


var G__48125 = seq__48112_48120;
var G__48126 = chunk__48113_48121;
var G__48127 = count__48114_48122;
var G__48128 = (i__48115_48123 + (1));
seq__48112_48120 = G__48125;
chunk__48113_48121 = G__48126;
count__48114_48122 = G__48127;
i__48115_48123 = G__48128;
continue;
} else {
var temp__5735__auto___48129 = cljs.core.seq.call(null,seq__48112_48120);
if(temp__5735__auto___48129){
var seq__48112_48130__$1 = temp__5735__auto___48129;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48112_48130__$1)){
var c__4609__auto___48131 = cljs.core.chunk_first.call(null,seq__48112_48130__$1);
var G__48132 = cljs.core.chunk_rest.call(null,seq__48112_48130__$1);
var G__48133 = c__4609__auto___48131;
var G__48134 = cljs.core.count.call(null,c__4609__auto___48131);
var G__48135 = (0);
seq__48112_48120 = G__48132;
chunk__48113_48121 = G__48133;
count__48114_48122 = G__48134;
i__48115_48123 = G__48135;
continue;
} else {
var req_48136 = cljs.core.first.call(null,seq__48112_48130__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48136,prov);


var G__48137 = cljs.core.next.call(null,seq__48112_48130__$1);
var G__48138 = null;
var G__48139 = (0);
var G__48140 = (0);
seq__48112_48120 = G__48137;
chunk__48113_48121 = G__48138;
count__48114_48122 = G__48139;
i__48115_48123 = G__48140;
continue;
}
} else {
}
}
break;
}


var G__48141 = seq__48100;
var G__48142 = chunk__48101;
var G__48143 = count__48102;
var G__48144 = (i__48103 + (1));
seq__48100 = G__48141;
chunk__48101 = G__48142;
count__48102 = G__48143;
i__48103 = G__48144;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__48100);
if(temp__5735__auto__){
var seq__48100__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48100__$1)){
var c__4609__auto__ = cljs.core.chunk_first.call(null,seq__48100__$1);
var G__48145 = cljs.core.chunk_rest.call(null,seq__48100__$1);
var G__48146 = c__4609__auto__;
var G__48147 = cljs.core.count.call(null,c__4609__auto__);
var G__48148 = (0);
seq__48100 = G__48145;
chunk__48101 = G__48146;
count__48102 = G__48147;
i__48103 = G__48148;
continue;
} else {
var prov = cljs.core.first.call(null,seq__48100__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__48116_48149 = cljs.core.seq.call(null,requires);
var chunk__48117_48150 = null;
var count__48118_48151 = (0);
var i__48119_48152 = (0);
while(true){
if((i__48119_48152 < count__48118_48151)){
var req_48153 = cljs.core._nth.call(null,chunk__48117_48150,i__48119_48152);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48153,prov);


var G__48154 = seq__48116_48149;
var G__48155 = chunk__48117_48150;
var G__48156 = count__48118_48151;
var G__48157 = (i__48119_48152 + (1));
seq__48116_48149 = G__48154;
chunk__48117_48150 = G__48155;
count__48118_48151 = G__48156;
i__48119_48152 = G__48157;
continue;
} else {
var temp__5735__auto___48158__$1 = cljs.core.seq.call(null,seq__48116_48149);
if(temp__5735__auto___48158__$1){
var seq__48116_48159__$1 = temp__5735__auto___48158__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48116_48159__$1)){
var c__4609__auto___48160 = cljs.core.chunk_first.call(null,seq__48116_48159__$1);
var G__48161 = cljs.core.chunk_rest.call(null,seq__48116_48159__$1);
var G__48162 = c__4609__auto___48160;
var G__48163 = cljs.core.count.call(null,c__4609__auto___48160);
var G__48164 = (0);
seq__48116_48149 = G__48161;
chunk__48117_48150 = G__48162;
count__48118_48151 = G__48163;
i__48119_48152 = G__48164;
continue;
} else {
var req_48165 = cljs.core.first.call(null,seq__48116_48159__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_48165,prov);


var G__48166 = cljs.core.next.call(null,seq__48116_48159__$1);
var G__48167 = null;
var G__48168 = (0);
var G__48169 = (0);
seq__48116_48149 = G__48166;
chunk__48117_48150 = G__48167;
count__48118_48151 = G__48168;
i__48119_48152 = G__48169;
continue;
}
} else {
}
}
break;
}


var G__48170 = cljs.core.next.call(null,seq__48100__$1);
var G__48171 = null;
var G__48172 = (0);
var G__48173 = (0);
seq__48100 = G__48170;
chunk__48101 = G__48171;
count__48102 = G__48172;
i__48103 = G__48173;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__48174_48178 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__48175_48179 = null;
var count__48176_48180 = (0);
var i__48177_48181 = (0);
while(true){
if((i__48177_48181 < count__48176_48180)){
var ns_48182 = cljs.core._nth.call(null,chunk__48175_48179,i__48177_48181);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48182);


var G__48183 = seq__48174_48178;
var G__48184 = chunk__48175_48179;
var G__48185 = count__48176_48180;
var G__48186 = (i__48177_48181 + (1));
seq__48174_48178 = G__48183;
chunk__48175_48179 = G__48184;
count__48176_48180 = G__48185;
i__48177_48181 = G__48186;
continue;
} else {
var temp__5735__auto___48187 = cljs.core.seq.call(null,seq__48174_48178);
if(temp__5735__auto___48187){
var seq__48174_48188__$1 = temp__5735__auto___48187;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48174_48188__$1)){
var c__4609__auto___48189 = cljs.core.chunk_first.call(null,seq__48174_48188__$1);
var G__48190 = cljs.core.chunk_rest.call(null,seq__48174_48188__$1);
var G__48191 = c__4609__auto___48189;
var G__48192 = cljs.core.count.call(null,c__4609__auto___48189);
var G__48193 = (0);
seq__48174_48178 = G__48190;
chunk__48175_48179 = G__48191;
count__48176_48180 = G__48192;
i__48177_48181 = G__48193;
continue;
} else {
var ns_48194 = cljs.core.first.call(null,seq__48174_48188__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_48194);


var G__48195 = cljs.core.next.call(null,seq__48174_48188__$1);
var G__48196 = null;
var G__48197 = (0);
var G__48198 = (0);
seq__48174_48178 = G__48195;
chunk__48175_48179 = G__48196;
count__48176_48180 = G__48197;
i__48177_48181 = G__48198;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4185__auto__ = goog.require__;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__48199__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__48199 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48200__i = 0, G__48200__a = new Array(arguments.length -  0);
while (G__48200__i < G__48200__a.length) {G__48200__a[G__48200__i] = arguments[G__48200__i + 0]; ++G__48200__i;}
  args = new cljs.core.IndexedSeq(G__48200__a,0,null);
} 
return G__48199__delegate.call(this,args);};
G__48199.cljs$lang$maxFixedArity = 0;
G__48199.cljs$lang$applyTo = (function (arglist__48201){
var args = cljs.core.seq(arglist__48201);
return G__48199__delegate(args);
});
G__48199.cljs$core$IFn$_invoke$arity$variadic = G__48199__delegate;
return G__48199;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__48202_SHARP_,p2__48203_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48202_SHARP_)),p2__48203_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__48204_SHARP_,p2__48205_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__48204_SHARP_),p2__48205_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__48206 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__48206.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__48206.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__48206;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e48207){if((e48207 instanceof Error)){
var e = e48207;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48207;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e48208){if((e48208 instanceof Error)){
var e = e48208;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e48208;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__48209 = cljs.core._EQ_;
var expr__48210 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__48209.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__48210))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__48209.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__48210))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__48209.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__48210))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__48212,callback){
var map__48213 = p__48212;
var map__48213__$1 = (((((!((map__48213 == null))))?(((((map__48213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48213):map__48213);
var file_msg = map__48213__$1;
var request_url = cljs.core.get.call(null,map__48213__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4185__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_48251){
var state_val_48252 = (state_48251[(1)]);
if((state_val_48252 === (7))){
var inst_48247 = (state_48251[(2)]);
var state_48251__$1 = state_48251;
var statearr_48253_48279 = state_48251__$1;
(statearr_48253_48279[(2)] = inst_48247);

(statearr_48253_48279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (1))){
var state_48251__$1 = state_48251;
var statearr_48254_48280 = state_48251__$1;
(statearr_48254_48280[(2)] = null);

(statearr_48254_48280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (4))){
var inst_48217 = (state_48251[(7)]);
var inst_48217__$1 = (state_48251[(2)]);
var state_48251__$1 = (function (){var statearr_48255 = state_48251;
(statearr_48255[(7)] = inst_48217__$1);

return statearr_48255;
})();
if(cljs.core.truth_(inst_48217__$1)){
var statearr_48256_48281 = state_48251__$1;
(statearr_48256_48281[(1)] = (5));

} else {
var statearr_48257_48282 = state_48251__$1;
(statearr_48257_48282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (15))){
var inst_48232 = (state_48251[(8)]);
var inst_48230 = (state_48251[(9)]);
var inst_48234 = inst_48232.call(null,inst_48230);
var state_48251__$1 = state_48251;
var statearr_48258_48283 = state_48251__$1;
(statearr_48258_48283[(2)] = inst_48234);

(statearr_48258_48283[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (13))){
var inst_48241 = (state_48251[(2)]);
var state_48251__$1 = state_48251;
var statearr_48259_48284 = state_48251__$1;
(statearr_48259_48284[(2)] = inst_48241);

(statearr_48259_48284[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (6))){
var state_48251__$1 = state_48251;
var statearr_48260_48285 = state_48251__$1;
(statearr_48260_48285[(2)] = null);

(statearr_48260_48285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (17))){
var inst_48238 = (state_48251[(2)]);
var state_48251__$1 = state_48251;
var statearr_48261_48286 = state_48251__$1;
(statearr_48261_48286[(2)] = inst_48238);

(statearr_48261_48286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (3))){
var inst_48249 = (state_48251[(2)]);
var state_48251__$1 = state_48251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48251__$1,inst_48249);
} else {
if((state_val_48252 === (12))){
var state_48251__$1 = state_48251;
var statearr_48262_48287 = state_48251__$1;
(statearr_48262_48287[(2)] = null);

(statearr_48262_48287[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (2))){
var state_48251__$1 = state_48251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48251__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_48252 === (11))){
var inst_48222 = (state_48251[(10)]);
var inst_48228 = figwheel.client.file_reloading.blocking_load.call(null,inst_48222);
var state_48251__$1 = state_48251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48251__$1,(14),inst_48228);
} else {
if((state_val_48252 === (9))){
var inst_48222 = (state_48251[(10)]);
var state_48251__$1 = state_48251;
if(cljs.core.truth_(inst_48222)){
var statearr_48263_48288 = state_48251__$1;
(statearr_48263_48288[(1)] = (11));

} else {
var statearr_48264_48289 = state_48251__$1;
(statearr_48264_48289[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (5))){
var inst_48217 = (state_48251[(7)]);
var inst_48223 = (state_48251[(11)]);
var inst_48222 = cljs.core.nth.call(null,inst_48217,(0),null);
var inst_48223__$1 = cljs.core.nth.call(null,inst_48217,(1),null);
var state_48251__$1 = (function (){var statearr_48265 = state_48251;
(statearr_48265[(11)] = inst_48223__$1);

(statearr_48265[(10)] = inst_48222);

return statearr_48265;
})();
if(cljs.core.truth_(inst_48223__$1)){
var statearr_48266_48290 = state_48251__$1;
(statearr_48266_48290[(1)] = (8));

} else {
var statearr_48267_48291 = state_48251__$1;
(statearr_48267_48291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (14))){
var inst_48232 = (state_48251[(8)]);
var inst_48222 = (state_48251[(10)]);
var inst_48230 = (state_48251[(2)]);
var inst_48231 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_48232__$1 = cljs.core.get.call(null,inst_48231,inst_48222);
var state_48251__$1 = (function (){var statearr_48268 = state_48251;
(statearr_48268[(8)] = inst_48232__$1);

(statearr_48268[(9)] = inst_48230);

return statearr_48268;
})();
if(cljs.core.truth_(inst_48232__$1)){
var statearr_48269_48292 = state_48251__$1;
(statearr_48269_48292[(1)] = (15));

} else {
var statearr_48270_48293 = state_48251__$1;
(statearr_48270_48293[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (16))){
var inst_48230 = (state_48251[(9)]);
var inst_48236 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_48230);
var state_48251__$1 = state_48251;
var statearr_48271_48294 = state_48251__$1;
(statearr_48271_48294[(2)] = inst_48236);

(statearr_48271_48294[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (10))){
var inst_48243 = (state_48251[(2)]);
var state_48251__$1 = (function (){var statearr_48272 = state_48251;
(statearr_48272[(12)] = inst_48243);

return statearr_48272;
})();
var statearr_48273_48295 = state_48251__$1;
(statearr_48273_48295[(2)] = null);

(statearr_48273_48295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48252 === (8))){
var inst_48223 = (state_48251[(11)]);
var inst_48225 = eval(inst_48223);
var state_48251__$1 = state_48251;
var statearr_48274_48296 = state_48251__$1;
(statearr_48274_48296[(2)] = inst_48225);

(statearr_48274_48296[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__34702__auto__ = null;
var figwheel$client$file_reloading$state_machine__34702__auto____0 = (function (){
var statearr_48275 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48275[(0)] = figwheel$client$file_reloading$state_machine__34702__auto__);

(statearr_48275[(1)] = (1));

return statearr_48275;
});
var figwheel$client$file_reloading$state_machine__34702__auto____1 = (function (state_48251){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_48251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e48276){if((e48276 instanceof Object)){
var ex__34705__auto__ = e48276;
var statearr_48277_48297 = state_48251;
(statearr_48277_48297[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48298 = state_48251;
state_48251 = G__48298;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34702__auto__ = function(state_48251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34702__auto____1.call(this,state_48251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34702__auto____0;
figwheel$client$file_reloading$state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34702__auto____1;
return figwheel$client$file_reloading$state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_48278 = f__34869__auto__.call(null);
(statearr_48278[(6)] = c__34868__auto__);

return statearr_48278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));

return c__34868__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__48300 = arguments.length;
switch (G__48300) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__48302,callback){
var map__48303 = p__48302;
var map__48303__$1 = (((((!((map__48303 == null))))?(((((map__48303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48303):map__48303);
var file_msg = map__48303__$1;
var namespace = cljs.core.get.call(null,map__48303__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__48305){
var map__48306 = p__48305;
var map__48306__$1 = (((((!((map__48306 == null))))?(((((map__48306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48306):map__48306);
var file_msg = map__48306__$1;
var namespace = cljs.core.get.call(null,map__48306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__48308){
var map__48309 = p__48308;
var map__48309__$1 = (((((!((map__48309 == null))))?(((((map__48309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48309):map__48309);
var file_msg = map__48309__$1;
var namespace = cljs.core.get.call(null,map__48309__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4185__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var or__4185__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4185__auto____$2)){
return or__4185__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__48311,callback){
var map__48312 = p__48311;
var map__48312__$1 = (((((!((map__48312 == null))))?(((((map__48312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48312):map__48312);
var file_msg = map__48312__$1;
var request_url = cljs.core.get.call(null,map__48312__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__48312__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34868__auto___48362 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_48347){
var state_val_48348 = (state_48347[(1)]);
if((state_val_48348 === (1))){
var inst_48321 = cljs.core.seq.call(null,files);
var inst_48322 = cljs.core.first.call(null,inst_48321);
var inst_48323 = cljs.core.next.call(null,inst_48321);
var inst_48324 = files;
var state_48347__$1 = (function (){var statearr_48349 = state_48347;
(statearr_48349[(7)] = inst_48324);

(statearr_48349[(8)] = inst_48323);

(statearr_48349[(9)] = inst_48322);

return statearr_48349;
})();
var statearr_48350_48363 = state_48347__$1;
(statearr_48350_48363[(2)] = null);

(statearr_48350_48363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (2))){
var inst_48324 = (state_48347[(7)]);
var inst_48330 = (state_48347[(10)]);
var inst_48329 = cljs.core.seq.call(null,inst_48324);
var inst_48330__$1 = cljs.core.first.call(null,inst_48329);
var inst_48331 = cljs.core.next.call(null,inst_48329);
var inst_48332 = (inst_48330__$1 == null);
var inst_48333 = cljs.core.not.call(null,inst_48332);
var state_48347__$1 = (function (){var statearr_48351 = state_48347;
(statearr_48351[(11)] = inst_48331);

(statearr_48351[(10)] = inst_48330__$1);

return statearr_48351;
})();
if(inst_48333){
var statearr_48352_48364 = state_48347__$1;
(statearr_48352_48364[(1)] = (4));

} else {
var statearr_48353_48365 = state_48347__$1;
(statearr_48353_48365[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (3))){
var inst_48345 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48347__$1,inst_48345);
} else {
if((state_val_48348 === (4))){
var inst_48330 = (state_48347[(10)]);
var inst_48335 = figwheel.client.file_reloading.reload_js_file.call(null,inst_48330);
var state_48347__$1 = state_48347;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48347__$1,(7),inst_48335);
} else {
if((state_val_48348 === (5))){
var inst_48341 = cljs.core.async.close_BANG_.call(null,out);
var state_48347__$1 = state_48347;
var statearr_48354_48366 = state_48347__$1;
(statearr_48354_48366[(2)] = inst_48341);

(statearr_48354_48366[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (6))){
var inst_48343 = (state_48347[(2)]);
var state_48347__$1 = state_48347;
var statearr_48355_48367 = state_48347__$1;
(statearr_48355_48367[(2)] = inst_48343);

(statearr_48355_48367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48348 === (7))){
var inst_48331 = (state_48347[(11)]);
var inst_48337 = (state_48347[(2)]);
var inst_48338 = cljs.core.async.put_BANG_.call(null,out,inst_48337);
var inst_48324 = inst_48331;
var state_48347__$1 = (function (){var statearr_48356 = state_48347;
(statearr_48356[(7)] = inst_48324);

(statearr_48356[(12)] = inst_48338);

return statearr_48356;
})();
var statearr_48357_48368 = state_48347__$1;
(statearr_48357_48368[(2)] = null);

(statearr_48357_48368[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____0 = (function (){
var statearr_48358 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48358[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__);

(statearr_48358[(1)] = (1));

return statearr_48358;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____1 = (function (state_48347){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_48347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e48359){if((e48359 instanceof Object)){
var ex__34705__auto__ = e48359;
var statearr_48360_48369 = state_48347;
(statearr_48360_48369[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48370 = state_48347;
state_48347 = G__48370;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__ = function(state_48347){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____1.call(this,state_48347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_48361 = f__34869__auto__.call(null);
(statearr_48361[(6)] = c__34868__auto___48362);

return statearr_48361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__48371,opts){
var map__48372 = p__48371;
var map__48372__$1 = (((((!((map__48372 == null))))?(((((map__48372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48372):map__48372);
var eval_body = cljs.core.get.call(null,map__48372__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__48372__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4174__auto__ = eval_body;
if(cljs.core.truth_(and__4174__auto__)){
return typeof eval_body === 'string';
} else {
return and__4174__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e48374){var e = e48374;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__48375_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48375_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__48376){
var vec__48377 = p__48376;
var k = cljs.core.nth.call(null,vec__48377,(0),null);
var v = cljs.core.nth.call(null,vec__48377,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__48380){
var vec__48381 = p__48380;
var k = cljs.core.nth.call(null,vec__48381,(0),null);
var v = cljs.core.nth.call(null,vec__48381,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__48387,p__48388){
var map__48389 = p__48387;
var map__48389__$1 = (((((!((map__48389 == null))))?(((((map__48389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48389.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48389):map__48389);
var opts = map__48389__$1;
var before_jsload = cljs.core.get.call(null,map__48389__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__48389__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__48389__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__48390 = p__48388;
var map__48390__$1 = (((((!((map__48390 == null))))?(((((map__48390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48390):map__48390);
var msg = map__48390__$1;
var files = cljs.core.get.call(null,map__48390__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__48390__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__48390__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34868__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__34869__auto__ = (function (){var switch__34701__auto__ = (function (state_48544){
var state_val_48545 = (state_48544[(1)]);
if((state_val_48545 === (7))){
var inst_48407 = (state_48544[(7)]);
var inst_48404 = (state_48544[(8)]);
var inst_48405 = (state_48544[(9)]);
var inst_48406 = (state_48544[(10)]);
var inst_48412 = cljs.core._nth.call(null,inst_48405,inst_48407);
var inst_48413 = figwheel.client.file_reloading.eval_body.call(null,inst_48412,opts);
var inst_48414 = (inst_48407 + (1));
var tmp48546 = inst_48404;
var tmp48547 = inst_48405;
var tmp48548 = inst_48406;
var inst_48404__$1 = tmp48546;
var inst_48405__$1 = tmp48547;
var inst_48406__$1 = tmp48548;
var inst_48407__$1 = inst_48414;
var state_48544__$1 = (function (){var statearr_48549 = state_48544;
(statearr_48549[(7)] = inst_48407__$1);

(statearr_48549[(11)] = inst_48413);

(statearr_48549[(8)] = inst_48404__$1);

(statearr_48549[(9)] = inst_48405__$1);

(statearr_48549[(10)] = inst_48406__$1);

return statearr_48549;
})();
var statearr_48550_48633 = state_48544__$1;
(statearr_48550_48633[(2)] = null);

(statearr_48550_48633[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (20))){
var inst_48447 = (state_48544[(12)]);
var inst_48455 = figwheel.client.file_reloading.sort_files.call(null,inst_48447);
var state_48544__$1 = state_48544;
var statearr_48551_48634 = state_48544__$1;
(statearr_48551_48634[(2)] = inst_48455);

(statearr_48551_48634[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (27))){
var state_48544__$1 = state_48544;
var statearr_48552_48635 = state_48544__$1;
(statearr_48552_48635[(2)] = null);

(statearr_48552_48635[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (1))){
var inst_48396 = (state_48544[(13)]);
var inst_48393 = before_jsload.call(null,files);
var inst_48394 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_48395 = (function (){return (function (p1__48384_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48384_SHARP_);
});
})();
var inst_48396__$1 = cljs.core.filter.call(null,inst_48395,files);
var inst_48397 = cljs.core.not_empty.call(null,inst_48396__$1);
var state_48544__$1 = (function (){var statearr_48553 = state_48544;
(statearr_48553[(14)] = inst_48394);

(statearr_48553[(15)] = inst_48393);

(statearr_48553[(13)] = inst_48396__$1);

return statearr_48553;
})();
if(cljs.core.truth_(inst_48397)){
var statearr_48554_48636 = state_48544__$1;
(statearr_48554_48636[(1)] = (2));

} else {
var statearr_48555_48637 = state_48544__$1;
(statearr_48555_48637[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (24))){
var state_48544__$1 = state_48544;
var statearr_48556_48638 = state_48544__$1;
(statearr_48556_48638[(2)] = null);

(statearr_48556_48638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (39))){
var inst_48497 = (state_48544[(16)]);
var state_48544__$1 = state_48544;
var statearr_48557_48639 = state_48544__$1;
(statearr_48557_48639[(2)] = inst_48497);

(statearr_48557_48639[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (46))){
var inst_48539 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48558_48640 = state_48544__$1;
(statearr_48558_48640[(2)] = inst_48539);

(statearr_48558_48640[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (4))){
var inst_48441 = (state_48544[(2)]);
var inst_48442 = cljs.core.List.EMPTY;
var inst_48443 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_48442);
var inst_48444 = (function (){return (function (p1__48385_SHARP_){
var and__4174__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__48385_SHARP_);
if(cljs.core.truth_(and__4174__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__48385_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__48385_SHARP_))));
} else {
return and__4174__auto__;
}
});
})();
var inst_48445 = cljs.core.filter.call(null,inst_48444,files);
var inst_48446 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_48447 = cljs.core.concat.call(null,inst_48445,inst_48446);
var state_48544__$1 = (function (){var statearr_48559 = state_48544;
(statearr_48559[(17)] = inst_48443);

(statearr_48559[(18)] = inst_48441);

(statearr_48559[(12)] = inst_48447);

return statearr_48559;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_48560_48641 = state_48544__$1;
(statearr_48560_48641[(1)] = (16));

} else {
var statearr_48561_48642 = state_48544__$1;
(statearr_48561_48642[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (15))){
var inst_48431 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48562_48643 = state_48544__$1;
(statearr_48562_48643[(2)] = inst_48431);

(statearr_48562_48643[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (21))){
var inst_48457 = (state_48544[(19)]);
var inst_48457__$1 = (state_48544[(2)]);
var inst_48458 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_48457__$1);
var state_48544__$1 = (function (){var statearr_48563 = state_48544;
(statearr_48563[(19)] = inst_48457__$1);

return statearr_48563;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48544__$1,(22),inst_48458);
} else {
if((state_val_48545 === (31))){
var inst_48542 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48544__$1,inst_48542);
} else {
if((state_val_48545 === (32))){
var inst_48497 = (state_48544[(16)]);
var inst_48502 = inst_48497.cljs$lang$protocol_mask$partition0$;
var inst_48503 = (inst_48502 & (64));
var inst_48504 = inst_48497.cljs$core$ISeq$;
var inst_48505 = (cljs.core.PROTOCOL_SENTINEL === inst_48504);
var inst_48506 = ((inst_48503) || (inst_48505));
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48506)){
var statearr_48564_48644 = state_48544__$1;
(statearr_48564_48644[(1)] = (35));

} else {
var statearr_48565_48645 = state_48544__$1;
(statearr_48565_48645[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (40))){
var inst_48519 = (state_48544[(20)]);
var inst_48518 = (state_48544[(2)]);
var inst_48519__$1 = cljs.core.get.call(null,inst_48518,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_48520 = cljs.core.get.call(null,inst_48518,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_48521 = cljs.core.not_empty.call(null,inst_48519__$1);
var state_48544__$1 = (function (){var statearr_48566 = state_48544;
(statearr_48566[(20)] = inst_48519__$1);

(statearr_48566[(21)] = inst_48520);

return statearr_48566;
})();
if(cljs.core.truth_(inst_48521)){
var statearr_48567_48646 = state_48544__$1;
(statearr_48567_48646[(1)] = (41));

} else {
var statearr_48568_48647 = state_48544__$1;
(statearr_48568_48647[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (33))){
var state_48544__$1 = state_48544;
var statearr_48569_48648 = state_48544__$1;
(statearr_48569_48648[(2)] = false);

(statearr_48569_48648[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (13))){
var inst_48417 = (state_48544[(22)]);
var inst_48421 = cljs.core.chunk_first.call(null,inst_48417);
var inst_48422 = cljs.core.chunk_rest.call(null,inst_48417);
var inst_48423 = cljs.core.count.call(null,inst_48421);
var inst_48404 = inst_48422;
var inst_48405 = inst_48421;
var inst_48406 = inst_48423;
var inst_48407 = (0);
var state_48544__$1 = (function (){var statearr_48570 = state_48544;
(statearr_48570[(7)] = inst_48407);

(statearr_48570[(8)] = inst_48404);

(statearr_48570[(9)] = inst_48405);

(statearr_48570[(10)] = inst_48406);

return statearr_48570;
})();
var statearr_48571_48649 = state_48544__$1;
(statearr_48571_48649[(2)] = null);

(statearr_48571_48649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (22))){
var inst_48465 = (state_48544[(23)]);
var inst_48457 = (state_48544[(19)]);
var inst_48461 = (state_48544[(24)]);
var inst_48460 = (state_48544[(25)]);
var inst_48460__$1 = (state_48544[(2)]);
var inst_48461__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48460__$1);
var inst_48462 = (function (){var all_files = inst_48457;
var res_SINGLEQUOTE_ = inst_48460__$1;
var res = inst_48461__$1;
return (function (p1__48386_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__48386_SHARP_));
});
})();
var inst_48463 = cljs.core.filter.call(null,inst_48462,inst_48460__$1);
var inst_48464 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_48465__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_48464);
var inst_48466 = cljs.core.not_empty.call(null,inst_48465__$1);
var state_48544__$1 = (function (){var statearr_48572 = state_48544;
(statearr_48572[(23)] = inst_48465__$1);

(statearr_48572[(24)] = inst_48461__$1);

(statearr_48572[(26)] = inst_48463);

(statearr_48572[(25)] = inst_48460__$1);

return statearr_48572;
})();
if(cljs.core.truth_(inst_48466)){
var statearr_48573_48650 = state_48544__$1;
(statearr_48573_48650[(1)] = (23));

} else {
var statearr_48574_48651 = state_48544__$1;
(statearr_48574_48651[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (36))){
var state_48544__$1 = state_48544;
var statearr_48575_48652 = state_48544__$1;
(statearr_48575_48652[(2)] = false);

(statearr_48575_48652[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (41))){
var inst_48519 = (state_48544[(20)]);
var inst_48523 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_48524 = cljs.core.map.call(null,inst_48523,inst_48519);
var inst_48525 = cljs.core.pr_str.call(null,inst_48524);
var inst_48526 = ["figwheel-no-load meta-data: ",inst_48525].join('');
var inst_48527 = figwheel.client.utils.log.call(null,inst_48526);
var state_48544__$1 = state_48544;
var statearr_48576_48653 = state_48544__$1;
(statearr_48576_48653[(2)] = inst_48527);

(statearr_48576_48653[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (43))){
var inst_48520 = (state_48544[(21)]);
var inst_48530 = (state_48544[(2)]);
var inst_48531 = cljs.core.not_empty.call(null,inst_48520);
var state_48544__$1 = (function (){var statearr_48577 = state_48544;
(statearr_48577[(27)] = inst_48530);

return statearr_48577;
})();
if(cljs.core.truth_(inst_48531)){
var statearr_48578_48654 = state_48544__$1;
(statearr_48578_48654[(1)] = (44));

} else {
var statearr_48579_48655 = state_48544__$1;
(statearr_48579_48655[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (29))){
var inst_48465 = (state_48544[(23)]);
var inst_48457 = (state_48544[(19)]);
var inst_48461 = (state_48544[(24)]);
var inst_48463 = (state_48544[(26)]);
var inst_48460 = (state_48544[(25)]);
var inst_48497 = (state_48544[(16)]);
var inst_48493 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_48496 = (function (){var all_files = inst_48457;
var res_SINGLEQUOTE_ = inst_48460;
var res = inst_48461;
var files_not_loaded = inst_48463;
var dependencies_that_loaded = inst_48465;
return (function (p__48495){
var map__48580 = p__48495;
var map__48580__$1 = (((((!((map__48580 == null))))?(((((map__48580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48580):map__48580);
var namespace = cljs.core.get.call(null,map__48580__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_48497__$1 = cljs.core.group_by.call(null,inst_48496,inst_48463);
var inst_48499 = (inst_48497__$1 == null);
var inst_48500 = cljs.core.not.call(null,inst_48499);
var state_48544__$1 = (function (){var statearr_48582 = state_48544;
(statearr_48582[(28)] = inst_48493);

(statearr_48582[(16)] = inst_48497__$1);

return statearr_48582;
})();
if(inst_48500){
var statearr_48583_48656 = state_48544__$1;
(statearr_48583_48656[(1)] = (32));

} else {
var statearr_48584_48657 = state_48544__$1;
(statearr_48584_48657[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (44))){
var inst_48520 = (state_48544[(21)]);
var inst_48533 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48520);
var inst_48534 = cljs.core.pr_str.call(null,inst_48533);
var inst_48535 = ["not required: ",inst_48534].join('');
var inst_48536 = figwheel.client.utils.log.call(null,inst_48535);
var state_48544__$1 = state_48544;
var statearr_48585_48658 = state_48544__$1;
(statearr_48585_48658[(2)] = inst_48536);

(statearr_48585_48658[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (6))){
var inst_48438 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48586_48659 = state_48544__$1;
(statearr_48586_48659[(2)] = inst_48438);

(statearr_48586_48659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (28))){
var inst_48463 = (state_48544[(26)]);
var inst_48490 = (state_48544[(2)]);
var inst_48491 = cljs.core.not_empty.call(null,inst_48463);
var state_48544__$1 = (function (){var statearr_48587 = state_48544;
(statearr_48587[(29)] = inst_48490);

return statearr_48587;
})();
if(cljs.core.truth_(inst_48491)){
var statearr_48588_48660 = state_48544__$1;
(statearr_48588_48660[(1)] = (29));

} else {
var statearr_48589_48661 = state_48544__$1;
(statearr_48589_48661[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (25))){
var inst_48461 = (state_48544[(24)]);
var inst_48477 = (state_48544[(2)]);
var inst_48478 = cljs.core.not_empty.call(null,inst_48461);
var state_48544__$1 = (function (){var statearr_48590 = state_48544;
(statearr_48590[(30)] = inst_48477);

return statearr_48590;
})();
if(cljs.core.truth_(inst_48478)){
var statearr_48591_48662 = state_48544__$1;
(statearr_48591_48662[(1)] = (26));

} else {
var statearr_48592_48663 = state_48544__$1;
(statearr_48592_48663[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (34))){
var inst_48513 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48513)){
var statearr_48593_48664 = state_48544__$1;
(statearr_48593_48664[(1)] = (38));

} else {
var statearr_48594_48665 = state_48544__$1;
(statearr_48594_48665[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (17))){
var state_48544__$1 = state_48544;
var statearr_48595_48666 = state_48544__$1;
(statearr_48595_48666[(2)] = recompile_dependents);

(statearr_48595_48666[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (3))){
var state_48544__$1 = state_48544;
var statearr_48596_48667 = state_48544__$1;
(statearr_48596_48667[(2)] = null);

(statearr_48596_48667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (12))){
var inst_48434 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48597_48668 = state_48544__$1;
(statearr_48597_48668[(2)] = inst_48434);

(statearr_48597_48668[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (2))){
var inst_48396 = (state_48544[(13)]);
var inst_48403 = cljs.core.seq.call(null,inst_48396);
var inst_48404 = inst_48403;
var inst_48405 = null;
var inst_48406 = (0);
var inst_48407 = (0);
var state_48544__$1 = (function (){var statearr_48598 = state_48544;
(statearr_48598[(7)] = inst_48407);

(statearr_48598[(8)] = inst_48404);

(statearr_48598[(9)] = inst_48405);

(statearr_48598[(10)] = inst_48406);

return statearr_48598;
})();
var statearr_48599_48669 = state_48544__$1;
(statearr_48599_48669[(2)] = null);

(statearr_48599_48669[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (23))){
var inst_48465 = (state_48544[(23)]);
var inst_48457 = (state_48544[(19)]);
var inst_48461 = (state_48544[(24)]);
var inst_48463 = (state_48544[(26)]);
var inst_48460 = (state_48544[(25)]);
var inst_48468 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_48470 = (function (){var all_files = inst_48457;
var res_SINGLEQUOTE_ = inst_48460;
var res = inst_48461;
var files_not_loaded = inst_48463;
var dependencies_that_loaded = inst_48465;
return (function (p__48469){
var map__48600 = p__48469;
var map__48600__$1 = (((((!((map__48600 == null))))?(((((map__48600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48600):map__48600);
var request_url = cljs.core.get.call(null,map__48600__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_48471 = cljs.core.reverse.call(null,inst_48465);
var inst_48472 = cljs.core.map.call(null,inst_48470,inst_48471);
var inst_48473 = cljs.core.pr_str.call(null,inst_48472);
var inst_48474 = figwheel.client.utils.log.call(null,inst_48473);
var state_48544__$1 = (function (){var statearr_48602 = state_48544;
(statearr_48602[(31)] = inst_48468);

return statearr_48602;
})();
var statearr_48603_48670 = state_48544__$1;
(statearr_48603_48670[(2)] = inst_48474);

(statearr_48603_48670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (35))){
var state_48544__$1 = state_48544;
var statearr_48604_48671 = state_48544__$1;
(statearr_48604_48671[(2)] = true);

(statearr_48604_48671[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (19))){
var inst_48447 = (state_48544[(12)]);
var inst_48453 = figwheel.client.file_reloading.expand_files.call(null,inst_48447);
var state_48544__$1 = state_48544;
var statearr_48605_48672 = state_48544__$1;
(statearr_48605_48672[(2)] = inst_48453);

(statearr_48605_48672[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (11))){
var state_48544__$1 = state_48544;
var statearr_48606_48673 = state_48544__$1;
(statearr_48606_48673[(2)] = null);

(statearr_48606_48673[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (9))){
var inst_48436 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48607_48674 = state_48544__$1;
(statearr_48607_48674[(2)] = inst_48436);

(statearr_48607_48674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (5))){
var inst_48407 = (state_48544[(7)]);
var inst_48406 = (state_48544[(10)]);
var inst_48409 = (inst_48407 < inst_48406);
var inst_48410 = inst_48409;
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48410)){
var statearr_48608_48675 = state_48544__$1;
(statearr_48608_48675[(1)] = (7));

} else {
var statearr_48609_48676 = state_48544__$1;
(statearr_48609_48676[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (14))){
var inst_48417 = (state_48544[(22)]);
var inst_48426 = cljs.core.first.call(null,inst_48417);
var inst_48427 = figwheel.client.file_reloading.eval_body.call(null,inst_48426,opts);
var inst_48428 = cljs.core.next.call(null,inst_48417);
var inst_48404 = inst_48428;
var inst_48405 = null;
var inst_48406 = (0);
var inst_48407 = (0);
var state_48544__$1 = (function (){var statearr_48610 = state_48544;
(statearr_48610[(32)] = inst_48427);

(statearr_48610[(7)] = inst_48407);

(statearr_48610[(8)] = inst_48404);

(statearr_48610[(9)] = inst_48405);

(statearr_48610[(10)] = inst_48406);

return statearr_48610;
})();
var statearr_48611_48677 = state_48544__$1;
(statearr_48611_48677[(2)] = null);

(statearr_48611_48677[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (45))){
var state_48544__$1 = state_48544;
var statearr_48612_48678 = state_48544__$1;
(statearr_48612_48678[(2)] = null);

(statearr_48612_48678[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (26))){
var inst_48465 = (state_48544[(23)]);
var inst_48457 = (state_48544[(19)]);
var inst_48461 = (state_48544[(24)]);
var inst_48463 = (state_48544[(26)]);
var inst_48460 = (state_48544[(25)]);
var inst_48480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_48482 = (function (){var all_files = inst_48457;
var res_SINGLEQUOTE_ = inst_48460;
var res = inst_48461;
var files_not_loaded = inst_48463;
var dependencies_that_loaded = inst_48465;
return (function (p__48481){
var map__48613 = p__48481;
var map__48613__$1 = (((((!((map__48613 == null))))?(((((map__48613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48613):map__48613);
var namespace = cljs.core.get.call(null,map__48613__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__48613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_48483 = cljs.core.map.call(null,inst_48482,inst_48461);
var inst_48484 = cljs.core.pr_str.call(null,inst_48483);
var inst_48485 = figwheel.client.utils.log.call(null,inst_48484);
var inst_48486 = (function (){var all_files = inst_48457;
var res_SINGLEQUOTE_ = inst_48460;
var res = inst_48461;
var files_not_loaded = inst_48463;
var dependencies_that_loaded = inst_48465;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_48487 = setTimeout(inst_48486,(10));
var state_48544__$1 = (function (){var statearr_48615 = state_48544;
(statearr_48615[(33)] = inst_48485);

(statearr_48615[(34)] = inst_48480);

return statearr_48615;
})();
var statearr_48616_48679 = state_48544__$1;
(statearr_48616_48679[(2)] = inst_48487);

(statearr_48616_48679[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (16))){
var state_48544__$1 = state_48544;
var statearr_48617_48680 = state_48544__$1;
(statearr_48617_48680[(2)] = reload_dependents);

(statearr_48617_48680[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (38))){
var inst_48497 = (state_48544[(16)]);
var inst_48515 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48497);
var state_48544__$1 = state_48544;
var statearr_48618_48681 = state_48544__$1;
(statearr_48618_48681[(2)] = inst_48515);

(statearr_48618_48681[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (30))){
var state_48544__$1 = state_48544;
var statearr_48619_48682 = state_48544__$1;
(statearr_48619_48682[(2)] = null);

(statearr_48619_48682[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (10))){
var inst_48417 = (state_48544[(22)]);
var inst_48419 = cljs.core.chunked_seq_QMARK_.call(null,inst_48417);
var state_48544__$1 = state_48544;
if(inst_48419){
var statearr_48620_48683 = state_48544__$1;
(statearr_48620_48683[(1)] = (13));

} else {
var statearr_48621_48684 = state_48544__$1;
(statearr_48621_48684[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (18))){
var inst_48451 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
if(cljs.core.truth_(inst_48451)){
var statearr_48622_48685 = state_48544__$1;
(statearr_48622_48685[(1)] = (19));

} else {
var statearr_48623_48686 = state_48544__$1;
(statearr_48623_48686[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (42))){
var state_48544__$1 = state_48544;
var statearr_48624_48687 = state_48544__$1;
(statearr_48624_48687[(2)] = null);

(statearr_48624_48687[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (37))){
var inst_48510 = (state_48544[(2)]);
var state_48544__$1 = state_48544;
var statearr_48625_48688 = state_48544__$1;
(statearr_48625_48688[(2)] = inst_48510);

(statearr_48625_48688[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48545 === (8))){
var inst_48417 = (state_48544[(22)]);
var inst_48404 = (state_48544[(8)]);
var inst_48417__$1 = cljs.core.seq.call(null,inst_48404);
var state_48544__$1 = (function (){var statearr_48626 = state_48544;
(statearr_48626[(22)] = inst_48417__$1);

return statearr_48626;
})();
if(inst_48417__$1){
var statearr_48627_48689 = state_48544__$1;
(statearr_48627_48689[(1)] = (10));

} else {
var statearr_48628_48690 = state_48544__$1;
(statearr_48628_48690[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____0 = (function (){
var statearr_48629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48629[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__);

(statearr_48629[(1)] = (1));

return statearr_48629;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____1 = (function (state_48544){
while(true){
var ret_value__34703__auto__ = (function (){try{while(true){
var result__34704__auto__ = switch__34701__auto__.call(null,state_48544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34704__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34704__auto__;
}
break;
}
}catch (e48630){if((e48630 instanceof Object)){
var ex__34705__auto__ = e48630;
var statearr_48631_48691 = state_48544;
(statearr_48631_48691[(5)] = ex__34705__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34703__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48692 = state_48544;
state_48544 = G__48692;
continue;
} else {
return ret_value__34703__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__ = function(state_48544){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____1.call(this,state_48544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34702__auto__;
})()
})();
var state__34870__auto__ = (function (){var statearr_48632 = f__34869__auto__.call(null);
(statearr_48632[(6)] = c__34868__auto__);

return statearr_48632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34870__auto__);
}));

return c__34868__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48695,link){
var map__48696 = p__48695;
var map__48696__$1 = (((((!((map__48696 == null))))?(((((map__48696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48696):map__48696);
var file = cljs.core.get.call(null,map__48696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__48693_SHARP_,p2__48694_SHARP_){
if(cljs.core._EQ_.call(null,p1__48693_SHARP_,p2__48694_SHARP_)){
return p1__48693_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48699){
var map__48700 = p__48699;
var map__48700__$1 = (((((!((map__48700 == null))))?(((((map__48700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48700.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48700):map__48700);
var match_length = cljs.core.get.call(null,map__48700__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48700__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48698_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48698_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48702_SHARP_,p2__48703_SHARP_){
return cljs.core.assoc.call(null,p1__48702_SHARP_,cljs.core.get.call(null,p2__48703_SHARP_,key),p2__48703_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_48704 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48704);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48704);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48705,p__48706){
var map__48707 = p__48705;
var map__48707__$1 = (((((!((map__48707 == null))))?(((((map__48707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48707):map__48707);
var on_cssload = cljs.core.get.call(null,map__48707__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48708 = p__48706;
var map__48708__$1 = (((((!((map__48708 == null))))?(((((map__48708.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48708.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48708):map__48708);
var files_msg = map__48708__$1;
var files = cljs.core.get.call(null,map__48708__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1579787428054
