import { IOption } from 'models/Select.types';
import React, { CSSProperties, useState } from 'react';

import Select, { ActionMeta, SingleValue, StylesConfig } from 'react-select';
// import {
//   ColourOption,
//   colourOptions,
//   FlavourOption,
//   GroupedOption,
//   groupedOptions,
// } from '../data';



// const groupStyles = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
// };


// const groupBadgeStyles: CSSProperties = {
//   backgroundColor: '#EBECF0',
//   borderRadius: '2em',
//   color: '#172B4D',
//   display: 'inline-block',
//   fontSize: 12,
//   fontWeight: 'normal',
//   lineHeight: '1',
//   minWidth: 1,
//   padding: '0.16666666666667em 0.5em',
//   textAlign: 'center',
// };

// const formatGroupLabel = (data: GroupedOption) => (
//   <div style={groupStyles}>
//     <span>{data.label}</span>
//     <span style={groupBadgeStyles}>{data.options.length}</span>
//   </div>
// );


interface Props {
    options: IOption[];
    // value: IOption;
    handleChange: (newValue: SingleValue<IOption>) => void;
    styles: StylesConfig
}

export const CustomSelect: React.FC<Props> = ({options, handleChange, styles}) => { 
    // const [selectedOption, setSelectedOption] = useState(null);
 
    // const handleChange = (newValue: SingleValue<IOption>) => {
    // //   setSelectedOption(selectedOption);
    //   console.log(`Option selected:`, newValue);
    // };
   
    return (
        <Select options={options} onChange={handleChange}/>
    )
}