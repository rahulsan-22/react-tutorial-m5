import { use, useContext } from 'react'
import VictoriaMemorial from './VictoriaMemorial'
import { SnacksContext } from './Zepto'

const Chaitanyapuri = () => {
  let {item1,item2,item3} = use(SnacksContext)
  return <>
    <VictoriaMemorial />
     {item1} - {item2} - {item3}
  </>
}

export default Chaitanyapuri