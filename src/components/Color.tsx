import { useContext } from 'react';
import { ColorContext } from '../context/colorContext';
import { IColor } from '../interface';
import DeleteButton from './DeleteButton';

interface Props{
  color: IColor
}

const Color = ({ color }: Props) => {

  const { deleteUserColor } = useContext(ColorContext);

  return (
    <div className='singleColor'>
      <div className='rectangle' data-color={ color.color } style={ { backgroundColor: color.color } }></div>
      <div className='desc'>
        <p>{ color.color }</p>
        { color.toDelete && <DeleteButton onDelete={ deleteUserColor } color={color}/>}
      </div>
      
     

    </div>
  )
};

export default Color;

