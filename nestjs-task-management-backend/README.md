https://github.com/msichterman/nestjs-task-management/tree/master
https://www.youtube.com/watch?v=aQG8O1B4B5w&list=PLIrsP8dft12A85u3t0i8l4GJufbNDKw5m


To create a module
`nest g module <name of module>`
To create controller. --no-spec is for not generating test files
`nest g controller <name of controller> --no-spec`
To create service
`nest g service <name of service> --no-spec`

=========================================================

Deploy to aws. 
https://medium.com/@devlexus/deploying-a-nestjs-application-to-aws-a-step-by-step-guide-92404d215118

When doing `npm run build`, throws many lines of error that say `asserts this is NodePath`
Error went away after `npm install typescript@latest -D`
This creates the dist folder with compiled js files.

Have to zip all the files in the repo, then upload to elastic beanstalk.

Had to change start to node dist/main.js in package.json so elastic beanstalk will know how to start. If not, it will throw a 502 not found nginx error.

In elastic beanstalk, have to set environment variables to this:

CLIENT_ORIGIN	75.80.39.194  <-- This is my local ip
JWT_SECRET	jkhhjhhh888  <-- anything
NODE_ENV	production
PORT	5000
RDS_DB_NAME	taskmanagement
RDS_HOSTNAME	awseb-e-2gupyujmke-stack-awsebrdsdatabase-4ztughoh8mmz.cfwn9prp85ta.us-west-1.rds.amazonaws.com  <-- this comes from RDS endpoint that gets created
RDS_PASSWORD	myNestPassword1
RDS_PORT	3306   <-- default for mysql
RDS_USERNAME	myNestUser1
TYPEORM_SYNC	true

Postman request will look something like
http://nest2-env.eba-fchuwtt2.us-west-1.elasticbeanstalk.com/auth/signup






============================================================

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
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
