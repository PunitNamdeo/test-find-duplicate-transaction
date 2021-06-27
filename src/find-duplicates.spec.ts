import { findDuplicateTransactions, Transaction } from './find-duplicates';

test('Find duplicate transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    }
  ]);
});

test('Find duplicate transactions to check combination of source, target, amount and description', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'D',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'B',
      target: 'D',
      amount: 1000,
      description: 'rent'
    },
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([]);
});

test('Find multiple duplicate transactions', () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 2,
      source: 'B',
      target: 'C',
      amount: 1000,
      description: 'rent'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 4,
      source: 'A',
      target: 'D',
      amount: 100,
      description: 'groceries'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    },
    {
      id: 6,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ];
  expect(findDuplicateTransactions(transactions)).toEqual([
    {
      id: 1,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 3,
      source: 'A',
      target: 'B',
      amount: 300,
      description: 'tikkie'
    },
    {
      id: 5,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    },
    {
      id: 6,
      source: 'A',
      target: 'C',
      amount: 250,
      description: 'other'
    }
  ]);
});