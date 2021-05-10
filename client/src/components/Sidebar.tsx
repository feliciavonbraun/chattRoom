import { CSSProperties } from "react";
import { useContext } from "react";
import { SocketContext } from "../contexts/socketProvider";
import Rooms from './Rooms';

interface Props {
    signOut: () => void;
    openForm: () => void
}

function Sidebar(props: Props) {
    const { username, leaveChat, rooms } = useContext(SocketContext);


    return (
        <aside style={rootStyle}>
            <div style={welcomeContainer}>
                <h2>ChatALot</h2>
                <h3 style={usernameStyle}>{username}</h3>
                <button
                    style={newChatButton}
                    onClick={() => { leaveChat(); props.signOut() }}
                >
                    Log out
                </button>
            </div>
            <button onClick={props.openForm} style={newChatButton}>
                New Chat
            </button>
            <div style={roomsContainer}>
                <h3 style={{ color: '#5C5C5C' }}>ChatRooms</h3>
                {rooms.map((room, index) => {
                    return (
                        <Rooms 
                            key={index}
                            room={room}
                        />
                    );
                }
                )}
            </div>
        </aside>
    );
}

const rootStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '40%',
    height: '100vh',
    boxShadow: '-.3rem 0 .3rem #00000020 inset',
};

const welcomeContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '25%',
    width: '80%',
};

const usernameStyle: CSSProperties = {
    marginTop: '-.9rem',
    color: '#5C5C5C'
}

const newChatButton: CSSProperties = {
    width: '80%',
    maxWidth: '10rem',
    borderRadius: '.3rem',
    padding: '.3rem',
    marginBottom: '1rem',
    border: 'none',
    outline: 'none',
    boxShadow: '.1rem .1rem .3rem #00000020 inset',
    backgroundColor: '#00DBB8',
    color: 'white',
    cursor: 'pointer',
};

const roomsContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70%',
    width: '80%',
};


export default Sidebar;
