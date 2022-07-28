import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  align-items:center;
  display:flex;
  justify-content:center;
  font-size:14px;
  font-weight:500;
`;

const Announcements = () => {
  return (
    <Container>Super Deal! Free Shipping on Orders above Rs 499 only.</Container>
  );
};

export default Announcements;
