import React from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { behanceItem } from '../util';

function ModalScreen({data, sendDataToParent}) {
    const sendData = () => {
        const dataToSend = 'Hello from child!';
        sendDataToParent(dataToSend);
      };

  return (
    <div className='modal'>
        <button className='modal-close-btn' onClick={sendData} ><RxCrossCircled /></button>
        <div className='modal-content'>
            <img className="modal-content-image" src={behanceItem[data].featureImg} />
        </div>
    </div>
  )
}

export default ModalScreen