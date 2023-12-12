<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

How to create secret in kubernetes - kubectl create secret docker-registry gcr-json-key --docker-server=us-east4-docker.pkg.dev --docker-username=\_json_key --docker-password="$(cat ./sleepr-407812-46f97d053087.json)" --docker-email=mint03sanzz@gmail.com

[--docker-server=]: Instructions Configuration Docker

kubeclt patch serviceaccount default -p '{"imagePullSecrets": [{"name": "gcr-json-key"}]}'
kubectl create deployment auth --image=us-east4-docker.pkg.dev/sleepr-407812/auth/production --dry-run=client -o yaml > deployment.yaml

kubectl create deployment payments --image=us-east4-docker.pkg.dev/sleepr-407812/payments/production --dry-run=client -o yaml > deployment.yaml

kubectl create deployment notifications --image=us-east4-docker.pkg.dev/sleepr-407812/notifications/production --dry-run=client -o yaml > deployment.yaml

kubectl create deployment reservations --image=us-east4-docker.pkg.dev/sleepr-407812/reservations/production --dry-run=client -o yaml > deployment.yaml

kubectl create secret generic mongodb --from-literal=connectionString=mongodb+srv://mint03sanzz:9xpsS2oc6YpOp7qs@sleepr.ont5poq.mongodb.net/

kubectl create secret generic stripe --from-literal=apiKey=sk_test_51OM0QuLkuQAgHu1cxz16tlVmEbY2Uq8EMRUNmLYH4jHNjJhtJvWdPFn8a40ZfQ3m7cf9B5CSrGBPEvCrXVLFaspP00Ar8GYpqw

kubectl get secrets
kubectl get secret mongodb -o yaml: watch details secret in mongodb.

kubectl create service clusterip notifications --tcp=3000 --dry-run=client -o yaml > templates/notifications/service.yaml
kubectl create service clusterip payments --tcp=3001 --dry-run=client -o yaml > templates/payments/service.yaml
kubectl create service clusterip auth --tcp=3002,3003 --dry-run=client -o yaml > templates/auth/service.yaml
kubectl create service nodeport reservations --tcp=3004 --dry-run=client -o yaml > templates/reservations/service.yaml

helm upgrade sleepr .

gcloud auth application-default login

<!-- Connect Kubenetes Engine Clusters- COnnect -->

gcloud container clusters get-credentials sleepr --region us-central1 --project sleepr-407812

kubectl get namespaces
kubectl get po -n kube-system

# show context we use

kubectl config get-contexts

> Current gke_sleepr-407812_us-central1_sleepr
> docker-desktop

# change context

kubectl config use-context docker-desktop

> gke_sleepr-407812_us-central1_sleepr
> Current docker-desktop

# edit refreshToken of google in google secret:

kubectl edit secret google

convert string to base64: echo -n "Hello World!" | base64
then edited, :wq exit

kubectl rollout restart deployment notifications

kubectl get ing
