import React, { FC, Children, ReactNode } from 'react'
import { Modal, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material'


interface IProps {
 children: {
  header: ReactNode,
  body: ReactNode,
  footer: ReactNode
 }
}

const Slot: FC<{
 name: 'Header' | 'Content' | 'Footer';
}> = () => null;

const handleClose = () => {

}

const ModalForm = ({ open, children }: { children: Array<React.ReactElement>, open: boolean }) => {

 const childrenArray = Children.toArray(children) as unknown as React.ReactElement[];
 const Header = childrenArray.find(child => child?.props?.name === 'Header');
 const Content = childrenArray.find(child => child?.props?.name === 'Content');
 const Footer = childrenArray.find(child => child?.props?.name === 'Footer');

 return (
  <>
   <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="draggable-dialog-title"
   >
    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
     {Header?.props?.children}
    </DialogTitle>
    <DialogContent>
     <DialogContentText>
      {Content?.props?.children}
     </DialogContentText>
    </DialogContent>
    <DialogActions>
     {Footer?.props?.children}
    </DialogActions>
   </Dialog>
  </>
 )
}

ModalForm.Slot = Slot;
export default ModalForm;
