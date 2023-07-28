import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { useMediaQuery } from 'react-responsive'

export function GaugeBox(props) {
  return (
    <div id={props.id} className={`flex flex-col gap-3 md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center md:w-1/2 md:max-w-sm ${props.className}`}>
      <div className='md:flex md:flex-col md:items-center'>
        <span className='block font-bold text-[var(--lex-green)] text-xl md:text-3xl mb-1'>{props.name}</span>
        <div className={`${(props.value != null) ? ` hidden ` : ``}  mt-2 animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4`}></div>
        <span className={`self-center text-lg md:text-2xl ${(props.value == null) ? ` hidden ` : ``}`}>{props.value}</span>
      </div>

      <div className='flex flex-col justify-center self-center items-center'>
        <div className='w-48'>
          <GaugeChart id="gauge-chart"
            nrOfLevels={20}
            percent={props.percentage}
          />
        </div>
      </div>
    </div>
  )
}


export function SimpleBox(props) {
  const { name, value, size } = props;
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)'
  });
  return (
    <div className={`${props.className} flex flex-col items-center md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center md:max-w-sm`}>
      <props.icon color='#D9D9D9' size={isDesktopOrLaptop ? 40 : size} />
      <span className='text-xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>{name}</span>
      <div className={`${(value != null) ? ` hidden ` : ``} animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2`}></div>
      <span className={`self-center  md:text-2xl ${props.valueClassName ? props.valueClassName : "text-xl"} ${(value == null) ? ` hidden ` : ``}`}>{value}</span>
    </div>
  )
}