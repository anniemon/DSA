class Queue {
  private items: Record<number, unknown>;
  private headIndex: number;
  private tailIndex: number;
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item: number): void {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue()  {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek()   {
    return this.items[this.headIndex];
  }
  size(): number {
    return this.tailIndex - this.headIndex;
  }
}
