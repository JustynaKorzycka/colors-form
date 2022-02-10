import { useContext } from 'react';
import { IColor } from '../interface';
import Color from './Color';
import { ColorContext } from '../context/colorContext';
import { sortColorFunc } from '../utils';
import '../Styles/colorList.scss'


const ColorList = () => {
  
  const { colorsToShow } = useContext(ColorContext);

  colorsToShow.sort((a,b)=>sortColorFunc(a,b))
 
  return (
    <div className="colorList">
        { colorsToShow.map((color: IColor, index: number) => <Color key={ index } color={color}/>)}
    </div>

  );
};

export default ColorList;
