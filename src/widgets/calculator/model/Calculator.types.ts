import { ControlActions } from './Calculator.model';

/** Тип действий кнопок (возможностей) калькулятора */
export type T_ControlActionsKeys = keyof typeof ControlActions;

/** Тип стейта операций */
export type T_Operation = Extract<
  T_ControlActionsKeys,
  'PERCENT' | 'SQRT' | 'DIVIDE' | 'DECREMENT' | 'INCREMENT' | 'MULTIPLICATION'
> | null;

/** Интерфейс возможностей (кнопок) калькулятора */
export interface I_CalculatorControl {
  action: keyof typeof ControlActions;
  value: typeof ControlActions[T_ControlActionsKeys];
  title: string;
  keyboardAlias?: string | string[];
}

/** Интерфейс SSR передаваемых пропсов в калькулятор */
export interface I_CalculatorProps {
  calculatorControls: I_CalculatorControl[][];
}

/** Тип выражения калькулятора */
export type T_CalculatorExpression = (
  | Extract<
      I_CalculatorControl['action'],
      | 'PERCENT'
      | 'SQRT'
      | 'DIVIDE'
      | 'DECREMENT'
      | 'INCREMENT'
      | 'MULTIPLICATION'
    >
  | string
  | number
)[];

/** Тип стейта истории калькулятора */
export type T_CalculatorHistory = T_CalculatorExpression;

/** Тип стейта результата калькулятора */
export type T_CalculatorResult = number | null;

/** Тип передаваемых пропсов возможностей (кнопок) калькулятора */
export type T_CalculatorControls = I_CalculatorControl[][];
