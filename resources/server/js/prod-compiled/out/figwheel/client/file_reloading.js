// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4669__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4669__auto__){
return or__4669__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4669__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__10049_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__10049_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__10054 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__10055 = null;
var count__10056 = (0);
var i__10057 = (0);
while(true){
if((i__10057 < count__10056)){
var n = cljs.core._nth.call(null,chunk__10055,i__10057);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__10058 = seq__10054;
var G__10059 = chunk__10055;
var G__10060 = count__10056;
var G__10061 = (i__10057 + (1));
seq__10054 = G__10058;
chunk__10055 = G__10059;
count__10056 = G__10060;
i__10057 = G__10061;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10054);
if(temp__4425__auto__){
var seq__10054__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10054__$1)){
var c__5472__auto__ = cljs.core.chunk_first.call(null,seq__10054__$1);
var G__10062 = cljs.core.chunk_rest.call(null,seq__10054__$1);
var G__10063 = c__5472__auto__;
var G__10064 = cljs.core.count.call(null,c__5472__auto__);
var G__10065 = (0);
seq__10054 = G__10062;
chunk__10055 = G__10063;
count__10056 = G__10064;
i__10057 = G__10065;
continue;
} else {
var n = cljs.core.first.call(null,seq__10054__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__10066 = cljs.core.next.call(null,seq__10054__$1);
var G__10067 = null;
var G__10068 = (0);
var G__10069 = (0);
seq__10054 = G__10066;
chunk__10055 = G__10067;
count__10056 = G__10068;
i__10057 = G__10069;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__10108_10115 = cljs.core.seq.call(null,deps);
var chunk__10109_10116 = null;
var count__10110_10117 = (0);
var i__10111_10118 = (0);
while(true){
if((i__10111_10118 < count__10110_10117)){
var dep_10119 = cljs.core._nth.call(null,chunk__10109_10116,i__10111_10118);
topo_sort_helper_STAR_.call(null,dep_10119,(depth + (1)),state);

var G__10120 = seq__10108_10115;
var G__10121 = chunk__10109_10116;
var G__10122 = count__10110_10117;
var G__10123 = (i__10111_10118 + (1));
seq__10108_10115 = G__10120;
chunk__10109_10116 = G__10121;
count__10110_10117 = G__10122;
i__10111_10118 = G__10123;
continue;
} else {
var temp__4425__auto___10124 = cljs.core.seq.call(null,seq__10108_10115);
if(temp__4425__auto___10124){
var seq__10108_10125__$1 = temp__4425__auto___10124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10108_10125__$1)){
var c__5472__auto___10126 = cljs.core.chunk_first.call(null,seq__10108_10125__$1);
var G__10127 = cljs.core.chunk_rest.call(null,seq__10108_10125__$1);
var G__10128 = c__5472__auto___10126;
var G__10129 = cljs.core.count.call(null,c__5472__auto___10126);
var G__10130 = (0);
seq__10108_10115 = G__10127;
chunk__10109_10116 = G__10128;
count__10110_10117 = G__10129;
i__10111_10118 = G__10130;
continue;
} else {
var dep_10131 = cljs.core.first.call(null,seq__10108_10125__$1);
topo_sort_helper_STAR_.call(null,dep_10131,(depth + (1)),state);

var G__10132 = cljs.core.next.call(null,seq__10108_10125__$1);
var G__10133 = null;
var G__10134 = (0);
var G__10135 = (0);
seq__10108_10115 = G__10132;
chunk__10109_10116 = G__10133;
count__10110_10117 = G__10134;
i__10111_10118 = G__10135;
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
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__10112){
var vec__10114 = p__10112;
var x = cljs.core.nth.call(null,vec__10114,(0),null);
var xs = cljs.core.nthnext.call(null,vec__10114,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__10114,x,xs,get_deps__$1){
return (function (p1__10070_SHARP_){
return clojure.set.difference.call(null,p1__10070_SHARP_,x);
});})(vec__10114,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__10148 = cljs.core.seq.call(null,provides);
var chunk__10149 = null;
var count__10150 = (0);
var i__10151 = (0);
while(true){
if((i__10151 < count__10150)){
var prov = cljs.core._nth.call(null,chunk__10149,i__10151);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10152_10160 = cljs.core.seq.call(null,requires);
var chunk__10153_10161 = null;
var count__10154_10162 = (0);
var i__10155_10163 = (0);
while(true){
if((i__10155_10163 < count__10154_10162)){
var req_10164 = cljs.core._nth.call(null,chunk__10153_10161,i__10155_10163);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10164,prov);

var G__10165 = seq__10152_10160;
var G__10166 = chunk__10153_10161;
var G__10167 = count__10154_10162;
var G__10168 = (i__10155_10163 + (1));
seq__10152_10160 = G__10165;
chunk__10153_10161 = G__10166;
count__10154_10162 = G__10167;
i__10155_10163 = G__10168;
continue;
} else {
var temp__4425__auto___10169 = cljs.core.seq.call(null,seq__10152_10160);
if(temp__4425__auto___10169){
var seq__10152_10170__$1 = temp__4425__auto___10169;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10152_10170__$1)){
var c__5472__auto___10171 = cljs.core.chunk_first.call(null,seq__10152_10170__$1);
var G__10172 = cljs.core.chunk_rest.call(null,seq__10152_10170__$1);
var G__10173 = c__5472__auto___10171;
var G__10174 = cljs.core.count.call(null,c__5472__auto___10171);
var G__10175 = (0);
seq__10152_10160 = G__10172;
chunk__10153_10161 = G__10173;
count__10154_10162 = G__10174;
i__10155_10163 = G__10175;
continue;
} else {
var req_10176 = cljs.core.first.call(null,seq__10152_10170__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10176,prov);

var G__10177 = cljs.core.next.call(null,seq__10152_10170__$1);
var G__10178 = null;
var G__10179 = (0);
var G__10180 = (0);
seq__10152_10160 = G__10177;
chunk__10153_10161 = G__10178;
count__10154_10162 = G__10179;
i__10155_10163 = G__10180;
continue;
}
} else {
}
}
break;
}

var G__10181 = seq__10148;
var G__10182 = chunk__10149;
var G__10183 = count__10150;
var G__10184 = (i__10151 + (1));
seq__10148 = G__10181;
chunk__10149 = G__10182;
count__10150 = G__10183;
i__10151 = G__10184;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10148);
if(temp__4425__auto__){
var seq__10148__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10148__$1)){
var c__5472__auto__ = cljs.core.chunk_first.call(null,seq__10148__$1);
var G__10185 = cljs.core.chunk_rest.call(null,seq__10148__$1);
var G__10186 = c__5472__auto__;
var G__10187 = cljs.core.count.call(null,c__5472__auto__);
var G__10188 = (0);
seq__10148 = G__10185;
chunk__10149 = G__10186;
count__10150 = G__10187;
i__10151 = G__10188;
continue;
} else {
var prov = cljs.core.first.call(null,seq__10148__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__10156_10189 = cljs.core.seq.call(null,requires);
var chunk__10157_10190 = null;
var count__10158_10191 = (0);
var i__10159_10192 = (0);
while(true){
if((i__10159_10192 < count__10158_10191)){
var req_10193 = cljs.core._nth.call(null,chunk__10157_10190,i__10159_10192);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10193,prov);

var G__10194 = seq__10156_10189;
var G__10195 = chunk__10157_10190;
var G__10196 = count__10158_10191;
var G__10197 = (i__10159_10192 + (1));
seq__10156_10189 = G__10194;
chunk__10157_10190 = G__10195;
count__10158_10191 = G__10196;
i__10159_10192 = G__10197;
continue;
} else {
var temp__4425__auto___10198__$1 = cljs.core.seq.call(null,seq__10156_10189);
if(temp__4425__auto___10198__$1){
var seq__10156_10199__$1 = temp__4425__auto___10198__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10156_10199__$1)){
var c__5472__auto___10200 = cljs.core.chunk_first.call(null,seq__10156_10199__$1);
var G__10201 = cljs.core.chunk_rest.call(null,seq__10156_10199__$1);
var G__10202 = c__5472__auto___10200;
var G__10203 = cljs.core.count.call(null,c__5472__auto___10200);
var G__10204 = (0);
seq__10156_10189 = G__10201;
chunk__10157_10190 = G__10202;
count__10158_10191 = G__10203;
i__10159_10192 = G__10204;
continue;
} else {
var req_10205 = cljs.core.first.call(null,seq__10156_10199__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_10205,prov);

var G__10206 = cljs.core.next.call(null,seq__10156_10199__$1);
var G__10207 = null;
var G__10208 = (0);
var G__10209 = (0);
seq__10156_10189 = G__10206;
chunk__10157_10190 = G__10207;
count__10158_10191 = G__10208;
i__10159_10192 = G__10209;
continue;
}
} else {
}
}
break;
}

var G__10210 = cljs.core.next.call(null,seq__10148__$1);
var G__10211 = null;
var G__10212 = (0);
var G__10213 = (0);
seq__10148 = G__10210;
chunk__10149 = G__10211;
count__10150 = G__10212;
i__10151 = G__10213;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__10218_10222 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__10219_10223 = null;
var count__10220_10224 = (0);
var i__10221_10225 = (0);
while(true){
if((i__10221_10225 < count__10220_10224)){
var ns_10226 = cljs.core._nth.call(null,chunk__10219_10223,i__10221_10225);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10226);

var G__10227 = seq__10218_10222;
var G__10228 = chunk__10219_10223;
var G__10229 = count__10220_10224;
var G__10230 = (i__10221_10225 + (1));
seq__10218_10222 = G__10227;
chunk__10219_10223 = G__10228;
count__10220_10224 = G__10229;
i__10221_10225 = G__10230;
continue;
} else {
var temp__4425__auto___10231 = cljs.core.seq.call(null,seq__10218_10222);
if(temp__4425__auto___10231){
var seq__10218_10232__$1 = temp__4425__auto___10231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10218_10232__$1)){
var c__5472__auto___10233 = cljs.core.chunk_first.call(null,seq__10218_10232__$1);
var G__10234 = cljs.core.chunk_rest.call(null,seq__10218_10232__$1);
var G__10235 = c__5472__auto___10233;
var G__10236 = cljs.core.count.call(null,c__5472__auto___10233);
var G__10237 = (0);
seq__10218_10222 = G__10234;
chunk__10219_10223 = G__10235;
count__10220_10224 = G__10236;
i__10221_10225 = G__10237;
continue;
} else {
var ns_10238 = cljs.core.first.call(null,seq__10218_10232__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_10238);

var G__10239 = cljs.core.next.call(null,seq__10218_10232__$1);
var G__10240 = null;
var G__10241 = (0);
var G__10242 = (0);
seq__10218_10222 = G__10239;
chunk__10219_10223 = G__10240;
count__10220_10224 = G__10241;
i__10221_10225 = G__10242;
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
goog.require_figwheel_backup_ = (function (){var or__4669__auto__ = goog.require__;
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__10243__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__10243 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10244__i = 0, G__10244__a = new Array(arguments.length -  0);
while (G__10244__i < G__10244__a.length) {G__10244__a[G__10244__i] = arguments[G__10244__i + 0]; ++G__10244__i;}
  args = new cljs.core.IndexedSeq(G__10244__a,0);
} 
return G__10243__delegate.call(this,args);};
G__10243.cljs$lang$maxFixedArity = 0;
G__10243.cljs$lang$applyTo = (function (arglist__10245){
var args = cljs.core.seq(arglist__10245);
return G__10243__delegate(args);
});
G__10243.cljs$core$IFn$_invoke$arity$variadic = G__10243__delegate;
return G__10243;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__10246 = cljs.core._EQ_;
var expr__10247 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__10246.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__10247))){
return ((function (pred__10246,expr__10247){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e10249){if((e10249 instanceof Error)){
var e = e10249;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e10249;

}
}})());
});
;})(pred__10246,expr__10247))
} else {
if(cljs.core.truth_(pred__10246.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__10247))){
return ((function (pred__10246,expr__10247){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__10246,expr__10247){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__10246,expr__10247))
);

return deferred.addErrback(((function (deferred,pred__10246,expr__10247){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__10246,expr__10247))
);
});
;})(pred__10246,expr__10247))
} else {
return ((function (pred__10246,expr__10247){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__10246,expr__10247))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__10250,callback){
var map__10253 = p__10250;
var map__10253__$1 = ((((!((map__10253 == null)))?((((map__10253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10253):map__10253);
var file_msg = map__10253__$1;
var request_url = cljs.core.get.call(null,map__10253__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__10253,map__10253__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__10253,map__10253__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_10277){
var state_val_10278 = (state_10277[(1)]);
if((state_val_10278 === (7))){
var inst_10273 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
var statearr_10279_10299 = state_10277__$1;
(statearr_10279_10299[(2)] = inst_10273);

(statearr_10279_10299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (1))){
var state_10277__$1 = state_10277;
var statearr_10280_10300 = state_10277__$1;
(statearr_10280_10300[(2)] = null);

(statearr_10280_10300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (4))){
var inst_10257 = (state_10277[(7)]);
var inst_10257__$1 = (state_10277[(2)]);
var state_10277__$1 = (function (){var statearr_10281 = state_10277;
(statearr_10281[(7)] = inst_10257__$1);

return statearr_10281;
})();
if(cljs.core.truth_(inst_10257__$1)){
var statearr_10282_10301 = state_10277__$1;
(statearr_10282_10301[(1)] = (5));

} else {
var statearr_10283_10302 = state_10277__$1;
(statearr_10283_10302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (6))){
var state_10277__$1 = state_10277;
var statearr_10284_10303 = state_10277__$1;
(statearr_10284_10303[(2)] = null);

(statearr_10284_10303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (3))){
var inst_10275 = (state_10277[(2)]);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10277__$1,inst_10275);
} else {
if((state_val_10278 === (2))){
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10277__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_10278 === (11))){
var inst_10269 = (state_10277[(2)]);
var state_10277__$1 = (function (){var statearr_10285 = state_10277;
(statearr_10285[(8)] = inst_10269);

return statearr_10285;
})();
var statearr_10286_10304 = state_10277__$1;
(statearr_10286_10304[(2)] = null);

(statearr_10286_10304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (9))){
var inst_10261 = (state_10277[(9)]);
var inst_10263 = (state_10277[(10)]);
var inst_10265 = inst_10263.call(null,inst_10261);
var state_10277__$1 = state_10277;
var statearr_10287_10305 = state_10277__$1;
(statearr_10287_10305[(2)] = inst_10265);

(statearr_10287_10305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (5))){
var inst_10257 = (state_10277[(7)]);
var inst_10259 = figwheel.client.file_reloading.blocking_load.call(null,inst_10257);
var state_10277__$1 = state_10277;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10277__$1,(8),inst_10259);
} else {
if((state_val_10278 === (10))){
var inst_10261 = (state_10277[(9)]);
var inst_10267 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_10261);
var state_10277__$1 = state_10277;
var statearr_10288_10306 = state_10277__$1;
(statearr_10288_10306[(2)] = inst_10267);

(statearr_10288_10306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10278 === (8))){
var inst_10257 = (state_10277[(7)]);
var inst_10263 = (state_10277[(10)]);
var inst_10261 = (state_10277[(2)]);
var inst_10262 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_10263__$1 = cljs.core.get.call(null,inst_10262,inst_10257);
var state_10277__$1 = (function (){var statearr_10289 = state_10277;
(statearr_10289[(9)] = inst_10261);

(statearr_10289[(10)] = inst_10263__$1);

return statearr_10289;
})();
if(cljs.core.truth_(inst_10263__$1)){
var statearr_10290_10307 = state_10277__$1;
(statearr_10290_10307[(1)] = (9));

} else {
var statearr_10291_10308 = state_10277__$1;
(statearr_10291_10308[(1)] = (10));

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
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__7030__auto__ = null;
var figwheel$client$file_reloading$state_machine__7030__auto____0 = (function (){
var statearr_10295 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10295[(0)] = figwheel$client$file_reloading$state_machine__7030__auto__);

(statearr_10295[(1)] = (1));

return statearr_10295;
});
var figwheel$client$file_reloading$state_machine__7030__auto____1 = (function (state_10277){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_10277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e10296){if((e10296 instanceof Object)){
var ex__7033__auto__ = e10296;
var statearr_10297_10309 = state_10277;
(statearr_10297_10309[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10310 = state_10277;
state_10277 = G__10310;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__7030__auto__ = function(state_10277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__7030__auto____1.call(this,state_10277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__7030__auto____0;
figwheel$client$file_reloading$state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__7030__auto____1;
return figwheel$client$file_reloading$state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_10298 = f__7142__auto__.call(null);
(statearr_10298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_10298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__10311,callback){
var map__10314 = p__10311;
var map__10314__$1 = ((((!((map__10314 == null)))?((((map__10314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10314):map__10314);
var file_msg = map__10314__$1;
var namespace = cljs.core.get.call(null,map__10314__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__10314,map__10314__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__10314,map__10314__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__10316){
var map__10319 = p__10316;
var map__10319__$1 = ((((!((map__10319 == null)))?((((map__10319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10319):map__10319);
var file_msg = map__10319__$1;
var namespace = cljs.core.get.call(null,map__10319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4657__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__4657__auto__){
var or__4669__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
var or__4669__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4669__auto____$1)){
return or__4669__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__4657__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__10321,callback){
var map__10324 = p__10321;
var map__10324__$1 = ((((!((map__10324 == null)))?((((map__10324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10324):map__10324);
var file_msg = map__10324__$1;
var request_url = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__10324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7141__auto___10412 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___10412,out){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___10412,out){
return (function (state_10394){
var state_val_10395 = (state_10394[(1)]);
if((state_val_10395 === (1))){
var inst_10372 = cljs.core.nth.call(null,files,(0),null);
var inst_10373 = cljs.core.nthnext.call(null,files,(1));
var inst_10374 = files;
var state_10394__$1 = (function (){var statearr_10396 = state_10394;
(statearr_10396[(7)] = inst_10374);

(statearr_10396[(10)] = inst_10372);

(statearr_10396[(11)] = inst_10373);

return statearr_10396;
})();
var statearr_10397_10413 = state_10394__$1;
(statearr_10397_10413[(2)] = null);

(statearr_10397_10413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10395 === (2))){
var inst_10374 = (state_10394[(7)]);
var inst_10377 = (state_10394[(8)]);
var inst_10377__$1 = cljs.core.nth.call(null,inst_10374,(0),null);
var inst_10378 = cljs.core.nthnext.call(null,inst_10374,(1));
var inst_10379 = (inst_10377__$1 == null);
var inst_10380 = cljs.core.not.call(null,inst_10379);
var state_10394__$1 = (function (){var statearr_10398 = state_10394;
(statearr_10398[(9)] = inst_10378);

(statearr_10398[(8)] = inst_10377__$1);

return statearr_10398;
})();
if(inst_10380){
var statearr_10399_10414 = state_10394__$1;
(statearr_10399_10414[(1)] = (4));

} else {
var statearr_10400_10415 = state_10394__$1;
(statearr_10400_10415[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10395 === (3))){
var inst_10392 = (state_10394[(2)]);
var state_10394__$1 = state_10394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10394__$1,inst_10392);
} else {
if((state_val_10395 === (4))){
var inst_10377 = (state_10394[(8)]);
var inst_10382 = figwheel.client.file_reloading.reload_js_file.call(null,inst_10377);
var state_10394__$1 = state_10394;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10394__$1,(7),inst_10382);
} else {
if((state_val_10395 === (5))){
var inst_10388 = cljs.core.async.close_BANG_.call(null,out);
var state_10394__$1 = state_10394;
var statearr_10401_10416 = state_10394__$1;
(statearr_10401_10416[(2)] = inst_10388);

(statearr_10401_10416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10395 === (6))){
var inst_10390 = (state_10394[(2)]);
var state_10394__$1 = state_10394;
var statearr_10402_10417 = state_10394__$1;
(statearr_10402_10417[(2)] = inst_10390);

(statearr_10402_10417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10395 === (7))){
var inst_10378 = (state_10394[(9)]);
var inst_10384 = (state_10394[(2)]);
var inst_10385 = cljs.core.async.put_BANG_.call(null,out,inst_10384);
var inst_10374 = inst_10378;
var state_10394__$1 = (function (){var statearr_10403 = state_10394;
(statearr_10403[(7)] = inst_10374);

(statearr_10403[(12)] = inst_10385);

return statearr_10403;
})();
var statearr_10404_10418 = state_10394__$1;
(statearr_10404_10418[(2)] = null);

(statearr_10404_10418[(1)] = (2));


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
});})(c__7141__auto___10412,out))
;
return ((function (switch__7029__auto__,c__7141__auto___10412,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____0 = (function (){
var statearr_10408 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10408[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__);

(statearr_10408[(1)] = (1));

return statearr_10408;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____1 = (function (state_10394){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_10394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e10409){if((e10409 instanceof Object)){
var ex__7033__auto__ = e10409;
var statearr_10410_10419 = state_10394;
(statearr_10410_10419[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10409;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10420 = state_10394;
state_10394 = G__10420;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__ = function(state_10394){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____1.call(this,state_10394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___10412,out))
})();
var state__7143__auto__ = (function (){var statearr_10411 = f__7142__auto__.call(null);
(statearr_10411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___10412);

return statearr_10411;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___10412,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__10421,opts){
var map__10425 = p__10421;
var map__10425__$1 = ((((!((map__10425 == null)))?((((map__10425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10425):map__10425);
var eval_body__$1 = cljs.core.get.call(null,map__10425__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__10425__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4657__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4657__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4657__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e10427){var e = e10427;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__10428_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10428_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__10433){
var vec__10434 = p__10433;
var k = cljs.core.nth.call(null,vec__10434,(0),null);
var v = cljs.core.nth.call(null,vec__10434,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__10435){
var vec__10436 = p__10435;
var k = cljs.core.nth.call(null,vec__10436,(0),null);
var v = cljs.core.nth.call(null,vec__10436,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__10440,p__10441){
var map__10688 = p__10440;
var map__10688__$1 = ((((!((map__10688 == null)))?((((map__10688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10688):map__10688);
var opts = map__10688__$1;
var before_jsload = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__10688__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__10689 = p__10441;
var map__10689__$1 = ((((!((map__10689 == null)))?((((map__10689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10689):map__10689);
var msg = map__10689__$1;
var files = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__10689__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_10842){
var state_val_10843 = (state_10842[(1)]);
if((state_val_10843 === (7))){
var inst_10706 = (state_10842[(7)]);
var inst_10705 = (state_10842[(8)]);
var inst_10703 = (state_10842[(9)]);
var inst_10704 = (state_10842[(10)]);
var inst_10711 = cljs.core._nth.call(null,inst_10704,inst_10706);
var inst_10712 = figwheel.client.file_reloading.eval_body.call(null,inst_10711,opts);
var inst_10713 = (inst_10706 + (1));
var tmp10844 = inst_10705;
var tmp10845 = inst_10703;
var tmp10846 = inst_10704;
var inst_10703__$1 = tmp10845;
var inst_10704__$1 = tmp10846;
var inst_10705__$1 = tmp10844;
var inst_10706__$1 = inst_10713;
var state_10842__$1 = (function (){var statearr_10847 = state_10842;
(statearr_10847[(7)] = inst_10706__$1);

(statearr_10847[(8)] = inst_10705__$1);

(statearr_10847[(9)] = inst_10703__$1);

(statearr_10847[(14)] = inst_10712);

(statearr_10847[(10)] = inst_10704__$1);

return statearr_10847;
})();
var statearr_10848_10934 = state_10842__$1;
(statearr_10848_10934[(2)] = null);

(statearr_10848_10934[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (20))){
var inst_10746 = (state_10842[(11)]);
var inst_10754 = figwheel.client.file_reloading.sort_files.call(null,inst_10746);
var state_10842__$1 = state_10842;
var statearr_10849_10935 = state_10842__$1;
(statearr_10849_10935[(2)] = inst_10754);

(statearr_10849_10935[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (27))){
var state_10842__$1 = state_10842;
var statearr_10850_10936 = state_10842__$1;
(statearr_10850_10936[(2)] = null);

(statearr_10850_10936[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (1))){
var inst_10695 = (state_10842[(12)]);
var inst_10692 = before_jsload.call(null,files);
var inst_10693 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_10694 = (function (){return ((function (inst_10695,inst_10692,inst_10693,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10437_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10437_SHARP_);
});
;})(inst_10695,inst_10692,inst_10693,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10695__$1 = cljs.core.filter.call(null,inst_10694,files);
var inst_10696 = cljs.core.not_empty.call(null,inst_10695__$1);
var state_10842__$1 = (function (){var statearr_10851 = state_10842;
(statearr_10851[(13)] = inst_10693);

(statearr_10851[(16)] = inst_10692);

(statearr_10851[(12)] = inst_10695__$1);

return statearr_10851;
})();
if(cljs.core.truth_(inst_10696)){
var statearr_10852_10937 = state_10842__$1;
(statearr_10852_10937[(1)] = (2));

} else {
var statearr_10853_10938 = state_10842__$1;
(statearr_10853_10938[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (24))){
var state_10842__$1 = state_10842;
var statearr_10854_10939 = state_10842__$1;
(statearr_10854_10939[(2)] = null);

(statearr_10854_10939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (39))){
var inst_10796 = (state_10842[(15)]);
var state_10842__$1 = state_10842;
var statearr_10855_10940 = state_10842__$1;
(statearr_10855_10940[(2)] = inst_10796);

(statearr_10855_10940[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (46))){
var inst_10837 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10856_10941 = state_10842__$1;
(statearr_10856_10941[(2)] = inst_10837);

(statearr_10856_10941[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (4))){
var inst_10740 = (state_10842[(2)]);
var inst_10741 = cljs.core.List.EMPTY;
var inst_10742 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_10741);
var inst_10743 = (function (){return ((function (inst_10740,inst_10741,inst_10742,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10438_SHARP_){
var and__4657__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__10438_SHARP_);
if(cljs.core.truth_(and__4657__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__10438_SHARP_));
} else {
return and__4657__auto__;
}
});
;})(inst_10740,inst_10741,inst_10742,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10744 = cljs.core.filter.call(null,inst_10743,files);
var inst_10745 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_10746 = cljs.core.concat.call(null,inst_10744,inst_10745);
var state_10842__$1 = (function (){var statearr_10857 = state_10842;
(statearr_10857[(17)] = inst_10742);

(statearr_10857[(11)] = inst_10746);

(statearr_10857[(19)] = inst_10740);

return statearr_10857;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_10858_10942 = state_10842__$1;
(statearr_10858_10942[(1)] = (16));

} else {
var statearr_10859_10943 = state_10842__$1;
(statearr_10859_10943[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (15))){
var inst_10730 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10860_10944 = state_10842__$1;
(statearr_10860_10944[(2)] = inst_10730);

(statearr_10860_10944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (21))){
var inst_10756 = (state_10842[(18)]);
var inst_10756__$1 = (state_10842[(2)]);
var inst_10757 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_10756__$1);
var state_10842__$1 = (function (){var statearr_10861 = state_10842;
(statearr_10861[(18)] = inst_10756__$1);

return statearr_10861;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10842__$1,(22),inst_10757);
} else {
if((state_val_10843 === (31))){
var inst_10840 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10842__$1,inst_10840);
} else {
if((state_val_10843 === (32))){
var inst_10796 = (state_10842[(15)]);
var inst_10801 = inst_10796.cljs$lang$protocol_mask$partition0$;
var inst_10802 = (inst_10801 & (64));
var inst_10803 = inst_10796.cljs$core$ISeq$;
var inst_10804 = (inst_10802) || (inst_10803);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10804)){
var statearr_10862_10945 = state_10842__$1;
(statearr_10862_10945[(1)] = (35));

} else {
var statearr_10863_10946 = state_10842__$1;
(statearr_10863_10946[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (40))){
var inst_10817 = (state_10842[(20)]);
var inst_10816 = (state_10842[(2)]);
var inst_10817__$1 = cljs.core.get.call(null,inst_10816,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_10818 = cljs.core.get.call(null,inst_10816,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_10819 = cljs.core.not_empty.call(null,inst_10817__$1);
var state_10842__$1 = (function (){var statearr_10864 = state_10842;
(statearr_10864[(21)] = inst_10818);

(statearr_10864[(20)] = inst_10817__$1);

return statearr_10864;
})();
if(cljs.core.truth_(inst_10819)){
var statearr_10865_10947 = state_10842__$1;
(statearr_10865_10947[(1)] = (41));

} else {
var statearr_10866_10948 = state_10842__$1;
(statearr_10866_10948[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (33))){
var state_10842__$1 = state_10842;
var statearr_10867_10949 = state_10842__$1;
(statearr_10867_10949[(2)] = false);

(statearr_10867_10949[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (13))){
var inst_10716 = (state_10842[(22)]);
var inst_10720 = cljs.core.chunk_first.call(null,inst_10716);
var inst_10721 = cljs.core.chunk_rest.call(null,inst_10716);
var inst_10722 = cljs.core.count.call(null,inst_10720);
var inst_10703 = inst_10721;
var inst_10704 = inst_10720;
var inst_10705 = inst_10722;
var inst_10706 = (0);
var state_10842__$1 = (function (){var statearr_10868 = state_10842;
(statearr_10868[(7)] = inst_10706);

(statearr_10868[(8)] = inst_10705);

(statearr_10868[(9)] = inst_10703);

(statearr_10868[(10)] = inst_10704);

return statearr_10868;
})();
var statearr_10869_10950 = state_10842__$1;
(statearr_10869_10950[(2)] = null);

(statearr_10869_10950[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (22))){
var inst_10764 = (state_10842[(23)]);
var inst_10760 = (state_10842[(24)]);
var inst_10756 = (state_10842[(18)]);
var inst_10759 = (state_10842[(25)]);
var inst_10759__$1 = (state_10842[(2)]);
var inst_10760__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10759__$1);
var inst_10761 = (function (){var all_files = inst_10756;
var res_SINGLEQUOTE_ = inst_10759__$1;
var res = inst_10760__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_10764,inst_10760,inst_10756,inst_10759,inst_10759__$1,inst_10760__$1,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__10439_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__10439_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_10764,inst_10760,inst_10756,inst_10759,inst_10759__$1,inst_10760__$1,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10762 = cljs.core.filter.call(null,inst_10761,inst_10759__$1);
var inst_10763 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_10764__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_10763);
var inst_10765 = cljs.core.not_empty.call(null,inst_10764__$1);
var state_10842__$1 = (function (){var statearr_10870 = state_10842;
(statearr_10870[(23)] = inst_10764__$1);

(statearr_10870[(24)] = inst_10760__$1);

(statearr_10870[(26)] = inst_10762);

(statearr_10870[(25)] = inst_10759__$1);

return statearr_10870;
})();
if(cljs.core.truth_(inst_10765)){
var statearr_10871_10951 = state_10842__$1;
(statearr_10871_10951[(1)] = (23));

} else {
var statearr_10872_10952 = state_10842__$1;
(statearr_10872_10952[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (36))){
var state_10842__$1 = state_10842;
var statearr_10873_10953 = state_10842__$1;
(statearr_10873_10953[(2)] = false);

(statearr_10873_10953[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (41))){
var inst_10817 = (state_10842[(20)]);
var inst_10821 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_10822 = cljs.core.map.call(null,inst_10821,inst_10817);
var inst_10823 = cljs.core.pr_str.call(null,inst_10822);
var inst_10824 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_10823)].join('');
var inst_10825 = figwheel.client.utils.log.call(null,inst_10824);
var state_10842__$1 = state_10842;
var statearr_10874_10954 = state_10842__$1;
(statearr_10874_10954[(2)] = inst_10825);

(statearr_10874_10954[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (43))){
var inst_10818 = (state_10842[(21)]);
var inst_10828 = (state_10842[(2)]);
var inst_10829 = cljs.core.not_empty.call(null,inst_10818);
var state_10842__$1 = (function (){var statearr_10875 = state_10842;
(statearr_10875[(27)] = inst_10828);

return statearr_10875;
})();
if(cljs.core.truth_(inst_10829)){
var statearr_10876_10955 = state_10842__$1;
(statearr_10876_10955[(1)] = (44));

} else {
var statearr_10877_10956 = state_10842__$1;
(statearr_10877_10956[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (29))){
var inst_10764 = (state_10842[(23)]);
var inst_10760 = (state_10842[(24)]);
var inst_10762 = (state_10842[(26)]);
var inst_10796 = (state_10842[(15)]);
var inst_10756 = (state_10842[(18)]);
var inst_10759 = (state_10842[(25)]);
var inst_10792 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_10795 = (function (){var all_files = inst_10756;
var res_SINGLEQUOTE_ = inst_10759;
var res = inst_10760;
var files_not_loaded = inst_10762;
var dependencies_that_loaded = inst_10764;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10796,inst_10756,inst_10759,inst_10792,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10794){
var map__10878 = p__10794;
var map__10878__$1 = ((((!((map__10878 == null)))?((((map__10878.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10878.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10878):map__10878);
var namespace = cljs.core.get.call(null,map__10878__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10796,inst_10756,inst_10759,inst_10792,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10796__$1 = cljs.core.group_by.call(null,inst_10795,inst_10762);
var inst_10798 = (inst_10796__$1 == null);
var inst_10799 = cljs.core.not.call(null,inst_10798);
var state_10842__$1 = (function (){var statearr_10880 = state_10842;
(statearr_10880[(28)] = inst_10792);

(statearr_10880[(15)] = inst_10796__$1);

return statearr_10880;
})();
if(inst_10799){
var statearr_10881_10957 = state_10842__$1;
(statearr_10881_10957[(1)] = (32));

} else {
var statearr_10882_10958 = state_10842__$1;
(statearr_10882_10958[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (44))){
var inst_10818 = (state_10842[(21)]);
var inst_10831 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_10818);
var inst_10832 = cljs.core.pr_str.call(null,inst_10831);
var inst_10833 = [cljs.core.str("not required: "),cljs.core.str(inst_10832)].join('');
var inst_10834 = figwheel.client.utils.log.call(null,inst_10833);
var state_10842__$1 = state_10842;
var statearr_10883_10959 = state_10842__$1;
(statearr_10883_10959[(2)] = inst_10834);

(statearr_10883_10959[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (6))){
var inst_10737 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10884_10960 = state_10842__$1;
(statearr_10884_10960[(2)] = inst_10737);

(statearr_10884_10960[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (28))){
var inst_10762 = (state_10842[(26)]);
var inst_10789 = (state_10842[(2)]);
var inst_10790 = cljs.core.not_empty.call(null,inst_10762);
var state_10842__$1 = (function (){var statearr_10885 = state_10842;
(statearr_10885[(29)] = inst_10789);

return statearr_10885;
})();
if(cljs.core.truth_(inst_10790)){
var statearr_10886_10961 = state_10842__$1;
(statearr_10886_10961[(1)] = (29));

} else {
var statearr_10887_10962 = state_10842__$1;
(statearr_10887_10962[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (25))){
var inst_10760 = (state_10842[(24)]);
var inst_10776 = (state_10842[(2)]);
var inst_10777 = cljs.core.not_empty.call(null,inst_10760);
var state_10842__$1 = (function (){var statearr_10888 = state_10842;
(statearr_10888[(30)] = inst_10776);

return statearr_10888;
})();
if(cljs.core.truth_(inst_10777)){
var statearr_10889_10963 = state_10842__$1;
(statearr_10889_10963[(1)] = (26));

} else {
var statearr_10890_10964 = state_10842__$1;
(statearr_10890_10964[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (34))){
var inst_10811 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10811)){
var statearr_10891_10965 = state_10842__$1;
(statearr_10891_10965[(1)] = (38));

} else {
var statearr_10892_10966 = state_10842__$1;
(statearr_10892_10966[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (17))){
var state_10842__$1 = state_10842;
var statearr_10893_10967 = state_10842__$1;
(statearr_10893_10967[(2)] = recompile_dependents);

(statearr_10893_10967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (3))){
var state_10842__$1 = state_10842;
var statearr_10894_10968 = state_10842__$1;
(statearr_10894_10968[(2)] = null);

(statearr_10894_10968[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (12))){
var inst_10733 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10895_10969 = state_10842__$1;
(statearr_10895_10969[(2)] = inst_10733);

(statearr_10895_10969[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (2))){
var inst_10695 = (state_10842[(12)]);
var inst_10702 = cljs.core.seq.call(null,inst_10695);
var inst_10703 = inst_10702;
var inst_10704 = null;
var inst_10705 = (0);
var inst_10706 = (0);
var state_10842__$1 = (function (){var statearr_10896 = state_10842;
(statearr_10896[(7)] = inst_10706);

(statearr_10896[(8)] = inst_10705);

(statearr_10896[(9)] = inst_10703);

(statearr_10896[(10)] = inst_10704);

return statearr_10896;
})();
var statearr_10897_10970 = state_10842__$1;
(statearr_10897_10970[(2)] = null);

(statearr_10897_10970[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (23))){
var inst_10764 = (state_10842[(23)]);
var inst_10760 = (state_10842[(24)]);
var inst_10762 = (state_10842[(26)]);
var inst_10756 = (state_10842[(18)]);
var inst_10759 = (state_10842[(25)]);
var inst_10767 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_10769 = (function (){var all_files = inst_10756;
var res_SINGLEQUOTE_ = inst_10759;
var res = inst_10760;
var files_not_loaded = inst_10762;
var dependencies_that_loaded = inst_10764;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10767,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10768){
var map__10898 = p__10768;
var map__10898__$1 = ((((!((map__10898 == null)))?((((map__10898.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10898.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10898):map__10898);
var request_url = cljs.core.get.call(null,map__10898__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10767,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10770 = cljs.core.reverse.call(null,inst_10764);
var inst_10771 = cljs.core.map.call(null,inst_10769,inst_10770);
var inst_10772 = cljs.core.pr_str.call(null,inst_10771);
var inst_10773 = figwheel.client.utils.log.call(null,inst_10772);
var state_10842__$1 = (function (){var statearr_10900 = state_10842;
(statearr_10900[(31)] = inst_10767);

return statearr_10900;
})();
var statearr_10901_10971 = state_10842__$1;
(statearr_10901_10971[(2)] = inst_10773);

(statearr_10901_10971[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (35))){
var state_10842__$1 = state_10842;
var statearr_10902_10972 = state_10842__$1;
(statearr_10902_10972[(2)] = true);

(statearr_10902_10972[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (19))){
var inst_10746 = (state_10842[(11)]);
var inst_10752 = figwheel.client.file_reloading.expand_files.call(null,inst_10746);
var state_10842__$1 = state_10842;
var statearr_10903_10973 = state_10842__$1;
(statearr_10903_10973[(2)] = inst_10752);

(statearr_10903_10973[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (11))){
var state_10842__$1 = state_10842;
var statearr_10904_10974 = state_10842__$1;
(statearr_10904_10974[(2)] = null);

(statearr_10904_10974[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (9))){
var inst_10735 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10905_10975 = state_10842__$1;
(statearr_10905_10975[(2)] = inst_10735);

(statearr_10905_10975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (5))){
var inst_10706 = (state_10842[(7)]);
var inst_10705 = (state_10842[(8)]);
var inst_10708 = (inst_10706 < inst_10705);
var inst_10709 = inst_10708;
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10709)){
var statearr_10906_10976 = state_10842__$1;
(statearr_10906_10976[(1)] = (7));

} else {
var statearr_10907_10977 = state_10842__$1;
(statearr_10907_10977[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (14))){
var inst_10716 = (state_10842[(22)]);
var inst_10725 = cljs.core.first.call(null,inst_10716);
var inst_10726 = figwheel.client.file_reloading.eval_body.call(null,inst_10725,opts);
var inst_10727 = cljs.core.next.call(null,inst_10716);
var inst_10703 = inst_10727;
var inst_10704 = null;
var inst_10705 = (0);
var inst_10706 = (0);
var state_10842__$1 = (function (){var statearr_10908 = state_10842;
(statearr_10908[(32)] = inst_10726);

(statearr_10908[(7)] = inst_10706);

(statearr_10908[(8)] = inst_10705);

(statearr_10908[(9)] = inst_10703);

(statearr_10908[(10)] = inst_10704);

return statearr_10908;
})();
var statearr_10909_10978 = state_10842__$1;
(statearr_10909_10978[(2)] = null);

(statearr_10909_10978[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (45))){
var state_10842__$1 = state_10842;
var statearr_10910_10979 = state_10842__$1;
(statearr_10910_10979[(2)] = null);

(statearr_10910_10979[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (26))){
var inst_10764 = (state_10842[(23)]);
var inst_10760 = (state_10842[(24)]);
var inst_10762 = (state_10842[(26)]);
var inst_10756 = (state_10842[(18)]);
var inst_10759 = (state_10842[(25)]);
var inst_10779 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_10781 = (function (){var all_files = inst_10756;
var res_SINGLEQUOTE_ = inst_10759;
var res = inst_10760;
var files_not_loaded = inst_10762;
var dependencies_that_loaded = inst_10764;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10779,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__10780){
var map__10911 = p__10780;
var map__10911__$1 = ((((!((map__10911 == null)))?((((map__10911.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10911.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10911):map__10911);
var namespace = cljs.core.get.call(null,map__10911__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__10911__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10779,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10782 = cljs.core.map.call(null,inst_10781,inst_10760);
var inst_10783 = cljs.core.pr_str.call(null,inst_10782);
var inst_10784 = figwheel.client.utils.log.call(null,inst_10783);
var inst_10785 = (function (){var all_files = inst_10756;
var res_SINGLEQUOTE_ = inst_10759;
var res = inst_10760;
var files_not_loaded = inst_10762;
var dependencies_that_loaded = inst_10764;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10779,inst_10781,inst_10782,inst_10783,inst_10784,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_10764,inst_10760,inst_10762,inst_10756,inst_10759,inst_10779,inst_10781,inst_10782,inst_10783,inst_10784,state_val_10843,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_10786 = setTimeout(inst_10785,(10));
var state_10842__$1 = (function (){var statearr_10913 = state_10842;
(statearr_10913[(33)] = inst_10779);

(statearr_10913[(34)] = inst_10784);

return statearr_10913;
})();
var statearr_10914_10980 = state_10842__$1;
(statearr_10914_10980[(2)] = inst_10786);

(statearr_10914_10980[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (16))){
var state_10842__$1 = state_10842;
var statearr_10915_10981 = state_10842__$1;
(statearr_10915_10981[(2)] = reload_dependents);

(statearr_10915_10981[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (38))){
var inst_10796 = (state_10842[(15)]);
var inst_10813 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10796);
var state_10842__$1 = state_10842;
var statearr_10916_10982 = state_10842__$1;
(statearr_10916_10982[(2)] = inst_10813);

(statearr_10916_10982[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (30))){
var state_10842__$1 = state_10842;
var statearr_10917_10983 = state_10842__$1;
(statearr_10917_10983[(2)] = null);

(statearr_10917_10983[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (10))){
var inst_10716 = (state_10842[(22)]);
var inst_10718 = cljs.core.chunked_seq_QMARK_.call(null,inst_10716);
var state_10842__$1 = state_10842;
if(inst_10718){
var statearr_10918_10984 = state_10842__$1;
(statearr_10918_10984[(1)] = (13));

} else {
var statearr_10919_10985 = state_10842__$1;
(statearr_10919_10985[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (18))){
var inst_10750 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
if(cljs.core.truth_(inst_10750)){
var statearr_10920_10986 = state_10842__$1;
(statearr_10920_10986[(1)] = (19));

} else {
var statearr_10921_10987 = state_10842__$1;
(statearr_10921_10987[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (42))){
var state_10842__$1 = state_10842;
var statearr_10922_10988 = state_10842__$1;
(statearr_10922_10988[(2)] = null);

(statearr_10922_10988[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (37))){
var inst_10808 = (state_10842[(2)]);
var state_10842__$1 = state_10842;
var statearr_10923_10989 = state_10842__$1;
(statearr_10923_10989[(2)] = inst_10808);

(statearr_10923_10989[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10843 === (8))){
var inst_10716 = (state_10842[(22)]);
var inst_10703 = (state_10842[(9)]);
var inst_10716__$1 = cljs.core.seq.call(null,inst_10703);
var state_10842__$1 = (function (){var statearr_10924 = state_10842;
(statearr_10924[(22)] = inst_10716__$1);

return statearr_10924;
})();
if(inst_10716__$1){
var statearr_10925_10990 = state_10842__$1;
(statearr_10925_10990[(1)] = (10));

} else {
var statearr_10926_10991 = state_10842__$1;
(statearr_10926_10991[(1)] = (11));

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
});})(c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__7029__auto__,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____0 = (function (){
var statearr_10930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10930[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__);

(statearr_10930[(1)] = (1));

return statearr_10930;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____1 = (function (state_10842){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_10842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e10931){if((e10931 instanceof Object)){
var ex__7033__auto__ = e10931;
var statearr_10932_10992 = state_10842;
(statearr_10932_10992[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10993 = state_10842;
state_10842 = G__10993;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__ = function(state_10842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____1.call(this,state_10842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__7143__auto__ = (function (){var statearr_10933 = f__7142__auto__.call(null);
(statearr_10933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_10933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__,map__10688,map__10688__$1,opts,before_jsload,on_jsload,reload_dependents,map__10689,map__10689__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__7141__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__10996,link){
var map__10999 = p__10996;
var map__10999__$1 = ((((!((map__10999 == null)))?((((map__10999.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10999.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10999):map__10999);
var file = cljs.core.get.call(null,map__10999__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__10999,map__10999__$1,file){
return (function (p1__10994_SHARP_,p2__10995_SHARP_){
if(cljs.core._EQ_.call(null,p1__10994_SHARP_,p2__10995_SHARP_)){
return p1__10994_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__10999,map__10999__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__11005){
var map__11006 = p__11005;
var map__11006__$1 = ((((!((map__11006 == null)))?((((map__11006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11006):map__11006);
var match_length = cljs.core.get.call(null,map__11006__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__11006__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__11001_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__11001_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args11008 = [];
var len__5727__auto___11011 = arguments.length;
var i__5728__auto___11012 = (0);
while(true){
if((i__5728__auto___11012 < len__5727__auto___11011)){
args11008.push((arguments[i__5728__auto___11012]));

var G__11013 = (i__5728__auto___11012 + (1));
i__5728__auto___11012 = G__11013;
continue;
} else {
}
break;
}

var G__11010 = args11008.length;
switch (G__11010) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11008.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__11015_SHARP_,p2__11016_SHARP_){
return cljs.core.assoc.call(null,p1__11015_SHARP_,cljs.core.get.call(null,p2__11016_SHARP_,key),p2__11016_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__11017){
var map__11020 = p__11017;
var map__11020__$1 = ((((!((map__11020 == null)))?((((map__11020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11020):map__11020);
var f_data = map__11020__$1;
var file = cljs.core.get.call(null,map__11020__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__11022,files_msg){
var map__11029 = p__11022;
var map__11029__$1 = ((((!((map__11029 == null)))?((((map__11029.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11029.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11029):map__11029);
var opts = map__11029__$1;
var on_cssload = cljs.core.get.call(null,map__11029__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__11031_11035 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__11032_11036 = null;
var count__11033_11037 = (0);
var i__11034_11038 = (0);
while(true){
if((i__11034_11038 < count__11033_11037)){
var f_11039 = cljs.core._nth.call(null,chunk__11032_11036,i__11034_11038);
figwheel.client.file_reloading.reload_css_file.call(null,f_11039);

var G__11040 = seq__11031_11035;
var G__11041 = chunk__11032_11036;
var G__11042 = count__11033_11037;
var G__11043 = (i__11034_11038 + (1));
seq__11031_11035 = G__11040;
chunk__11032_11036 = G__11041;
count__11033_11037 = G__11042;
i__11034_11038 = G__11043;
continue;
} else {
var temp__4425__auto___11044 = cljs.core.seq.call(null,seq__11031_11035);
if(temp__4425__auto___11044){
var seq__11031_11045__$1 = temp__4425__auto___11044;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11031_11045__$1)){
var c__5472__auto___11046 = cljs.core.chunk_first.call(null,seq__11031_11045__$1);
var G__11047 = cljs.core.chunk_rest.call(null,seq__11031_11045__$1);
var G__11048 = c__5472__auto___11046;
var G__11049 = cljs.core.count.call(null,c__5472__auto___11046);
var G__11050 = (0);
seq__11031_11035 = G__11047;
chunk__11032_11036 = G__11048;
count__11033_11037 = G__11049;
i__11034_11038 = G__11050;
continue;
} else {
var f_11051 = cljs.core.first.call(null,seq__11031_11045__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_11051);

var G__11052 = cljs.core.next.call(null,seq__11031_11045__$1);
var G__11053 = null;
var G__11054 = (0);
var G__11055 = (0);
seq__11031_11035 = G__11052;
chunk__11032_11036 = G__11053;
count__11033_11037 = G__11054;
i__11034_11038 = G__11055;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__11029,map__11029__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__11029,map__11029__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map