/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = (tasks, n) => {

    const store = {}
    const answer = []
    let interval =  0

    tasks.sort()
    
    for (let el of tasks) {
        if (store[el] ===  undefined) {
            store[el] = 1
        } else {
            store[el]++
        }
    }
    
    console.log(store)
    while (Object.keys(store).length > 0) {
        let remTasks = n+1
        for (let task in store) {
            if (store[task] !== undefined && remTasks > 0) {
                answer.push(task)
                store[task]--
                remTasks--
                interval++
                if (store[task] === 0) delete store[task]
            } 
        }
        while (remTasks > 0 && Object.keys(store).length > 0) {
            answer.push("idle")
            remTasks--
            interval++
        }
    }
    
    console.log(answer)
    return Math.max(interval, tasks.length)

};


let tasks = ["A", "A", "A", "B", "B", "B"], n = 2

console.log(leastInterval(tasks, n), 8)


tasks = ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"], n= 2
console.log(leastInterval(tasks, n), 16)


tasks = ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"], n =4
console.log(leastInterval(tasks, n), 26)


tasks = ["A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C"], n = 6
console.log(leastInterval(tasks, n), 36)

tasks = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H", "I", "I", "J", "J", "K", "K", "L", "L", "M", "M", "N", "N", "O", "O", "P", "P", "Q", "Q", "R", "R", "S", "S", "T", "T", "U", "U", "V", "V", "W", "W", "X", "X", "Y", "Y", "Z", "Z"], n=2

console.log(leastInterval(tasks, n), 52)


tasks = ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"], n=2
console.log(leastInterval(tasks, n), 16)