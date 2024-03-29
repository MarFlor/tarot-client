import { RoomCardReading, RoomDetails } from "./tarot-card";

interface ServerToClientEvents {
    noArg: () => void;
    message: (msg : any) => void;
    socketDetails: (details : ClientSocketDetails) => void;
    yourSockerId: (sockedId : string) => void;
    enteredRoomDetails : (details : RoomDetails) => void;
    remainingShuffeledCards : (reading : RoomCardReading) => void;
    sockedDisconnected : (sockedId : string) => void;
    toRoomMessage : (msg : string) => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    userConnected: (details : ClientSocketDetails) => void;
    getNickAvatar: (sockedId : string) => void;
    enterRoom: (roomName : string) => void;
    leaveRoom: (roomName : string) => void;
    selectCard : (roomName : string, cardId : string) => void;
}

interface ClientSocketDetails {
    id : string;
    nick : string;
    avatar: string;
}

export type {ServerToClientEvents, ClientToServerEvents, ClientSocketDetails}