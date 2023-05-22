const element = (
  <div className="background_image">
    <h1 className="heading">Congratulations</h1>
    <div className="card_container">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png
"
      ></img>
      <div className="text_container">
        <h1 className="Sub_heading">Kiran V</h1>
        <p className="description">
          Vishnu Institute of Computer Education and Technology Bhimavaram
        </p>
      </div>
      <img
        className="watch_img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      ></img>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
