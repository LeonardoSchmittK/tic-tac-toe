import React, { useEffect, useState } from "react"
import './App.css';

function TicTacToe  ()  {
    const [board,setBoard] = useState([[" "," "," "],[" "," "," "],[" "," "," "]])
    const [skeleton, setSkeleton] = useState([" "," "," "," "," "," "," "," "," "])
    const [firstColumn, setFirstColumn] = useState([" "," "," "])
    const [secondColumn, setSecondColumn] = useState([" "," "," "])
    const [thirdColumn, setThirdColumn] = useState([" "," "," "])
    const [firstRow, setFirstRow] = useState([" "," "," "])
    const [secondRow, setSecondRow] = useState([" "," "," "])
    const [thirdRow, setThirdRow] = useState([" "," "," "])
    const [firstDiagonal, setFirstDiagonal] = useState([" "," "," "])
    const [secondDiagonal, setSecondDiagonal] = useState([" "," "," "])
    const [isX, setIsX] = useState(true)
    const [player,setPlayer] = useState("X")
    const [winner,setWinner] = useState("")
    const [isDraw,setIsDraw] = useState(false)
    function checkCell(evt){
        evt.target.children[0].textContent = isX ? "X" : "O"
            setPlayer("O")
            if(player==="O"){
                setPlayer("X")
            }else {
                setPlayer("O")

            }
            setIsX(!isX)
            const idx = [...evt.target.className].reverse()[0]-1
            skeleton[idx] = player     

            // 1 row
            const firstRowSkeleton = [...firstRow]

            for(let i = 0 ;i<3;++i){
                    if(i===idx){
                        firstRowSkeleton[i] = player
                    }else {

                        firstRowSkeleton[i] = [...firstRow][i]
                    }


            }

            setFirstRow(firstRowSkeleton)

                // 2 row
                const secondRowSkeleton = [...secondRow]
                for(let i = 3 ;i<6;++i){
                        if(i===idx){
                            secondRowSkeleton[i-3] = player
                        }else {
    
                            secondRowSkeleton[i-3] = [...secondRow][i-3]
                        }
    
    
                }
    
                setSecondRow(secondRowSkeleton)

                // 3 row

                const thirdRowSkeleton = [...thirdRow]

                for(let i = 6 ;i<9;++i){
                        if(i===idx){
                            thirdRowSkeleton[i-6] = player
                        }else {
    
                            thirdRowSkeleton[i-6] = [...thirdRow][i-6]
                        }
    
    
                }
    
                setThirdRow(thirdRowSkeleton)

                
                // 1 column 

                const firstColumnSkeleton = [...firstColumn]
                let countL = 0;

                for(let i = 0 ;i<9;i=i+3){
                    console.log(countL-i);
                    if(i===idx){
                        
                        firstColumnSkeleton[countL-i] = player
                        
                        
                    }else {
                        
                        firstColumnSkeleton[countL-i] = [...firstColumn][countL-i]
                    }
                    countL=countL+4

            }

            

            setFirstColumn(firstColumnSkeleton)

            // 2 column 


              const secondColumnSkeleton = [...secondColumn]
              let countL2 = 1;

              for(let i = 1 ;i<9;i=i+3){
                  if(i===idx){
                      
                    secondColumnSkeleton[countL2-i] = player
                      
                      
                  }else {
                      
                    secondColumnSkeleton[countL2-i] = [...secondColumn][countL2-i]
                  }
                  countL2=countL2+4

          }

          

          setSecondColumn(secondColumnSkeleton)


          // 3 column 

                


                const thirdColumnSkeleton = [...thirdColumn]
                let countL3 = 2;
  
                for(let i = 2 ;i<9;i=i+3){
                    if(i===idx){
                        
                        thirdColumnSkeleton[countL3-i] = player
                        
                        
                    }else {
                        
                        thirdColumnSkeleton[countL3-i] = [...thirdColumn][countL3-i]
                    }
                    countL3=countL3+4
  
            }
  
            
  
            setThirdColumn(thirdColumnSkeleton)


            // 1 diagonal

            const firstDiagonalSkeleton = [...firstDiagonal]

            if(idx === 8 ) {
                firstDiagonalSkeleton[2] = player
            }

            if(idx === 4 ) {
                firstDiagonalSkeleton[1] = player
            }

            if(idx === 0 ) {
                firstDiagonalSkeleton[0] = player
            }



        

        setFirstDiagonal(firstDiagonalSkeleton)


        // 2 diagonal


        const secondDiagonalSkeleton = [...secondDiagonal]

        if(idx === 2 ) {
            secondDiagonalSkeleton[0] = player
        }

        if(idx === 4 ) {
            secondDiagonalSkeleton[1] = player
        }

        if(idx === 6 ) {
            secondDiagonalSkeleton[2] = player
        }



    

    setSecondDiagonal(secondDiagonalSkeleton)

    }


    function checkDimensionsForWinner(dimensions){
        const playerAnt = player === "X"? "O" : "X"
        if(JSON.stringify(dimensions.slice(0,3))===JSON.stringify([playerAnt,playerAnt,playerAnt])){
            console.log("WINNNNNNNNER");
            setWinner(player)
        }

        if(JSON.stringify(dimensions.slice(3,6))===JSON.stringify([playerAnt,playerAnt,playerAnt])){
            console.log("WINNNNNNNNER");
            setWinner(player)

        }

        if(JSON.stringify(dimensions.slice(6,9))===JSON.stringify([playerAnt,playerAnt,playerAnt])){
            console.log("WINNNNNNNNER");
            setWinner(player)

        }


    console.log(dimensions); 
    }


    function checkForDraw(board){
        let counter = 0;
        board.map((item,idx)=>{
            if(item==="X" || item === "O"){
                counter = counter + 1
            }
        })

        if(counter === board.length){
            setIsDraw(true)
            return false
        }
    }

    useEffect(()=>{
        checkDimensionsForWinner([...firstRow,...secondRow,...thirdRow])
        checkDimensionsForWinner([...firstColumn,...secondColumn,...thirdColumn])
        checkDimensionsForWinner([...firstDiagonal,...secondDiagonal])
        if(winner===""){
            checkForDraw([...firstRow,...secondRow,...thirdRow,...firstColumn,...secondColumn,...thirdColumn,...firstDiagonal,...secondDiagonal])
        }
        
        
    },[board,firstRow,secondRow,thirdRow,firstColumn,secondColumn,thirdColumn,firstDiagonal,secondDiagonal])

    
    return (
        <div>
            <h3>Jogo da velha</h3>
            {
                isDraw &&
                <> 
                <h1>EMPATE!</h1>
                <button onClick={()=>window.location.reload(false)}>Começar de novo</button>
                </>
               
            }
            {winner && 
            <>  
            <h1>O VENCEDOR É {player === "X"? "O" : "X"}</h1>
            <button onClick={()=>window.location.reload(false)}>Começar de novo</button>
            </>
         
            
            }
            <div className="board">
            <div className="row">
                <div onClick={checkCell} className="cell 1" >
                    <p></p>
                </div> 
                <div  onClick={checkCell} className="cell 4" >
                <p></p>

                </div> 
                <div onClick={checkCell} className="cell 7" >
                <p></p>

                </div> 
            </div>
            <div className="row">
                <div onClick={checkCell} className="cell 2">
                <p></p>

                </div> 
                <div onClick={checkCell} className="cell 5">
                <p></p>

                </div> 
                <div onClick={checkCell} className="cell 8">
                <p></p>

                </div> 
            </div> 
            <div className="row">
                <div onClick={checkCell} className="cell 3">
                <p></p>

                </div> 
                <div onClick={checkCell} className="cell 6">
                <p></p>

                </div> 
                <div onClick={checkCell} className="cell 9">
                <p></p>

                </div> 
            </div>  
        </div>
        </div>
        
    )
}

export default TicTacToe