(ns time-reporting.time.time
 (:require [reagent.core :as reagent :refer [atom cursor]]))

(def state
  (atom {
         :total 95
         :week {"Monday" 1
                 "Tuesday" 2
                 "Wednesday" 3
                 "Thursday" 4
                 "Friday" 5
                 "Saturday" 6
                 "Sunday" 7}}))
(def cursor-total
  (cursor state [:total]))

(def cursor-input
  (cursor state [:week]))

(defn convert-and-add [x y]
  (+ (int x) (int y)))


(defn set-input [evt key]
  (def input-val (-> evt .-target .-value))
  (swap! cursor-input assoc key input-val)
  (reset! cursor-total (reduce convert-and-add (vals @cursor-input)))
  ;TODO: Remove println
  (println @state))

(def header-row
  [:tr
     (for [day @cursor-input] ^{:key (key day)}[:th {:class "day"} (key day)])])

(def input-row
  [:tr
   (doall (for [day @cursor-input] ^{:key (str (val day) 1)}[:td [:input {:type "number" :placeholder "0" :class "weekday" :on-change (fn [evt] (set-input evt (key day)))}]]))])

(def total-row
  [:tr [:td][:td][:td][:th "Total"][:td [:input {:type "text" :placeholder "0" :class "total" :disabled "disabled" :value @cursor-total}]]])

(defn time-page[]
  [:div
   [:h2 "Time reports"]
   [:table
    [:tbody
     header-row
     input-row
     total-row]]])
