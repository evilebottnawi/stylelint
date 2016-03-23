import { isNumber } from "lodash"
import {
  report,
  ruleMessages,
  validateOptions,
} from "../../utils"

export const ruleName = "font-face-max-count"

export const messages = ruleMessages(ruleName, {
  expected: (count, countUsed) => `Expected ${count} "font-face" at-rule, but used ${countUsed} at-rule`,
})

const fontFaceAtRule = "font-face"

export default function (count) {
  return (root, result) => {
    const validOptions = validateOptions(result, ruleName, {
      actual: count,
      possible: [isNumber],
    })
    if (!validOptions) { return }

    let countUsed = 0

    root.walkAtRules(atRule => {
      if (atRule.name.indexOf(fontFaceAtRule) !== 0) { return }

      countUsed++

      if (countUsed > count) {
        report({
          message: messages.expected(count, countUsed),
          node: atRule,
          ruleName,
          result,
        })
      }
    })
  }
}
