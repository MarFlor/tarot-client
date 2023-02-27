import { RoomCardReading, RoomDetails } from '../types/tarot-card';

import { Button, Icon, Image, List} from 'semantic-ui-react';
import { Deck } from './deck';

const Room = (props: { leaveRoom: any; selectCard : any, roomName : string; toRoomMsg : string, roomDetails? : RoomDetails, roomCardReading? : RoomCardReading }) => {

    const {leaveRoom,  selectCard, roomName, toRoomMsg, roomDetails, roomCardReading} = props;
    
    console.log("room comp details", roomDetails)
    console.log("roomCardReading", roomCardReading)

    const cardsCount = roomCardReading?.remainingShuffeledCards ? roomCardReading?.remainingShuffeledCards.length : 0
    const remainingQuestions = Math.floor(cardsCount / 3)

    return (
        <div>
            <Button icon labelPosition='left' onClick={() => leaveRoom(roomName)}>
                <Icon name='mercury' />
                Salir de la sala {roomName}
            </Button>
            
            <p>{toRoomMsg}</p>
            
            <h2>Quedan {remainingQuestions} de {78 / 3} preguntas</h2>
            <List horizontal size="mini"> 
                {roomDetails && roomDetails.clients.map((item, key) =>    
                    <List.Item key={item.id}>
                    <Image avatar src='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                    <List.Content>
                        <List.Header>{item.nick} ({item.id})</List.Header>
                    </List.Content>
                    </List.Item>
                )}
            </List>
            <br />
            <br />
            <Deck selectCard={selectCard} roomCardReading={roomCardReading} ></Deck>

        </div>
    )

}

export {Room}