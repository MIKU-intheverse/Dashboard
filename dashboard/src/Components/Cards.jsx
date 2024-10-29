import React,{ useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const Card =(props) => {

    const [Expanded, setExpanded] = useState(false)

    return(
        <div>
            {
                Expanded? (
                    'Expanded'
                ):
                <CompactCard param = {props}/>
            }
        </div>
    )
}

function CompactCard ({param}){
    return (
        <div className=" w-100 h-56 px-4 container flex justify-between bg-gradient-to-r from-teal-700 to-teal-900 text-white relative cursor-pointer rounded-2xl">
            <div className="pt-8 pb-4 px-2 container flex w-48 h-48">
                <CircularProgressbar
                value={param.barValue}
                text={`${param.barValue}%`}
                styles={buildStyles({
                    pathColor:'white',
                    textColor:'white',
                    trailColor:'gray',
                    strokeLinecap: 'round'
                })}
                />
            </div>
            <div className="py-4 ">
                <div className="text-3xl font-semibold ">{param.title}</div>
                <div className="text-2xl font-medium absolute bottom-4 right-8">{param.time}</div>
            </div>
        </div>
    )
}

const Cards = () => {

    const [CardsData, SetCardsData] = useState([
    {
        title: "Total Applications",
        time: "Last month",
        status: 70
    },
    {
        title: "Filled Applications",
        time: "Last month",
        status: 30
    },
    {
        title: "Unfilled Applications",
        time: "Last month",
        status: 20
    }
])

  return (
    <div className="w-100 py-2 container flex flex-col gap-y-3 md:flex md:flex-row md:gap-x-3 items-center justify-between">
      {CardsData.map((card , id) => {
          return(
            <div >
                <Card 
                title = {card.title}
                time = {card.time}
                barValue = {card.status}
                />
            </div>
          )
      })}
    </div>
  )
}

export default Cards