# Design approach

- Start mobile first
- Media queries will contain the desktop design
- Write your code inside the section-wrapper.SCSS file, but don't nest to much code, try to make maximum 2 deep layers, not more than that.. don't complicate the code.
- Write all the mixins and functions inside the folder `./styles/atomic/root`, there you will find: `root_functions.SCSS` for functions and `root.mixin.SCSS` for mixins.

- You can find all the variables inside the `root.SCSS` file, you can also add variables here, but make sure to state that when writing the commits.

- Inside `./styles/base` folder you will find the `base.SCSS` which contains only the type selectors, write all the type selectors in this file.

- Inside `./styles/header` folder you will find the `header.SCSS` handle with it as the `section.SCSS`, and same goes to the `./styles/footer` folder and file as well

- You can see the folders from `./styles/section1` to `./styles/section7` and all of them contain the same folder structure. same goes for `./styles/header` and `./styles/footer` and `intro_slide`

- You can find all the resets inside the folder `./styles/resets` which contains the file `resets.SCSS`

- You can find all the utility small classes inside the folder `./styles/utility`.

- all these sections will be imported inside the `main.SCSS` inside the `./styles/main` folder, and all the sections will be compiled in there.

- I added the `.gitignore` to remove all the other files that can be created without noticing, like the `*.css.map` that gets created from the sass compiler.

- You can test your code normally by running the `./styles/main/main.SCSS`

- So far there will be 3 media queries per section.

- Always write a meaningful commit messages, don't write "codes add" :) explain what you did briefly.

- The folder `./icons` will contain only icons and when you name them make sure to write the section name on the icon name like `section2-face-icon.ico`

- The folder `./images` will contain only images and when you name them make sure to write the section name on the image name like `section2-card.jpg`

- The folder `./logos` will contain the logo of the website and also make sure to create a unique name for the logo

- The folder `./scripts` will contain the javascript later on in the project

- The `index.html` will contain your the html codes like this

```
<header>
</header>

<main>

  <section class="section1">
    <div class="section1-wrapper"> </div>
  </section>

  <section class= "...section7">
    <div class=".section7-wrapper"> </div>
  </section>

</main>

<footer>
</footer>
```
