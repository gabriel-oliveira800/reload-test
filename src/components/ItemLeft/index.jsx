import React from 'react';

import { ReactComponent as MaleIcon } from '../../assets/icons/male.svg';

import './style.css';

export default function ItemRigth() {
    return (
        <div className="wrraper-left">
            <div className="item-left">
            </div>
            <div className="center-item">
                <MaleIcon className="item-icon" />
            </div>
        </div>
    );
}