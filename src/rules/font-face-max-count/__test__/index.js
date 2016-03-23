import testRule from "../../../testUtils/stylelint-test-rule-tape"
import rule, { ruleName, messages } from ".."

testRule(rule, {
  ruleName,
  config: [0],

  accept: [{
    code: "a { color: red }",
  }],

  reject: [{
    code: "@font-face { font-family: Example; src: url(example.ttf); }",
    message: messages.expected(0, 1),
    line: 1,
    column: 1,
  }],
})

testRule(rule, {
  ruleName,
  config: [1],

  accept: [{
    code: "@font-face { font-family: Example; src: url(example.ttf); }",
  }],

  reject: [{
    code: "@font-face { font-family: Example; src: url(example.ttf); } "
      + "@font-face { font-family: Example1; src: url(example1.ttf); }",
    message: messages.expected(1, 2),
    line: 1,
    column: 61,
  }],
})

testRule(rule, {
  ruleName,
  config: [2],

  accept: [ {
    code: "@font-face { font-family: Example; src: url(example.ttf); }",
  }, {
    code: "@font-face { font-family: Example; src: url(example.ttf); }"
      + "@font-face { font-family: Example1; src: url(example1.ttf); }",
  } ],

  reject: [{
    code: "@font-face { font-family: Example; src: url(example.ttf); } "
      + "@font-face { font-family: Example; src: url(example.ttf); }"
      + "@font-face { font-family: Example; src: url(example.ttf); }",
    message: messages.expected(2, 3),
    line: 1,
    column: 120,
  }],
})
