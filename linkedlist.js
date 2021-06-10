class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //insert last node

  insertLast(data) {
    let node = new Node(data);
    let current;

    // if empty, make head

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  //insert at index
  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }
    // if index is zero
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const node = new Node(data);
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;

    while (count < index) {
      previous = current; //node before index
      count++;
      current = current.next; // node after index
    }

    node.next = current;
    previous.next = node;

    this.size++;
  }

  //move to index

  moveTo(indexToMove, moveToIndex) {
    let dataToMove = this.getAt(indexToMove);
    this.removeAt(indexToMove);
    this.insertAt(dataToMove, moveToIndex);
  }

  //create list from an array

  //pass array as argument

  createList(arr) {
    //first index becomes head
    this.insertFirst(arr[0]);
    let counter = 1;
    let current = this.head;
    while (counter < arr.length) {
      let node = new Node(arr[counter]);
      //set new node to next
      current.next = node;
      counter++;
      //point to next node
      current = current.next;
      this.size++;
    }
    return;
  }

  //loop through the array

  //subequent indeces become current.next

  ///////////////////////////

  //remove at index

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    }

    let current, previous;
    current = this.head;
    let count = 0;

    //remove first

    if (index === 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        previous = current;
        count++;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  //get at index
  getAt(index) {
    let current = this.head;
    let count = 0;

    while (count < index) {
      count++;
      current = current.next;
    }

    return current.data;
  }

  /*Example from video
  getAt(index){
    let current = this.head;
    let count = 0;
    while (current){
      if (count == index){
        console.log(current.data)
      }
      count++;
      current = current.next
    }

    return null;
  }
  */

  //print list data

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //clear list

  clearList() {
    //class only has access to head, so clearing the head removes any reference to data in list
    this.head = null;
    this.size = 0;
  }
}

const l1 = new LinkedList();
const l2 = new LinkedList();
l1.createList([1, 2, 3, 4, 5, 6]);
l2.createList([1, 3, 4]);

//l1.moveTo(5, 0);
//l1.printListData();

//unordered
const mergeTwoLists = (l1, l2) => {
  if (l2.size == 0) {
    return l1.printListData();
  }

  let mergedList = l1;
  let l2Copy = l2;
  let current = mergedList.head;

  while (current.next) {
    current = current.next;
  }

  mergedList.insertLast(l2Copy.head.data);
  l2Copy.removeAt(0);
  return mergeTwoLists(mergedList, l2Copy);
};

console.log(mergeTwoLists(l1, l2));
