import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <>
      <header className="main__header">
        <div className="container main__header-container">
          <div className="main__header-left">
            <h4>#100DaysOfWorkOut</h4>
            <h1>Join the Legends of the fitness world</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit ad recusandae atque at id?
            </p>
            <Link to="/plans">Get Started..</Link>
          </div>
          <div className="main__header-right"></div>
        </div>
      </header>
    </>
  )
}

export default MainHeader;