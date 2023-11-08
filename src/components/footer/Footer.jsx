import { icons, as, data } from "./data"

import { Top, TopDiv, TopA, Bottom, LastDivBottom } from "./styles"

import { useState } from "react"

const Footer = () => {
    const [hidden, setHidden] = useState([ false, false, false, false, false ]);

    const handleDivClick = (index) => {
        const newHidden = [...hidden];
        newHidden[index] = !newHidden[index];
        setHidden(newHidden);
    };

  return (
    <div>
        <Top>
            { data.map((item, i) => (
                <TopDiv key={i}>
                    <div onClick={() => handleDivClick(i)}>
                        <h2>{ item.h2 }</h2>
                        <svg>
                            <path d="M11.96 15.5c-.206 0-.402-.084-.546-.232l-5.188-5.33c-.3-.31-.3-.81 0-1.12.3-.31.79-.31 1.093 0l4.64 4.767 4.723-4.853c.3-.31.79-.31 1.09 0 .303.31.303.812.002 1.122l-5.27 5.414c-.145.148-.34.232-.546.232"></path>
                        </svg>
                    </div>
                    { item.a.map((a, ind) => (
                        <TopA key={ind} hidden={hidden[i]}>{a}</TopA>
                    )) }
                </TopDiv>
            )) }
        </Top>
        <Bottom>
            <hr/>
            <div style={{ marginTop: 30 }}>
                { icons.map((item, i) => (
                    <svg key={i}>
                        <path d={item}></path>
                    </svg>
                )) }
            </div>
            <LastDivBottom>
                { as.map((item, i) => (
                    <a key={i} dangerouslySetInnerHTML={{ __html: item }}></a>
                ))}
            </LastDivBottom>
            <p>© 2023 Starbucks Coffee Company. All rights reserved.</p>
        </Bottom>
    </div>
  )
}

export default Footer