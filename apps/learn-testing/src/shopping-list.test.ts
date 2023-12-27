import { ShoppingList } from "./shopping-list";

describe("ShoppingList", () => {
  describe("addItem", () => {
    it("should add item to list", () => {
      const shoppingList = new ShoppingList();
      expect(shoppingList.getItems()).toEqual([]);

      shoppingList.addItem("Apple");
      expect(shoppingList.getItems()).toContain("Apple");

      shoppingList.addItem("Banana");
      expect(shoppingList.getItems()).toContain("Banana");
    });
  });

  describe("removeItem", () => {
    it("should remove item from list", () => {
      const shoppingList = new ShoppingList();
      shoppingList.addItem("Apple");
      shoppingList.addItem("Banana");
      expect(shoppingList.getItems()).toContain("Apple");
      expect(shoppingList.getItems()).toContain("Banana");

      shoppingList.removeItem("Apple");
      expect(shoppingList.getItems()).not.toContain("Apple");
      expect(shoppingList.getItems()).toContain("Banana");

      shoppingList.removeItem("Banana");
      expect(shoppingList.getItems()).not.toContain("Apple");
      expect(shoppingList.getItems()).not.toContain("Banana");
    });

    it("should throw error if item not found", () => {
      const shoppingList = new ShoppingList();
      expect(() => shoppingList.removeItem("Apple")).toThrow("Item Apple not found");
    });
  });
});
