import type { T_CalculatorControls } from './Calculator.types';

/** enum Значения возможностей калькулятора */
export enum ControlActions {
  CLEAR = 'C',
  EQUAL = '=',
  SQRT = '√',
  PERCENT = '%',
  DIVIDE = '/',
  MULTIPLICATION = '×',
  DECREMENT = '-',
  INCREMENT = '+',
  COMMA = ',',
  DOUBLE_ZERO = '00',
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
}

const InitialData: T_CalculatorControls = [
  [
    {
      action: 'CLEAR',
      value: ControlActions.CLEAR,
      title: 'Очистить (заменить)',
      keyboardAlias: ['Backspace', 'Escape'],
    },
    {
      action: 'SQRT',
      value: ControlActions.SQRT,
      title: 'Корень квадратный',
      keyboardAlias: 's',
    },
    {
      action: 'PERCENT',
      value: ControlActions.PERCENT,
      title: 'Процент',
      keyboardAlias: ['p', '%'],
    },
    {
      action: 'DIVIDE',
      value: ControlActions.DIVIDE,
      title: 'Разделить',
      keyboardAlias: '/',
    },
  ],
  [
    {
      action: 'SEVEN',
      value: ControlActions.SEVEN,
      title: 'Цифра 7 (Семь)',
      keyboardAlias: '7',
    },
    {
      action: 'EIGHT',
      value: ControlActions.EIGHT,
      title: 'Цифра 8 (Восемь)',
      keyboardAlias: '8',
    },
    {
      action: 'NINE',
      value: ControlActions.NINE,
      title: 'Цифра 9 (Девять)',
      keyboardAlias: '9',
    },
    {
      action: 'MULTIPLICATION',
      value: ControlActions.MULTIPLICATION,
      title: 'Умножить',
      keyboardAlias: '*',
    },
  ],
  [
    {
      action: 'FOUR',
      value: ControlActions.FOUR,
      title: 'Цифра 4 (Четыре)',
      keyboardAlias: '4',
    },
    {
      action: 'FIVE',
      value: ControlActions.FIVE,
      title: 'Цифра 5 (Пять)',
      keyboardAlias: '5',
    },
    {
      action: 'SIX',
      value: ControlActions.SIX,
      title: 'Цифра 6 (Шесть)',
      keyboardAlias: '6',
    },
    {
      action: 'DECREMENT',
      value: ControlActions.DECREMENT,
      title: 'Отнять (минуc)',
      keyboardAlias: '-',
    },
  ],
  [
    {
      action: 'ONE',
      value: ControlActions.ONE,
      title: 'Цифра 1 (Один)',
      keyboardAlias: '1',
    },
    {
      action: 'TWO',
      value: ControlActions.TWO,
      title: 'Цифра 2 (Два)',
      keyboardAlias: '2',
    },
    {
      action: 'THREE',
      value: ControlActions.THREE,
      title: 'Цифра 3 (Три)',
      keyboardAlias: '3',
    },
    {
      action: 'INCREMENT',
      value: ControlActions.INCREMENT,
      title: 'Прибавить (плюс)',
      keyboardAlias: '+',
    },
  ],
  [
    {
      action: 'DOUBLE_ZERO',
      value: ControlActions.DOUBLE_ZERO,
      title: 'Двойной ноль',
      keyboardAlias: 'z',
    },
    {
      action: 'ZERO',
      value: ControlActions.ZERO,
      title: 'Цифра 0 (Ноль)',
      keyboardAlias: '0',
    },
    {
      action: 'COMMA',
      value: ControlActions.COMMA,
      title: 'Разделитель запятая',
      keyboardAlias: [',', '.'],
    },
    {
      action: 'EQUAL',
      value: ControlActions.EQUAL,
      title: 'Равно',
      keyboardAlias: 'Enter',
    },
  ],
];

export default InitialData;
