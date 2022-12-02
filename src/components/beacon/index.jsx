import "./index.css";

const Beacon = ({ x, y, team, hov }) => {
  let style;

  let left = ((x + 5) / 15000) * 100;
  let bottom = ((y + 5) / 15000) * 100;
  if (team === "100") {
    style = {
      backgroundColor: "#5383E8",
      left: left + "%",
      bottom: bottom + "%",
    };
  } else {
    style = {
      backgroundColor: "#F12B15",
      left: left + "%",
      bottom: bottom + "%",
    };
  }

  //function if className beacon hover change event with same data-hov css
  function handleHover(e) {
    const hov = e.target.getAttribute("data-hov");
    const events = document.querySelectorAll(".event");
    events.forEach((event) => {
      if (event.getAttribute("data-hov") === hov) {
        event.style.opacity = "0.5";
      }
    });
  }

  function handleLeave(e) {
    const hov = e.target.getAttribute("data-hov");
    const events = document.querySelectorAll(".event");
    events.forEach((event) => {
      if (event.getAttribute("data-hov") === hov) {
        event.style.opacity = "1";
      }
    });
  }

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      data-hov={hov}
      className="Beacon"
      style={style}
    >
      {" "}
    </div>
  );
};
export default Beacon;
