import React, {useState} from "react";
import "./App.css";
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = "USD" | "RUB" | "All"
export type MoneyType = {
    banknote: BanknotsType
    nominal: number
    id: string
}

let defaultMoney: Array<MoneyType> = [
    {banknote: "USD", nominal: 100, id: v1()},
    {banknote: "USD", nominal: 100, id: v1()},
    {banknote: "RUB", nominal: 100, id: v1()},
    {banknote: "USD", nominal: 100, id: v1()},
    {banknote: "USD", nominal: 100, id: v1()},
    {banknote: "RUB", nominal: 100, id: v1()},
    {banknote: "USD", nominal: 100, id: v1()},
    {banknote: "RUB", nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    if (filter === "All") return money
    return defaultMoney.filter((e) => e.banknote === filter)
}


function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>("All")

    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        // let newMoney: MoneyType[] = [...money]
        // newMoney.push({banknote: banknote, nominal: 100, id: v1()})
        // setMoney(newMoney)
        const newMoney: MoneyType= {banknote, nominal: 100, id: v1()}
        setMoney([newMoney,...money])
        setFilterValue("All");

        console.log(([newMoney, ...money]))
    }

    const removeMoney = (banknote: BanknotsType) => {
        const index = money.findIndex(el=>el.banknote===banknote)
         if (index !== -1) {
             setMoney(money.filter((el, i) => !(el.banknote[i] === el.banknote[index])));
         }
    }

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
                addMoney={addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

export default App;
