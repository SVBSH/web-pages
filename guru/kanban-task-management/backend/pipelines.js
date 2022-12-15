

// Push new Task to board
const boardName;
const userId

const newTask;


const pipeline = [
  {
    $match: {
      "user_id": userId,
      "boards.name": `${boardName}` 
    },
    $push: {
      "boards": newTask
    }
  }
]
// ..............................

// Push new subTask to board
// M,L
const pipeline = [
  {
    $match: {
      "user_id": userId,
      "boards.name": `${boardName}`,
      "tasks": ''
    },
    $push: {
      "boards": newTask
    }
  }
]



db.collection.aggregate(pipeline)