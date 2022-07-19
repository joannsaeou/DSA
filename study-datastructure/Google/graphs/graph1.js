
//iterative version

// const depthFirstPrint = (graph, source) => {
//   const stack = [source];  //initialize
  
//   while (stack.length > 0) {
//     const current = stack.pop();   //remove last item of array
//     console.log(current);

//     for (let neighbor of graph[current]) {
//       stack.push(neighbor);
   
//     }
    
//   }
// };


//rescursive version

// const depthFirstPrint = (graph, source) => {
//   console.log(source);
//   for (let neighbor of graph[source]) {
//     depthFirstPrint(graph, neighbor);
//   }
// };





// const graph = {
//   a: ['c', 'b'],
//   b: ['d'],
//   c: ['e'],
//   d: ['f'],
//   e: [],
//   f: []
  
  
// }

const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
  

}



// depthFirstPrint(graph, 'a'); //abdfce

// console.log(graph)

//breadthFirstPrint(graph,'a');  //acbedf

// const breadthFirstPrint = (graph, source) => {
//   const queue = [ source ];
//   while (queue.length > 0) {
//     const current = queue.shift();
//     console.log(current);
//     for (let neighbor of graph[current]) {
//       queue.push(neighbor);
//     }
//   }
// };

// breadthFirstPrint(graph, 'a');

const breadthFirstPrint = (graph, source) => {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
};

breadthFirstPrint(graph,'a')