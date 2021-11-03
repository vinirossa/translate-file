import { Language } from './language'
import { Extension } from './extension'

export type FormattingFunction = (data: string) => string

export type FormattingRule = {
  readonly default: FormattingFunction
} & {
  readonly [key in Language]?: FormattingFunction
}

export type FormattingRules = {
  readonly default: FormattingFunction
} & {
  readonly [key in Extension]?: FormattingRule
}
