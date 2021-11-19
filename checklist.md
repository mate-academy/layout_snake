1. [STYLES] - Make sure you used `flexbox` in your solution.
2. [STYLES] - Don't write too many media queries. You have 3 base scenarios, so
chose the approach - mobile-first or desktop-first - and use it as starting
(default) case.
3. [STYLES] - Be careful using flex `order` rule. If you set order manually -
don't set same order value to several items, use unique numbers.
4. [STYLES] - Check the styles and make sure you don't write default styles
(like `display: block` for `div` or others).
5. [TASK] - Check your work on wide resolution (>1600px). There should be
maximum 3 blocks in a row.
6. [STYLES] - Get used to style all elements using classes. And don't increase
   selectors specificity unless completely necessary.

```html
<!--index.html:-->
<div
  class="container"
>
  <div class="block block--1">1</div>
  ...
</div>
```
GOOD example:
```css
/* style.css */
.block {
  height: 300px;
}
```

BAD example:
```css
/* style.css */
.container div {
  height: 300px;
}
```
7. [STYLES] - use alternative font-family in case the main one doesn't work
[like this](https://www.w3schools.com/cssref/pr_font_font-family.asp)
8. [STYLES] - if you use `box-sizing: border-box` property, use it with `*`
selector.
9. [TESTS] - Make sure to reset default margins for `body`
10. [TESTS] - Check your breakpoints - should it be at 600px or 599px?
