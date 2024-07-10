
import React, { useState } from 'react'
import { FC } from 'react'
import { ITabs } from './App'
import PizzaContent from './PizzaContent'

interface IHeaderProps {
    tabs: ITabs[]
}

// any, unKnown, void
// <> = generec type (number, boolean, T,K)

const Header: FC<IHeaderProps> = (props) => {
    const [content, setContent] = useState<string>("Pizza")

    const handleClick = (text: string) => {
        setContent(text)
    }

    return (
        <div>
            {props.tabs.map(el => {
                return <a onClick={
                    (e: React.MouseEvent<HTMLAnchorElement>) => {
                    handleClick(el.name)
                }} href="#">{el.name}</a>
            })}
            <hr />
            <div>
                {content == "Pizza" && <PizzaContent />}
                {content == "Drinks" && <h2>Pasta Content</h2>}
                {content == "Deserts" && <h2>Burgers Content</h2>}
            </div>
        </div>
    )
}

export default Header