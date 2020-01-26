(ns time-reporting.prod
  (:require [time-reporting.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
