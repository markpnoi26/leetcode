/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    // O(n) solution without using any sorting algorithm
    
    const priorityHeap = new PriorityQueue()
    const response = []
    const store = {}

    for (let num of nums) {
        if (store[num] !== undefined) {
            store[num]++
        } else {
            store[num]=1
        }
    } 

    for (let key in store) {
        priorityHeap.enqueue(parseInt(key, 10), store[key])
    }

    let start = 0


    while (start < k) {
        response.push(priorityHeap.dequeue().val)
        start++
    }

    return response

};

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority <= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority > element.priority) || 
                    (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}



let nums = [1,1,1,2,2,3], k = 2
console.log(topKFrequent(nums, k), [1,2])


nums = [1], k = 1
console.log(topKFrequent(nums,k), [1])

nums = [1,1,1,2,2,3,3,3,3,3,3,3,3,3,3,3,3,6,6,6,7,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,10,11,11,11,11,11,55,5,5,5,5,5,5,5,5,5], k =4
console.log(topKFrequent(nums,k), [3,9,5,11])