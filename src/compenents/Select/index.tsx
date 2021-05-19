/**
 * Generic Selec input only accepts array
 * Reusability depends on the expected data structure
 */
import { ReactElement, ChangeEventHandler } from 'react'
import StyledSelect from './style'

interface selectType {
  options: Array<string | number>
  onChange: ChangeEventHandler
  placeholder: string
  name: string
}

const SelectInput = ({
  options,
  onChange,
  placeholder = '',
  name
}: selectType): ReactElement => (
  <StyledSelect data-testid='select' id={name} onChange={onChange} name={name}>
    {!!placeholder && <option value={0}>{placeholder}</option>}
    {options.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </StyledSelect>
)

export default SelectInput
