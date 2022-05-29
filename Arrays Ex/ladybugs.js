function ladybugs(array) {
    let fieldSize = array[0];
    let fulledIndexs = array[1].split(' '); //[0, 2, 3]
    let currentPositions = new Array(fieldSize).fill(0); //[1,1]

    for (let j = 0; j < fulledIndexs.length; j++) {
        let index = Number(fulledIndexs[j]);
        if (index > fieldSize - 1 || index < 0) {
            continue
        }
        currentPositions[index] = 1
    }

    for (let i = 2; i < array.length; i++) {
        let moves = array[i].split(' ');
        let currentIndex = Number(moves[0]);
        let direction = moves[1];
        let flyLength = Number(moves[2]);
        if(currentIndex >= currentPositions.length || currentIndex < 0 || currentPositions[currentIndex] === 0){
            continue;
        }
        currentPositions[currentIndex] = 0;
        let nextDestinationRight = currentIndex + flyLength;
        let nextDestinationLeft = currentIndex - flyLength;
        let bugIndex = currentPositions[nextDestinationRight];
        let bugIndexLeft = currentPositions[nextDestinationLeft];

        if (direction === 'right') {
            while (true) {
                if (bugIndex === 0) {
                    currentPositions[nextDestinationRight] = 1;
                    break;
                } else if (nextDestinationRight >= currentPositions.length) {
                    break;
                } else if (bugIndex === 1)
                    nextDestinationRight += flyLength
                    bugIndex = currentPositions[nextDestinationRight];
            }
        } else if (direction === 'left') {
            while (true) {
                if (bugIndexLeft === 0) {
                    currentPositions[nextDestinationLeft] = 1;
                    break;
                } else if (nextDestinationLeft < 0) {
                    break;
                } else if (bugIndexLeft === 1)
                    nextDestinationLeft -= flyLength
                    bugIndexLeft = currentPositions[nextDestinationLeft];
            }
        }
    }
    console.log(currentPositions.join(' '))
}
ladybugs([ 1, '3 1 2',
'9 right 1',
'1 right 1',
'2 right 1']);
// ladybugs([ 5, '3',
// '3 left 2',
// '1 left -2']);