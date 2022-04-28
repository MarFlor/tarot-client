import { RoomCardReading, RoomDetails } from "./tarot-card";

interface ServerToClientEvents {
    noArg: () => void;
    message: (msg : any) => void;
    socketDetails: (details : ClientSocketDetails) => void;
    enteredRoomDetails : (details : RoomDetails) => void;
    remainingShuffeledCards : (reading : RoomCardReading) => void;
    toRoomMessage : (msg : string) => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
    userConnected: (details : ClientSocketDetails) => void;
    enterRoom: (roomName : string) => void;
    leaveRoom: (roomName : string) => void;
    selectCard : (roomName : string, cardId : string) => void;
}

interface ClientSocketDetails {
    id : string;
    nick : string;
}



export type {ServerToClientEvents, ClientToServerEvents, ClientSocketDetails}