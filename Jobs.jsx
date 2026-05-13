import { useEffect, useState } from "react";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/jobs")   // 🔥 backend API
      .then(res => res.json())
      .then(data => setJobs(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Jobs List</h1>

      {jobs.map((job, index) => (
        <div key={index}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobs;