import styled from 'styled-components'

const StyledSelect = styled.select`
  appearance: none;
  width: 100%;
  height: 24px;
  background-image: url('images/arrow_up_down.svg');
  background-repeat: no-repeat;
  background-position-x: 99%;
  background-position-y: 50%;
  background-size: 10px;
  border-radius: 3px;
  padding-left: 12px;
  font-size: 14px;
  height: 2.3em;
  &:focus {
    border-color: #f5a623;
    outline: 0;
  }
`

export default StyledSelect
