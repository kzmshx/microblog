export class ShoppingList {
  private items: string[] = [];

  addItem(item: string): void {
    this.items.push(item);
  }

  removeItem(item: string): void {
    const index = this.items.indexOf(item);
    if (index === -1) {
      throw new Error(`Item ${item} not found`);
    }
    this.items.splice(index, 1);
  }

  getItems(): string[] {
    return this.items;
  }
}
