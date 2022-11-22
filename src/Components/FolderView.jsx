import React from 'react'
import {TreeView} from '@mui/lab';
import {TreeItem} from '@mui/lab';
import Folder from './Folder';
import { ChevronRight, ExpandMore, FileCopy } from '@mui/icons-material';
import FolderIcon from '@mui/icons-material/Folder';
const FolderView = ({folder}) => {
  
 console.log(folder);
  return (
        <TreeView defaultExpandIcon={<ChevronRight />} defaultCollapseIcon={<ExpandMore/>}>
            <TreeItem nodeId={Math.random()*1000} label={`${folder.name}`}>
              {folder.type=="folder" ?
                <Folder folder={folder} /> :""}
            </TreeItem>
        </TreeView>
  
  )
}

export default FolderView