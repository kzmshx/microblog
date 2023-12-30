/**
 * calculateSettlements
 *   it should return correct settlements
 *     when there are no expenses
 *     when there is no remainder
 *     when there is remainder
 */

import { calculateSettlements } from "../../src/utils/settlements";

describe("calculateSettlements", () => {
  test.each([
    {
      name: "when there are no expenses",
      expenses: [],
      groupMembers: ["Mike", "John", "Amy"],
      expectedSettlements: [],
    },
    {
      name: "when there is no remainder",
      expenses: [
        { groupName: "Trip", expenseName: "Taxi", payer: "Mike", amount: 4000 },
        { groupName: "Trip", expenseName: "Lunch", payer: "John", amount: 1616 },
      ],
      groupMembers: ["Mike", "John", "Amy", "Tom"],
      expectedSettlements: [
        { from: "Amy", to: "Mike", amount: 1404 },
        { from: "Tom", to: "Mike", amount: 1192 },
        { from: "Tom", to: "John", amount: 212 },
      ],
    },
    {
      name: "when there is remainder",
      expenses: [
        { groupName: "Trip", expenseName: "Taxi", payer: "Mike", amount: 500 },
        { groupName: "Trip", expenseName: "Lunch", payer: "John", amount: 600 },
      ],
      groupMembers: ["Mike", "John", "Amy"],
      expectedSettlements: [
        { from: "Amy", to: "Mike", amount: 132 },
        { from: "Amy", to: "John", amount: 234 },
      ],
    },
  ])(`it should return correct settlements: $name`, ({ expenses, groupMembers, expectedSettlements }) => {
    // Act
    const actual = calculateSettlements(expenses, groupMembers);
    // Assert
    expect(actual).toEqual(expectedSettlements);
  });
});
