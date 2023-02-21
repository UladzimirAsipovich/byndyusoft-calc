import { ControlActions } from '../model/Calculator.model';
import type {
  T_CalculatorExpression,
  T_CalculatorHistory,
} from '../model/Calculator.types';

const refactHistory = (
  currentExpression: T_CalculatorExpression
): T_CalculatorHistory => {
  return currentExpression.map((element) => {
    switch (element) {
      case 'SQRT': {
        return ControlActions.SQRT;
      }
      case 'PERCENT': {
        return ControlActions.PERCENT;
      }
      case 'DIVIDE': {
        return ControlActions.DIVIDE;
      }
      case 'MULTIPLICATION': {
        return ControlActions.MULTIPLICATION;
      }
      case 'DECREMENT': {
        return ControlActions.DECREMENT;
      }
      case 'INCREMENT': {
        return ControlActions.INCREMENT;
      }
      default:
        return element.toString().replace('.', ControlActions.COMMA);
    }
  });
};

export default refactHistory;
