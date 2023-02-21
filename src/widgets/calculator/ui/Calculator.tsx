import type {
  I_CalculatorControl,
  T_CalculatorHistory,
  T_CalculatorResult,
  T_Operation,
  T_CalculatorExpression,
  I_CalculatorProps,
} from '../model/Calculator.types';
import { memo, useCallback, useEffect, useState } from 'react';
import styles from '../styles/Calculator.module.scss';
import Display from './display/Display';
import Controls from './controls/Controls';
import calculateExpression, { Tests } from '../helpers/calculateExpression';
import refactHistory from '../helpers/refactHistory';
import { MAX_DIGIT_VALUE_LENGTH } from '../model/Calculator.const';
// import keyBoardListener from '../helpers/keyBoardListener';

const Calculator: React.FC<I_CalculatorProps> = memo(
  ({ calculatorControls }) => {
    const [result, setResult] = useState<T_CalculatorResult>(null);
    const [operation, setOperation] = useState<T_Operation>(null);
    const [expression, setExpression] = useState<T_CalculatorExpression>([]);
    const [history, setHistory] = useState<T_CalculatorHistory>([]);

    const establishHistory = useCallback(
      (currentExpression: T_CalculatorExpression) => {
        setHistory(refactHistory(currentExpression));
      },
      []
    );

    const establishExpression = useCallback(
      (calculatorAction: I_CalculatorControl) => {
        switch (calculatorAction.action) {
          case 'CLEAR': {
            setExpression((prevState) => {
              if (prevState.length) {
                prevState.pop();
                return [...prevState];
              }
              setResult(null);
              return [];
            });
            setOperation(() => {
              if (expression.length > 1) {
                return expression[expression.length - 1] as typeof operation;
              }
              return null;
            });
            break;
          }
          case 'EQUAL': {
            setResult(() => {
              const result = calculateExpression(expression);
              return result;
            });

            setExpression([]);
            break;
          }
          case 'SQRT':
          case 'PERCENT':
          case 'DIVIDE':
          case 'MULTIPLICATION':
          case 'DECREMENT':
          case 'INCREMENT': {
            if (expression.length === 0 && result === null) {
              return;
            }

            if (expression.length === 0 && result !== null) {
              setExpression(() => {
                return [result, calculatorAction.action];
              });
              setOperation(calculatorAction.action);
              return;
            }

            if (expression.length === 1 && !operation) {
              setExpression((prevState) => {
                return [...prevState, calculatorAction.action];
              });
              setOperation(calculatorAction.action);
              return;
            }

            if (expression.length && operation) {
              setExpression((prevState) => {
                let last = prevState.pop() as string;
                if (last === 'PERCENT' || last === 'SQRT') {
                  if (
                    calculatorAction.action === 'PERCENT' ||
                    calculatorAction.action === 'SQRT'
                  ) {
                    return [...prevState, calculatorAction.action];
                  }
                  return [...prevState, last, calculatorAction.action];
                }
                if (last === calculatorAction.action) {
                  return [...prevState, last];
                }
                return [...prevState, calculatorAction.action];
              });
              setOperation(calculatorAction.action);
              return;
            }

            setExpression((prevState) => {
              if (prevState[prevState.length - 1]) {
                return [...prevState, calculatorAction.action];
              }
              prevState.pop();
              prevState.pop();
              return [...prevState, calculatorAction.action];
            });
            setOperation(calculatorAction.action);
            break;
          }
          default: {
            if (
              expression.length &&
              expression[expression.length - 1].toString().length >
                MAX_DIGIT_VALUE_LENGTH
            )
              return;

            if (
              expression.length &&
              (expression[expression.length - 1].toString() === 'SQRT' ||
                expression[expression.length - 1].toString() === 'PERCENT')
            ) {
              return;
            }

            const withReplacedComma =
              calculatorAction.value === ','
                ? '.'
                : calculatorAction.value.toString();

            if (!operation) {
              setExpression((prevState) => {
                if (prevState.length === 0) {
                  if (withReplacedComma === '.') {
                    return ['0.'];
                  }
                  if (withReplacedComma === '00') {
                    return [];
                  }
                  return [withReplacedComma];
                }
                if (prevState.length === 1) {
                  if (
                    prevState[0].toString().includes('.') &&
                    withReplacedComma === '.'
                  ) {
                    return [...prevState];
                  }
                  return [prevState[0] + withReplacedComma];
                }

                let last = prevState.pop() as string;

                if (last.includes('.') && withReplacedComma === '.') {
                  return [...prevState, last];
                }

                if (last.length === 0 && withReplacedComma === '00') {
                  return [...prevState, ''];
                }

                return [...prevState, last + withReplacedComma];
              });
            } else {
              setExpression((prevState) => {
                if (withReplacedComma === '.') {
                  return [...prevState, '0.'];
                }
                if (withReplacedComma === '00') {
                  return [...prevState, ''];
                }
                return [...prevState, withReplacedComma];
              });
            }
            setOperation(null);
            break;
          }
        }
      },
      [expression, operation, result]
    );

    useEffect(() => {
      // console.log(expression);
      establishHistory(expression);
    }, [establishHistory, expression]);

    //** Своего рода JEST ¯\_(ツ)_/¯ */
    // useEffect(() => {
    //   console.clear();
    //   Tests.forEach((testExpression, index) => {
    //     const result = calculateExpression(testExpression.expression);
    //     if (result !== testExpression.toBe) {
    //       console.log(
    //         '%c%s',
    //         'color: yellow;',
    //         `${index + 1} ---------------------------------`
    //       );
    //       console.log(
    //         '%c%s',
    //         'color: #fff; padding: 8px; background-color: red; font-weight: bold;',
    //         'Ошибка',
    //         'Выражение №',
    //         index + 1,
    //         'РЕЗУЛЬТАТ',
    //         result,
    //         'ДОЛЖНО БЫТЬ',
    //         testExpression.toBe
    //       );
    //       console.log(testExpression.expression);
    //       console.log(
    //         '%c%s',
    //         'color: yellow;',
    //         `${index + 1} ---------------------------------`
    //       );
    //     }
    //   });
    // }, []);

    // TODO Add keyboard listener
    // useEffect(() => {
    //   window.addEventListener('keyup', keyBoardListener, { passive: true });
    //   return () => {
    //     window.removeEventListener('keyup', keyBoardListener);
    //   };
    // }, []);

    return (
      <section className={styles.calculator}>
        <div className={styles.calculator__container}>
          <div className={styles.calculator__backdrop} />
          <div className={styles.calculator__body}>
            <Display result={result} history={history} />
            <Controls
              calculatorControls={calculatorControls}
              controlHandler={establishExpression}
            />
          </div>
        </div>
      </section>
    );
  }
);

Calculator.displayName = 'Calculator';

export default Calculator;
