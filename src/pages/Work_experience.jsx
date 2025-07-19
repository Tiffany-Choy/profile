import Work from "../functions/Work";
import "./stylesheets/Work_experience.css";
import WorkData from "../data/work.json";
export default function Work_experience() {
  const base = import.meta.env.BASE_URL;  // "/" in dev, "/profile/" in prod
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
              logo={`${base}${job.logo.replace(/^\//, '')}`}
              description={job.description}
              skills={job.skills}
            />
          );
        })}
    </>
  );
}
