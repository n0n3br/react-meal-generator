import styled from "styled-components";
export const Title = styled.h1`
  width: 100%;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
  display: flex;
  span {
    display: inline-block;
  }
  .text {
    flex-grow: 1;
    font-size: 30px;
    color: #ccc;
  }
  .icons {
    flex-shrink: 1;
    font-size: 24px;
  }
  i {
    cursor: pointer;
    margin-right: 10px;
  }
  .fa-heart {
    color: red;
  }
`;

export const Tag = styled.span`
  font-size: 12px;
  display: inline-block;
  background-color: black;
  color: white;
  padding: 2px 5px;
  margin: 10px 0 10px 5px;
`;

export const Subtitle = styled.h2`
  width: 100%;
  font-size: 24px;
  color: black;
  margin-bottom: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 20px;
  flex: 1;
  > div {
    flex: 1;
    padding: 10px;
  }
`;

export const IngredientList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-right: 20px;
  > li {
    width: 100%;
    text-align: left;
  }
`;
