"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var find_duplicates_1 = require("./find-duplicates");
test('Find duplicate transactions', function () {
    var transactions = [
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
    expect(find_duplicates_1.findDuplicateTransactions(transactions)).toEqual([
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
test('Find duplicate transactions to check combination of source, target, amount and description', function () {
    var transactions = [
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
    expect(find_duplicates_1.findDuplicateTransactions(transactions)).toEqual([]);
});
test('Find multiple duplicate transactions', function () {
    var transactions = [
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
    expect(find_duplicates_1.findDuplicateTransactions(transactions)).toEqual([
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
//# sourceMappingURL=find-duplicates.spec.js.map