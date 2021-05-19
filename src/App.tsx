import React, {
  useEffect,
  useReducer,
  Reducer,
  ChangeEvent,
  useCallback
} from 'react'
import Select from './compenents/Select'
import {
  getData,
  Car,
  Color,
  Type,
  updateByColor,
  uniteReducer,
  imagePlaceholder
} from './utils/helpers'
import './App.css'
import { Container, Header } from './compenents/Layout/style'
const trafficMeister = require('./service')

interface State {
  initial: {
    list: Car[]
    colors: Color[]
    types: Type[]
  }
  colorList: Color[]
  typeList: Type[]
  activeList: Car[]
  chosenType: Type | ''
  chosenColor: Color | ''
  chosenBrand: string
  imageUrl: string
}

function App () {
  const [
    {
      colorList,
      typeList,
      activeList,
      initial,
      chosenBrand,
      chosenColor,
      chosenType,
      imageUrl
    },
    dispatch
  ] = useReducer<Reducer<State, Partial<State>>>(uniteReducer, {
    initial: {
      colors: [],
      types: [],
      list: []
    },
    colorList: [],
    typeList: [],
    activeList: [],
    chosenType: '',
    chosenColor: '',
    chosenBrand: '',
    imageUrl: imagePlaceholder
  })

  const getInitial = useCallback(() => {
    trafficMeister.fetchData(function (err: string | null, data: Car[]) {
      if (!err) {
        const { activeColors, activeTypes } = getData(data)
        dispatch({
          initial: {
            list: data,
            colors: activeColors as Color[],
            types: activeTypes as Type[]
          },
          colorList: activeColors as Color[],
          activeList: data,
          typeList: activeTypes as Type[]
        })
      } else {
        console.log(err)
        getInitial()
      }
    })
  }, [])

  const change = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    const {
      target: { value, name }
    } = e
    if (value === '0') {
      // reset form
      dispatch({
        activeList: initial.list,
        imageUrl: name === 'brand' ? imagePlaceholder : imageUrl,
        colorList: initial.colors,
        typeList: initial.types
      })
      return
    }
    switch (name) {
      case 'type': {
        const newActive = initial.list.filter(({ type }) => type === value)
        const { activeColors } = getData(newActive, 'color')
        dispatch({
          activeList: newActive,
          colorList: activeColors as Color[],
          chosenType: value as Type
        })
        break
      }
      case 'color': {
        const newActive = initial.list.filter(updateByColor(value as Color))
        const { activeTypes } = getData(newActive, 'type')
        dispatch({
          activeList: newActive,
          typeList: activeTypes as Type[],
          chosenColor: value as Color
        })
        break
      }
      case 'brand': {
        const car = initial.list.find(({ brand }) => brand === value)
        dispatch({
          colorList: car?.colors,
          typeList: [car?.type as Type],
          chosenBrand: value,
          imageUrl: car?.img
        })
        break
      }
      default:
        break
    }
  }

  useEffect(() => {
    getInitial()
  }, [getInitial])

  return (
    <>
      <Header>Traffic Meister</Header>
      <Container>
        <div>
          {colorList.length > 0 ? (
            <>
              <Select
                placeholder='choose-type'
                name='type'
                onChange={change}
                options={typeList}
              />
              <Select
                placeholder='choose-brand'
                name='brand'
                onChange={change}
                options={activeList.map(({ brand }) => brand)}
              />
              <Select
                placeholder='choose-color'
                name='color'
                onChange={change}
                options={colorList}
              />
              <p>
                {chosenType}, {chosenBrand}, {chosenColor}
              </p>
            </>
          ) : (
            <h3>Loading data</h3>
          )}
        </div>
        <img src={imageUrl} alt='vehicle' />
      </Container>
    </>
  )
}

export default App
