
//baseline solution

//depth first traversal
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;


  for (let neighbor of graph[src]) {      // graph[src] - this an object wrap in for
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    } else {
      return false;
    }
  }
  
  return false;
};




















// breadth first traversal
const hasPath2 = (graph, src, dst) => {
  const queue = [ src ];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);  //adds to another end
    } 
  }
  return false;
};

