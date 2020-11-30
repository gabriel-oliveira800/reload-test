import React, { useState } from 'react';
import { useDrop } from 'react-dnd';

import { ReactComponent as MaleIcon } from '../../assets/icons/male.svg';
import { ReactComponent as Close } from '../../assets/icons/close.svg'

import Icons from './icons';

import './style.css';

export default function ItemRigth() {
    const [test, setTest] = useState(false);

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item) {
            console.log(item.id, item.description)
            
            if (item.id === 2) {
                setTest(true);
            }
            else {
                setTest(false);
            }
        }
    });

    function remove(id) {
        console.log('vou remover', id);
    }

    function getItem(item, index) {

        const removeCalbeck = () => {
            remove(index)
        }


        return (
            <div key={index} className={`item-box ${item.nameClass}`} 
            onClick={removeCalbeck}>
                <Close className="item-close" />
                {item.icon}
            </div>
        );
    }

    return (
        <div ref={dropRef}
            className={test ? "wrraper-left finish" : "wrraper-left"}>
            <div className="item-left">
                {Icons.map((item, index) => getItem(item, index))}
            </div>
            <div className="center-item">
                <MaleIcon className="center-icon" />
            </div>
        </div>
    );
}