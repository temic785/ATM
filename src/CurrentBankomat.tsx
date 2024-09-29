import React from "react";
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
    return (
        // <div>
        //     {money.banknote === "USD"
        //         ? <BanknoteGreen >
        //             <Name>{money.banknote}</Name>
        //             <Nominal>{money.nominal}</Nominal>
        //         </BanknoteGreen>
        //         : <BanknoteBlue>
        //             <Name>{money.banknote}</Name>
        //             <Nominal>{money.nominal}</Nominal>
        //         </BanknoteBlue>
        //     }
        // </div>

        <div>
            <Banknote color={money.banknote === "USD" ? "aquamarine" : "lightskyblue"}>
                <Name>{money.banknote}</Name>
                <Nominal>{money.nominal}</Nominal>
            </Banknote>
        </div>

    )
        ;
};


type ColorPropsType = {
    color: "aquamarine" | "lightskyblue"
}

const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 400px;
    height: 200px;
    margin: 10px;
`

const Banknote = styled.div<ColorPropsType>`
    background-color: ${p=>p.color}; 
    width: 400px;
    height: 300px;
    margin: 5px;
`


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
