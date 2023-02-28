import { fireEvent, render, screen } from '@testing-library/react';
import InitialData from '@/widgets/calculator/model/Calculator.model';
import Home from '../src/pages/index';
import calculateExpression from '@/widgets/calculator/helpers/calculateExpression';

const HOME = <Home calculatorControls={InitialData} />;

describe('Home', () => {
  test('renders a calculator', () => {
    render(HOME);

    expect(screen.getByTestId('CLEAR')).toBeInTheDocument();
    expect(screen.getByTestId('EQUAL')).toBeInTheDocument();
    expect(screen.getByTestId('SQRT')).toBeInTheDocument();
    expect(screen.getByTestId('PERCENT')).toBeInTheDocument();
    expect(screen.getByTestId('DIVIDE')).toBeInTheDocument();
    expect(screen.getByTestId('MULTIPLICATION')).toBeInTheDocument();
    expect(screen.getByTestId('DECREMENT')).toBeInTheDocument();
    expect(screen.getByTestId('INCREMENT')).toBeInTheDocument();
    expect(screen.getByTestId('COMMA')).toBeInTheDocument();
    expect(screen.getByTestId('DOUBLE_ZERO')).toBeInTheDocument();
    expect(screen.getByTestId('ZERO')).toBeInTheDocument();
    expect(screen.getByTestId('ONE')).toBeInTheDocument();
    expect(screen.getByTestId('TWO')).toBeInTheDocument();
    expect(screen.getByTestId('THREE')).toBeInTheDocument();
    expect(screen.getByTestId('FOUR')).toBeInTheDocument();
    expect(screen.getByTestId('FIVE')).toBeInTheDocument();
    expect(screen.getByTestId('SIX')).toBeInTheDocument();
    expect(screen.getByTestId('SEVEN')).toBeInTheDocument();
    expect(screen.getByTestId('EIGHT')).toBeInTheDocument();
    expect(screen.getByTestId('NINE')).toBeInTheDocument();
  });
  test('Expression: 80+20*0.5=90', () => {
    render(HOME);

    const num8 = screen.getByTestId('EIGHT');
    const num0 = screen.getByTestId('ZERO');
    const plus = screen.getByTestId('INCREMENT');
    const comma = screen.getByTestId('COMMA');
    const num2 = screen.getByTestId('TWO');
    const mult = screen.getByTestId('MULTIPLICATION');
    const num5 = screen.getByTestId('FIVE');
    const equal = screen.getByTestId('EQUAL');
    const resultArea = screen.getByTestId('RESULT');

    fireEvent.click(num8);
    fireEvent.click(num0);
    fireEvent.click(plus);
    fireEvent.click(num2);
    fireEvent.click(num0);
    fireEvent.click(mult);
    fireEvent.click(num0);
    fireEvent.click(comma);
    fireEvent.click(num5);
    fireEvent.click(equal);
    expect(resultArea).toHaveTextContent('90');
  });
  test("CaclulateExpression: ['80', 'INCREMENT', '20', 'MULTIPLICATION', '0.5']", () => {
    const expression = ['80', 'INCREMENT', '20', 'MULTIPLICATION', '0.5'];
    expect(calculateExpression(expression)).toBe(90);
  });
});
