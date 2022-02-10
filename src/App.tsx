import { FC, useCallback, useEffect, useState } from 'react';
import './App.scss';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import FilterColorsForm from './components/FilterColorsForm';
import { ColorContext } from './context/colorContext';
import { IColor, } from './interface';
import predefinedList from './predefColors';
import { changeColorToArr } from './utils';

const App: FC = () => {
  
  const [userColors, setUserColors] = useState<IColor[]>([]);
  const [colorsToShow, setColorToShow] = useState<IColor[]>([]);
  
  const addUserColor = useCallback((newColor: IColor) => {
    setUserColors([...userColors, newColor])
  }, [userColors, setUserColors]);

  const deleteUserColor = useCallback((deleteColor: IColor) => {
    setUserColors(userColors.filter(color => {
      if (!color.toDelete  || (color.toDelete && color.id !== deleteColor.id)) {
        return color
      }return null
    }))
  }, [userColors, setUserColors]);

    const changeColorsToShow = (bigRed: boolean, bigGreen: boolean, bigBlue: boolean, bigSaturation: boolean) => {
      let allColors = userColors.concat(predefinedList);
      allColors = allColors.filter(color => {
      let notShow = 0;
      (bigRed && color.rgbArr[0] < 127) && notShow++;
      (bigGreen && color.rgbArr[1] < 127) && notShow++; 
      (bigBlue && color.rgbArr[2] < 127) && notShow++; 
      (bigSaturation && color.rgbArr[2] < 0.50) && notShow++; 
      if (!notShow) return color;
      return null;
    })
    setColorToShow(allColors)
  }

  useEffect(() => {
   
    const savedColors = JSON.parse(localStorage.getItem("colors") || "[]");
    if (savedColors) {
      setUserColors(savedColors)
    };
    predefinedList.map(color => color.rgbArr = changeColorToArr(color.color, color.type))
    
  }, []);

  useEffect(() => {
     setColorToShow(userColors.concat(predefinedList))
  },[userColors])

  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(userColors))
  }, [userColors]);

  return (
    <div className='wrapper'>
      <h1>Welcome in color generator</h1>
      <ColorContext.Provider value={ {
        userColors: userColors,
        colorsToShow: colorsToShow,
        addUserColor: addUserColor,
        deleteUserColor: deleteUserColor,
        changeColorsToShow: changeColorsToShow
      }}>
        <AddColorForm  />
        <FilterColorsForm  />
        <ColorList />
      </ColorContext.Provider>
   
     
      </div>
  );
}

export default App;
