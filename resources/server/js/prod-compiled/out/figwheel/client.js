// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__12154__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12154 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12155__i = 0, G__12155__a = new Array(arguments.length -  0);
while (G__12155__i < G__12155__a.length) {G__12155__a[G__12155__i] = arguments[G__12155__i + 0]; ++G__12155__i;}
  args = new cljs.core.IndexedSeq(G__12155__a,0);
} 
return G__12154__delegate.call(this,args);};
G__12154.cljs$lang$maxFixedArity = 0;
G__12154.cljs$lang$applyTo = (function (arglist__12156){
var args = cljs.core.seq(arglist__12156);
return G__12154__delegate(args);
});
G__12154.cljs$core$IFn$_invoke$arity$variadic = G__12154__delegate;
return G__12154;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__12157){
var map__12160 = p__12157;
var map__12160__$1 = ((((!((map__12160 == null)))?((((map__12160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12160):map__12160);
var message = cljs.core.get.call(null,map__12160__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__12160__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4669__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4669__auto__)){
return or__4669__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4657__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4657__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4657__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
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
var c__7141__auto___12290 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___12290,ch){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___12290,ch){
return (function (state_12264){
var state_val_12265 = (state_12264[(1)]);
if((state_val_12265 === (7))){
var inst_12260 = (state_12264[(2)]);
var state_12264__$1 = state_12264;
var statearr_12266_12291 = state_12264__$1;
(statearr_12266_12291[(2)] = inst_12260);

(statearr_12266_12291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (1))){
var state_12264__$1 = state_12264;
var statearr_12267_12292 = state_12264__$1;
(statearr_12267_12292[(2)] = null);

(statearr_12267_12292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (4))){
var inst_12228 = (state_12264[(7)]);
var inst_12228__$1 = (state_12264[(2)]);
var state_12264__$1 = (function (){var statearr_12268 = state_12264;
(statearr_12268[(7)] = inst_12228__$1);

return statearr_12268;
})();
if(cljs.core.truth_(inst_12228__$1)){
var statearr_12269_12293 = state_12264__$1;
(statearr_12269_12293[(1)] = (5));

} else {
var statearr_12270_12294 = state_12264__$1;
(statearr_12270_12294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (13))){
var state_12264__$1 = state_12264;
var statearr_12271_12295 = state_12264__$1;
(statearr_12271_12295[(2)] = null);

(statearr_12271_12295[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (6))){
var state_12264__$1 = state_12264;
var statearr_12272_12296 = state_12264__$1;
(statearr_12272_12296[(2)] = null);

(statearr_12272_12296[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (3))){
var inst_12262 = (state_12264[(2)]);
var state_12264__$1 = state_12264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12264__$1,inst_12262);
} else {
if((state_val_12265 === (12))){
var inst_12235 = (state_12264[(8)]);
var inst_12248 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_12235);
var inst_12249 = cljs.core.first.call(null,inst_12248);
var inst_12250 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_12249);
var inst_12251 = console.warn("Figwheel: Not loading code with warnings - ",inst_12250);
var state_12264__$1 = state_12264;
var statearr_12273_12297 = state_12264__$1;
(statearr_12273_12297[(2)] = inst_12251);

(statearr_12273_12297[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (2))){
var state_12264__$1 = state_12264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12264__$1,(4),ch);
} else {
if((state_val_12265 === (11))){
var inst_12244 = (state_12264[(2)]);
var state_12264__$1 = state_12264;
var statearr_12274_12298 = state_12264__$1;
(statearr_12274_12298[(2)] = inst_12244);

(statearr_12274_12298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (9))){
var inst_12234 = (state_12264[(9)]);
var inst_12246 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_12234,opts);
var state_12264__$1 = state_12264;
if(cljs.core.truth_(inst_12246)){
var statearr_12275_12299 = state_12264__$1;
(statearr_12275_12299[(1)] = (12));

} else {
var statearr_12276_12300 = state_12264__$1;
(statearr_12276_12300[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (5))){
var inst_12228 = (state_12264[(7)]);
var inst_12234 = (state_12264[(9)]);
var inst_12230 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_12231 = (new cljs.core.PersistentArrayMap(null,2,inst_12230,null));
var inst_12232 = (new cljs.core.PersistentHashSet(null,inst_12231,null));
var inst_12233 = figwheel.client.focus_msgs.call(null,inst_12232,inst_12228);
var inst_12234__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_12233);
var inst_12235 = cljs.core.first.call(null,inst_12233);
var inst_12236 = figwheel.client.reload_file_state_QMARK_.call(null,inst_12234__$1,opts);
var state_12264__$1 = (function (){var statearr_12277 = state_12264;
(statearr_12277[(8)] = inst_12235);

(statearr_12277[(9)] = inst_12234__$1);

return statearr_12277;
})();
if(cljs.core.truth_(inst_12236)){
var statearr_12278_12301 = state_12264__$1;
(statearr_12278_12301[(1)] = (8));

} else {
var statearr_12279_12302 = state_12264__$1;
(statearr_12279_12302[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (14))){
var inst_12254 = (state_12264[(2)]);
var state_12264__$1 = state_12264;
var statearr_12280_12303 = state_12264__$1;
(statearr_12280_12303[(2)] = inst_12254);

(statearr_12280_12303[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (10))){
var inst_12256 = (state_12264[(2)]);
var state_12264__$1 = (function (){var statearr_12281 = state_12264;
(statearr_12281[(10)] = inst_12256);

return statearr_12281;
})();
var statearr_12282_12304 = state_12264__$1;
(statearr_12282_12304[(2)] = null);

(statearr_12282_12304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12265 === (8))){
var inst_12235 = (state_12264[(8)]);
var inst_12238 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12239 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_12235);
var inst_12240 = cljs.core.async.timeout.call(null,(1000));
var inst_12241 = [inst_12239,inst_12240];
var inst_12242 = (new cljs.core.PersistentVector(null,2,(5),inst_12238,inst_12241,null));
var state_12264__$1 = state_12264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_12264__$1,(11),inst_12242);
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
});})(c__7141__auto___12290,ch))
;
return ((function (switch__7029__auto__,c__7141__auto___12290,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____0 = (function (){
var statearr_12286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12286[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__);

(statearr_12286[(1)] = (1));

return statearr_12286;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____1 = (function (state_12264){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12287){if((e12287 instanceof Object)){
var ex__7033__auto__ = e12287;
var statearr_12288_12305 = state_12264;
(statearr_12288_12305[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12287;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12306 = state_12264;
state_12264 = G__12306;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__ = function(state_12264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____1.call(this,state_12264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7030__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___12290,ch))
})();
var state__7143__auto__ = (function (){var statearr_12289 = f__7142__auto__.call(null);
(statearr_12289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___12290);

return statearr_12289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___12290,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__12307_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__12307_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_12314 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12314){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_12312 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_12313 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12312,_STAR_print_newline_STAR_12313,base_path_12314){
return (function() { 
var G__12315__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12316__i = 0, G__12316__a = new Array(arguments.length -  0);
while (G__12316__i < G__12316__a.length) {G__12316__a[G__12316__i] = arguments[G__12316__i + 0]; ++G__12316__i;}
  args = new cljs.core.IndexedSeq(G__12316__a,0);
} 
return G__12315__delegate.call(this,args);};
G__12315.cljs$lang$maxFixedArity = 0;
G__12315.cljs$lang$applyTo = (function (arglist__12317){
var args = cljs.core.seq(arglist__12317);
return G__12315__delegate(args);
});
G__12315.cljs$core$IFn$_invoke$arity$variadic = G__12315__delegate;
return G__12315;
})()
;})(_STAR_print_fn_STAR_12312,_STAR_print_newline_STAR_12313,base_path_12314))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12313;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12312;
}}catch (e12311){if((e12311 instanceof Error)){
var e = e12311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12314], null));
} else {
var e = e12311;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_12314))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12318){
var map__12325 = p__12318;
var map__12325__$1 = ((((!((map__12325 == null)))?((((map__12325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12325):map__12325);
var opts = map__12325__$1;
var build_id = cljs.core.get.call(null,map__12325__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12325,map__12325__$1,opts,build_id){
return (function (p__12327){
var vec__12328 = p__12327;
var map__12329 = cljs.core.nth.call(null,vec__12328,(0),null);
var map__12329__$1 = ((((!((map__12329 == null)))?((((map__12329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12329):map__12329);
var msg = map__12329__$1;
var msg_name = cljs.core.get.call(null,map__12329__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12328,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__12328,map__12329,map__12329__$1,msg,msg_name,_,map__12325,map__12325__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12328,map__12329,map__12329__$1,msg,msg_name,_,map__12325,map__12325__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12325,map__12325__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12335){
var vec__12336 = p__12335;
var map__12337 = cljs.core.nth.call(null,vec__12336,(0),null);
var map__12337__$1 = ((((!((map__12337 == null)))?((((map__12337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12337):map__12337);
var msg = map__12337__$1;
var msg_name = cljs.core.get.call(null,map__12337__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12336,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12339){
var map__12349 = p__12339;
var map__12349__$1 = ((((!((map__12349 == null)))?((((map__12349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12349):map__12349);
var on_compile_warning = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__12349__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__12349,map__12349__$1,on_compile_warning,on_compile_fail){
return (function (p__12351){
var vec__12352 = p__12351;
var map__12353 = cljs.core.nth.call(null,vec__12352,(0),null);
var map__12353__$1 = ((((!((map__12353 == null)))?((((map__12353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12353):map__12353);
var msg = map__12353__$1;
var msg_name = cljs.core.get.call(null,map__12353__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12352,(1));
var pred__12355 = cljs.core._EQ_;
var expr__12356 = msg_name;
if(cljs.core.truth_(pred__12355.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12356))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12355.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12356))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12349,map__12349__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__,msg_hist,msg_names,msg){
return (function (state_12557){
var state_val_12558 = (state_12557[(1)]);
if((state_val_12558 === (7))){
var inst_12491 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12559_12600 = state_12557__$1;
(statearr_12559_12600[(2)] = inst_12491);

(statearr_12559_12600[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (20))){
var inst_12519 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12519)){
var statearr_12560_12601 = state_12557__$1;
(statearr_12560_12601[(1)] = (22));

} else {
var statearr_12561_12602 = state_12557__$1;
(statearr_12561_12602[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (27))){
var inst_12531 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12532 = figwheel.client.heads_up.display_warning.call(null,inst_12531);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(30),inst_12532);
} else {
if((state_val_12558 === (1))){
var inst_12479 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12479)){
var statearr_12562_12603 = state_12557__$1;
(statearr_12562_12603[(1)] = (2));

} else {
var statearr_12563_12604 = state_12557__$1;
(statearr_12563_12604[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (24))){
var inst_12547 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12564_12605 = state_12557__$1;
(statearr_12564_12605[(2)] = inst_12547);

(statearr_12564_12605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (4))){
var inst_12555 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12557__$1,inst_12555);
} else {
if((state_val_12558 === (15))){
var inst_12507 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12508 = figwheel.client.format_messages.call(null,inst_12507);
var inst_12509 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12510 = figwheel.client.heads_up.display_error.call(null,inst_12508,inst_12509);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(18),inst_12510);
} else {
if((state_val_12558 === (21))){
var inst_12549 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12565_12606 = state_12557__$1;
(statearr_12565_12606[(2)] = inst_12549);

(statearr_12565_12606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (31))){
var inst_12538 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(34),inst_12538);
} else {
if((state_val_12558 === (32))){
var state_12557__$1 = state_12557;
var statearr_12566_12607 = state_12557__$1;
(statearr_12566_12607[(2)] = null);

(statearr_12566_12607[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (33))){
var inst_12543 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12567_12608 = state_12557__$1;
(statearr_12567_12608[(2)] = inst_12543);

(statearr_12567_12608[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (13))){
var inst_12497 = (state_12557[(2)]);
var inst_12498 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12499 = figwheel.client.format_messages.call(null,inst_12498);
var inst_12500 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12501 = figwheel.client.heads_up.display_error.call(null,inst_12499,inst_12500);
var state_12557__$1 = (function (){var statearr_12568 = state_12557;
(statearr_12568[(7)] = inst_12497);

return statearr_12568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(14),inst_12501);
} else {
if((state_val_12558 === (22))){
var inst_12521 = figwheel.client.heads_up.clear.call(null);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(25),inst_12521);
} else {
if((state_val_12558 === (29))){
var inst_12545 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12569_12609 = state_12557__$1;
(statearr_12569_12609[(2)] = inst_12545);

(statearr_12569_12609[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (6))){
var inst_12487 = figwheel.client.heads_up.clear.call(null);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(9),inst_12487);
} else {
if((state_val_12558 === (28))){
var inst_12536 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12536)){
var statearr_12570_12610 = state_12557__$1;
(statearr_12570_12610[(1)] = (31));

} else {
var statearr_12571_12611 = state_12557__$1;
(statearr_12571_12611[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (25))){
var inst_12523 = (state_12557[(2)]);
var inst_12524 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12525 = figwheel.client.heads_up.display_warning.call(null,inst_12524);
var state_12557__$1 = (function (){var statearr_12572 = state_12557;
(statearr_12572[(8)] = inst_12523);

return statearr_12572;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(26),inst_12525);
} else {
if((state_val_12558 === (34))){
var inst_12540 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12573_12612 = state_12557__$1;
(statearr_12573_12612[(2)] = inst_12540);

(statearr_12573_12612[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (17))){
var inst_12551 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12574_12613 = state_12557__$1;
(statearr_12574_12613[(2)] = inst_12551);

(statearr_12574_12613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (3))){
var inst_12493 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12493)){
var statearr_12575_12614 = state_12557__$1;
(statearr_12575_12614[(1)] = (10));

} else {
var statearr_12576_12615 = state_12557__$1;
(statearr_12576_12615[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (12))){
var inst_12553 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12577_12616 = state_12557__$1;
(statearr_12577_12616[(2)] = inst_12553);

(statearr_12577_12616[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (2))){
var inst_12481 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12481)){
var statearr_12578_12617 = state_12557__$1;
(statearr_12578_12617[(1)] = (5));

} else {
var statearr_12579_12618 = state_12557__$1;
(statearr_12579_12618[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (23))){
var inst_12529 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12529)){
var statearr_12580_12619 = state_12557__$1;
(statearr_12580_12619[(1)] = (27));

} else {
var statearr_12581_12620 = state_12557__$1;
(statearr_12581_12620[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (19))){
var inst_12516 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12517 = figwheel.client.heads_up.append_message.call(null,inst_12516);
var state_12557__$1 = state_12557;
var statearr_12582_12621 = state_12557__$1;
(statearr_12582_12621[(2)] = inst_12517);

(statearr_12582_12621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (11))){
var inst_12505 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12505)){
var statearr_12583_12622 = state_12557__$1;
(statearr_12583_12622[(1)] = (15));

} else {
var statearr_12584_12623 = state_12557__$1;
(statearr_12584_12623[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (9))){
var inst_12489 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12585_12624 = state_12557__$1;
(statearr_12585_12624[(2)] = inst_12489);

(statearr_12585_12624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (5))){
var inst_12483 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(8),inst_12483);
} else {
if((state_val_12558 === (14))){
var inst_12503 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12586_12625 = state_12557__$1;
(statearr_12586_12625[(2)] = inst_12503);

(statearr_12586_12625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (26))){
var inst_12527 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12587_12626 = state_12557__$1;
(statearr_12587_12626[(2)] = inst_12527);

(statearr_12587_12626[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (16))){
var inst_12514 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12557__$1 = state_12557;
if(cljs.core.truth_(inst_12514)){
var statearr_12588_12627 = state_12557__$1;
(statearr_12588_12627[(1)] = (19));

} else {
var statearr_12589_12628 = state_12557__$1;
(statearr_12589_12628[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (30))){
var inst_12534 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12590_12629 = state_12557__$1;
(statearr_12590_12629[(2)] = inst_12534);

(statearr_12590_12629[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (10))){
var inst_12495 = figwheel.client.heads_up.clear.call(null);
var state_12557__$1 = state_12557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12557__$1,(13),inst_12495);
} else {
if((state_val_12558 === (18))){
var inst_12512 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12591_12630 = state_12557__$1;
(statearr_12591_12630[(2)] = inst_12512);

(statearr_12591_12630[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12558 === (8))){
var inst_12485 = (state_12557[(2)]);
var state_12557__$1 = state_12557;
var statearr_12592_12631 = state_12557__$1;
(statearr_12592_12631[(2)] = inst_12485);

(statearr_12592_12631[(1)] = (7));


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
});})(c__7141__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7029__auto__,c__7141__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____0 = (function (){
var statearr_12596 = [null,null,null,null,null,null,null,null,null];
(statearr_12596[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__);

(statearr_12596[(1)] = (1));

return statearr_12596;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____1 = (function (state_12557){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12597){if((e12597 instanceof Object)){
var ex__7033__auto__ = e12597;
var statearr_12598_12632 = state_12557;
(statearr_12598_12632[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12633 = state_12557;
state_12557 = G__12633;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__ = function(state_12557){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____1.call(this,state_12557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__,msg_hist,msg_names,msg))
})();
var state__7143__auto__ = (function (){var statearr_12599 = f__7142__auto__.call(null);
(statearr_12599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_12599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__,msg_hist,msg_names,msg))
);

return c__7141__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7141__auto___12696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto___12696,ch){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto___12696,ch){
return (function (state_12679){
var state_val_12680 = (state_12679[(1)]);
if((state_val_12680 === (1))){
var state_12679__$1 = state_12679;
var statearr_12681_12697 = state_12679__$1;
(statearr_12681_12697[(2)] = null);

(statearr_12681_12697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12680 === (2))){
var state_12679__$1 = state_12679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12679__$1,(4),ch);
} else {
if((state_val_12680 === (3))){
var inst_12677 = (state_12679[(2)]);
var state_12679__$1 = state_12679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12679__$1,inst_12677);
} else {
if((state_val_12680 === (4))){
var inst_12667 = (state_12679[(7)]);
var inst_12667__$1 = (state_12679[(2)]);
var state_12679__$1 = (function (){var statearr_12682 = state_12679;
(statearr_12682[(7)] = inst_12667__$1);

return statearr_12682;
})();
if(cljs.core.truth_(inst_12667__$1)){
var statearr_12683_12698 = state_12679__$1;
(statearr_12683_12698[(1)] = (5));

} else {
var statearr_12684_12699 = state_12679__$1;
(statearr_12684_12699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12680 === (5))){
var inst_12667 = (state_12679[(7)]);
var inst_12669 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12667);
var state_12679__$1 = state_12679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12679__$1,(8),inst_12669);
} else {
if((state_val_12680 === (6))){
var state_12679__$1 = state_12679;
var statearr_12685_12700 = state_12679__$1;
(statearr_12685_12700[(2)] = null);

(statearr_12685_12700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12680 === (7))){
var inst_12675 = (state_12679[(2)]);
var state_12679__$1 = state_12679;
var statearr_12686_12701 = state_12679__$1;
(statearr_12686_12701[(2)] = inst_12675);

(statearr_12686_12701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12680 === (8))){
var inst_12671 = (state_12679[(2)]);
var state_12679__$1 = (function (){var statearr_12687 = state_12679;
(statearr_12687[(8)] = inst_12671);

return statearr_12687;
})();
var statearr_12688_12702 = state_12679__$1;
(statearr_12688_12702[(2)] = null);

(statearr_12688_12702[(1)] = (2));


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
});})(c__7141__auto___12696,ch))
;
return ((function (switch__7029__auto__,c__7141__auto___12696,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7030__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7030__auto____0 = (function (){
var statearr_12692 = [null,null,null,null,null,null,null,null,null];
(statearr_12692[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7030__auto__);

(statearr_12692[(1)] = (1));

return statearr_12692;
});
var figwheel$client$heads_up_plugin_$_state_machine__7030__auto____1 = (function (state_12679){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12693){if((e12693 instanceof Object)){
var ex__7033__auto__ = e12693;
var statearr_12694_12703 = state_12679;
(statearr_12694_12703[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12704 = state_12679;
state_12679 = G__12704;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7030__auto__ = function(state_12679){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7030__auto____1.call(this,state_12679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7030__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7030__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto___12696,ch))
})();
var state__7143__auto__ = (function (){var statearr_12695 = f__7142__auto__.call(null);
(statearr_12695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto___12696);

return statearr_12695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto___12696,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7141__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7141__auto__){
return (function (){
var f__7142__auto__ = (function (){var switch__7029__auto__ = ((function (c__7141__auto__){
return (function (state_12725){
var state_val_12726 = (state_12725[(1)]);
if((state_val_12726 === (1))){
var inst_12720 = cljs.core.async.timeout.call(null,(3000));
var state_12725__$1 = state_12725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12725__$1,(2),inst_12720);
} else {
if((state_val_12726 === (2))){
var inst_12722 = (state_12725[(2)]);
var inst_12723 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12725__$1 = (function (){var statearr_12727 = state_12725;
(statearr_12727[(7)] = inst_12722);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12725__$1,inst_12723);
} else {
return null;
}
}
});})(c__7141__auto__))
;
return ((function (switch__7029__auto__,c__7141__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____0 = (function (){
var statearr_12731 = [null,null,null,null,null,null,null,null];
(statearr_12731[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__);

(statearr_12731[(1)] = (1));

return statearr_12731;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____1 = (function (state_12725){
while(true){
var ret_value__7031__auto__ = (function (){try{while(true){
var result__7032__auto__ = switch__7029__auto__.call(null,state_12725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7032__auto__;
}
break;
}
}catch (e12732){if((e12732 instanceof Object)){
var ex__7033__auto__ = e12732;
var statearr_12733_12735 = state_12725;
(statearr_12733_12735[(5)] = ex__7033__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7031__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12736 = state_12725;
state_12725 = G__12736;
continue;
} else {
return ret_value__7031__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__ = function(state_12725){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____1.call(this,state_12725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7030__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7030__auto__;
})()
;})(switch__7029__auto__,c__7141__auto__))
})();
var state__7143__auto__ = (function (){var statearr_12734 = f__7142__auto__.call(null);
(statearr_12734[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7141__auto__);

return statearr_12734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7143__auto__);
});})(c__7141__auto__))
);

return c__7141__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12737){
var map__12744 = p__12737;
var map__12744__$1 = ((((!((map__12744 == null)))?((((map__12744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744):map__12744);
var ed = map__12744__$1;
var formatted_exception = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12746_12750 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12747_12751 = null;
var count__12748_12752 = (0);
var i__12749_12753 = (0);
while(true){
if((i__12749_12753 < count__12748_12752)){
var msg_12754 = cljs.core._nth.call(null,chunk__12747_12751,i__12749_12753);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12754);

var G__12755 = seq__12746_12750;
var G__12756 = chunk__12747_12751;
var G__12757 = count__12748_12752;
var G__12758 = (i__12749_12753 + (1));
seq__12746_12750 = G__12755;
chunk__12747_12751 = G__12756;
count__12748_12752 = G__12757;
i__12749_12753 = G__12758;
continue;
} else {
var temp__4425__auto___12759 = cljs.core.seq.call(null,seq__12746_12750);
if(temp__4425__auto___12759){
var seq__12746_12760__$1 = temp__4425__auto___12759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12746_12760__$1)){
var c__5472__auto___12761 = cljs.core.chunk_first.call(null,seq__12746_12760__$1);
var G__12762 = cljs.core.chunk_rest.call(null,seq__12746_12760__$1);
var G__12763 = c__5472__auto___12761;
var G__12764 = cljs.core.count.call(null,c__5472__auto___12761);
var G__12765 = (0);
seq__12746_12750 = G__12762;
chunk__12747_12751 = G__12763;
count__12748_12752 = G__12764;
i__12749_12753 = G__12765;
continue;
} else {
var msg_12766 = cljs.core.first.call(null,seq__12746_12760__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12766);

var G__12767 = cljs.core.next.call(null,seq__12746_12760__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__12746_12750 = G__12767;
chunk__12747_12751 = G__12768;
count__12748_12752 = G__12769;
i__12749_12753 = G__12770;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12771){
var map__12774 = p__12771;
var map__12774__$1 = ((((!((map__12774 == null)))?((((map__12774.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12774.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12774):map__12774);
var w = map__12774__$1;
var message = cljs.core.get.call(null,map__12774__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

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
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4657__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4657__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4657__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12782 = cljs.core.seq.call(null,plugins);
var chunk__12783 = null;
var count__12784 = (0);
var i__12785 = (0);
while(true){
if((i__12785 < count__12784)){
var vec__12786 = cljs.core._nth.call(null,chunk__12783,i__12785);
var k = cljs.core.nth.call(null,vec__12786,(0),null);
var plugin = cljs.core.nth.call(null,vec__12786,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12788 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12782,chunk__12783,count__12784,i__12785,pl_12788,vec__12786,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12788.call(null,msg_hist);
});})(seq__12782,chunk__12783,count__12784,i__12785,pl_12788,vec__12786,k,plugin))
);
} else {
}

var G__12789 = seq__12782;
var G__12790 = chunk__12783;
var G__12791 = count__12784;
var G__12792 = (i__12785 + (1));
seq__12782 = G__12789;
chunk__12783 = G__12790;
count__12784 = G__12791;
i__12785 = G__12792;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12782);
if(temp__4425__auto__){
var seq__12782__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12782__$1)){
var c__5472__auto__ = cljs.core.chunk_first.call(null,seq__12782__$1);
var G__12793 = cljs.core.chunk_rest.call(null,seq__12782__$1);
var G__12794 = c__5472__auto__;
var G__12795 = cljs.core.count.call(null,c__5472__auto__);
var G__12796 = (0);
seq__12782 = G__12793;
chunk__12783 = G__12794;
count__12784 = G__12795;
i__12785 = G__12796;
continue;
} else {
var vec__12787 = cljs.core.first.call(null,seq__12782__$1);
var k = cljs.core.nth.call(null,vec__12787,(0),null);
var plugin = cljs.core.nth.call(null,vec__12787,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12797 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12782,chunk__12783,count__12784,i__12785,pl_12797,vec__12787,k,plugin,seq__12782__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12797.call(null,msg_hist);
});})(seq__12782,chunk__12783,count__12784,i__12785,pl_12797,vec__12787,k,plugin,seq__12782__$1,temp__4425__auto__))
);
} else {
}

var G__12798 = cljs.core.next.call(null,seq__12782__$1);
var G__12799 = null;
var G__12800 = (0);
var G__12801 = (0);
seq__12782 = G__12798;
chunk__12783 = G__12799;
count__12784 = G__12800;
i__12785 = G__12801;
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
var args12802 = [];
var len__5727__auto___12805 = arguments.length;
var i__5728__auto___12806 = (0);
while(true){
if((i__5728__auto___12806 < len__5727__auto___12805)){
args12802.push((arguments[i__5728__auto___12806]));

var G__12807 = (i__5728__auto___12806 + (1));
i__5728__auto___12806 = G__12807;
continue;
} else {
}
break;
}

var G__12804 = args12802.length;
switch (G__12804) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12802.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5734__auto__ = [];
var len__5727__auto___12813 = arguments.length;
var i__5728__auto___12814 = (0);
while(true){
if((i__5728__auto___12814 < len__5727__auto___12813)){
args__5734__auto__.push((arguments[i__5728__auto___12814]));

var G__12815 = (i__5728__auto___12814 + (1));
i__5728__auto___12814 = G__12815;
continue;
} else {
}
break;
}

var argseq__5735__auto__ = ((((0) < args__5734__auto__.length))?(new cljs.core.IndexedSeq(args__5734__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5735__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12810){
var map__12811 = p__12810;
var map__12811__$1 = ((((!((map__12811 == null)))?((((map__12811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12811):map__12811);
var opts = map__12811__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12809){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12809));
});

//# sourceMappingURL=client.js.map