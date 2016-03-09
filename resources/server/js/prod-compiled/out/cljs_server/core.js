// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs_server.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('figwheel.client');
cljs.nodejs.enable_util_print_BANG_.call(null);
cljs_server.core.port = (3000);
if(typeof cljs_server.core.express !== 'undefined'){
} else {
cljs_server.core.express = cljs.nodejs.require.call(null,"express");
}
if(typeof cljs_server.core.serve_static !== 'undefined'){
} else {
cljs_server.core.serve_static = cljs.nodejs.require.call(null,"serve-static");
}
if(typeof cljs_server.core.http !== 'undefined'){
} else {
cljs_server.core.http = cljs.nodejs.require.call(null,"http");
}
if(typeof cljs_server.core.https !== 'undefined'){
} else {
cljs_server.core.https = cljs.nodejs.require.call(null,"https");
}
if(typeof cljs_server.core.StringDecoder !== 'undefined'){
} else {
cljs_server.core.StringDecoder = cljs.nodejs.require.call(null,"string_decoder").StringDecoder;
}
cljs_server.core.app = cljs_server.core.express.call(null);
/**
 * Returns the result of getting the content referred to by |to-url|
 * as the response of |server-resp|.
 * 
 * Essentially a redirect on the part of the client from the server's
 * endpoint to a 3rd party endpoint, but with CORS headers all worked out.
 */
cljs_server.core.redirect_BANG_ = (function cljs_server$core$redirect_BANG_(to_url,server_resp){
var callback = (function (resp){
var decoder = (new cljs_server.core.StringDecoder("utf8"));
var sb = [];
resp.on("data",((function (decoder,sb){
return (function (chunk){
var str_chunk = decoder.write(chunk);
return sb.push(str_chunk);
});})(decoder,sb))
);

return resp.on("end",((function (decoder,sb){
return (function (){
server_resp.setHeader("Access-Control-Allow-Origin","*");

return server_resp.send(sb.join(""));
});})(decoder,sb))
);
});
if(cljs.core.not_EQ_.call(null,(-1),to_url.indexOf("http://"))){
return cljs_server.core.http.get(to_url,callback);
} else {
return cljs_server.core.https.get(to_url,callback);
}
});
cljs_server.core.app.get("/cities",(function (req,server_resp){
var city = req.query.nameBeginsWith;
var to_url = [cljs.core.str("https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q="),cljs.core.str(city)].join('');
return cljs_server.core.redirect_BANG_.call(null,to_url,server_resp);
}));
cljs_server.core.app.get("/movies",(function (req,server_resp){
var title = req.query.title;
var to_url = [cljs.core.str("http://www.omdbapi.com/?t="),cljs.core.str(title),cljs.core.str("&plot=short&r=json")].join('');
return cljs_server.core.redirect_BANG_.call(null,to_url,server_resp);
}));
cljs_server.core.app.use(cljs_server.core.serve_static.call(null,"resources/public",{"index": "index.html"}));
cljs_server.core.test_ = (function cljs_server$core$test_(){
cljs_server.core.http.get("http://localhost:3000/cities?nameBeginsWith=P");

return cljs_server.core.http.get("http://localhost:3000/movies?title=Samsara");
});
cljs_server.core._main = (function cljs_server$core$_main(){
var G__12821 = cljs_server.core.http.createServer((function (p1__12818_SHARP_,p2__12819_SHARP_){
return cljs_server.core.app.call(null,p1__12818_SHARP_,p2__12819_SHARP_);
}));
G__12821.listen(cljs_server.core.port);

return G__12821;
});
cljs.core._STAR_main_cli_fn_STAR_ = cljs_server.core._main;

//# sourceMappingURL=core.js.map