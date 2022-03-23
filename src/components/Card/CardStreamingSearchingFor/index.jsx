import { Container, Img } from "./style";

export default ({ streaming, register }) => {
  return (
    <Container>
      <input type="checkbox" id={streaming._id} value={streaming._id} {...register("searching_for")}/>
      <label htmlFor={streaming._id}>
        <Img src={streaming.image} />
      </label>
    </Container>
  );
};
