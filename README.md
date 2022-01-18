# carbon-screenshots
Npm package to generate carbon images


# The Package consist in parsing text and get the Carbon Screenshot engine

## Install

```bash
npm install carbon-screenshots
```

or

```bash
yarn add carbon-screenshots
```

# Example

```typescript
import { phraseGenerator } from "carbon-screenshots";

const text = 'Adding a text to carbon to get its screenshot'

 const { body, image } = await phraseGenerator(
        text,
        "json",
        "Seti",
        `${__dirname}/../public/images/`,
      );


constole.log(body, image); //`body` returns the text you added , `image` will return the image path.
```