# number-max-precision

Limit the count of using `font-face` at-rule.

```css
@font-face { font-family: FirstExample; src: url(first-example.ttf); }
/**  ↑
 * Count of using `font-face` */
```

## Options

`int`: Maximum number of `font-face` at-rule allowed.

For example, with `2`:

The following patterns are considered warnings:

```css
@font-face { 
  font-family: FirstExample; 
  src: url(first-example.ttf); 
}

@font-face { 
  font-family: SecondExample; 
  src: url(second-example.ttf); 
}

@font-face { 
  font-family: ThirdExample; 
  src: url(third-example.ttf); 
}
```

The following patterns are *not* considered warnings:

```css
@font-face { 
  font-family: FirstExample; 
  src: url(first-example.ttf); 
}
```

```css
@font-face { 
  font-family: FirstExample; 
  src: url(first-example.ttf); 
}

@font-face { 
  font-family: SecondExample; 
  src: url(second-example.ttf); 
}
```
