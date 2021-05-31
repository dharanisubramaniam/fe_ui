import React from "react";
import { useStateValue } from "../../redux/StateProvider";

function Skill() {
  const [{ skill }] = useStateValue();
  return (
    <div className="coursehome__skills">
      <h3>Skills covered</h3>
      <div className="coursehome__skillsCovered">
        {skill.map((item) =>
          item.skills.map((skill, i) => <p key={i}>{skill}</p>)
        )}
      </div>
    </div>
  );
}

export default Skill;
