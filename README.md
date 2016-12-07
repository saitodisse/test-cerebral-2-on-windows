## Running on windows

- Install latest version of node (https://nodejs.org/en/)
- Install latest version of yarn (https://yarnpkg.com/en/docs/install)
- Open Powershell with administrative privileges


More instructions: https://blog.risingstack.com/node-js-windows-10-tutorial/

```batch
Set-ExecutionPolicy Unrestricted -Scope CurrentUser -Force
npm install --global --production npm-windows-upgrade
npm-windows-upgrade
npm install --global --production windows-build-tools
https://blog.risingstack.com/node-js-windows-10-tutorial/
npm config set msvs_version 2015
mkdir create-react-app-folder
cd .\create-react-app-folder\
yarn init
yarn add create-react-app
.\node_modules\.bin\create-react-app ..\cerebral-example
cd ..\cerebral-example\
yarn run eject
yarn add -E cerebral@next cerebral-router@next cerebral-provider-http@next
yarn start
```