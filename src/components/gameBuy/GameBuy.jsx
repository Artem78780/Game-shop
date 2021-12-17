import Button from '../button/Button'
import  './GameBuy.css'

function GameBuy({ game }) {
    return(
        <div className='GameBuy'>
            <span className='GameGuy__price'>{game.price} грн</span>
          <Button 
            type = 'primary'
            onClick={ () => null}
            >
                В корзину
          </Button>
            
                
            
               
           
        </div>
    )
}
export default GameBuy