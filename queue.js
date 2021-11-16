function Queue() {
  //Challenge no use of array methods
  let queue = [];

  function enqueue(newItem) {
    // easy way
    // queue = [newItem, ...queue];

    // hard way
    const newArray = [];

    for (let i = 0; i <= queue.length; i++) {
      //insert newItem into the beginning of the first array
      if (i === 0) {
        newArray[i] = newItem;
        continue;
      }

      //copy queue but with all items shifted up one.
      //newArray["newItem"(0), "a"(1), "b"(2), "c"(3)]
      //queue["a"(0), "b"(1), "c"(2)];
      newArray[i] = queue[i - 1];
    }

    queue = newArray;
  }

  function dequeue() {
    if (queue.length === 0) {
      console.error("queue is empty");
      return;
    }
    const newArray = [];

    //store last item to be returned later
    let dequeuedItem = queue[queue.length - 1];

    //copy existing queue except for last item
    for (let i = 0; i < queue.length - 1; i++) {
      newArray[i] = queue[i];
    }

    //create new queue without one less item in it.
    queue = newArray;
    return dequeuedItem;
  }

  function print() {
    console.log("queue", queue);
  }

  return {
    enqueue,
    dequeue,
    print,
  };
}

const myQueue = Queue();

myQueue.print();
myQueue.dequeue();
myQueue.enqueue("foo");
myQueue.enqueue("bar");
myQueue.print();
console.log("dequeue", myQueue.dequeue());
myQueue.print();
console.log("dequeue", myQueue.dequeue());
myQueue.print();
