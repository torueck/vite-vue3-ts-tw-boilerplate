import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import CounterExample from './CounterExample.vue';

describe('CounterExample', () => {
  it('should increase the counter', async () => {
    const { getByText } = render(CounterExample);

    const btn = getByText('Increase');
    const count = getByText('count is', { exact: false });

    expect(count).toHaveTextContent('0');

    await fireEvent.click(btn);

    expect(count).toHaveTextContent('1');
  });

  it('should decrease the counter', async () => {
    const { getByText } = render(CounterExample);

    const btn = getByText('Decrease');
    const count = getByText('count is', { exact: false });

    expect(count).toHaveTextContent('0');

    await fireEvent.click(btn);

    expect(count).toHaveTextContent('-1');
  });
});
