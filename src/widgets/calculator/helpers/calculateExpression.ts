import { MAX_DIGIT_VALUE_LENGTH } from '../model/Calculator.const';
import { T_CalculatorExpression } from '../model/Calculator.types';

interface ExpressionTest {
  expression: T_CalculatorExpression;
  toBe: number;
}

//** Своего рода тесты ¯\_(ツ)_/¯ */
export const Tests: ExpressionTest[] = [
  {
    // 2 + 10 : 2 × 7 : 5 + 3 + 3 - 3 = 12
    expression: [
      2,
      'INCREMENT',
      10,
      'DIVIDE',
      2,
      'MULTIPLICATION',
      7,
      'DIVIDE',
      5,
      'INCREMENT',
      3,
      'INCREMENT',
      3,
      'DECREMENT',
      3,
    ],
    toBe: 12,
  },
  {
    // 2 + 2 * 2 = 6
    expression: [2, 'INCREMENT', 2, 'MULTIPLICATION', 2],
    toBe: 6,
  },
  {
    // 2 + 2 * 2 + 10% + 2 = 8.6
    expression: [
      2,
      'INCREMENT',
      2,
      'MULTIPLICATION',
      2,
      'INCREMENT',
      10,
      'PERCENT',
      'INCREMENT',
      2,
    ],
    toBe: 8.6,
  },
  {
    // 2 + 2 * 2 - 10% + 2 = 7.4
    expression: [
      2,
      'INCREMENT',
      2,
      'MULTIPLICATION',
      2,
      'DECREMENT',
      10,
      'PERCENT',
      'INCREMENT',
      2,
    ],
    toBe: 7.4,
  },
  {
    // 2 + 2 * 2 / 10% - 2 = 40
    expression: [
      2,
      'INCREMENT',
      2,
      'MULTIPLICATION',
      2,
      'DIVIDE',
      10,
      'PERCENT',
      'DECREMENT',
      2,
    ],
    toBe: 40,
  },
  {
    // 2 + 2 * 2 * 10% - 2 = 0.4
    expression: [
      2,
      'INCREMENT',
      2,
      'MULTIPLICATION',
      2,
      'MULTIPLICATION',
      10,
      'PERCENT',
      'DECREMENT',
      2,
    ],
    toBe: 0.4,
  },
  {
    // 2 + 10% + 2 = 4.2
    expression: [2, 'INCREMENT', 10, 'PERCENT', 'INCREMENT', 2],
    toBe: 4.2,
  },
  {
    // 2 - 10% + 2 = 3.8
    expression: [2, 'DECREMENT', 10, 'PERCENT', 'INCREMENT', 2],
    toBe: 3.8,
  },
  {
    // 2 / 10% + 2 = 22
    expression: [2, 'DIVIDE', 10, 'PERCENT', 'INCREMENT', 2],
    toBe: 22,
  },
  {
    // 2 * 10% + 2 = 2.2
    expression: [2, 'MULTIPLICATION', 10, 'PERCENT', 'INCREMENT', 2],
    toBe: 2.2,
  },
  {
    // 2% * 10 + 1.8 = 2
    expression: [2, 'PERCENT', 'MULTIPLICATION', 10, 'INCREMENT', 1.8],
    toBe: 2,
  },
  {
    // 2% / 10 + 0.998 = 1
    expression: [2, 'PERCENT', 'DIVIDE', 10, 'INCREMENT', 0.998],
    toBe: 1,
  },
  {
    // 2 + 10 : 2 × 7 : 5 + 3 + 3 - 3 = 12
    expression: [
      2,
      'INCREMENT',
      10,
      'DIVIDE',
      2,
      'MULTIPLICATION',
      7,
      'DIVIDE',
      5,
      'INCREMENT',
      3,
      'INCREMENT',
      3,
      'DECREMENT',
      3,
    ],
    toBe: 12,
  },
  {
    // 2 + 2 * 2 = 6
    expression: [2, 'INCREMENT', 2, 'MULTIPLICATION', 2],
    toBe: 6,
  },
  {
    expression: [2, 'INCREMENT', 2, 'DIVIDE', 2], // 2 + 2 / 2 = 3
    toBe: 3,
  },
  {
    expression: [2, 'DECREMENT', 2, 'MULTIPLICATION', 2], // 2 - 2 * 2 = -2
    toBe: -2,
  },
  {
    expression: [2, 'DECREMENT', 2, 'DIVIDE', 2], // 2 - 2 / 2 = 1
    toBe: 1,
  },
  {
    expression: [2, 'DIVIDE', 2, 'MULTIPLICATION', 2], // 2 / 2 * 2 = 2
    toBe: 2,
  },
  {
    expression: [2, 'MULTIPLICATION', 2, 'DIVIDE', 2], // 2 * 2 / 2 = 2
    toBe: 2,
  },
  {
    expression: [2, 'MULTIPLICATION', 2, 'MULTIPLICATION', 2], // 2 * 2 * 2 = 8
    toBe: 8,
  },
  {
    expression: [2, 'DIVIDE', 2, 'DIVIDE', 2], // 2 * 2 * 2 = 0.5
    toBe: 0.5,
  },
  {
    expression: [10, 'PERCENT', 'INCREMENT', 2], // 10% + 2 = 2.1
    toBe: 2.1,
  },
  {
    expression: [2, 'DECREMENT', 10, 'PERCENT', 'INCREMENT', 2], // 2 - 10% + 2 = 3.8
    toBe: 3.8,
  },
  {
    expression: [2, 'DECREMENT', 10, 'PERCENT', 'MULTIPLICATION', 2], // 2 - 10% * 2 = 1.6
    toBe: 1.6,
  },
  {
    expression: [2000, 'DECREMENT', 10, 'PERCENT', 'MULTIPLICATION', 2], // 2000 - 10% * 2 = 1600
    toBe: 1600,
  },
  {
    expression: [2, 'INCREMENT', 10, 'PERCENT'], // 2 + 10% = 2.2
    toBe: 2.2,
  },
  {
    expression: [10, 'PERCENT', 'MULTIPLICATION', 2], // 10% * 2 = 0.2
    toBe: 0.2,
  },
  {
    expression: [2, 'DIVIDE', 10, 'PERCENT'], // 2 / 10% = 20
    toBe: 20,
  },
  {
    expression: [6, 'INCREMENT', 36, 'SQRT', 'INCREMENT', 6], // 6 + √36 + 6 = 18
    toBe: 18,
  },
  {
    expression: [6, 'MULTIPLICATION', 36, 'SQRT', 'INCREMENT', 6], // 6 * √36 + 6 = 42
    toBe: 42,
  },
];

/**
 * Предварительно высчитывает выражения с простыми процентами. Ограничен длиной массива, т.к. в
 * длинных выражениях процент высчитывается от общего результата.
 * Как считается? - Путём анализа исходного выражения в целом, согласно
 * общим математическим правилам.
 * @param {T_CalculatorExpression} expression - Массив, содержащий значения операндов
 * и математических операций над операндами;
 * @returns {T_CalculatorExpression} Массив, содержащий значения операндов с высчитанными процентами
 * @example
 *  preCalculatePercents([10, "PERCENT", "INCREMENT" 2]) => [0.1, "INCREMENT" 2]
 */
const preCalculateSimplePercents = (
  expression: T_CalculatorExpression
): T_CalculatorExpression => {
  return expression.reduce(
    (accumulator, currentValue, index, arrayExpression) => {
      if (index > 4) {
        return [...accumulator, currentValue];
      }
      if (
        currentValue === 'PERCENT' ||
        (index && arrayExpression[index + 1] === 'PERCENT')
      )
        return accumulator;

      // [10, "PERCENT", "INCREMENT" 2] = 2.1
      // [0.1, "INCREMENT" 2] = 2.1
      if (index === 0 && arrayExpression[index + 1] === 'PERCENT') {
        return [Number(arrayExpression[index]) / 100, ...accumulator];
      }

      //[2, "INCREMENT", 10, "PERCENT"] = 2.2
      //[2, "INCREMENT", 0.2] = 2.2
      if (
        (currentValue === 'INCREMENT' || currentValue === 'DECREMENT') &&
        arrayExpression[index + 2] === 'PERCENT'
      ) {
        return [
          ...accumulator,
          currentValue,
          (Number(arrayExpression[index - 1]) *
            Number(arrayExpression[index + 1])) /
            100,
        ];
      }

      // [10, "DIVIDE", 10, "PERCENT"] = 100
      // [10, "DIVIDE", 0.1] = 100
      if (
        (currentValue === 'DIVIDE' || currentValue === 'MULTIPLICATION') &&
        arrayExpression[index + 2] === 'PERCENT'
      ) {
        return [
          ...accumulator,
          currentValue,
          Number(arrayExpression[index + 1]) / 100,
        ];
      }
      return [...accumulator, currentValue];
    },
    [] as T_CalculatorExpression
  );
};

/**
 * Предварительно высчитывает корни. Как считается? - Путём анализа исходного выражения в целом, согласно
 * общим математическим правилам.
 * @param {T_CalculatorExpression} expression - Массив, содержащий значения операндов
 * и математических операций над операндами;
 * @returns {T_CalculatorExpression} Массив, содержащий значения операндов с высчитанными корнями
 * @example
 *  preCalculatePercents([25, "SQRT", "INCREMENT" 2]) => [5, "INCREMENT" 2]
 */
const preCalculateSqrt = (
  expression: T_CalculatorExpression
): T_CalculatorExpression => {
  return expression.reduce(
    (accumulator, currentValue, index, arrayExpression) => {
      if (currentValue === 'SQRT') return accumulator;

      // [25, "SQRT", "INCREMENT" 2] = 7
      // [5, "INCREMENT" 2] = 7
      if (arrayExpression[index + 1] === 'SQRT') {
        return [...accumulator, Math.sqrt(currentValue as number)];
      }
      return [...accumulator, currentValue];
    },
    [] as T_CalculatorExpression
  );
};

/**
 * Считает выражение. Как? - Путём анализа исходного выражения в целом, согласно
 * общим математическим правилам. Напр.: 2 + 2 * 2 = 6;
 * @param {T_CalculatorExpression} expression - Массив, содержащий значения операндов
 * и математических операций над операндами;
 * @returns {(number|null)}
 * Число. Если есть результат калькуляции выражения. NULL - Если
 * по каким-либо причинам рассчитать выражение не удалось.
 * @example
 *  calculateExpression([2, 'INCREMENT', 2, 'MULTIPLICATION', 2]) => 6
 */
const calculateExpression = (
  expression: T_CalculatorExpression
): number | null => {
  let result: null | number = null;

  if (expression.length === 0) return 0;
  if (expression.length === 1)
    return Number(Number(expression[0]).toFixed(MAX_DIGIT_VALUE_LENGTH));

  if (expression.length === 2) {
    if (expression[1] === 'SQRT') {
      return Number(
        Math.sqrt(Number(expression[0])).toFixed(MAX_DIGIT_VALUE_LENGTH)
      );
    }
    if (expression[1] === 'PERCENT') {
      return Number(
        (Number(expression[0]) / 100).toFixed(MAX_DIGIT_VALUE_LENGTH)
      );
    }
    return Number(Number(expression[0]).toFixed(MAX_DIGIT_VALUE_LENGTH));
  }

  const approximateExpression = [
    ...preCalculateSimplePercents(preCalculateSqrt(expression)),
  ];

  // Первым выполнить приоритетные операции "MULTIPLICATION", "DIVIDE"
  approximateExpression.forEach((expressionOperand, index) => {
    if (typeof expressionOperand === 'number') return;
    if (expressionOperand === 'INCREMENT') return;
    if (expressionOperand === 'DECREMENT') return;

    switch (expressionOperand) {
      case 'DIVIDE':
        if (result === null) {
          result =
            Number(approximateExpression[index - 1]) /
            Number(approximateExpression[index + 1]);
          return;
        }
        if (result !== null) {
          if (approximateExpression[index + 2] === 'PERCENT') {
            result = result / (Number(approximateExpression[index + 1]) / 100);
            return;
          }
          result = result / Number(approximateExpression[index + 1]);
          return;
        }
        break;
      case 'MULTIPLICATION':
        if (result === null) {
          if (approximateExpression[index - 2] === 'DECREMENT') {
            result =
              Number(approximateExpression[index - 1]) *
              Number(approximateExpression[index + 1]) *
              -1;
            return;
          }
          result =
            Number(approximateExpression[index - 1]) *
            Number(approximateExpression[index + 1]);
          return;
        }
        if (result !== null) {
          if (approximateExpression[index + 2] === 'PERCENT') {
            result = result * (Number(approximateExpression[index + 1]) / 100);
            return;
          }
          result = result * Number(approximateExpression[index + 1]);
          return;
        }
        break;
    }
  });

  // [2 + 2 * 2]
  // Вторым выполнить базовые операции "INCREMENT", "DECREMENT"
  approximateExpression.forEach((expressionOperand, index) => {
    if (typeof expressionOperand === 'number') return;
    if (expressionOperand === 'MULTIPLICATION') return;
    if (expressionOperand === 'DIVIDE') return;

    switch (expressionOperand) {
      case 'INCREMENT':
        if (result === null) {
          result =
            Number(approximateExpression[index - 1]) +
            Number(approximateExpression[index + 1]);
          return;
        }
        if (result !== null && index - 1 === 0) {
          result = result + Number(approximateExpression[index - 1]);
          return;
        }
        if (result !== null && index - 1 > 0) {
          if (approximateExpression[index + 2] === 'PERCENT') {
            result =
              result +
              result * (Number(approximateExpression[index + 1]) / 100);
            return;
          }

          result = result + Number(approximateExpression[index + 1]);
          return;
        }
        break;
      case 'DECREMENT':
        if (result === null) {
          result =
            Number(approximateExpression[index - 1]) -
            Number(approximateExpression[index + 1]);
          return;
        }
        if (result !== null && index - 1 === 0) {
          if (approximateExpression[index + 2] === 'MULTIPLICATION') {
            result = Number(approximateExpression[index - 1]) + result;

            return;
          }
          result = Number(approximateExpression[index - 1]) - result;
          return;
        }
        if (result !== null && index - 1 > 0) {
          if (approximateExpression[index + 2] === 'PERCENT') {
            if (approximateExpression[index + 2] === 'PERCENT') {
              result =
                result -
                result * (Number(approximateExpression[index + 1]) / 100);
              return;
            }
            return;
          }
          result = result - Number(approximateExpression[index + 1]);
          return;
        }
        break;
    }
  });

  const outputResult = Number(Number(result).toFixed(MAX_DIGIT_VALUE_LENGTH));

  return outputResult;
};

export default calculateExpression;
