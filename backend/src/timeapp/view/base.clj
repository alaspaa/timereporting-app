(ns timeapp.view.base
  (:require [hiccup.core :refer [html h]]
            [timeapp.view.styles.main :refer [style]]))

(def javascript
  "
  function sumtotal() {\n  var total = 0; \n  let items = document.getElementsByClassName(\"day\");\n  for(i=0; i < items.length; i++) {\n    total = total + Number(items[i].value)\n  }\n  document.getElementById(\"total\").innerHTML = total\n}
  ")

(defn base [content]
  (html
        [:head
         [:title]
         [:style style]
         [:script javascript]]
        [:body
         [:header];add navigation
         content
         [:footer]]))
