# Introduction 
This is the React frontend for the Ultraflix website.

# Getting Started
1. Run `npm i`
2. Run `npm start`


TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:
1.	Installation process
2.	Software dependencies
3.	Latest releases
4.	API references

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Available Scripts

In the project directory, you can run:

## `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## `npm run start:prod`

Runs the app in production mode.<br/>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

## `npm run storybook`

Runs storybook app.
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

## `npm run build`

Makes a development build of the app in the `/dist` folder.

## `npm run build:prod`

Makes a production build of the app in the `/dist` folder.

## `npm run build:prod-stats`

Makes a production build of the app in the `/dist` folder and also creates a webpack `stats.json` file in the root of the repository. Running

```npx webpack-bundle-analyzer stats.json dist```

in the console will then allow you to see the size and structure of the output webpack bundles, making it easier to see where the size of the bundles can be trimmed down.

## `npm run test`

Run all tests.

## `npm run test:watch`

Run tests in watch mode (only runs tests that have been changed since they were last run).

## `npm run test:ci`

Run tests in ci mode.

## `npm run generate`

Generates new component with correct file structure and in correct place in app. If passed a name in the command (e.g. `npm run generate MyNewComponent`), it will use that name for the comnponent. Otherwise it will ask you for a new component name in the console.

## `npm run lint`

Runs linting test over files. Does not apply fixes, just flags linting breaches as a warning.

## `npm run lint:fix`

Runs linting test over all files and applies fixes.

## `npm run eslint`

Runs eslint linting test.
