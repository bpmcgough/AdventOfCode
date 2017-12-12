let gridCreator = (input)=>{
  let currentXIndex = 0;
  let currentYIndex = 0;
  let gridWidth = 1;
  let gridHeight = 1;
  let currentNumber = 1;

  while(currentNumber < input){

    // go right
    let rightCounter = 0;
    while(rightCounter < gridWidth - 1 && currentNumber < input){
      rightCounter++;
      currentXIndex++;
      currentNumber++;
    }
    if(currentNumber < input){
      currentXIndex++;
      currentNumber++;
      gridWidth++;
    }

    // go up
    let upCounter = 0;
    while(upCounter < gridHeight - 1 && currentNumber < input){
      upCounter++;
      currentYIndex++;
      currentNumber++;
    }
    if(currentNumber < input){
      currentYIndex++;
      currentNumber++;
      gridHeight++;
    }

    // go left
    let leftCounter = 0;
    while(leftCounter < gridWidth - 1 && currentNumber < input){
      leftCounter++;
      currentXIndex--;
      currentNumber++;
    }
    if(currentNumber < input){
      currentXIndex--;
      currentNumber++;
      gridWidth++;
    }

    // go down
    let downCounter = 0;
    while(downCounter < gridHeight - 1 && currentNumber < input){
      downCounter++;
      currentYIndex--;
      currentNumber++;
    }
    if(currentNumber < input){
      currentYIndex--;
      currentNumber++;
      gridHeight++;
    }
  }
  return Math.abs(currentXIndex) + Math.abs(currentYIndex)
}

gridCreator(289326)
