import React from "react"

const Select = (props) => {
    const handleSelect = (e) => {
        props.onSelect(e.target.value)
    }
    return <div>
        <div>{props.title}</div>
        <select multiple={false} value={props.selectedValue}
            onChange={(e) => handleSelect(e)}>
            <option value={""}></option>
            {props.options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
}

export default Select