// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__5734__auto__ = [];
var len__5727__auto___11920 = arguments.length;
var i__5728__auto___11921 = (0);
while(true){
if((i__5728__auto___11921 < len__5727__auto___11920)){
args__5734__auto__.push((arguments[i__5728__auto___11921]));

var G__11922 = (i__5728__auto___11921 + (1));
i__5728__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var argseq__5735__auto__ = ((((2) < args__5734__auto__.length))?(new cljs.core.IndexedSeq(args__5734__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5735__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__11912_11923 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__11913_11924 = null;
var count__11914_11925 = (0);
var i__11915_11926 = (0);
while(true){
if((i__11915_11926 < count__11914_11925)){
var k_11927 = cljs.core._nth.call(null,chunk__11913_11924,i__11915_11926);
e.setAttribute(cljs.core.name.call(null,k_11927),cljs.core.get.call(null,attrs,k_11927));

var G__11928 = seq__11912_11923;
var G__11929 = chunk__11913_11924;
var G__11930 = count__11914_11925;
var G__11931 = (i__11915_11926 + (1));
seq__11912_11923 = G__11928;
chunk__11913_11924 = G__11929;
count__11914_11925 = G__11930;
i__11915_11926 = G__11931;
continue;
} else {
var temp__4425__auto___11932 = cljs.core.seq.call(null,seq__11912_11923);
if(temp__4425__auto___11932){
var seq__11912_11933__$1 = temp__4425__auto___11932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11912_11933__$1)){
var c__5472__auto___11934 = cljs.core.chunk_first.call(null,seq__11912_11933__$1);
var G__11935 = cljs.core.chunk_rest.call(null,seq__11912_11933__$1);
var G__11936 = c__5472__auto___11934;
var G__11937 = cljs.core.count.call(null,c__5472__auto___11934);
var G__11938 = (0);
seq__11912_11923 = G__11935;
chunk__11913_11924 = G__11936;
count__11914_11925 = G__11937;
i__11915_11926 = G__11938;
continue;
} else {
var k_11939 = cljs.core.first.call(null,seq__11912_11933__$1);
e.setAttribute(cljs.core.name.call(null,k_11939),cljs.core.get.call(null,attrs,k_11939));

var G__11940 = cljs.core.next.call(null,seq__11912_11933__$1);
var G__11941 = null;
var G__11942 = (0);
var G__11943 = (0);
seq__11912_11923 = G__11940;
chunk__11913_11924 = G__11941;
count__11914_11925 = G__11942;
i__11915_11926 = G__11943;
continue;
}
} else {
}
}
break;
}

var seq__11916_11944 = cljs.core.seq.call(null,children);
var chunk__11917_11945 = null;
var count__11918_11946 = (0);
var i__11919_11947 = (0);
while(true){
if((i__11919_11947 < count__11918_11946)){
var ch_11948 = cljs.core._nth.call(null,chunk__11917_11945,i__11919_11947);
e.appendChild(ch_11948);

var G__11949 = seq__11916_11944;
var G__11950 = chunk__11917_11945;
var G__11951 = count__11918_11946;
var G__11952 = (i__11919_11947 + (1));
seq__11916_11944 = G__11949;
chunk__11917_11945 = G__11950;
count__11918_11946 = G__11951;
i__11919_11947 = G__11952;
continue;
} else {
var temp__4425__auto___11953 = cljs.core.seq.call(null,seq__11916_11944);
if(temp__4425__auto___11953){
var seq__11916_11954__$1 = temp__4425__auto___11953;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11916_11954__$1)){
var c__5472__auto___11955 = cljs.core.chunk_first.call(null,seq__11916_11954__$1);
var G__11956 = cljs.core.chunk_rest.call(null,seq__11916_11954__$1);
var G__11957 = c__5472__auto___11955;
var G__11958 = cljs.core.count.call(null,c__5472__auto___11955);
var G__11959 = (0);
seq__11916_11944 = G__11956;
chunk__11917_11945 = G__11957;
count__11918_11946 = G__11958;
i__11919_11947 = G__11959;
continue;
} else {
var ch_11960 = cljs.core.first.call(null,seq__11916_11954__$1);
e.appendChild(ch_11960);

var G__11961 = cljs.core.next.call(null,seq__11916_11954__$1);
var G__11962 = null;
var G__11963 = (0);
var G__11964 = (0);
seq__11916_11944 = G__11961;
chunk__11917_11945 = G__11962;
count__11918_11946 = G__11963;
i__11919_11947 = G__11964;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq11909){
var G__11910 = cljs.core.first.call(null,seq11909);
var seq11909__$1 = cljs.core.next.call(null,seq11909);
var G__11911 = cljs.core.first.call(null,seq11909__$1);
var seq11909__$2 = cljs.core.next.call(null,seq11909__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__11910,G__11911,seq11909__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5586__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5582__auto__,prefer_table__5583__auto__,method_cache__5584__auto__,cached_hierarchy__5585__auto__,hierarchy__5586__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5582__auto__,prefer_table__5583__auto__,method_cache__5584__auto__,cached_hierarchy__5585__auto__,hierarchy__5586__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5586__auto__,method_table__5582__auto__,prefer_table__5583__auto__,method_cache__5584__auto__,cached_hierarchy__5585__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_11965 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_11965.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_11965.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_11965.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_11965);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__11966,st_map){
var map__11971 = p__11966;
var map__11971__$1 = ((((!((map__11971 == null)))?((((map__11971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11971):map__11971);
var container_el = cljs.core.get.call(null,map__11971__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__11971,map__11971__$1,container_el){
return (function (p__11973){
var vec__11974 = p__11973;
var k = cljs.core.nth.call(null,vec__11974,(0),null);
var v = cljs.core.nth.call(null,vec__11974,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__11971,map__11971__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__11975,dom_str){
var map__11978 = p__11975;
var map__11978__$1 = ((((!((map__11978 == null)))?((((map__11978.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11978.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11978):map__11978);
var c = map__11978__$1;
var content_area_el = cljs.core.get.call(null,map__11978__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__11980){
var map__11983 = p__11980;
var map__11983__$1 = ((((!((map__11983 == null)))?((((map__11983.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11983.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11983):map__11983);
var content_area_el = cljs.core.get.call(null,map__11983__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_12026){
var state_val_12027 = (state_12026[(1)]);
if((state_val_12027 === (1))){
var inst_12011 = (state_12026[(7)]);
var inst_12011__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12012 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12013 = ["10px","10px","100%","68px","1.0"];
var inst_12014 = cljs.core.PersistentHashMap.fromArrays(inst_12012,inst_12013);
var inst_12015 = cljs.core.merge.call(null,inst_12014,style);
var inst_12016 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12011__$1,inst_12015);
var inst_12017 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12011__$1,msg);
var inst_12018 = cljs.core.async.timeout.call(null,(300));
var state_12026__$1 = (function (){var statearr_12028 = state_12026;
(statearr_12028[(7)] = inst_12011__$1);

(statearr_12028[(9)] = inst_12016);

(statearr_12028[(10)] = inst_12017);

return statearr_12028;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12026__$1,(2),inst_12018);
} else {
if((state_val_12027 === (2))){
var inst_12011 = (state_12026[(7)]);
var inst_12020 = (state_12026[(2)]);
var inst_12021 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12022 = ["auto"];
var inst_12023 = cljs.core.PersistentHashMap.fromArrays(inst_12021,inst_12022);
var inst_12024 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12011,inst_12023);
var state_12026__$1 = (function (){var statearr_12029 = state_12026;
(statearr_12029[(8)] = inst_12020);

return statearr_12029;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12026__$1,inst_12024);
} else {
return null;
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____0 = (function (){
var statearr_12033 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12033[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__);

(statearr_12033[(1)] = (1));

return statearr_12033;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____1 = (function (state_12026){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12034){if((e12034 instanceof Object)){
var ex__7033__auto__ = e12034;
var statearr_12035_12037 = state_12026;
(statearr_12035_12037[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12038 = state_12026;
state_12026 = G__12038;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__ = function(state_12026){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____1.call(this,state_12026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_12036 = f__7142__auto__.call(null);
(statearr_12036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_12036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__12040 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__12040,(0),null);
var ln = cljs.core.nth.call(null,vec__12040,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__12043 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__12043,(0),null);
var file_line = cljs.core.nth.call(null,vec__12043,(1),null);
var file_column = cljs.core.nth.call(null,vec__12043,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12043,file_name,file_line,file_column){
return (function (p1__12041_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__12041_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__12043,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4669__auto__ = file_line;
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
var and__4657__auto__ = cause;
if(cljs.core.truth_(and__4657__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4657__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__12046 = figwheel.client.heads_up.ensure_container.call(null);
var map__12046__$1 = ((((!((map__12046 == null)))?((((map__12046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12046):map__12046);
var content_area_el = cljs.core.get.call(null,map__12046__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_12094){
var state_val_12095 = (state_12094[(1)]);
if((state_val_12095 === (1))){
var inst_12077 = (state_12094[(7)]);
var inst_12077__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12078 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12079 = ["0.0"];
var inst_12080 = cljs.core.PersistentHashMap.fromArrays(inst_12078,inst_12079);
var inst_12081 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12077__$1,inst_12080);
var inst_12082 = cljs.core.async.timeout.call(null,(300));
var state_12094__$1 = (function (){var statearr_12096 = state_12094;
(statearr_12096[(8)] = inst_12081);

(statearr_12096[(7)] = inst_12077__$1);

return statearr_12096;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(2),inst_12082);
} else {
if((state_val_12095 === (2))){
var inst_12077 = (state_12094[(7)]);
var inst_12084 = (state_12094[(2)]);
var inst_12085 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12086 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12087 = cljs.core.PersistentHashMap.fromArrays(inst_12085,inst_12086);
var inst_12088 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12077,inst_12087);
var inst_12089 = cljs.core.async.timeout.call(null,(200));
var state_12094__$1 = (function (){var statearr_12097 = state_12094;
(statearr_12097[(9)] = inst_12084);

(statearr_12097[(11)] = inst_12088);

return statearr_12097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12094__$1,(3),inst_12089);
} else {
if((state_val_12095 === (3))){
var inst_12077 = (state_12094[(7)]);
var inst_12091 = (state_12094[(2)]);
var inst_12092 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12077,"");
var state_12094__$1 = (function (){var statearr_12098 = state_12094;
(statearr_12098[(10)] = inst_12091);

return statearr_12098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12094__$1,inst_12092);
} else {
return null;
}
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7030__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7030__auto____0 = (function (){
var statearr_12102 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12102[(0)] = figwheel$client$heads_up$clear_$_state_machine__7030__auto__);

(statearr_12102[(1)] = (1));

return statearr_12102;
});
var figwheel$client$heads_up$clear_$_state_machine__7030__auto____1 = (function (state_12094){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12094);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12103){if((e12103 instanceof Object)){
var ex__7033__auto__ = e12103;
var statearr_12104_12106 = state_12094;
(statearr_12104_12106[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12094);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12107 = state_12094;
state_12094 = G__12107;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7030__auto__ = function(state_12094){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7030__auto____1.call(this,state_12094);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7030__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7030__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_12105 = f__7142__auto__.call(null);
(statearr_12105[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_12105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_12139){
var state_val_12140 = (state_12139[(1)]);
if((state_val_12140 === (1))){
var inst_12129 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12139__$1 = state_12139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,(2),inst_12129);
} else {
if((state_val_12140 === (2))){
var inst_12131 = (state_12139[(2)]);
var inst_12132 = cljs.core.async.timeout.call(null,(400));
var state_12139__$1 = (function (){var statearr_12141 = state_12139;
(statearr_12141[(7)] = inst_12131);

return statearr_12141;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,(3),inst_12132);
} else {
if((state_val_12140 === (3))){
var inst_12134 = (state_12139[(2)]);
var inst_12135 = figwheel.client.heads_up.clear.call(null);
var state_12139__$1 = (function (){var statearr_12142 = state_12139;
(statearr_12142[(8)] = inst_12134);

return statearr_12142;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12139__$1,(4),inst_12135);
} else {
if((state_val_12140 === (4))){
var inst_12137 = (state_12139[(2)]);
var state_12139__$1 = state_12139;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12139__$1,inst_12137);
} else {
return null;
}
}
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____0 = (function (){
var statearr_12146 = [null,null,null,null,null,null,null,null,null];
(statearr_12146[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__);

(statearr_12146[(1)] = (1));

return statearr_12146;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____1 = (function (state_12139){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12147){if((e12147 instanceof Object)){
var ex__7033__auto__ = e12147;
var statearr_12148_12150 = state_12139;
(statearr_12148_12150[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12147;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12151 = state_12139;
state_12139 = G__12151;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__ = function(state_12139){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____1.call(this,state_12139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_12149 = f__7142__auto__.call(null);
(statearr_12149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_12149;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map