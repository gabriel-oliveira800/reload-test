import React, { useState, useEffect } from 'react';

import { ReactComponent as Close } from '../../assets/icons/close.svg'

import './style.css';

function GoalsItems({ item, data, maxItems, removeItem }) {
    const [selected, setSelected] = useState(false);

    useEffect(() => {
        data.map(value => {
            if (value.id === item.id) setSelected(true);
            return value;
        })
    }, [data, item])

    function remove() {
        data.map((value) => {
            if (value.id === item.id) {
                removeItem(value);
                setSelected(false);
            }
            return value;
        })
    }

    return (
        <div
            className={`item-box ${item.nameClass} ${maxItems ? 'completed': ""} ${selected ? 'selected' : ""}`}
            onClick={remove}
        >
            <Close className="item-close" />
            {item.icon}
        </div>
    );
}

export default GoalsItems;