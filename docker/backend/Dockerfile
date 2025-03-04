#Build stage
FROM maven:3.8.7-openjdk-18 AS build
WORKDIR /build
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn clean package -DskipTests

#Runtime stage
FROM amazoncorretto:17
#define fer things (default value of application arguments)
ARG PROFILE=dev
ARG APP_VERSION=1.1.0


WORKDIR /app

# write * instead of version
COPY --from=build /build/target/borrow-book-network-*.jar /app/

EXPOSE 8088

ENV DB_URL=jdbc:postgresql://postgres-sql-bbsn:5432/borrow_book_social_network
ENV ACTIVE_PROFILE=${PROFILE}
ENV JAR_VERSION=${APP_VERSION}

CMD java -jar -Dspring.profiles.active=${ACTIVE_PROFILE} -Dspring.datasource.url=${DB_URL} borrow-book-network-${JAR_VERSION}.jar


#to start a build is needed to start docker desctop (on Windows) and run a command: docker build -t bsn/bsn:1.1.0 -f ../docker/backend/Dockerfile .