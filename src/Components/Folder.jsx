import { ChevronRight } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab'
import React from 'react'
import FolderView from './FolderView'
import FolderIcon from '@mui/icons-material/Folder';

const Folder = ({folder}) => {
  return (
    <>
      {folder.items.map((item)=>(<div><FolderView folder={item} /></div>))}   
    </>
  )
}

export default Folder