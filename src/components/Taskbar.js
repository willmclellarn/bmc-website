import { List, TaskBar } from "@react95/core";
import { Doc, DocGris, FolderExe, FolderFile, Help, Mail2, Phone2, Progman10, ReaderClosed, WindowsExplorer } from "@react95/icons";
import { EventEmitter } from "./EventEmitter";
// import { useContext } from "react";

export default function WebsiteTaskbar(props) {

    const handleClick = (x) => {
        EventEmitter.dispatch(x, true);
    }

    return (
        <TaskBar list={<List>
            <List.Item icon={<FolderExe/>} onClick={() => handleClick('programs')}>
              <span>Programs</span>
            </List.Item>
            <List.Item icon={<FolderFile/>} onClick={() => handleClick('docs')}>
              <span>Documents</span>
            </List.Item>
            <List.Divider />
            <List.Item icon={<Help/>} onClick={() => handleClick('about')}>
              <span>About</span>
            </List.Item>
            <List.Item icon={<Mail2/>} onClick={() => handleClick('contact')}>
              <span>Contact</span>
            </List.Item>
          </List>} />
    );
}