(ns timeapp.connection.pool
  (:require [clojure.java.jdbc :as jdbc]
            [jdbc.pool.c3p0    :as pool]))

(def db-uri
  (java.net.URI.
    "postgresql://db:5432/time"))

(def spec
  (pool/make-datasource-spec
    {:classname "org.postgresql.Driver"
     :subprotocol "postgresql"
     :user "postgres"
     :password "time"
     :subname (if (= -1 (.getPort db-uri))
                (format "//%s%s" (.getHost db-uri) (.getPath db-uri))
                (format "//%s:%s%s" (.getHost db-uri) (.getPort db-uri) (.getPath db-uri)))}))

(defn query [query-string]
  (-> (jdbc/query spec
                  [(str query-string)])))
