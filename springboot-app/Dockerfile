FROM maven:3.6-jdk-8-alpine
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN mvn install

FROM openjdk:8-jre-alpine
WORKDIR /app
COPY --from=0 /usr/src/app/target/login_register-0.0.1-SNAPSHOT.jar /app
CMD ["java", "-jar", "login_register-0.0.1-SNAPSHOT.jar"]
