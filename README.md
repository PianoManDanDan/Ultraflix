# Introduction 
This is the React website for a mock cinema company called "Ultraflix". This was a project done whilst on furlough during the 2020 Covid-19 pandemic, originally hosted on Azure but later ported over to Github. Some contributors don't have a Github account, so a full list of contributors is provided below:

**Developers:**
* Daniel Martin ([@PianoManDanDan](https://github.com/PianoManDanDan/))
* Thomas Williams ([@tefwilliams](https://github.com/tefwilliams/))
* Rachel Khan
* Georgie Partington
* Nicola Spicer ([@NSpicer](https://github.com/NSpicer/))

**QA Testers:**
* Anna Fillbrook ([@annafillbrook](https://github.com/annafillbrook/))

# Getting Started
1. Run `npm i`
2. Run `npm run start`

Alternatively, a live version of the project can be viewed online at [https://pianomandandan.github.io/Ultraflix/](https://pianomandandan.github.io/Ultraflix/).

# Available Scripts

In the project directory, you can run:

## `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm run start:prod`

Runs the app in production mode.<br/>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />

## `npm run storybook`

Runs storybook app.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## `npm run build`

Makes a development build of the app in the `/dist` folder.

## `npm run build:prod`

Makes a production build of the app in the `/dist` folder.

## `npm run build:prod-stats`

Makes a production build of the app in the `/dist` folder and also creates a webpack stats file called `webpack-stats.json` in the root of the repository. Running

```npx webpack-bundle-analyzer webpack-stats.json dist```

in the console will then allow you to see the size and structure of the output webpack bundles, making it easier to see where the size of the bundles can be trimmed down.

## `npm run view-build-stats`

Runs `npm run build:prod-stats` starts bundle analyzer server.
Open [http://127.0.0.1:8888](http://127.0.0.1:8888) to view it in the browser.


## `npm run predeploy`

Creates a production build. Used for publishing to gh-pages.

## `npm run deploy`

Deploys build to gh-pages.

## `npm run publish`

Runs `predeploy` and `deploy` scripts. Used to publish to gh-pages.


## `npm run test`

Run all tests.

## `npm run test:watch`

Run tests in watch mode (only runs tests that have been changed since they were last run).

## `npm run test:ci`

Run tests in ci mode.

## `npm run generate`

Generates new component with correct file structure and in correct place in app. If passed a name in the command (e.g. `npm run generate MyNewComponent`), it will use that name for the component. Otherwise it will ask you for a new component name in the console.

## `npm run lint`

Runs linting test over files. Does not apply fixes, just flags linting breaches as a warning.

## `npm run lint:fix`

Runs linting test over all files and applies fixes.

## `npm run eslint`

Runs eslint linting test.
