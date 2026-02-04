# Use a lightweight Nginx image to serve the static content
FROM nginx:alpine

# Copy all local files to the Nginx default root directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
