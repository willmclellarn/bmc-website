import React from 'react'
import { Modal, Frame } from '@react95/core'
import ContentFactory from './NotepadContent/ContentFactory';
import { Notepad1 } from '@react95/icons';

function Notepad({ ico, closeNotepad, selectedItem, isMobile, left, top }) {
    return (
        <Modal
            icon={ ico }
            title={`${selectedItem.name}`}
            closeModal={closeNotepad}
            buttons={[{ value: "Close", onClick: closeNotepad }]}
            style={{
                left: isMobile ? '5%' : left,
                top: isMobile ? '3%' : top,
                width: isMobile ? '90%' : 450,
            }}
            menu={[
                { name: 'File', list: [] },
                { name: 'Edit', list: [] }
            ]}>
            <ContentFactory id={selectedItem.id} isMobile={isMobile} />
        </Modal >
    )
}

export default Notepad