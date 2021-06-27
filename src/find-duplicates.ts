export interface Transaction {
  id: number;
  source: string;
  target: string;
  amount: number;
  description: string;
}

/**
 * Find duplicate transactions
 * Given a list of transactions, find and return duplicate transactions. There can be more than one duplicate transactions.
 * A transaction can be called duplicate if it has the same `source`, `target`, `amount` and `description`.
 * 
 * This is how a transaction looks like.
 * 
 * {
 *   id: 1,
 *   source: 'A',
 *   target: 'B',
 *   amount: 300,
 *   description: 'tikkie'
 * }
 * 
 * Note:
 * - Create additional functions if required.
 * - Follow proper coding conventions and best practices.
 * - Make sure existing unit test passes.
 * - Write further unit tests to cover maximum code.
 *  
 * 
 * @param transactions List of transactions
 * @returns {Transaction[]} List of duplicate transactions
 */
export function findDuplicateTransactions(transactions: Transaction[]): Transaction[] {
  let duplicateTransaction:Transaction[] = []
        transactions.reduce((accumulator, current) => {
            let {id, ...currentRemainingObj} = current;
                for (let [accumulatorId, accumulatorRemainingObj] of Array.from(accumulator.entries())) {
                    if (JSON.stringify(accumulatorRemainingObj) === JSON.stringify(currentRemainingObj)) {
                        duplicateTransaction.push(current)
                        if (!accumulatorRemainingObj.dupe) {
                            duplicateTransaction.push({id: accumulatorId, ...accumulatorRemainingObj})
                            accumulatorRemainingObj.dupe = true;
                        }
                        break;
                    }
            }
            return accumulator.set(current.id, currentRemainingObj)
        }, new Map());
    duplicateTransaction.sort((transaction1, transaction2) => transaction1.id -transaction2.id);
  return duplicateTransaction;
}

console.log(findDuplicateTransactions([
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
        source: 'B',
        target: 'D',
        amount: 1000,
        description: 'rent'
    },
]))