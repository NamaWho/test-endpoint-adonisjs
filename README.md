# Requirements

Backend must offer 3 endpoints:
1. Method GET - "/"
Must return backend version number (retrieved from package.json) in this format:
```json
{
    "name": "test.api",
    "version": "0.0.1"
}
```

2. Method POST - "/api/v1/login"
Let a user log into the platform. Login must be handled with JWT token. Refresh token is not required.
```json
{
    "code": "success",
    "user_id": 1,
    "access_token": {
    "type": "bearer",
    "token":

    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEwLCJpYXQiOjE2MTQ1OTMwMjksImV4cCI6M
    TYxNDU5NjYyOX0.HvwT7bPoXNg4lncFb3IUpPN37wn5Eh3MaD6ChVmrN3M",

    "refreshToken": null
}
```

3. Method GET - "/api/v1/user/:userId"
Returns user info. It must require JWT token of the user who's asking for his own details.



## Setup

Use the adonis command to install the blueprint

```bash
adonis new [project-name]
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

### Execution

Run the following command to run the server

```bash
adonis serve --dev
```