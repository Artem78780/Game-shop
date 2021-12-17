import style from './GameItem.module.css'
import GameImg from '../gameImg/GameImg';
import GameBuy from '../gameBuy/GameBuy';
import GameGenre from '../gameGenre/GameGenre';

function GameItem({game}) {
    return(
        <div className={ style.gameItem }>
            <GameImg image={game.image} />
           <div className={ style.gameItem__details }>
                <span className={style.gameItem__title}>{game.title}</span>
                <div className={style.gameItem__genre}>
                    {
                        game.genres.map((genre) => 
                        <GameGenre genre={genre} key={genre}  />)
                    }
                </div>
                <div className={style.gameItem__buy}>
                    <GameBuy game={game}/>
                </div>
           </div>
        </div>
    )
}

export default GameItem;