# PancakeSwap App

## Design principles

1. Mobile First Design
1. Atomic Design
1. Sections:

   - `header`
     - `position: relative`
     - `display: flex`
     - `background: background-color`
   - `footer`

     - `position: relative`
     - `display: flex`
     - `background: background-color`

   - `sectionN`
     - `position: relative`
     - `display: flex`

1. Wrappers:
   - `flex-items`

## SCSS naming conventions

### BEM

- Block -> `card`
- Element -> `card__specs`
- Modifier -> `card--light` or `card--dark`

```scss
/* Block */
.card {
  // here are basic rule soft the card
  display: flex;

  /* Element */
  &__specs {
    // here are the rules of an element of a card
  }

  /* Modifier */
  &--light {
    // here is the color of the card
    background-color: white;
  }
}
```

## JS naming conventions

- coming soon...

## Folder & files structure

- `icons/` Folder contains all the ICO images.
- `images/` Folder contains all the JPG/PNG/SVG images.
  - Names of images should follow SCSS classes, e.g. `section1-card.png`.
- `logos/` Folder contains the website logo/brand and all the other logos.
- `scripts/` Folder contains all the JS files.
- `styles/` Folder contains all the SCSS files.
  - `styles/sectionN/` Folder named after a corresponding SCSS section.
    - `styles/sectionN/section.scss` File contains the section class.
    - `styles/sectionN/section-wrapper.scss` File contains the wrapper inside that section.
    - `styles/sectionN/section-wrapper-media.scss` File contains the desktop design.
- `atomic/` Folder contains the dynamic Modules that can be used across the website.
- `.gitignore` File contains all the ignored files.
- `index.html` File contains all the HTML code for the landing page.
- `other.html` File contains 1 more single page besides the landing page, will be built after finishing the landing page.

## Code guidelines

- ### General guidelines

  1. If the code is not clear, write comments.
  2. Functions Are your Friends :)
     - Use them all the time.
     - Create functions for small processes, each function should do only 1 thing.
  3. Use class name and then Camel-Case naming convention with vars. something like this: `$section-wrapperPadding`.
     - check the `root.scss` file, you can see many examples.
  4. Atomic design vars have only Camel-Case naming convention.
  5. Colors has the snake naming convention.
  6. Use VisBug extension on the browser to see the actual paddings, widths, heights etc. from the original website.

- ### HTML

```html
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

  <section class="...section7">
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

### CSS/SCSS/SASS

1. Write the code for the parent section class inside `section.scss`.
2. `header.scss` & `footer.scss` are considered `section.scss`.
3. Inside `header/nav` Folder the `nav.scss` is considered `section-wrapper.scss`.
4. Write your code inside the `section-wrapper.scss` files.
5. Nesting:

   - Maximum 2 deep layers:

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

6. Put all mixins in: `./styles/atomic/root/root_mixins.scss`.
7. Put all functions in: `./styles/atomic/root/root_functions.scss`.
8. Put all variables in `./styles/atomic/root/root.scss`.

   - If you add vars, make sure to state that in the description of your Pull Request.

9. Put all resets in: `./styles/base/resets.scss`.
10. Put all type selectors in: `./styles/base.scss`.
11. Maintain the same folder structure. Don't add any new files excluding ICO/JPG/PNG/SVG.
    - If you add a new file other than images, make sure to state that in the group chat in discord, and don't forget to import it in `./styles/main/main.scss`.
12. Writing imports:

    - Write imports like this: `@use "./folder/file" as f;`.
    - Not like this: `@use "./folder/file" as *;`.
    - Call Vars like this: `file.var;`.

13. Use `rem` over `px`, if you want to use `px` convert it using the functions inside `./styles/atomic/root_functions.scss`.
14. Use the provided atomic designs when it comes to buttons, links, or animation.
15. Never use the keyword `!important`.
16. Never use inline CSS.
17. All wrappers has only MaxWidth of 1152px, name of the variable with the root: `root.$wrappersMaxWidth`

## Testing Code

- You can test your code by compiling only the `./styles/main/main.scss` file.
- You can test your code by compiling a specific file using the terminal by writing the command:
  - `sass --watch ./styles/<section>/<file>.scss <file>.css`.

## Commits naming convention

- e.g. `Added navbar languages menu`
- e.g. `Fixed navbar horizontal scrollbar bug`

## Team Work

- Always check Trello and update your cards.
- Read commits log and see what's new.

## VS code instructions

- Install these extensions and learn how to use them, (you can search by publisher filter):

  1. Banner comments. -- publisher:"HEYIMFUZZ"
  2. Better Comments. -- publisher:"Aaron Bond"
  3. Code spell checker. -- publisher:"Street Side Software"
  4. GitLens. -- publisher:"GitKraken"
  5. SCSS IntelliSense. -- publisher:"mrmlnc"
  6. Todo Tree -- publisher:"Gruntfuggly"

- Activate the MiniMap to see the Banner comments.
