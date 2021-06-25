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
  //if head is empty, return null
  if (head === null) {
    return null;
  }
  //establish dummy node in case head is val
  let currentNode = new ListNode(-1);
  //attach it to list
  currentNode.next = head;
  //move head to dummy node
  head = currentNode;
  //loop through all nodes
  while (currentNode.next) {
    if (currentNode.next.val === val) {
      //if next node is val, skip over it
      //on next loop, it will check new value of current.next
      currentNode.next = currentNode.next.next;
    } else {
      //if new value of current.next isnt val, then move current to current.next
      currentNode = currentNode.next;
    }
  }
  //return head.next to skip over dummy head
  return head.next;
};

console.log(removeElements(l1), 6);
