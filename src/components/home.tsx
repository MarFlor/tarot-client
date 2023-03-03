import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents, ClientSocketDetails } from '../types/io-client';

import { Button, Card, Header, Icon, Message, Image} from 'semantic-ui-react';
import { Room } from './room';
import { RoomCardReading, RoomDetails } from '../types/tarot-card';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io('http://localhost:8080/');

const Home = () => {

    const [serverMsg, setServerMsg] = useState<Array<string>>([""]);
    const [clientSockedDetails, setClientSockedDetails] = useState<ClientSocketDetails>();

    const [inRoom, setinRoom] = useState<boolean>(false);
    const [inRoomName, setinRoomName] = useState<string>("");
    const [toRoomMsg, setToRoomMsg] = useState<string>("");
    const [roomDetails, setRoomDetails] = useState<RoomDetails>();

    const [roomCardReading, setRoomCardReading] = useState<RoomCardReading>();
    
    const appendMessage = (msg: string) => {
        
        const temp = document.getElementById('messagecontent');
        const li = document.createElement("li");
        li.textContent = msg;
        temp?.prepend(li);
    }

    useEffect(() => {
        
        const msgs = serverMsg;
        socket.on('yourSockerId', (socketId : string) => {
            socket.emit("getNickAvatar", socketId)
        });

        socket.on('socketDetails', (details : ClientSocketDetails) => {
            
            appendMessage(JSON.stringify(details))
            
            msgs.push(JSON.stringify(details))
            setServerMsg(msgs)

            setClientSockedDetails(details)
        });
        
        socket.on('enteredRoomDetails', (details : RoomDetails) => {
            appendMessage("enteredRoomDetails" + JSON.stringify(details))
            setRoomDetails(details)
        });

        socket.on('remainingShuffeledCards', (reading : RoomCardReading) => {
            setRoomCardReading(reading)
        });

        socket.on('toRoomMessage', (msg : string) => {
            setToRoomMsg(msg)
        });

        socket.on('message', function(msg) {
            
            appendMessage("message" + JSON.stringify(msg))
        });

        socket.on('connect', () => {
            
        });
        
    }, [serverMsg]);

    
    const enterRoom = (roomName: string, socket : Socket) => {
        
        socket.emit("enter-room", roomName);
        setinRoom(true);
        setinRoomName(roomName);

        socket.emit("getRoomDetails", roomName);
    }

    const leaveRoom = (roomName: string) => {
        
        socket.emit("leaveRoom", roomName);
        setinRoom(false);
    }

    const selectCard = (roomName: string, cardId : string) => {
        
        socket.emit("selectCard", roomName, cardId);

    }

    const RoomButtons = () =>  {

        return (
        <div>
            <Message size='large'>Para iniciar tu lectura escoge una sala</Message>
            
            <Card.Group itemsPerRow={2}>
                <Card key={1}> 
                    <Button size='massive' icon color='teal' onClick={() => enterRoom("Mercurio", socket)}>
                        <Icon name='mercury' />
                        Mercurio
                        </Button>
                </Card>

                <Card key={2}>
                    <Button size='massive' icon color='yellow' onClick={() => enterRoom("Sol", socket)}>
                        <Icon name='sun' />
                        Sol
                    </Button>
                </Card>

                <Card key={3}>
                    <Button size='massive' icon color='purple' onClick={() => enterRoom("Marte", socket)}>
                        <Icon name='mars' />
                        Marte
                    </Button>
                </Card>

                <Card key={4}>
                    <Button size='massive' icon color='pink' onClick={() => enterRoom("Venus", socket)}>
                        <Icon name='venus' />
                        Venus
                    </Button>
                </Card>

                <Card key={5}>
                    <Button size='massive' icon color='grey' onClick={() => enterRoom("Luna", socket)}>
                        <Icon name='moon' />
                        Luna
                    </Button>
                </Card>
            </Card.Group>
        </div>
        )
    }

    const HeaderDetails = (props: {details : ClientSocketDetails}) =>  {

        const {details} = props;

        return (
            <Header as='h1'>
                    <Header.Content>
                    <Image centered circular  size='small' src={details.avatar} />
                    {details.nick}
                    </Header.Content>
            </Header>
        )
    }

    return (
        <div>
            {clientSockedDetails && 
                <HeaderDetails details={clientSockedDetails} />
            }

            {inRoom === false && clientSockedDetails && clientSockedDetails.id 
                ? <RoomButtons /> 
                : <Room leaveRoom={leaveRoom} 
                    selectCard={selectCard} roomName={inRoomName} 
                    toRoomMsg={toRoomMsg} roomDetails={roomDetails} 
                    roomCardReading={roomCardReading} /> 
            }
        </div>
    )
}

export {Home}