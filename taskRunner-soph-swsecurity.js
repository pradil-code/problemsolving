/*

id is a unique identifier for each task.
type defines the action performed by the task.
needs specifies task dependencies. The task should not execute until all other tasks with id fields in the needs array have finished executing.
props are task type-specific input properties.
The {{ }} value on line 15 is an expression. Your engine should detect these props and evaluate the expression. Tasks that have already
executed should contain an additional result field. add and sub type tasks should place their addition/subtraction result in this field.
*/
let tasks = {
"tasks": [{
"id": "one",
"type": "print",
"needs": [],
"props": {
"message": "Hello!"
}
},{
"id": "two",
"type": "subtract",
"needs": ["three"],
"props": {
"num1": 21,
"num2": "{{ tasks.three.result }}"
}
},{
"id": "three",
"type": "add",
"needs": ["one"],
"props": {
"num1": 3,
"num2": 6
}
}]
}

const taskRunner = function(tasksArr){
  
    let tasksExecuted = []
    
    while(tasksExecuted.length < tasksArr.length){
        for(let i = 0; i < tasksArr.length; i++) {
            if(taskArr[i].needs.every(ele => tasksExecuted.includes(ele))){
                let res = operationType(tasksArr[i].type,tasksArr[i])
                tasksArr[i].result = res 
                tasksExecuted.push(tasksArr[i].id)
              }
   }
 }
 
    console.log({tasksExecuted,tasksExecuted})
    return tasksArr
}

const operationType = function(type,objArr){
    let result;

    if (type === "add"){ 
        result = add(objArr.props.num1,objArr.props.num2)
    
     }
     if (type.type === "sub"){ 
        result = sub(objArr.props.num1,objArr.props.num2)
          
     }
     if (type.type === "print"){ 
        result = printer(objArr.props.message)
      
     }

    return result 
}
const add = function(num1,num2){
    let subResult = num1 - num2 
    return subResult
}

const sub = function(num1,num2){
    let addResult = num1 + num2 
    return addResult
}

const printer = function(msg){
    console.log(msg)
    return `Printed ${msg}`
}

let taskArr = tasks.tasks

const result = taskRunner(taskArr)



