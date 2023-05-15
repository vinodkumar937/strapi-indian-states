# Strapi plugin strapi-indian-states

Add Indian States & District info to your strapi project

## ⏳ Installation

Install Strapi with this **Quickstart** command to create a Strapi project instantly:

- (Use **yarn** to install the Strapi project (recommended). [Install yarn with these docs](https://yarnpkg.com/lang/en/docs/install/).)

```bash
# with yarn
yarn create strapi-app my-project --quickstart

# with npm/npx
npx create-strapi-app my-project --quickstart
```

_This command generates a brand new project with the default features (authentication, permissions, content management, content type builder & file upload). The **Quickstart** command installs Strapi using a **SQLite** database which is used for prototyping in development._

Add the `strapi-indian-states` plugin

```bash
yarn add strapi-indian-states@latest

# or

npm i -S strapi-indian-states@latest
```

Add the following config to `/config/plugins.js` file
```
module.exports = {
  "strapi-indian-states": {
    enabled: true,
  },
};

```
In case you don't have a plugins.js file, please create one.

After successful installation you've to build a fresh package that includes plugin UI. To archive that simply use:

```bash
yarn build && yarn develop

# or

npm run build && npm run develop
```

or just run Strapi in the development mode with `--watch-admin` option:

```bash
yarn develop --watch-admin

#or

npm run develop --watch-admin
```

## Routes
```bash
http://localhost:1337/strapi-indian-states/getStates

http://localhost:1337/strapi-indian-states/getDistricts/:state
```



