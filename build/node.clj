(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main      'cljs-server.core
   :output-to "main.js"
   :target    :nodejs})