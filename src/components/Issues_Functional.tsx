import axios from "axios";
import { FC, useEffect, useState } from "react";

// Types
type Issue = {
  number: number;
  title: string;
  state: string;
};

const Issues_Functional: FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);

  const baseURL = "https://api.github.com/repos/ContentPI/ContentPI/issues";

  useEffect(() => {
    axios.get(baseURL).then((response: any) => {
      setIssues(response.data);
    });
  }, []);

  return (
    <>
      <h1>ContentPI Isuues</h1>

      {issues.map((issue: Issue) => (
        <p key={issue.title}>
          <strong>#{issue.number}</strong>{" "}
          <a href={`${baseURL}/${issue.number}`} target="_blank" >
            {issue.title}{" "}
          </a>
          {issue.state}
        </p>
      ))}
    </>
  );
};

export default Issues_Functional;
