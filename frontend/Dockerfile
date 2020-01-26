FROM debian:bullseye

RUN apt-get update -y
RUN apt-get upgrade -y
RUN apt-get install -y openjdk-11-jdk
RUN apt-get install curl -y
#Leiningen
RUN curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > lein
RUN mv lein /usr/local/bin/lein
RUN chmod a+x /usr/local/bin/lein

WORKDIR /home/app

CMD lein figwheel
