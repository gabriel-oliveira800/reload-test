import React, { useContext } from 'react';
import { useDrop } from 'react-dnd';

import GoalsItems from '../GoalsItems';
import { ReactComponent as MaleIcon } from '../../assets/icons/male.svg';

import Icons from './icons';
import Context from '../Main/context';

import './style.css';

export default function ItemRigth() {
    const { data, add, remove, hisMaxItems } = useContext(Context)

    const [, dropRef] = useDrop({
        accept: 'CARD',
        drop: (item) => {
            if (data.length === 0) {
                add(item.data);
            } else {
                if (data.filter(value => value.id === item.data.id).length > 0) {
                    return;
                } else {
                    add(item.data);
                }
            }
        },
    });

    return (
        <div ref={dropRef}
            className={
                hisMaxItems ?
                    "wrraper-left finish" : "wrraper-left"
            }>
            <div className="item-left">
                {Icons.map((item, index) =>
                    <GoalsItems
                        key={index}
                        data={data}
                        item={item}
                        removeItem={remove}
                        maxItems={hisMaxItems}
                    />
                )}
            </div>
            <div className="center-item">
                <MaleIcon className="center-icon" />
            </div>
        </div>
    );
}