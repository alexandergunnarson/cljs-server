// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11745_11749 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11746_11750 = null;
var count__11747_11751 = (0);
var i__11748_11752 = (0);
while(true){
if((i__11748_11752 < count__11747_11751)){
var f_11753 = cljs.core._nth.call(null,chunk__11746_11750,i__11748_11752);
cljs.core.println.call(null,"  ",f_11753);

var G__11754 = seq__11745_11749;
var G__11755 = chunk__11746_11750;
var G__11756 = count__11747_11751;
var G__11757 = (i__11748_11752 + (1));
seq__11745_11749 = G__11754;
chunk__11746_11750 = G__11755;
count__11747_11751 = G__11756;
i__11748_11752 = G__11757;
continue;
} else {
var temp__4425__auto___11758 = cljs.core.seq.call(null,seq__11745_11749);
if(temp__4425__auto___11758){
var seq__11745_11759__$1 = temp__4425__auto___11758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11745_11759__$1)){
var c__5472__auto___11760 = cljs.core.chunk_first.call(null,seq__11745_11759__$1);
var G__11761 = cljs.core.chunk_rest.call(null,seq__11745_11759__$1);
var G__11762 = c__5472__auto___11760;
var G__11763 = cljs.core.count.call(null,c__5472__auto___11760);
var G__11764 = (0);
seq__11745_11749 = G__11761;
chunk__11746_11750 = G__11762;
count__11747_11751 = G__11763;
i__11748_11752 = G__11764;
continue;
} else {
var f_11765 = cljs.core.first.call(null,seq__11745_11759__$1);
cljs.core.println.call(null,"  ",f_11765);

var G__11766 = cljs.core.next.call(null,seq__11745_11759__$1);
var G__11767 = null;
var G__11768 = (0);
var G__11769 = (0);
seq__11745_11749 = G__11766;
chunk__11746_11750 = G__11767;
count__11747_11751 = G__11768;
i__11748_11752 = G__11769;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11770 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4669__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11770);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11770)))?cljs.core.second.call(null,arglists_11770):arglists_11770));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__11735 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11736 = null;
var count__11737 = (0);
var i__11738 = (0);
while(true){
if((i__11738 < count__11737)){
var vec__11739 = cljs.core._nth.call(null,chunk__11736,i__11738);
var name = cljs.core.nth.call(null,vec__11739,(0),null);
var map__11740 = cljs.core.nth.call(null,vec__11739,(1),null);
var map__11740__$1 = ((((!((map__11740 == null)))?((((map__11740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11740):map__11740);
var doc = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11740__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11771 = seq__11735;
var G__11772 = chunk__11736;
var G__11773 = count__11737;
var G__11774 = (i__11738 + (1));
seq__11735 = G__11771;
chunk__11736 = G__11772;
count__11737 = G__11773;
i__11738 = G__11774;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11735);
if(temp__4425__auto__){
var seq__11735__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11735__$1)){
var c__5472__auto__ = cljs.core.chunk_first.call(null,seq__11735__$1);
var G__11775 = cljs.core.chunk_rest.call(null,seq__11735__$1);
var G__11776 = c__5472__auto__;
var G__11777 = cljs.core.count.call(null,c__5472__auto__);
var G__11778 = (0);
seq__11735 = G__11775;
chunk__11736 = G__11776;
count__11737 = G__11777;
i__11738 = G__11778;
continue;
} else {
var vec__11742 = cljs.core.first.call(null,seq__11735__$1);
var name = cljs.core.nth.call(null,vec__11742,(0),null);
var map__11743 = cljs.core.nth.call(null,vec__11742,(1),null);
var map__11743__$1 = ((((!((map__11743 == null)))?((((map__11743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11743):map__11743);
var doc = cljs.core.get.call(null,map__11743__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11743__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11779 = cljs.core.next.call(null,seq__11735__$1);
var G__11780 = null;
var G__11781 = (0);
var G__11782 = (0);
seq__11735 = G__11779;
chunk__11736 = G__11780;
count__11737 = G__11781;
i__11738 = G__11782;
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
}
});

//# sourceMappingURL=repl.js.map