import React, { useState ,useEffect} from 'react';
import PanelPizzas from './modules/PizzaOrder/PanelPizzas';
import './modules/common/styles/app.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPizzas } from './modules/common/redux/actions/pizzas';
import axios from 'axios';



const App = () => {
  
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true)
  useEffect(async () => {
      setIsLoading(true)
        await axios.get('http://localhost:3000/db.json').then(({ data }) => {dispatch(setPizzas(data))})
      setIsLoading(false)

  }, [])

  return (
      <PanelPizzas isLoading={isLoading}/>
  )
}

export default App
