import { CloudLine } from "../CloudLine";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div id="wrap">
        <div id="box">
          <h1>
            구름
            <br />
            성격
            <br />
            테스트
          </h1>
          <CloudLine />
          <Link to="/test">
            <button>바로 시작하기 &gt;</button>
          </Link>
        </div>
        <span>재미로 봐주세요!</span>
      </div>
    </>
  );
};
