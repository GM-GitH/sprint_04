import styled from "styled-components";
import { RoomsTable } from "./styled/RoomsTable";

const Styled = styled.div`
  .container {
    background-color: #f8f8f8;
    padding: 30px 35px;
  }
  .filters {
    display: flex;
    justify-content: space-between;
    .left-filter__button {
      color: #6e6e6e;
      font-size: 14px;
      font-family: "Poppins", sans-serif;
      background-color: inherit;
      border-style: none;
      border-bottom: 1px solid #d4d4d4;
      padding: 15px 25px;
      margin-left: -2px;
      &:hover {
        color: #135846;
        border-bottom: 2px solid #135846;
      }
    }
    .active {
      color: #135846;
      border-bottom: 2px solid #135846;
    }
    .right-filter__button {
      color: #135846;
      background-color: inherit;
      font-size: 14px;
      border-style: none;
      border: 1px solid #135846;
      border-radius: 10px;
      padding: 15px 25px;
      margin-left: 20px;
      &:hover {
        color: #ffffff;
        background-color: #135846;
      }
      .right-filter__button__arrow {
        color: #cccccc;
        font-size: 12px;
        font-weight: 700;
        line-height: 0px;
        padding-left: 5px;
      }
    }
  }
`;
export const RoomList = () => {
  return (
    <>
      <Styled>
        <div className="container">
          <div className="filters">
            <div className="left-filter">
              <button className="left-filter__button active">All Rooms</button>
              <button className="left-filter__button">Active Employee</button>
              <button className="left-filter__button">Inactive Employee</button>
            </div>
            <div className="right-filter">
              <button className="right-filter__button">+ New Room</button>
              <button className="right-filter__button">
                Newest <span className="right-filter__button__arrow">v</span>
              </button>
            </div>
          </div>
          <RoomsTable />
        </div>
      </Styled>
    </>
  );
};
