import React from 'react'
import GaugeChart from 'react-gauge-chart'

function GaugeBox(props) {
  return (
    <div id={props.id} className={`flex flex-col gap-3 md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center ${props.className}`}>
      <div className='md:flex md:flex-col md:items-center'>
        <span className='font-bold text-[var(--lex-green)] md:text-3xl mb-2'>{props.name}</span>
        <div className={`${(props.value != null)? ` hidden `: ``}  animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4`}></div>
        <span className={`text-2xl ${(props.value == null)? ` hidden `: ``}`}>{props.value}</span>
      </div>

      <div className='flex flex-col justify-center self-center items-center'>
        <div className='w-56'>
          <GaugeChart id="gauge-chart"
            nrOfLevels={20}
            percent={props.percentage}
          />
        </div>
      </div>
    </div>
  )
}

export default GaugeBox