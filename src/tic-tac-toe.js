class TicTacToe {
    constructor() {
        this.cell = new Array(3);
        this.currentPlayerSymbol='x';
        for (var i = 0; i < this.cell.length; i++) 
            this.cell[i] = new Array(3);
        for (var i = 0; i < this.cell.length; i++){
            for (var j = 0; j < this.cell.length; j++){
                this.cell[i][j] = null; 
            }
        }
        //console.log(this.cell.length);
        
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.cell[rowIndex][columnIndex]  ===  null){
            this.cell[rowIndex][columnIndex] = this.currentPlayerSymbol;
            if(this.currentPlayerSymbol  ===  'x')
                this.currentPlayerSymbol = 'o';
            else
                this.currentPlayerSymbol = 'x';
        }
    }

    isFinished() {
        if(this.getWinner() || this.isDraw() || this.noMoreTurns()) 
            return true;
        else
            return false;
    }

    getWinner() {
    for(var i = 0; i < this.cell.length;i++) 
        if(this.cell[i][0]  ===  this.cell[i][1] && this.cell[i][0]  ===  this.cell[i][2] && this.cell[i][1])
            return this.cell[i][0];
    for(var i = 0; i < this.cell.length ; i++) 
        if(this.cell[0][i]  ===  this.cell[1][i] && this.cell[0][i]  ===  this.cell[2][i] && this.cell[1][i])
            return this.cell[0][i];
    if(this.cell[0][0]  ===  this.cell[1][1] && this.cell[1][1]  ===  this.cell[2][2] && this.cell[0][0])
        return this.cell[0][0];
    if(this.cell[0][2]  ===  this.cell[1][1] && this.cell[1][1]  ===  this.cell[2][0] && this.cell[0][2])
        return this.cell[0][2];
    return null;
    }

    noMoreTurns() {
        for(var i = 0;i < this.cell.length;i++)
          for(var j = 0;j < this.cell.length;j++)
            if(this.cell[i][j]  ===  null)
                return false;
        return true;
    }

    isDraw() {
                if(this.getWinner() === null) {
            if(this.noMoreTurns())
                return true;
            for(var i = 0;i < this.cell.length;i++) {
                if(this.cell[i][0] === this.cell[i][1])
                    return false;
                if(this.cell[i][1] === this.cell[i][2])
                    return false;
                if(this.cell[i][0] === this.cell[i][2])
                    return false;
            }
            for(var i = 0;i < this.cell.length;i++) {
                if(this.cell[0][i] === this.cell[1][i])
                    return false;
                if(this.cell[1][i] === this.cell[2][i])
                    return false;
                if(this.cell[0][i] === this.cell[2][i])
                    return false;
            }
            if(this.cell[0][0] === this.cell[1][1])
                return false;
            if(this.cell[0][0] === this.cell[2][2])
                return false;
            if(this.cell[1][1] === this.cell[2][2])
                return false;
            if(this.cell[0][2] === this.cell[1][1])
                return false;
            if(this.cell[0][2] === this.cell[2][0])
                return false;
            if(this.cell[1][1] === this.cell[2][0])
                return false;
        }
        else {
            return false;
        }
        return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.cell[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
