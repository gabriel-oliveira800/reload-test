import React from 'react';
import { useDrag } from 'react-dnd';


import './style.css';

export default function ItemRigth({ item, hisMaxItems = false }) {
    const [, dragRef] = useDrag({
        item: {
            type: 'CARD',
            id: item.id,
            description: item.description,
        },
    });

    const itemDisable = hisMaxItems && !item.selected;
    const sourceIcon = itemDisable ? item.disableIcon :
        (item.selected ? item.unselectedIcon : item.icon);

    return (
        <div ref={dragRef}
            className={
                itemDisable ? "wrapper disable" :
                    (item.selected ? "wrapper active" : "wrapper")}>
            <img src={sourceIcon} alt={item.description} draggable="false" />
            <p>{item.description}</p>
        </div>
    );
}