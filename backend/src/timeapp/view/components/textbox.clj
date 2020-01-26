(ns timeapp.view.components.textbox)

(defn labeled-textbox [label placeholder]
  [:div {:class "labeled-textbox"}
   [:label label]
   [:input {:type "text" :placeholder placeholder}]])