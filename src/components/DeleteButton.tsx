import React from 'react';
import { IColor } from '../interface';


interface Props{
  onDelete: (color: IColor) => void;
  color: IColor
}

class DeleteButton extends React.Component<Props>{
  render(){
    return (
        <button className='btn--small--dangerous' onClick={()=>this.props.onDelete(this.props.color)}>X</button>
      )
  }
}

export default DeleteButton;