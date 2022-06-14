import {
  CgDice1,
  CgDice2,
  CgDice3,
  CgDice4,
  CgDice5,
  CgDice6,
} from "react-icons/cg";

const size = 150;

const dices = [
  {
    value: 1,
    icon: <CgDice1 size={size} color="purple" />,
  },
  {
    value: 2,
    icon: <CgDice2 size={size} color="purple" />,
  },
  {
    value: 3,
    icon: <CgDice3 size={size} color="purple" />,
  },
  {
    value: 4,
    icon: <CgDice4 size={size} color="purple" />,
  },
  {
    value: 5,
    icon: <CgDice5 size={size} color="purple" />,
  },
  {
    value: 6,
    icon: <CgDice6 size={size} color="purple" />,
  },
];

export default dices;
