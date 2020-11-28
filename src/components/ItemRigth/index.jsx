import React from 'react';

import './style.css';

function ItemRigth({ item, hisMaxItems = false }) {
    const itemDisable = hisMaxItems && !item.selected;

    const sourceIcon = itemDisable ? item.disableIcon :
        (item.selected ? item.unselectedIcon : item.icon);

    function onDropItem(ev) {
        console.log('OnDrop', ev);
    }

    function onDragoverItem(ev) {
        ev.preventDefault();
        console.log('onDragover', ev);
    }

    return (
        <div
            onDrop={onDropItem} onDragOver={onDragoverItem}
            className={
                itemDisable ? "wrapper disable" :
                    (item.selected ? "wrapper active" : "wrapper")}>
            <img src={sourceIcon} alt={item.description} />
            <p>{item.description}</p>
        </div>
    );
}

export default ItemRigth;