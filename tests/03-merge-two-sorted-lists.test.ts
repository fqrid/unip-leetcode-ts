import { ListNode, mergeTwoLists } from '../src/03-merge-two-sorted-lists';

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

describe('mergeTwoLists', () => {
  it('should merge two sorted lists', () => {
    const l1 = createList([1, 2, 4]);
    const l2 = createList([1, 3, 4]);
    expect(listToArray(mergeTwoLists(l1, l2))).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it('should handle empty lists', () => {
    expect(listToArray(mergeTwoLists(null, null))).toEqual([]);
    expect(listToArray(mergeTwoLists(null, createList([0])))).toEqual([0]);
  });
});
