(ns timeapp.handler
  (:require [compojure.core :refer [defroutes context GET POST PUT]]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [hiccup.core :refer [html h]]
            [timeapp.view.base :refer [base]]
            [timeapp.view.pages.login :refer [login-page]]
            [timeapp.view.pages.timereport :refer [timereport-page]]
            [timeapp.connection.pool :refer [query]]
            [ring.middleware.json :refer [wrap-json-body]]
            [ring.util.response :refer [response]]))



(defn component []
  (html
    [:head
     [:title "my page"]]
    [:body
     [:div
      [:p "I am a component!"]
      [:p.someclass
       "I have " [:strong "bold"]
       [:span {:style {:color "red"}} " and red "] "text."]]]))

(defn get-users []
  (query "select * from users "))

(defn get-id [request]
  (get-in request [:route-params :id]))

(defn get-user [request]
  (query (str "select * from users WHERE id = " (get-id request))))

(defn get-time-reports [request]
  (query (str "SELECT * FROM timereports WHERE userid = " (get-id request))))


;db stuff end
(def time-context
  (context "/time" []
    (GET "/:id" request (get-time-reports request))
    (GET "/report" [] "log your time here")))

(defroutes app-routes
  (GET "/" [] (login-page))
  (GET "/users" [] (get-users))
  (GET "/users/:id" request (get-user request))
  (GET "/second" [] "Second page")
  time-context
  (route/not-found "Not Found"))

(def app
  (wrap-defaults  app-routes site-defaults))

(def reloadable-app
  (wrap-reload app))
