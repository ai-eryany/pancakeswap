# PancakeSwap App

## Design principles

1. Mobile First Design & Atomic Design.
2. The sections:

   - `header` & `footer`: **will be '`position: relative`' & '`display: flex`' & '`background: background-color`'**
   - `section1` to `section7`: **will be '`position: relative`' & '`display: flex`'**

3. The wrappers are `flex-items`.

## Naming convention

- ### CSS/SASS/SCSS

  - Use BEM naming convention (Block-Element-Modifier)
    - Block -> `card`
    - Block\_\_Element -> `card__specs`
    - Block-Modifier -> `card--light` or `card--dark`

  ```
  .card {
    width: 100px;
    height: 200px;
    padding: 1rem;
    display: flex;
    justify-content: center;


    &__specs {
      // here are the elements inside the card
    }

    &__specs {
      // other elements
    }

    &--light {
      // color of the card itself. it effects the card class
      background-color: white;
    }

    &--dark {
      // color of the card itself. it effects the card class
      background-color: black;
    }

  }


  ```

- ### JAVASCRIPT (when we get there)

## Folder & files structure

- `icons` Folder contains all the ICO images.
- `images` Folder contains all the JPG/PNG/SVG images.
- `logos` Folder contains the website logo/brand and all the other logos.
  - Always write specific names that describes images. E.g. `section1-card.png`
- `scripts` Folder contains all the JAVASCRIPT files.
- `styles` Folder contains all the CSS/SASS/SCSS files.
  - `section.scss` File contains the section class.
  - `section-wrapper.scss` File contains the wrapper inside that section.
  - `section-wrapper-media.scss` File contains the desktop design.
- `.gitignore` File contains all the ignored files.
- `index.html` File contains all the HTML code for the landing page.
- `other.html` File contains 1 more single page besides the landing page, will be built after finishing the landing page.

## Code guidelines

- ### HTML

```
<!-- Behaves like a section -->
<header>

<!-- Behaves like a section-wrapper -->
  <nav>
  <!-- code here -->
  </nav>

</header>

<main>

  <section class="section1">
    <div class="section1-wrapper">
      <!-- code here -->
    </div>
  </section>

  <section class= "...section7">
    <div class="...section7-wrapper">
      <!-- code here -->
    </div>
  </section>

</main>

<!-- Behaves as a section -->
<footer>

  <section class="footer-wrapper">
  <!-- code here -->
  </section>

</footer>
```

- ### CSS/SCSS/SASS

  1. Write the code for the parent section class inside `section.scss`.
  2. `header.scss` & `footer.scss` are considered `section.scss`
  3. Inside `header` Folder the `nav/nav.scss` is considered `section-wrapper.scss`
  4. Write your code inside the `section-wrapper.scss` files.
  5. Nesting:

     - Maximum 2 deep layers

       ```
       .card {
         &__specs {
           // don't go deeper than this
         }
       }

       // if you want to go deeper write another class:
       .card__specs {
         card__specs-button {

         }
       }
       ```

     - Clean, simple code.

  6. Put all mixins in: `./styles/atomic/root/root_mixins.scss`
  7. Put all functions in: `./styles/atomic/root/root_functions.scss`
  8. Put all variables in `./styles/atomic/root/root.scss`

     - If you add vars, make sure to state that in the description of your Pull Request

  9. Put all resets in: `./styles/resets/resets.scss`
  10. Put all utility classes in: `./styles/utility/utility.scss`
  11. Put all type selectors in: `./styles/base.scss`
  12. Maintain the same folder structure. Don't add any new files excluding ICO/JPG/PNG/SVG
  13. Put all imports and @use in: `./styles/main/main.scss`
  14. Writing imports:
      - Write imports like this: `@use "./folder/file" as f;`
      - Not like this: `@use "./folder/file" as *;`
      - Call Vars like this: `file.var;`
  15. Always use `rem` instead of `px`, if you want to use `px` use the function `ConvertPxToRem()`
  16. Use `rem` over `px`, if you want to use `px` convert it using the functions inside `./styles/atomic/root_functions.scss`
## Testing Code

- You can test your code by compiling only the `./styles/main/main.scss` file
- You can test your code by compiling a specific file using the terminal by writing the command:
    - `sass --watch ./styles/<section>/<file>.scss <file>.css`

## Commits

- **Always write meaningful commit messages, don't write '`code added`' or '`changes`':) explain what you did briefly.**

## Team Work

- Always check Trello and update your cards.
