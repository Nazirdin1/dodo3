
import React from 'react'
import Header from './Header';

type TypeTabs = {
  name:string
}

export interface ITabs {
  name:string;
}

const tabs: ITabs[] = [
  {
    name:'Pizza',
  },
  {
    name:'Drinks',
  },
  {
    name:'Deserts',
  },
]

const App: React.FC = () => {
  return (
    <div>
      <Header tabs={tabs}/>
    </div>
  )
}

export default App