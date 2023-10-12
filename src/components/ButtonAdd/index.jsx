import { Container } from "./styles";

import { PiReceipt } from "react-icons/pi";

export function ButtonAdd({ price, text, order = false, ...rest }) {
  return (
    <Container
      type="button"
      {...rest}
    >
      <PiReceipt size={26} />
      {text} {order ? `(${price})` : `${price}`}
    </Container>
  )
} 