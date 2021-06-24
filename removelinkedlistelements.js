class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

//initialtes the list
class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }

    return;
  }

  insertFirst(data) {
    this.head = new ListNode(data, this.head);
    this.size++;
  }

  createList(arr) {
    //first index becomes head
    this.insertFirst(arr[0]);
    let counter = 1;
    let current = this.head;
    while (counter < arr.length) {
      let node = new ListNode(arr[counter]);
      //set new node to next
      current.next = node;
      counter++;
      //point to next node
      current = current.next;
      this.size++;
    }
    return;
  }
}

const l1 = new List();
l1.createList([1, 2, 6, 3, 4, 5, 6]);

//remove elements challenge
//my original solution, works except in test case when all nodes === val
/*const removeElement = (list, val) => {
  let current = list.head;
  let previous;

  //if first is val
  if (current.val === val) {
    list.head = current.next;
  }

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
      list.size--;
    } else {
      current = current.next;
    }
  }
  return list.printListData();
};

console.log(removeElement(l1, 7));
*/

//passing solution (from youtube)

const removeElements = (head, val) => {
  if (head === null) {
    return null;
  }

  let currentNode = new ListNode(-1);
  currentNode.next = head;
  head = currentNode;

  while (currentNode.next !== null) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }

  return head.next;
};

console.log(removeElements(l1), 6);
