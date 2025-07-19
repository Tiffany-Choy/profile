import Work from "../functions/Work";
import "./stylesheets/Work_experience.css";
import WorkData from "../data/work.json";
export default function Work_experience() {
  return (
    <>
      <h1>Work Experience</h1>
      {WorkData &&
        WorkData.map((job) => {
          return (
            <Work
              id={job.id}
              title={job.title}
              time={job.time}
              logo={job.logo}
              description={job.description}
              skills={job.skills}
            />
          );
        })}
    </>
  );
}
