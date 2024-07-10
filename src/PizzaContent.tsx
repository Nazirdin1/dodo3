
import React from 'react'

interface IDataPizza {
    name: string,
    desc: string,
    img: string,
    price: number,
}

const dataPizza: IDataPizza[] = [
    {
        name: "Peperoni",
        desc: "Креветки  , ананасы , соус сладкий чили, перец сладкий , моцарелла, соус альфредо",
        img: "https://media.dodostatic.net/image/r:292x292/11EF33DC750FF17794FB1ACA35F22A6E.avif",
        price: 495,
    },
    {
        name: "4 Cheeze",
        desc: "Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус",
        img: "https://media.dodostatic.net/image/r:292x292/11EEC6DEEF2A8314A75E734E42048301.avif",
        price: 595,
    },
]

const PizzaContent = () => {
    return (
        <div style={{
            display: "flex",
            gap: "250px"
        }}>
            {dataPizza.map(p => {
                return (
                    <div style={{ width: 250 }} key={p.name}>
                        <img src={p.img} alt='' />
                        <h3>{p.name}</h3>
                        <p>{p.desc}</p>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <p>{p.price}</p>
                            <button>выбрать</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default PizzaContent