# curli-templates-module
Templates  for  the [Curli framework](https://github.com/CarlosCraviotto/curli-core/).

[![Build Status](https://travis-ci.org/CarlosCraviotto/curli-templates-module.svg?branch=master)](https://travis-ci.com/github/CarlosCraviotto/curli-templates-module)



### Installation

Install by `npm`

```sh
npm install --save curli-templates-module
```


#### Basic Usage

**1 - In the configurations file, declare  de followings properties:**

**@TEMPLATE_EXTENSIONS**: (Array<string>) A list of extension, should be ['hbs', 'handlebars'].
**@TEMPLATE_USE_FILE_PATH_IN_ID** (boolean) If we want add the path to the file into the id.

**2 - Add the module definer:**

```typescript
import {TemplatesModuleDefiner} from "curli-templates-module";

app.addModulesDefiner(new TemplatesModuleDefiner(app));
```

**3 - Attach templates paths to the service**

```typescript
public registerTemplates(templatesService: TemplatesService): void {
    dataMappers.registerPath({path: 'templates/'});
}
```

**4 - Compile the template**

```typescript
await this.container.get('templates').compile('user', {"name": "John"})
```



### Commands

 - `npm run build`: Build the project (Curli templating).
 - `npm run build:clean`: Delete first the dist folder and build it.
 - `npm run clean`: Delete the dist folder.
 - `npm run test`: Execute the tests.
 - `npm run test:coverage`:  Execute the tests and calculate the coverage.
 - `npm run lint`: Check the code using the rules in .eslintre.js
 - `npm run lint:fix`: Check the code and try to fix it.



### License

MIT
