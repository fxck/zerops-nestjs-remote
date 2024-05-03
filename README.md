# Zerops x Nest.js with remote development service

```yaml
project:
  name: nestjs-remote

services:
  - hostname: db
    type: postgresql@14
    mode: NON_HA

  - hostname: api
    type: nodejs@20
    ports:
      - port: 3000
        httpSupport: true
    buildFromGit: https://github.com/fxck/zerops-nestjs-remote
    enableSubdomainAccess: true

  - hostname: dev
    type: nodejs@20
    ports:
      - port: 3000
        httpSupport: true
      - port: 8080
        httpSupport: true
    verticalAutoscaling:
      minRam: 5
      maxRam: 5
      minCpu: 4
      maxCpu: 4
    maxContainers: 1
    buildFromGit: https://github.com/fxck/zerops-nestjs-remote
    enableSubdomainAccess: true
```
