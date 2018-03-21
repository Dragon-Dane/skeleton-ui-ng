# Start with nginx alpine
FROM nginx:1.13-alpine
# Copy dist/ to /usr/share/nginx/html/
COPY dist/ /usr/share/nginx/html/
# Application should be accessible on port 80
# Note: This is the default port exposed by the nginx image
