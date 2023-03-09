import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tictactoe';

  players : string[] = ["O", "X"];
  currentPlayer : String = `Player ${this.players[0]}'s turn`;

  gameOver : boolean = false;
  gameMode : number = 1;
  go : boolean = true;

  used : number = 0;

  mode(m:number, o:HTMLDivElement){
    if(m == 1){
      this.gameMode = 1;
    }
    else{
      this.gameMode = 2;
    }
    o.style.display = "none";
  }

  clicked(el:Event){
    if(this.go && !this.gameOver){
      if((<HTMLTableCellElement>el.target).innerHTML == ""){
        (<HTMLTableCellElement>el.target).innerHTML = this.players[0];
        this.players.reverse();
        this.currentPlayer = `Player ${this.players[0]}'s turn`;
        if(this.gameMode == 1){
          this.used++;
          this.go = false;
          this.computerTurn();
        }
        else{
          this.isWin();
          this.isDraw();
        }
      }
    }
  }

  async computerTurn(){
    if(!this.isWin() && !this.isDraw()){
      await new Promise(f => setTimeout(f, 300));
      this.think().innerHTML = "X";
      this.players.reverse();
      this.currentPlayer = `Player ${this.players[0]}'s turn`;
      this.used++;
      this.go = true;
      this.isWin();
      this.isDraw();
    }
  }

  think(){
    console.log(this.used)

    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i<9; i+=3){
      if(boxes[i].innerHTML == "X" && boxes[i+1].innerHTML == "X" && boxes[i+2].innerHTML == ""){
        return boxes[i+2];
      }
      if(boxes[i+1].innerHTML == "X" && boxes[i+2].innerHTML == "X" && boxes[i].innerHTML == ""){
        return boxes[i];
      }
      if(boxes[i].innerHTML == "X" && boxes[i+2].innerHTML == "X" && boxes[i+1].innerHTML == ""){
        return boxes[i+1];
      }
    }
    for(let i = 0; i<3; i++){
      if(boxes[i].innerHTML == "X" && boxes[i+3].innerHTML == "X" && boxes[i+6].innerHTML == ""){
        return boxes[i+6];
      }
      if(boxes[i+3].innerHTML == "X" && boxes[i+6].innerHTML == "X" && boxes[i].innerHTML == ""){
        return boxes[i];
      }
      if(boxes[i].innerHTML == "X" && boxes[i+6].innerHTML == "X" && boxes[i+3].innerHTML == ""){
        return boxes[i+3];
      }
    }
    if(boxes[0].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[8].innerHTML == ""){
      return boxes[8];
    }
    if(boxes[4].innerHTML == "X" && boxes[8].innerHTML == "X" && boxes[0].innerHTML == ""){
      return boxes[0];
    }
    if(boxes[8].innerHTML == "X" && boxes[0].innerHTML == "X" && boxes[4].innerHTML == ""){
      return boxes[4];
    }
    if(boxes[2].innerHTML == "X" && boxes[4].innerHTML == "X" && boxes[6].innerHTML == ""){
      return boxes[6];
    }
    if(boxes[4].innerHTML == "X" && boxes[6].innerHTML == "X" && boxes[2].innerHTML == ""){
      return boxes[2];
    }
    if(boxes[6].innerHTML == "X" && boxes[2].innerHTML == "X" && boxes[4].innerHTML == ""){
      return boxes[4];
    }

    for(let i = 0; i<9; i+=3){
      if(boxes[i].innerHTML == "O" && boxes[i+1].innerHTML == "O" && boxes[i+2].innerHTML == ""){
        return boxes[i+2];
      }
      if(boxes[i+1].innerHTML == "O" && boxes[i+2].innerHTML == "O" && boxes[i].innerHTML == ""){
        return boxes[i];
      }
      if(boxes[i].innerHTML == "O" && boxes[i+2].innerHTML == "O" && boxes[i+1].innerHTML == ""){
        return boxes[i+1];
      }
    }
    for(let i = 0; i<3; i++){
      if(boxes[i].innerHTML == "O" && boxes[i+3].innerHTML == "O" && boxes[i+6].innerHTML == ""){
        return boxes[i+6];
      }
      if(boxes[i+3].innerHTML == "O" && boxes[i+6].innerHTML == "O" && boxes[i].innerHTML == ""){
        return boxes[i];
      }
      if(boxes[i].innerHTML == "O" && boxes[i+6].innerHTML == "O" && boxes[i+3].innerHTML == ""){
        return boxes[i+3];
      }
    }
    if(boxes[4].innerHTML == "O" && boxes[8].innerHTML == "O" && boxes[0].innerHTML == ""){
      return boxes[0];
    }
    if(boxes[8].innerHTML == "O" && boxes[0].innerHTML == "O" && boxes[4].innerHTML == ""){
      return boxes[4];
    }
    if(boxes[2].innerHTML == "O" && boxes[4].innerHTML == "O" && boxes[6].innerHTML == ""){
      return boxes[6];
    }
    if(boxes[4].innerHTML == "O" && boxes[6].innerHTML == "O" && boxes[2].innerHTML == ""){
      return boxes[2];
    }
    if(boxes[6].innerHTML == "O" && boxes[2].innerHTML == "O" && boxes[4].innerHTML == ""){
      return boxes[4];
    }
    
    if(boxes[4].innerHTML == ""){
      return boxes[4];
    }
    if((boxes[0].innerHTML == "O" && boxes[8].innerHTML == "O") || (boxes[2].innerHTML == "O" && boxes[6].innerHTML == "O")){
      for(let i = 1; i<8; i+=2){
        if(boxes[i].innerHTML == ""){
          return boxes[i];
        }
      }
    }
    if(this.used <= 3){
      if(boxes[0].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[2].innerHTML == ""){
        return boxes[2];
      }
      if(boxes[0].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[6].innerHTML == ""){
        return boxes[6];
      }
      if(boxes[2].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[0].innerHTML == ""){
        return boxes[0];
      }
      if(boxes[2].innerHTML == "O" && boxes[7].innerHTML == "O" && boxes[8].innerHTML == ""){
        return boxes[8];
      }
      if(boxes[6].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[0].innerHTML == ""){
        return boxes[0];
      }
      if(boxes[6].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML == ""){
        return boxes[8];
      }
      if(boxes[8].innerHTML == "O" && boxes[1].innerHTML == "O" && boxes[2].innerHTML == ""){
        return boxes[2];
      }
      if(boxes[8].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML == ""){
        return boxes[6];
      }
    }
    if(boxes[1].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[0].innerHTML == "")
    {
      return boxes[0];
    }
    if(boxes[1].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[2].innerHTML == "")
    {
      return boxes[2];
    }
    if(boxes[7].innerHTML == "O" && boxes[3].innerHTML == "O" && boxes[6].innerHTML == "")
    {
      return boxes[6];
    }
    if(boxes[7].innerHTML == "O" && boxes[5].innerHTML == "O" && boxes[8].innerHTML == "")
    {
      return boxes[8];
    }
    if(boxes[0].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[2].innerHTML == ""){
      return boxes[2];
    }
    if(boxes[0].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[6].innerHTML == ""){
      return boxes[6];
    }
    if(boxes[2].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[0].innerHTML == ""){
      return boxes[0];
    }
    if(boxes[2].innerHTML == "X" && boxes[7].innerHTML == "X" && boxes[8].innerHTML == ""){
      return boxes[8];
    }
    if(boxes[6].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[0].innerHTML == ""){
      return boxes[0];
    }
    if(boxes[6].innerHTML == "X" && boxes[5].innerHTML == "X" && boxes[8].innerHTML == ""){
      return boxes[8];
    }
    if(boxes[8].innerHTML == "X" && boxes[1].innerHTML == "X" && boxes[2].innerHTML == ""){
      return boxes[2];
    }
    if(boxes[8].innerHTML == "X" && boxes[3].innerHTML == "X" && boxes[6].innerHTML == ""){
      return boxes[6];
    }
    if(boxes[4].innerHTML == "X"){
      for(let i = 0; i<9;i++){
        if(boxes[i].innerHTML == "" && boxes[8-i].innerHTML == ""){
          return boxes[8-i];
        }
      }
    }
    let i = 0;
    while(true){
      if(boxes[i].innerHTML == ""){
        return boxes[i];
      }
      else{
        i+=2;
      }
    }
  }


  isWin() : boolean{
    let boxes = document.getElementsByClassName("box");
    let line = document.getElementById("line");

    let button_reset = document.getElementById("rst");

    for(let i = 0; i<9; i+=3){
      if(boxes[i].innerHTML == boxes[i+1].innerHTML && boxes[i].innerHTML == boxes[i+2].innerHTML && boxes[i].innerHTML != ""){
        this.currentPlayer = `Player ${boxes[i].innerHTML} won!`;
        button_reset!.style.display = "block";
        line!.style.display = "block";
        line!.style.transform = "rotate(0deg)";
        line!.style.left = "10px";
        if(i == 0){
          line!.style.top = "-250px";
        }
        if(i == 3){
          line!.style.top = "-150px";
        }
        if(i == 6){
          line!.style.top = "-50px";
        }
        this.gameOver = true;
        return true;
      }
    }
    for(let i = 0; i<3; i++){
      if(boxes[i].innerHTML == boxes[i+3].innerHTML && boxes[i].innerHTML == boxes[i+6].innerHTML && boxes[i].innerHTML != ""){
        this.currentPlayer = `Player ${boxes[i].innerHTML} won!`;
        button_reset!.style.display = "block";
        line!.style.display = "block";
        line!.style.transform = "rotate(90deg)";
        line!.style.top = "-150px";
        if(i == 0){
          line!.style.left = "-100px";
        }
        if(i == 1){
          line!.style.left = "0px";
        }
        if(i == 2){
          line!.style.left = "100px";
        }
        this.gameOver = true;
        return true;
      }
    }
    if(boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML && boxes[0].innerHTML != ""){
      this.currentPlayer = `Player ${boxes[0].innerHTML} won!`;
      button_reset!.style.display = "block";
      line!.style.display = "block";
      line!.style.transform = "rotate(45deg)";
      line!.style.top = "-150px";
      line!.style.left = "0px";
      this.gameOver = true;
      return true;
    }
    if(boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML && boxes[2].innerHTML != ""){
      this.currentPlayer = `Player ${boxes[2].innerHTML} won!`;
      button_reset!.style.display = "block";
      line!.style.display = "block";
      line!.style.transform = "rotate(-45deg)";
      line!.style.top = "-150px";
      line!.style.left = "0px";
      this.gameOver = true;
      return true;
    }
    return false;
  }

  isDraw() : boolean{
    let boxes = document.getElementsByClassName("box");
    let button_reset = document.getElementById("rst");
    let empty = false;
    for(let i = 0; i<boxes.length; i++){
      if(boxes[i].innerHTML == ""){
        empty=true;
      }
    }
    if(!empty){
      this.currentPlayer = `It's draw!`;
      button_reset!.style.display = "block";
      this.gameOver = true;
      return true;
    }
    return false;
  }

  reset(o:HTMLDivElement, b:Event, l:HTMLDivElement){
    this.used = 0;
    o.style.display = "flex";
    l.style.display = "none";
    this.gameOver = false;
    this.go = true;
    (<HTMLButtonElement>b.target).style.display = "none";

    let boxes = document.getElementsByClassName("box");
    for(let i = 0; i<boxes.length; i++){
      boxes[i].innerHTML = "";
    }
    this.players  = ["O", "X"];
    this.currentPlayer = `Player ${this.players[0]}'s turn`;
  }
}
