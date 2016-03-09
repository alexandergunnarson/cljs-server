(ns cljs-server.core
  (:require
    [cljs.nodejs     :as nodejs]
    [figwheel.client :as fw    ]))

(nodejs/enable-util-print!)

(def port 3000)
; lein npm install 
(defonce express      (nodejs/require "express"     ))
(defonce serve-static (nodejs/require "serve-static"))
(defonce http         (nodejs/require "http"        ))
(defonce https        (nodejs/require "https"       ))

(defonce StringDecoder (.-StringDecoder (nodejs/require "string_decoder")))

; var req = http.request(reqOptions, function(res) {
;     ...
;     var decoder = new StringDecoder('utf8');

;     res.on('data', function(chunk) {
;         var textChunk = decoder.write(chunk);
;         // process utf8 text chunk
;     });
; });

; |app| gets redefined on reload
(def app (express))

(defn redirect!
  "Returns the result of getting the content referred to by |to-url|
   as the response of |server-resp|.

   Essentially a redirect on the part of the client from the server's
   endpoint to a 3rd party endpoint, but with CORS headers all worked out."
  [to-url server-resp]
  (let [callback (fn [resp]
                   (let [decoder (StringDecoder. "utf8")
                         sb      (array)]
                     (.on resp "data"
                       (fn [chunk]
                         (let [str-chunk (-> decoder (.write chunk))]
                           (.push sb str-chunk))))
                     (.on resp "end"
                       (fn []
                         (.setHeader server-resp "Access-Control-Allow-Origin" "*")
                         (.send server-resp (.join sb ""))))))]
    (if (not= -1 (.indexOf to-url "http://"))
        (.get http  to-url callback)
        (.get https to-url callback))))

(.get app "/cities" 
  (fn [req server-resp]
    (let [city (-> req .-query .-nameBeginsWith)
          to-url (str "https://students.cs.byu.edu/~clement/CS360/ajax/getcity.cgi?q="
                      city)] ; TODO should URL escape
      (redirect! to-url server-resp))))

; TODO these are extremely similar, so use an abstraction
(.get app "/movies" 
  (fn [req server-resp]
    (let [title  (-> req .-query .-title)
          to-url (str "http://www.omdbapi.com/?t=" title "&plot=short&r=json")] ; TODO should URL escape
      (redirect! to-url server-resp))))

(.use app (serve-static "resources/public" #js {:index "index.html"}))

(defn test- []
  (.get http "http://localhost:3000/cities?nameBeginsWith=P")
  (.get http "http://localhost:3000/movies?title=Samsara"))

(def -main 
  (fn []
    ; Capture a reference to the |app| function (don't use it directly).
    ; this allows you to change routes and have them hot-loaded as you
    ; code.
    (doto (.createServer http #(app %1 %2))
      (.listen port))))

(set! *main-cli-fn* -main)

;(fw/start { })