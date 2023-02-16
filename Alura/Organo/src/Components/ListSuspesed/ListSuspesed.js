import './ListSuspesed.css'

export const ListSuspesed = (props) => {

    return(
        <div className='list-suspesed'>
            <label>{props.name}</label>
            <select required={props.required} onChange={e => props.onAlter(e.target.value)} value={props.value}>
                <option value=''></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}