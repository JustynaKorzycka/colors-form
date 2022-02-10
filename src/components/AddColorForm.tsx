import { useState, ChangeEvent, FormEvent, useContext } from 'react';
import { ColorContext } from '../context/colorContext';
import { IColor, IError } from '../interface';
import { changeColorSpell, changeColorToArr, getNewColorId } from '../utils';
import { validateData } from '../validateData';
import '../Styles/form.scss'

const initialErr: IError = { isError: true, message: '' };

const AddColorForm = () => {

  const { addUserColor, userColors } = useContext(ColorContext);
  const [colorValue, setColorValue] = useState<string>("");
  const [colorType, setColorType] = useState<string>("rgb");
  const [error, setError] = useState<IError>(initialErr);

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColorValue(event.target.value)
  }

  const handleOnSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    setColorType(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newColor: IColor = {
      color: colorValue.toUpperCase(),
      type: colorType,
      toDelete: true,
      id: getNewColorId(userColors),
      rgbArr: changeColorToArr(colorValue, colorType)
    }

    const err = validateData(newColor);
    setError(err)
    if (!err.isError) {
      addUserColor(changeColorSpell(newColor));
      setColorValue('');
      setError(initialErr);
    }
  }

  return (
    <form onSubmit={handleSubmit} className='addForm'>
      <label htmlFor='color'>New color:</label> 
      <input placeholder={colorType === "rgb"? "50,168,82,0.50"  : "#32a852" }onChange={ handleOnChange } value={ colorValue } name="color" required />
      <select name='color-type' onChange={handleOnSelect}> 
        <option value="rgb">RGBA</option>
        <option value="hex">HEX</option>
      </select>
      <button type='submit' className='btn--big--success' >Add color</button>
      { error.isError && <p className='errorMessage'>{ error.message }</p>}
    </form>
  );
};

export default AddColorForm;
