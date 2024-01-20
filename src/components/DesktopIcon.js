import React, { useRef } from 'react';
import { EventEmitter } from './EventEmitter';
import { FolderFile } from '@react95/icons';
import Draggable from 'react-draggable';

// TODO: this should be tied to the taskbar somehow
function DesktopIcon({ ico, text, eventType }) {

    const handleEventClick = (e) => {
        if (e.detail === 2) {
            switch(eventType) {
                case 'terrabit':
                    window.open('https://terrabit.idealabs.network');
                default:
                    EventEmitter.dispatch(eventType, true);
            }
        }
    };

    return (
        <div>
            <Draggable
                axis="both"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
            >
                <div className="ico handle" onClick={handleEventClick}>
                    {ico}
                    {text}
                </div>
            </Draggable>
        </div>
    );
}

export default DesktopIcon;
