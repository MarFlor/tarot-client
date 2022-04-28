import React, { useEffect, useState } from 'react';
import { io, Socket } from "socket.io-client";
import { ServerToClientEvents, ClientToServerEvents, ClientSocketDetails } from '../types/io-client';

import { Button, Icon, Label, Message} from 'semantic-ui-react';
import { Room } from './room';
import { RoomCardReading, RoomDetails } from '../types/tarot-card';

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io("http://localhost:8080/");

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
        
        socket.on('socketDetails', (details : ClientSocketDetails) => {
            
            console.log("socketDetails -> ", details);
            appendMessage(JSON.stringify(details))
            
            const msgs = serverMsg;
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
        
    }, []);

    
    const enterRoom = (roomName: string, socket : Socket) => {
        
        socket.emit("enter-room", roomName);
        setinRoom(true);
        setinRoomName(roomName);
        setToRoomMsg("Has entrado a la sala " + roomName);

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
            <h3>Escoge cualquier sala astral</h3>

            <Button icon labelPosition='left' color='teal' onClick={() => enterRoom("Mercurio", socket)}>
                <Icon name='mercury' />
                Mercurio
            </Button>
            <Button icon labelPosition='left' color='yellow' onClick={() => enterRoom("Sol", socket)}>
                <Icon name='sun' />
                Sol
            </Button>
            <Button icon labelPosition='left' color='purple' onClick={() => enterRoom("Marte", socket)}>
                <Icon name='mars' />
                Marte
            </Button>
            <Button icon labelPosition='left' color='pink' onClick={() => enterRoom("Venus", socket)}>
                <Icon name='venus' />
                Venus
            </Button>
            <Button icon labelPosition='left' color='grey' onClick={() => enterRoom("Luna", socket)}>
                <Icon name='moon' />
                Luna
            </Button>
        </div>
        )
    }

    return (
        <div>
            <h1>
                Namaste <br />{clientSockedDetails?.nick}
            </h1>
            <Message size='mini'>{clientSockedDetails?.id}</Message>

            {inRoom === false ?
             <RoomButtons /> : <Room leaveRoom={leaveRoom} selectCard={selectCard} roomName={inRoomName} toRoomMsg={toRoomMsg} roomDetails={roomDetails} roomCardReading={roomCardReading} /> 
            }
            
            <p>
                {serverMsg.map((item, index) => 
                    {
                        return <li key={index}>{item}</li>
                    })
                }
                {JSON.stringify(serverMsg)}
            </p>
            <hr/>
            <div id='messagecontent' />
            <hr/>            
        </div>
    )
}

export {Home}

