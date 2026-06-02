import { ListNode, removeNthFromEnd } from '../src/10-19mediumRemoveNthNodeFromEndOfList';

function createList(arr: number[]): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  for (const val of arr) {
    tail.next = new ListNode(val);
    tail = tail.next;
  }
  return dummy.next;
}

function listToArray(head: ListNode | null): number[] {
  const result: number[] = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

describe('removeNthFromEnd', () => {
  it('should remove the nth node from the end', () => {
    const head = createList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 2);
    expect(listToArray(result)).toEqual([1, 2, 3, 5]);
  });

  it('should handle removing the only node', () => {
    const head = createList([1]);
    const result = removeNthFromEnd(head, 1);
    expect(listToArray(result)).toEqual([]);
  });

  it('should handle removing the head node', () => {
    const head = createList([1, 2]);
    const result = removeNthFromEnd(head, 2);
    expect(listToArray(result)).toEqual([2]);
  });
});
