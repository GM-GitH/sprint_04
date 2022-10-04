import { Link } from "react-router-dom";
import styled from "styled-components";
import image from "../assets/img/image";
import jsonData from "../json/jsonData";

const HomeStyle = styled.div`
  .card {
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 4px 4px #00000005;
    padding: 22px 22px 20px;
    &:hover {
      box-shadow: 0px 16px 30px #00000014;
      & .card__img {
        filter: brightness(10);
      }
      & .card__bg {
        background-color: #e23428;
      }
    }
    &__bg {
      display: inline-block;
      vertical-align: top;
      background-color: #ffedec;
      border-radius: 6px;
    }
    &__img {
      width: 24px;
      height: 24px;
      padding: 10px 13px 5px;
    }
    &__text {
      display: inline-block;
      margin-left: 10px;
    }
    &__p1 {
      font-size: 22px;
      font-weight: 500;
      color: #393939;
      margin: 0%;
    }
    &__p2 {
      color: #787878;
      font-size: 10px;
      font-weight: 400;
      margin: 0%;
    }
  }
  .item3 {
    grid-area: card1;
  }
  .item4 {
    grid-area: card2;
  }
  .item5 {
    grid-area: card3;
  }
  .item6 {
    grid-area: card4;
  }
  .item7 {
    grid-area: card5;
    background-image: url(${image.calendar});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 125%;
  }
  .item8 {
    grid-area: card6;
    background-image: url(${image.graph});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    padding-top: 50%;
  }
  .item9 {
    grid-area: card7;
    color: #ffffff;
    background-color: #135846;
  }
  .item9__progress {
    border: 2px solid #ffffff;
    border-radius: 10px;
    margin-top: 20px;
  }
  .item9__progress__percent {
    width: 69%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
  }
  .item10 {
    grid-area: card8;
    color: #ffffff;
    background-color: #135846;
  }
  .item10__progress {
    border: 2px solid #ffffff;
    border-radius: 10px;
    margin-top: 20px;
  }
  .item10__progress__percent {
    width: 28%;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
  }
  .item11 {
    grid-area: card9;
  }
  .item11__container {
    display: flex;
    justify-content: space-around;
  }
  .item11__num {
    text-align: center;
  }
  .item11__num__p {
    margin: 0;
    font-size: 20px;
    font-weight: 500;
  }
  .item11__num__p2 {
    color: #6e6e6e;
    font-size: 10px;
    margin-top: 5px;
  }
  .item11__footer__p {
    color: #135846;
    font-weight: 500;
  }
  .item11__footer__p2 {
    color: #6e6e6e;
    font-size: 10px;
  }
  .item12 {
    grid-area: footer;
  }
  .grid-container {
    display: grid;
    grid-template-areas:
      " card1 card2 card3 card4 "
      " card5 card5 card6 card6 "
      " card5 card5 card7 card8 "
      " card5 card5 card9 card10 "
      " footer footer footer footer ";
    gap: 30px;
    background-color: #f8f8f8;
    padding: 35px;
  }
`;
const GuestList = () => {
  return (
    <HomeStyle>
      <div className="grid-container">
        <Link to={`/users/${jsonData[0].id}`}>
          <div className="item3 card">
            <div className="card__text">
              <p className="card__p1">{`${jsonData[0].first_name} ${jsonData[0].last_name}`}</p>
              <p className="card__p2">User ID: {jsonData[0].id}</p>
            </div>
          </div>
        </Link>
        <Link to={`/users/${jsonData[70].id}`}>
          <div className="item4 card">
            <div className="card__text">
              <p className="card__p1">{`${jsonData[70].first_name} ${jsonData[70].last_name}`}</p>
              <p className="card__p2">User ID: {jsonData[70].id}</p>
            </div>
          </div>
        </Link>
        <Link to={`/users/${jsonData[140].id}`}>
          <div className="item5 card">
            <div className="card__text">
              <p className="card__p1">{`${jsonData[140].first_name} ${jsonData[140].last_name}`}</p>
              <p className="card__p2">User ID: {jsonData[140].id}</p>
            </div>
          </div>
        </Link>
        <Link to={`/users/${jsonData[199].id}`}>
          <div className="item6 card">
            <div className="card__text">
              <p className="card__p1">{`${jsonData[199].first_name} `}</p>
              <p className="card__p2">User ID: {jsonData[199].id}</p>
            </div>
          </div>
        </Link>
        <div className="item12 card">Customer Reviews</div>
      </div>
    </HomeStyle>
  );
};

export default GuestList;
