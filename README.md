# cors-proxy
Simple NodeJS app to provide a simple way to bypass CORS.

Sometimes in life, you create the API's. Sometimes you need to develop your
apps using other people API and you can't change the CORS headers by yourself, 
so basically you'll need to create your own backend service to deal with the API
for you and forward what was requested to your application.

To ease things for me a bit, I created this simple little app to deal with
cors for a desired URL to me.

## Usage
To start the service:

### Dev:
`npm run serve:dev {port}`

### Prod:
`npm run serve:prod {port}`

Requesting:

`GET http://{host}:{port}/fetch?url={api-url-here}`

`POST http://{host}:{port}/fetch?url={api-url-here}`

## Limitations

This app was intended to be simple and was initially designed for my needs,
but for now it supports **GET** and **POST** requests. Planning to support
other kinds of requests soon.