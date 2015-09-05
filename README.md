# RESTful Web API 

A bare bones [Node.js](https://nodejs.org/en/) setup to create a RESTful Web API using [Express](http://expressjs.com) and the compiler [Babel](https://babeljs.io/).

## Table of Contents
- [Requirements](#requirements)
- [Setup](#setup)
- [Run](#run)
- [Dev](#dev)
- [Security](#security)

<a name="requirements">
## Requirements

### [Node.js](http://nodejs.org/) & [npm](https://nodejs.org/download/)
Please install Node.js and npm. 
You may find it easier to use the Node Version Manager [nvm](https://github.com/creationix/nvm)

>Note this RESTful API was created using node v0.12.0



<a name="setup">
## Setup
Install npm dependencies:
```
$ npm i
```



<a name="run">
## Run
To run the application and build client side assets:
```
$ npm start
```

The application will be running on 
[http://localhost:8091](http://localhost:8091)



<a name="dev">
## Dev
To run the application and build client side assets whilst developing:
```
$ npm run watch
```



<a name="api">
## API
An example JSON response can be seen by visiting
[http://localhost:8091/v1](http://localhost:8091/v1)

Or to curl

```
curl -i -X GET http://localhost:8091/v1/
```


<a name="security">
## Security

Please follow best practice and **DO NOT** commit sensitive credentials to your repository. Ideally place these in a config store or a private S3 bucket.