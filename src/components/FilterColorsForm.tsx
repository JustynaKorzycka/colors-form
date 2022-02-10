import { useContext, useState, ChangeEvent, useEffect } from 'react'
import { ColorContext } from '../context/colorContext';
import '../Styles/form.scss'

const FilterColorsForm = () => {
  const [bigRed, setBigRed] = useState<boolean>(false);
  const [bigGreen, setBigGreen] = useState<boolean>(false);
  const [bigBlue, setBigBlue] = useState<boolean>(false);
  const [bigSaturation, setBigSaturation ] = useState<boolean>(false);
  
  const { changeColorsToShow } = useContext(ColorContext);

  useEffect(() => {
     changeColorsToShow(bigRed, bigGreen, bigBlue, bigSaturation)
  }, [bigRed, bigGreen, bigBlue, bigSaturation])
  
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.name === 'red' ? setBigRed(!bigRed) : (event.target.name === 'green' ? setBigGreen(!bigGreen) :(event.target.name==='blue' ? setBigBlue(!bigBlue) : setBigSaturation(!bigSaturation)) );   
  }

  return (
    <div className="filterSection">
      <h2>Change list</h2>
      <form className='filterForm'>
        <div>
          <input type="checkbox" id="red" name="red" checked={ bigRed } onChange={ handleOnChange } />
          <label htmlFor="red">Red&gt;50%</label>
        </div>
        <div>
          <input type="checkbox" id="green" name="green"  checked={bigGreen} onChange={handleOnChange}/>
          <label htmlFor="green">Green&gt;50%</label>
        </div>
        <div>
          <input type="checkbox" id="blue" name="blue" checked={bigBlue} onChange={handleOnChange} />
          <label htmlFor="blue">Blue&gt;50%</label>
        </div>
        <div>
          <input type="checkbox" id="saturation" name="saturation" checked={bigSaturation} onChange={handleOnChange} />
          <label htmlFor="saturation">Sat&gt;50%</label>
        </div>
      </form>
    </div>
  )
}

export default FilterColorsForm