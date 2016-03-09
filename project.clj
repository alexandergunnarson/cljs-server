(defproject alexandergunnarson/cljs-server "0.1-beta"
  :description "A simple ClojureScript server on Node.js."
  :url               "https://www.github.com/alexandergunnarson/quantum"
  :license           {:name "Creative Commons Attribution-ShareAlike 3.0 US (CC-SA) license"
                      :url "https://creativecommons.org/licenses/by-sa/3.0/us/"}
  ; :signing          {:gpg-key "72F3C25A"}
  :dependencies
    [[org.clojure/clojure       "1.8.0-alpha2"    ] ; July 16th (Latest before hard-linking)
     [org.clojure/clojurescript "1.7.170"         ] ; Latest (as of 12/31/2015)

     [figwheel                  "0.3.9"         ]
     ]
  :plugins [[lein-npm "0.6.2"]]
  :npm {:dependencies [[express            "4.13.4"]
                       [serve-static       "1.10.2"]
                       [http               "0.0.0" ]
                       [source-map-support "0.4.0" ]]}
   :profiles
   {:dev {:injections []
          :resource-paths ["dev-resources"]
          :dependencies   []
          :plugins [[lein-cljsbuild "1.1.3"]
                    [lein-figwheel  "0.3.9"]]}}
  :aliases {"autobuild"   ["do" "clean," "figwheel" "dev"]
            "deploy-jar"  ["do" "clean," "install"]
            "deploy-node" ["do" "clean," "cljsbuild" "once" "prod"]
            "deploy-prod" ["do" "clean," "install," "deploy" "clojars"]}
  ;:auto-clean        false
  :clean-targets ^{:protect false} ["target"
                                    "resources/server/js/compiled"
                                    "resources/server/js/prod-compiled"]
  :resource-paths    ["resources"]
  :source-paths      ["src" ]
  :test-paths        ["test"]
  :global-vars {*warn-on-reflection* true}
  :cljsbuild
    {:builds
      [{:id "dev"
        :figwheel true
        :source-paths ["src"]
        :compiler {:output-to            "resources/server/js/compiled/cljs-server.js"
                   :output-dir           "resources/server/js/compiled/out"
                   :optimizations        :none
                   :main                 cljs-server.core
                   ;:asset-path           "resources/server/js/compiled/out"
                   :target               :nodejs
                   :source-map           true
                   :source-map-timestamp true}}
       {:id "prod"
        :source-paths ["src"]
        :compiler {:output-to            "resources/server/js/prod-compiled/cljs-server.js"
                   :output-dir           "resources/server/js/prod-compiled/out"
                   :optimizations        :none
                   :cache-analysis       true
                   :source-map           "resources/server/js/prod-compiled/cljs-server.js.map"
                   :target               :nodejs
                   :main                 cljs-server.core}}
       {:id "min"
        :source-paths ["src/cljs" "src/cljc"]
        :compiler {:output-to      "resources/server/js/min-compiled/cljs-server.js"
                   :output-dir     "resources/server/js/min-compiled/out"
                   :main           cljs-server.core
                   :optimizations  :advanced
                   :asset-path     "js/min-compiled/out"
                   :pretty-print   false
                   :parallel-build true}}]}
  :figwheel {:http-server-root "server" ;; default and assumes "resources" 
             :css-dirs ["resources/server/css"]}
  )