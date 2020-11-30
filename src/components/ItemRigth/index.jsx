import React, { useState, useContext, useEffect } from 'react';
import { useDrag } from 'react-dnd';

import Context from '../Main/context'

import './style.css';

export default function ItemRigth({ item, hisMaxItems = false }) {
    const [selected, setSelected] = useState(false);
    const { data } = useContext(Context);

    useEffect(() => {
        const handleSelected = () => {
            const contains =  data.filter(value => { 
                return value.description.toLocaleLowerCase() === item.description.toLocaleLowerCase();
            });

            contains.length > 0 ? setSelected(true): setSelected(false);
        }

        handleSelected();
    }, [data, item])

    const [, dragRef] = useDrag({
        item: {
            type: 'CARD',
            data: { id: item.id, description: item.description }
        },
        
    });

    const itemDisable = hisMaxItems && !selected;
    const sourceIcon = itemDisable ? item.disableIcon :
        (selected ? item.unselectedIcon : item.icon);

    return (
        <div ref={dragRef}
            className={
                itemDisable ? "wrapper disable" :
                    (selected ? "wrapper active" : "wrapper")}>
            <img src={sourceIcon} alt={item.description} draggable="false" />
            <p>{item.description}</p>
        </div>
    );
}