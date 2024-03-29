# TO START APP RUND NPM RUN ANDROID ON WINDOWS
## TODOS

- Add Authentication 







# React Native Template App

## Prerequisites

- Make sure your system is setup to run a React Native application by following the [setup guide](https://reactnative.dev/docs/environment-setup)
- Set up an Atlas account and [deploy a cluster](https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/)
- Set up an application in App Services.

  - You can use the [`realm-cli`](https://www.mongodb.com/docs/atlas/app-services/cli/) to set up the backend and download a copy of this template:

    ```
    realm-cli apps create -n "<App Name>" --template "react-native.todo.flex"
    ```

## Configuration

Ensure `atlasConfig.json` exists and contains the following properties:

- **appId:** your Atlas App Services App ID.
- **baseUrl:** the App Services backend URL. This should be https://realm.mongodb.com in most cases.

### Cloning from GitHub

If you have cloned this repository from the GitHub
[mongodb/template-app-react-native-todo](https://github.com/mongodb/template-app-react-native-todo.git)
repository, you must create a separate App Services App with Device Sync
enabled to use this client. You can find information about how to do this
in the Atlas App Services documentation page:
[Template Apps -> Create a Template App](https://www.mongodb.com/docs/atlas/app-services/reference/template-apps/)

Once you have created the App Services App, replace any value in this client's
`appId` field with your App Services App ID. For help finding this ID, refer
to: [Find Your Project or App Id](https://www.mongodb.com/docs/atlas/app-services/reference/find-your-project-or-app-id/)

### Download the Client as a Zip File

If you have downloaded this client as a .zip file from the Atlas App Services
UI, it does not contain the App Services App ID. You must replace any value
in this client's `appId` field in `atlasConfig.json` with your
App Services App ID. For help finding this ID, refer to:
[Find Your Project or App Id](https://www.mongodb.com/docs/atlas/app-services/reference/find-your-project-or-app-id/)

## How to Run the Application:

- Make sure you are in this directory
- `npm install`
- `npx pod-install` if on Mac
- `npm run ios` (or `npm run android`, if you have an emulator running. Note: If you have not set up your development environment for running react-native android apps, see: https://reactnative.dev/docs/environment-setup)

## Issues

Please report issues with the template at https://github.com/mongodb-university/realm-template-apps/issues/new
