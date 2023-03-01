import { RoomCardReading, RoomDetails } from '../types/tarot-card';

import { Button, Divider, Icon, Image, List} from 'semantic-ui-react';
import { Deck } from './deck';

const Room = (props: {leaveRoom: any; selectCard : any, roomName : string; toRoomMsg : string, roomDetails? : RoomDetails, roomCardReading? : RoomCardReading }) => {

    const {leaveRoom,  selectCard, roomName, toRoomMsg, roomDetails, roomCardReading} = props;

    const cardsCount = roomCardReading?.remainingShuffeledCards ? roomCardReading?.remainingShuffeledCards.length : 0
    const remainingQuestions = Math.floor(cardsCount / 3)

    if(!roomDetails)
    {
        return (
            <div>
                <br />
                <Button size='big' labelPosition='left'  icon color='pink' onClick={() => window.location.reload()}>
                <Icon name='refresh' />
                Haz click para recargar la página
                </Button>
            </div>
        )
    }

    return (
        <div>
            <Button size='tiny' icon color='grey' labelPosition='left' onClick={() => leaveRoom(roomName)}>
                <Icon name='sign-out' />
                Salir de {roomName}
            </Button>
            <br />
            
            <List horizontal size="large"> 
                {roomDetails && roomDetails.clients.map((item, key) =>    
                    
                    <List.Item key={key}>
                    <Image avatar src={item.avatar} />
                    <List.Content>
                        <List.Header>{item.nick}</List.Header>
                    </List.Content>
                    </List.Item>

                )}
            </List>
            
            <Divider horizontal>
                {remainingQuestions} de {78 / 3} preguntas
            </Divider>
            
            <Deck selectCard={selectCard} roomCardReading={roomCardReading} ></Deck>
            <div>{toRoomMsg}</div>
        </div>
    )

}

export {Room}