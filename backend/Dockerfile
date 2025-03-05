FROM amazoncorretto:22
LABEL version="1.0"
EXPOSE 8080

WORKDIR /app

# Copy the JAR file from the host's target directory to the container
COPY build/libs/project-0.0.1-SNAPSHOT.jar /app/docker-demo.jar

ENTRYPOINT ["java", "-jar", "docker-demo.jar"]