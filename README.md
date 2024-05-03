```
project:
  name: nestjs-remote
services:
  - hostname: db
    type: postgresql@14
    mode: NON_HA

  - hostname: api
    type: nodejs@20
    envSecrets:
      DB_HOST: db
      DB_NAME: db
      DB_PASS: ${db_password}
      DB_PORT: "5432"
      DB_USER: ${db_user}
      URL: ${zeropsSubdomain}
    ports:
      - port: 3000
        httpSupport: true
    buildFromGit: https://github.com/fxck/nestjs-remote
    enableSubdomainAccess: true

  - hostname: apidev
    type: nodejs@20
    envSecrets:
      DB_HOST: db
      DB_NAME: db
      DB_PASS: ${db_password}
      DB_PORT: "5432"
      DB_USER: ${db_user}
      URL: ${zeropsSubdomain}
    ports:
      - port: 3000
        httpSupport: true
      - port: 8080
        httpSupport: true
    verticalAutoscaling:
      cpuMode: SHARED
      minRam: 5
      maxRam: 5
      minCpu: 4
      maxCpu: 4
    maxContainers: 1
```
