import { ReactComponent as Battery } from '../../assets/icons/battery.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { ReactComponent as Face } from '../../assets/icons/face.svg';
import { ReactComponent as PersonSppinnig } from '../../assets/icons/spinning_person.svg';
import { ReactComponent as Lung } from '../../assets/icons/lung.svg';
import { ReactComponent as Brain } from '../../assets/icons/brain.svg';
import { ReactComponent as ThreeFace } from '../../assets/icons/three_face.svg';
import { ReactComponent as Heart } from '../../assets/icons/heart.svg';
import { ReactComponent as Time } from '../../assets/icons/time.svg';

export default [
    {
        id: 0,
        nameClass: "one",
        icon: <Battery className="item-icon" />,
    },
    {
        id: 1,
        nameClass: "two",
        icon: <Star className="item-icon" />
    },
    {
        id: 2,
        nameClass: "three",
        icon: <Face className="item-icon" />,
    },
    {
        id: 3,
        nameClass: "four",
        icon: <PersonSppinnig className="item-icon" />,
    },
    {
        id: 4,
        nameClass: "five",
        icon: <Lung className="item-icon" />,
    },
    {
        id: 5,
        nameClass: "six",
        icon: <Brain className="item-icon" />,
    },
    {
        id: 6,
        nameClass: "seven",
        icon: <ThreeFace className="item-icon" />,
    },
    {
        id: 7,
        nameClass: "eight",
        icon: <Heart className="item-icon" />,
    },
    {
        id: 8,
        nameClass: "none",
        icon: <Time className="item-icon" />,
    }
]