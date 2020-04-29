/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => {

    let nodeList = []

    for (let list of lists) {
        nodeList = nodeList.concat(extractNodes(list))
    }

    nodeList = mergeSort(nodeList)
    let head = null
    let currNode = null
    while (nodeList.length > 0) {
        if (currNode === null && head === null) {
            currNode = nodeList.shift()
            head = currNode
        } else {
            currNode.next = nodeList.shift()
            currNode = currNode.next
        }
    }
    return head
};

const extractNodes = list => {
    const nodeList = []
    let prevNode = null
    let currNode = list

    while (currNode !== null) {
        prevNode = currNode
        currNode = currNode.next

        prevNode.next = null
        nodeList.push(prevNode)
    }

    return nodeList
}

const mergeSort = (array) => {
    if (array.length === 0) return array
    if (array.length === 1) return array
    let mid = Math.floor(array.length / 2)
    return merge(mergeSort(array.slice(0, mid)), mergeSort(array.slice(mid)))
}

const merge = (arr1, arr2) => {
    let arr = []

    while (arr1[0] !== undefined && arr2[0] !== undefined) {
        if (arr1[0].val < arr2[0].val) {
            arr.push(arr1.shift())
        } else {
            arr.push(arr2.shift())
        }
    }

    if (arr1[0] !== undefined && arr2[0] === undefined) {
        arr = arr.concat(arr1)
    }
    if (arr2[0] !== undefined && arr1[0] === undefined) {
        arr = arr.concat(arr2)
    }
    return arr
}
