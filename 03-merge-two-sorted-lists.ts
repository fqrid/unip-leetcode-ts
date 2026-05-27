export class ListNode {
  val: number;

  next: ListNode | null;

  constructor(val: number, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

// Time: O(m + n), Space: O(1)
export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  const dummy = new ListNode(0);
  let tail = dummy;
  let left = list1;
  let right = list2;

  while (left !== null && right !== null) {
    if (left.val <= right.val) {
      tail.next = left;
      left = left.next;
    } else {
      tail.next = right;
      right = right.next;
    }

    tail = tail.next;
  }

  tail.next = left ?? right;

  return dummy.next;
}