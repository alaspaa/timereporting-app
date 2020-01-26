(ns timeapp.controller.utility
  (:require [clj-time.core :as tm]))

(def dow (tm/day-of-week (tm/today)))

(def week (tm/week-number-of-year (tm/today)))

