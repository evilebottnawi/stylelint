import testRule from "../../../testUtils/testRule"

import rule, { ruleName, messages } from ".."

testRule(rule, {
  ruleName,
  config: ["always"],

  accept: [ {
    code: "@media (max-width= 600px) {}",
  }, {
    code: "@media (max-width > 600px) {}",
  }, {
    code: "@media (max-width>= 600px) and (min-width<= 3em) {}",
  } ],

  reject: [ {
    code: "@media (max-width<600px) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width<=  600px) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width=\t600px) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width>\n600px) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width>\r\n600px) {}",
    description: "CRLF",
    message: messages.expectedAfter(),
    line: 1,
    column: 19,
  }, {
    code: "@media (max-width>=600px) and (min-width< 3em) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width> 600px) and (min-width=3em) {}",
    message: messages.expectedAfter(),
    line: 1,
    column: 42,
  } ],
})

testRule(rule, {
  ruleName,
  config: ["never"],

  accept: [ {
    code: "@media (max-width =600px) {}",
  }, {
    code: "@media (max-width>600px) {}",
  }, {
    code: "@media (max-width >=600px) and (min-width <=3em) {}",
  } ],

  reject: [ {
    code: "@media (max-width < 600px) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width <=  600px) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 21,
  }, {
    code: "@media (max-width =\t600px) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width >\n600px) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width >\r\n600px) {}",
    description: "CRLF",
    message: messages.rejectedAfter(),
    line: 1,
    column: 20,
  }, {
    code: "@media (max-width >= 600px) and (min-width <3em) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 21,
  }, {
    code: "@media (max-width >600px) and (min-width = 3em) {}",
    message: messages.rejectedAfter(),
    line: 1,
    column: 43,
  } ],
})
