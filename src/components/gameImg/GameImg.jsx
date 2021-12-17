import style from './GameImg.module.css'

function GameImg({image = ''}){

    return(
        <div className={ style.gameImg } 
        style={{ backgroundImage: `url(${image})` }}/>
    )
}
export default GameImg;