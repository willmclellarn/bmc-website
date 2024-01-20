import React, { useState, useContext, useEffect } from 'react'
// import Explorer from './Explorer'
import Notepad from './Notepad';
// import DataContext from '../contexts/dataContext'
import '../App.css';
import { EventEmitter } from './EventEmitter';
import { Frame, Modal } from '@react95/core';
import { Data16, Explorer100, FlyingThroughSpace100, FolderExe2, FolderFile, Mail3, Network2, QuestionBubble, Time, Timedate200, Url105, Wmsui321000 } from '@react95/icons';
import DesktopIcon from './DesktopIcon';

function WebsiteDesktop(props) {

    const [aboutStatus, setAboutStatus] = useState(true);
    const isMobile = window.innerWidth < 850;
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ id: 'about', name: 'About' });
    const [notepadOpened, toggleNotepad] = useState(true);
    const [items, setItems] = useState([]);

    const [openEditors, setOpenEditors] = useState([]);


    const editors = [
        { id: 'about', name: 'About', ico: <QuestionBubble />},
        { id: 'programs', name: 'Programs', ico: <FolderExe2 /> },
        { id: 'docs', name: 'Documents', ico: <FolderFile /> },
        { id: 'contact', name: 'Contact', ico: <Mail3 /> },
        { id: 'etf', name: 'ETF Network', ico: <Network2 /> },
        { id: 'randomness', name: 'Randomness', ico: <Url105 /> },
        { id: 'timelock', name: 'Timelock Encryption', ico: <Time /> },
        { id: 'dtxs', name: 'Delayed Transactions', ico: <Timedate200 /> }
    ];

    useEffect(() => {
        setOpenEditors([{id: 'about', name: 'About', ico: <QuestionBubble />}]);

        editors.forEach(editor => {
            EventEmitter.subscribe(editor.id, () => {
                openNotepad(editor)
            });
        });
    }, []);

    const getNextX = (n) => {
        return `${15 + 5 * n}%`
    }

    const getNextY = (n) => {
        return `${20 + 5 * n}%`
    }

    const closeNotepad = (id) => {
        setOpenEditors(openEditors.filter(editor => editor.id !== id));

    };

    const openNotepad = (item) => {
        setOpenEditors(prevEditors => {
            if (!prevEditors.some(editor => editor.id === item.id)) {
                return [...prevEditors, item];
            }
            return prevEditors;
        });
    };

    return (
        <>
        <Modal
            icon={<FlyingThroughSpace100 />}
            title={`idealabs.network`}
            style={{
                left: isMobile ? '5%' : '10%',
                top: isMobile ? '3%' : '5%',
                width: isMobile ? '90%' : 450,
            }}>
            <div className='centered'>
                <span className='title'>Ideal Labs</span>
                
                <div className='links'>
                    <a target='_blank' href='https://github.com/ideal-lab5'>Github</a>
                    |
                    <a target='_blank' href='https://discord.gg/4fMDbyRw7R'>Discord</a>
                    |
                    <a target='_blank' href='https://ideallabs.substack.com'>Substack</a>
                </div>
            </div>
        </Modal>
        {openEditors.map((editor, idx) => (
            <Notepad
                key={editor.id}
                closeNotepad={() => closeNotepad(editor.id)}
                ico={editor.ico}
                selectedItem={editor}
                isMobile={isMobile}
                left={getNextX(idx)}
                top={getNextY(idx)}
            />
        ))}
        <div className='init-icos'>
            <DesktopIcon ico={<FolderFile variant='32x32_4' />} text="Documents" eventType={'docs'}/>
            <DesktopIcon ico={<FolderExe2 />} text="Programs" eventType={'programs'}/>
            <DesktopIcon ico={<Explorer100 />} text="TerraBit.exe" eventType={'terrabit'}/>
        </div>
        
    </>
    )
}

export default WebsiteDesktop