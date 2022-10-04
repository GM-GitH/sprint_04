import styled from "styled-components";

const Style = styled.div`
  .card {
    background-color: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 22px 22px 20px;
  }`
export const Card = () => {
    return (
        <>
        <Style>
            <div className="card"></div>
        </Style>
        </>
    )
}