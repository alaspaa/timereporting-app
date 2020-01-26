(ns timeapp.view.pages.login
  [:require [timeapp.view.base :refer [base]]
            [timeapp.view.components.textbox :as textbox]])

(def login-template
  [:div
   (textbox/labeled-textbox "Username" "Insert username")
   (textbox/labeled-textbox "Password" "Insert password")
   [:div {:class "ok-button"} "Login"]])

(defn login-page []
  (base login-template))
