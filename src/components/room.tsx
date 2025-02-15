import { RoomCardReading, RoomDetails } from '../types/tarot-card';

import { Button, Dimmer, Divider, Icon, List, Loader} from 'semantic-ui-react';
import { Deck } from './deck';

const Room = (props: {leaveRoom: any; selectCard : any, roomName : string; toRoomMsg : string, roomDetails? : RoomDetails, roomCardReading? : RoomCardReading }) => {

    const {leaveRoom,  selectCard, roomName, toRoomMsg, roomDetails, roomCardReading} = props;

    const cardsCount = roomCardReading?.remainingShuffeledCards ? roomCardReading?.remainingShuffeledCards.length : 0
    //const remainingQuestions = Math.floor(cardsCount / 3)

    if(!roomDetails)
    {
        return (
            <div>
                <br />
                <Dimmer active inverted>
                    <Loader size='large'>
                        <img alt='' src='img/avatar-default.png' />
                    </Loader>
                </Dimmer>
            </div>
        )
    }

    return (
        <div>
            

            <List horizontal size="large"> 
                {roomDetails && roomDetails.clients.map((item, key) =>    
                    
                    <List.Item key={key}>
                        <img alt='' src={item.avatar} />
                        <List.Content>
                            <List.Header>{item.nick}
                        </List.Header>
                        </List.Content>
                    </List.Item>
                )}
            </List>
            
            <Divider horizontal>
                Te quedan {cardsCount} cartas 
            </Divider>

            <Deck selectCard={selectCard} roomCardReading={roomCardReading} ></Deck>
            <div>{toRoomMsg}</div>

            <Divider horizontal />
                
            <Button size='tiny' icon color='grey' labelPosition='left' onClick={() => leaveRoom(roomName)}>
                <Icon name='sign-out' />
                Salir {/* roomName */}
            </Button>

            
        </div>
    )

}

export {Room}