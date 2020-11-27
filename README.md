# ngb-contentful

A working [demo](https://contentful.vsoft.be)

[Use Contentful](https://be.contentful.com) as your prefered content supplier for all your projects

[Sebastian Eschweiler Youtube tutorial](https://www.youtube.com/watch?v=KhmjLjvlmyQ) is a good starting point to learn implementing contenful in Angular projects.

## Getting started for developers

- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/openSource4Brokers/ngb-contentful.git`
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app

- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap`
- [contentful](https://www.npmjs.com/package/contentful): `npm i contentful`
- [marked](https://www.npmjs.com/package/marked): `npm i marked`

- or install all packages with a single instruction: `npm i bootstrap contentful marked`

## styles.scss

For use of bootstrap, add also into your global styles.scss:

```bash
@import "~bootstrap/dist/css/bootstrap.min.css";
html {
  font-size: 14px;
}
```

## warnings for contentful

In angular.json, to avoid CommonJs warnings, add **allowedCommonJsDependencies** in the options section for **axios and marked**:

```bash
"builder": "@angular-devkit/build-angular:browser",
          "options": {

            "allowedCommonJsDependencies": [
              "axios",
              "marked"
            ],

```

## Updating Angular 10

This app is on a version of Angular 10.
Before starting an update to latest version of 10, you have to commit first

update to latest Angular:
`ng update @angular/cli@10 @angular/core@10`
Follow the instructions eventualy for fixes
