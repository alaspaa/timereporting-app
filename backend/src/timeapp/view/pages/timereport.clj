(ns timeapp.view.pages.timereport
  (:require [timeapp.view.base :refer [base]]
            [timeapp.controller.utility :as util]))

(def day-name ["Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday" "Sunday"])

(defn add-option [x currentWeek]
  (def value
    (concat "Week " (str (+ x 1))))
  (def selected
    (if (= currentWeek (+ x 1) ){:selected ""}))
  [:option selected value])

(def inputs-for-week
  (for [x day-name]
    [:td [:input {:type "text" :placeholder "0" :id x :class "day" :onchange "sumtotal()"}]]))

(defn timereport-template []
  [:div
   [:select
    (for [x (range 0 52)]
      (add-option x util/week))]
   [:table
    [:tr
     (for [x day-name]
       [:th x])]
    [:tr
     inputs-for-week]
    [:tr
     [:td]
     [:td]
     [:td]
     [:td]
     [:th "Weekly Total"]
     [:td]
     [:td]]
    [:tr
     [:td]
     [:td]
     [:td]
     [:td]
     [:td {:id "total"} 37.5]
     [:td]
     [:td]]]])

(defn timereport-page []
  (base (timereport-template)))
