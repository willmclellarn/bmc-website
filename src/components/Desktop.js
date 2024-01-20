import React, { useState, useContext, useEffect } from 'react'
// import Explorer from './Explorer'
import Notepad from './Notepad';
// import DataContext from '../contexts/dataContext'
import '../App.css';
import { EventEmitter } from './EventEmitter';
import { Frame, Modal } from '@react95/core';
import { FlyingThroughSpace100, FolderExe2, FolderFile, Mail3, QuestionBubble } from '@react95/icons';
import DesktopIcon from './DesktopIcon';

function WebsiteDesktop(props) {

    const [aboutStatus, setAboutStatus] = useState(true);
    const isMobile = window.innerWidth < 850;
    const [explorerOpened, toggleExplorer] = useState(false);
    const [selectedItem, setSelectedItem] = useState({ id: 'about', name: 'About' });
    const [notepadOpened, toggleNotepad] = useState(true);
    const [items, setItems] = useState([]);

    const [openEditors, setOpenEditors] = useState([]);

    useEffect(() => {
        setOpenEditors([{id: 'about', name: 'About', ico: <QuestionBubble />}]);
        EventEmitter.subscribe('about', () => {
            openNotepad({ id: 'about', name: 'About', ico: <QuestionBubble /> })
        });
        EventEmitter.subscribe('programs', () => {
            openNotepad({ id: 'programs', name: 'Programs', ico: <FolderExe2 /> })
        });
        EventEmitter.subscribe('docs', () => {
            openNotepad({ id: 'docs', name: 'Documents', ico: <FolderFile /> })
        });
        EventEmitter.subscribe('contact', () => {
            openNotepad({ id: 'contact', name: 'Contact', ico: <Mail3 /> })
        });
    }, []);

    const closeExplorer = () => {
        toggleExplorer(false);
    };

    const openExlorer = () => {
        toggleExplorer(true);
    };

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
                Ideal Labs
                
                <div className='links'>
                    <a>Github</a>
                    |
                    <a>Discord</a>
                    |
                    <a>Substack</a>
                </div>
            </div>
        </Modal>
        {openEditors.map(editor => (
            <Notepad
                key={editor.id}
                closeNotepad={() => closeNotepad(editor.id)}
                ico={editor.ico}
                selectedItem={editor}
                isMobile={isMobile}
            />
        ))}
        <div className='init-icos'>
            <DesktopIcon ico={<FolderFile variant='32x32_4' />} text="Documents" eventType={'docs'}/>
            <DesktopIcon ico={<FolderExe2 />} text="Programs" eventType={'docs'}/>
        </div>
        
    </>
    )
}

export default WebsiteDesktop