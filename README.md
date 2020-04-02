## Hello Calc

Experimental advanced calculator, reimagined as a modern app.

Why do Javascript calculators have to emulate a physical device? Do we really want to hunt and peck virtual keys on a screen?
On a tablet or smartphone, possibly, but not on a browser running on a computer with a keyboard and mouse.

This experiment reimagines a calculator as a modern serverless app complete with
* Expression evaluator with history stack, variables, expression library
* Graphing
* Editor based block evaluations
* And yes, if you want it, a homage to the desktop calculator (with RPN logic)

This has been built on top of my [hello-gatsby](https://github.com/ChristineTham/hello-gatsby.git) Gatsby starter kit template.
It uses the following technologies:
* [Gatsby](https://www.gatsbyjs.org)
* [React](https://reactjs.org)
* [Material UI](https://material-ui.com)
* [Redux and Redux Toolkit](https://redux.js.org)
* [MathJS](https://mathjs.org)
* [KaTeX](https://katex.org/)
* [Plotly JS](https://plotly.com/javascript/)
* [Monaco Editor](https://microsoft.github.io/monaco-editor/)
* [Typescript](https://www.typescriptlang.org)
* [Jest](https://jestjs.io/)
* [Storybook JS](https://storybook.js.org/)
* [Visual Studio Code](https://code.visualstudio.com/)

## Quick Start

#### 1. Run `yarn start`

This will install both run-time project dependencies and developer tools listed
in [package.json](../package.json) file.

#### 2. Run `gatsby develop`

This command will start the app

#### 3. Run `yarn lc`

This command will run type checking and check for formatting errors.

#### 4. Run `yarn test`

This command will run all unit tests using the Jest testing framework.

#### 5. Run `yarn storybook`

This command will start the Storybook server to view how the React components will render.

#### 6. Run `gatsby build`

This command will build a production build of the app that can be deployed as a set of static web pages.

#### 7. Run `yarn outdated`

This command will list which packages used by the app need refreshing.

#### 8. Run `yarn upgrade --latest`

This command will upgrade all outdated packages. Today is your lucky day!

## License

[MIT](https://github.com/ChristineTham/hellocalc-matui/raw/master/LICENSE)

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ChristineTham/hello-matui.git)
