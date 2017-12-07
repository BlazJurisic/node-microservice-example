# Node Microservice Example

This example demonstrates a very simplistic registration flow using four services: Registration, Check Password, Check Username and User.

Any of the services can be started by changing to the appropriate directory and executing the `npm start` command (after an `npm install` of course).

## Registration Task Service

Provides registration functionality.

Listens on port `8960` by default.

### Endpoints

  * **Registration**
    * **Method**: `POST`
    * **URI**: `/users/:username`
    * **Payload**: Must contain a `password` and a `passwordAgain` field.
    * **Response**: `201 - Created` upon success, `400 - Bad Request` if the registration fails.

## Check Password Microservice

Checks if the password is long enough and the repeated password matches the original.

Listens on port `8970` by default.

### Endpoints

  * **Check**
    * **Method**: `POST`
    * **URI**: `/password/check`
    * **Payload**: Must contain a `password` and a `passwordAgain` field.
    * **Response**: `204 - No Content` upon success, `400 - Bad Request` if the validation fails.

## Check Username Microservice

Checks if the username is unique.

Listens on port `8980` by default.

### Endpoints

  * **Check**
    * **Method**: `GET`
    * **URI**: `/users/:username/check`
    * **Response**: `204 - No Content` upon success, `409 - Conflict` if the username exists.

## User Entity Service

Manages users.

Listens on port `8990` by default.

### Endpoints

  * **Get By Username**
    * **Method**: `GET`
    * **URI**: `/users/:username`
    * **Response**: `200 - OK` upon success, `404 - Not Found` if the user does not exist.
