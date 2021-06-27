"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findDuplicateTransactions = void 0;
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
function findDuplicateTransactions(transactions) {
    var duplicateTransaction = [];
    transactions.reduce(function (accumulator, current) {
        var id = current.id, currentRemainingObj = __rest(current, ["id"]);
        for (var _i = 0, _a = Array.from(accumulator.entries()); _i < _a.length; _i++) {
            var _b = _a[_i], accumulatorId = _b[0], accumulatorRemainingObj = _b[1];
            if (JSON.stringify(accumulatorRemainingObj) === JSON.stringify(currentRemainingObj)) {
                duplicateTransaction.push(current);
                if (!accumulatorRemainingObj.dupe) {
                    duplicateTransaction.push(__assign({ id: accumulatorId }, accumulatorRemainingObj));
                    accumulatorRemainingObj.dupe = true;
                }
                break;
            }
        }
        return accumulator.set(current.id, currentRemainingObj);
    }, new Map());
    duplicateTransaction.sort(function (transaction1, transaction2) { return transaction1.id - transaction2.id; });
    return duplicateTransaction;
}
exports.findDuplicateTransactions = findDuplicateTransactions;
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
]));
//# sourceMappingURL=find-duplicates.js.map