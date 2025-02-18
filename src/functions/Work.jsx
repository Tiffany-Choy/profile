export default function Work({ id, title, time, logo, description, skills }) {
  return (
    <>
      <div class="job" id={id}>
        <div class="title">
          <h2>{title}</h2>
          <p id="workTime">{time}</p>
        </div>
        <div id="job-description">
          <div id="logo">
            <img src={logo} id="logo" />
          </div>
          <div id="content">
            <p id="text">{description}</p>
            {skills ? (
              <div id="skillsList">
                <Skills items={skills} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
function Skills({ items }) {
  return items.map((skill) => <li id="skillItem">{skill}</li>);
}
   