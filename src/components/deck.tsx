import { Card, CardGroup } from 'semantic-ui-react';
import { RoomCardReading, TarotCard } from '../types/tarot-card';

const Deck = (props: { selectCard : any, roomCardReading? : RoomCardReading }) => {

    const {selectCard, roomCardReading} = props;

    return (

        <div>
            <Card.Group itemsPerRow={3}>            

                {roomCardReading && roomCardReading.seletectedCardsInBoard && roomCardReading.seletectedCardsInBoard.map((item, key) =>    
                    <Card key={key} image={item.picUrl}></Card>
                )}

            </Card.Group>
            
            <hr />

            <Card.Group itemsPerRow={10}>            

                {roomCardReading && roomCardReading.remainingShuffeledCards.map((item, key) =>    
                    <Card key={key} image={item.picUrl} onClick={() => selectCard(roomCardReading.roomName, item.id)}></Card>
                )}

            </Card.Group>
        </div>
    )

}

export {Deck}