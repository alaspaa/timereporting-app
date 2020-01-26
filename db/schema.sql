CREATE DATABASE time;
\c time
CREATE TABLE users (
  id INTEGER,
  username VARCHAR(50) UNIQUE,
  password VARCHAR(50),

  PRIMARY KEY(id)
);

CREATE TABLE timereports (
  userid INTEGER,
  timereport INTEGER NOT NULL,
  reportdate DATE,

  PRIMARY KEY (userid, reportdate),
  CONSTRAINT timereports_userid_users_id FOREIGN KEY (userid) REFERENCES users(id)
);

CREATE TABLE bankholidays (
  holiday DATE,

  PRIMARY KEY(holiday)
);
