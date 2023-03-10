import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DetailsBox = styled.div`
  width: 70%;
  height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;
export const HeaderBox = styled.div`
  width: 100%;
  height: 10vh;
  margin-top: 2rem;
`;
export const TopBar = styled.div`
  width: 70%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;
export const Span = styled.span`
  color: ${(props) => props.color};
`;
export const LargeContent = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const SmallContentHeader = styled.h2`
  text-align: left;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
  color: #5893FF;
`;
export const SmallContent = styled.h4`
  text-align: left;
  font-size: 1.2rem;
  font-weight: 400;
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
`;
export const TextBox = styled.textarea`
  width: 100%;
  height: 25vh;
  font-size: 1.3rem;
  border: 1px solid ${(props) => props.color};
  outline: none;
  padding: 0.5rem;
  border-radius: 5px;

  &::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #d3d3d3;
  }
`;

export const PatientHistoryBox = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CardBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
`;

export const Card = styled.div`
  width: 31%;
  height: 55vh;
  margin: 0.5rem 0.7rem;
  padding: 0.8rem;
  padding-bottom: 1.5rem;
  background-color: #F6F9FE;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 3rem;
`;

export const CardName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 0.7rem;
`;