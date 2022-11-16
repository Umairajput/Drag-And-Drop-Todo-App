// import React, { useState } from 'react';
// import { Button, Modal } from 'antd';
// import 'antd/dist/antd.css';

// const BasicModal = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [inptValue,setInptValue] = useState()
//     const [textAreaValue,setTextAreaValue] = useState()
//     const showModal = () => {
//         setIsModalOpen(true);
//     };
//     const handleOk = () => {
//         setIsModalOpen(false);
//         console.log("inptValue",inptValue)
//         console.log("textAreaValue",textAreaValue)
//     };
//     const handleCancel = () => {
//         setIsModalOpen(false);
//     };
//     return (
//         <>
//             <Button className='btn' type="primary" onClick={showModal}>
//                 Add
//             </Button>
//             <Modal title="Add Item" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//                 <p className='title'><span className='spn'>*</span>Title</p>
//                 <input className='input' type="text" value={inptValue} onChange={(e)=>setInptValue(e.target.value)} />
//                 <div className="description_div">
//                     <p className='description'><span className='spn'>*</span>Description</p>
//                     <textarea className='text_area' name="" id="" cols="55" rows="5" value={textAreaValue} onChange={(e)=>setTextAreaValue(e.target.value)}></textarea>
//                 </div>
//             </Modal>
//         </>
//     );
// };
// export default BasicModal;



import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                hideBackdrop
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inptValue, setInptValue] = useState()
    const [textAreaValue, setTextAreaValue] = useState()
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <p className='title'><span className='spn'>*</span>Title</p>
                <input className='input' type="text" value={inptValue} onChange={(e) => setInptValue(e.target.value)} />
                <div className="description_div">
                    <p className='description'><span className='spn'>*</span>Description</p>
                    <textarea className='text_area' name="" id="" cols="55" rows="5" value={textAreaValue} onChange={(e) => setTextAreaValue(e.target.value)}></textarea>
                </div>
                {/* <div>
                    <button onClick={Update}>Update</button>
                </div> */}
            </Modal>
        </div>
    );
}
