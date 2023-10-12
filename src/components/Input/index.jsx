import { Container } from "./styles";
import { FiSearch } from "react-icons/fi";

export function Input({ ...rest }) {
  return (
    <Container >
      <FiSearch size={24} />
      <input type="text" {...rest} />
    </Container>
  )
}