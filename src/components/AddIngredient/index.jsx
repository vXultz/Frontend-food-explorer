import { Container } from "./styles"

import { FiPlus, FiX } from "react-icons/fi"

export function AddIngredient({ isnew, value, onClick, ...rest }) {

  return (
    <Container isnew={isnew}>
      <input
        type="text"
        value={value}
        readOnly={!isnew}
        {...rest}
      />

      <button type="button" onClick={onClick}>
        {isnew ? <FiPlus className="add" size={14} /> : <FiX className="delete" size={14} />}
      </button>
    </Container>
  )
}