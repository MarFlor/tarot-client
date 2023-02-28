import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents, ClientSocketDetails } from '../types/io-client';

import { Button, Card, Header, Icon, Message, Image} from 'semantic-ui-react';
import { Room } from './room';
import { RoomCardReading, RoomDetails } from '../types/tarot-card';


const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(process.env.REACT_APP_SOCKET_URL ?? '');

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
        socket.on('socketDetails', (details : ClientSocketDetails) => {
            
            console.log("socketDetails -> ", details);
            appendMessage(JSON.stringify(details))
            
            
            msgs.push(JSON.stringify(details))
            setServerMsg(msgs)

            setClientSockedDetails(details)
        });
        
        socket.on('enteredRoomDetails', (details : RoomDetails) => {
            
            console.log("enteredRoomDetails -> ", details);
            setRoomDetails(details)
        });

        socket.on('remainingShuffeledCards', (reading : RoomCardReading) => {
            
            console.log("remainingShuffeledCards -> ", reading);
            setRoomCardReading(reading)
        });

        socket.on('toRoomMessage', (msg : string) => {
            
            console.log("toRoomMessage -> ", msg);
            setToRoomMsg(msg)
        });

        socket.on('message', function(msg) {
            
            console.log("message -> ", msg);
            appendMessage(JSON.stringify(msg))
        });

        socket.on('connect', () => {
            
            console.log("client connect -> ", socket.id)
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

    return (
        <div>
            <br />
            <Header as='h1'>
                <Header.Content>
                <Image centered circular  size='small' src={clientSockedDetails?.avatar} />
                {clientSockedDetails?.nick}
                </Header.Content>
            </Header>
            {inRoom === false ? 
              <RoomButtons /> : <Room leaveRoom={leaveRoom} selectCard={selectCard} roomName={inRoomName} toRoomMsg={toRoomMsg} roomDetails={roomDetails} roomCardReading={roomCardReading} /> 
            }        
        </div>
    )
    /** {JSON.stringify(roomDetails?.clients)} */
}

export {Home}

