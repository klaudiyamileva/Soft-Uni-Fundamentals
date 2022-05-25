function chessBoard(n) {
    let result = '';
    result = '<div class="chessboard">';
    for (let i = 1; i <= n; i++) {
        let counter = i;
        result += '\n  <div>'
        for (let j = 1; j <= n; j++) {
            if(counter % 2 !== 0) {
                result += '\n    <span class="black"></span>'
            } else {
                result += '\n    <span class="white"></span>'
            }
            counter++;
        }
        result += '\n  </div>'
    }
    result += '\n</div>';
    console.log(result)
}
chessBoard(3);