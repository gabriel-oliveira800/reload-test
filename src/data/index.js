import Battery from '../assets/icons/battery.svg';
import BatterySelected from '../assets/icons/battery_02.svg';
import BatteryDisable from '../assets/icons/battery_03.svg';

import Star from '../assets/icons/star.svg';
import StarSelected from '../assets/icons/star_02.svg';
import StarDisable from '../assets/icons/star_03.svg';

import Face from '../assets/icons/face.svg';
import FaceSelected from '../assets/icons/face_02.svg';
import FaceDisable from '../assets/icons/face_03.svg';

import PersonSppinnig from '../assets/icons/spinning_person.svg';
import PersonSppinnigSelected from '../assets/icons/spinning_person_02.svg';
import PersonSppinnigDisable from '../assets/icons/spinning_person_03.svg';

import Lung from '../assets/icons/lung.svg';
import LungSelected from '../assets/icons/lung_02.svg';
import LungDisable from '../assets/icons/lung_03.svg';

import Brain from '../assets/icons/brain.svg';
import BrainSelected from '../assets/icons/brain_02.svg';
import BrainDisable from '../assets/icons/brain_03.svg';

import ThreeFace from '../assets/icons/three_face.svg';
import ThreeFaceSelected from '../assets/icons/three_face_02.svg';
import ThreeFaceDisable from '../assets/icons/three_face_03.svg';

import Heart from '../assets/icons/heart.svg';
import HeartSelected from '../assets/icons/heart_02.svg';
import HeartDisable from '../assets/icons/heart_03.svg';

import Time from '../assets/icons/time.svg';
import TimeSelected from '../assets/icons/time_02.svg';
import TimeDisable from '../assets/icons/time_03.svg';

const items = [
    {
        id: 0,
        icon: Battery,
        selected: true,
        unselectedIcon: BatterySelected,
        disableIcon: BatteryDisable,
        description: "Increase energy"
    },
    {
        id: 1,
        icon: Star,
        selected: true,
        disableIcon: StarDisable,
        unselectedIcon: StarSelected,
        description: "Boost performance"
    },
    {
        id: 2,
        icon: Face,
        selected: true,
        unselectedIcon: FaceSelected,
        disableIcon: FaceDisable,
        description: "Enhance beauty"
    },
    {
        id: 3,
        selected: true,
        icon: PersonSppinnig,
        unselectedIcon: PersonSppinnigSelected,
        disableIcon: PersonSppinnigDisable,
        description: "Restore body balance"
    },
    {
        id: 4,
        icon: Lung,
        selected: true,
        unselectedIcon: LungSelected,
        disableIcon: LungDisable,
        description: "Upgrade digestion"
    },
    {
        id: 5,
        icon: Brain,
        selected: false,
        disableIcon: BrainDisable,
        unselectedIcon: BrainSelected,
        description: "Enhance cognition"
    },
    {
        id: 6,
        icon: ThreeFace,
        selected: false,
        disableIcon: ThreeFaceDisable,
        unselectedIcon: ThreeFaceSelected,
        description: "Optmize mood"
    },
    {
        id: 7,
        icon: Heart,
        selected: false,
        unselectedIcon: HeartSelected,
        disableIcon: HeartDisable,
        description: "Promote longevity"
    },
    {
        id: 8,
        icon: Time,
        selected: false,
        unselectedIcon: TimeSelected,
        disableIcon: TimeDisable,
        description: "Improve sleep"
    },
]

export default items;