import React, { useState, useEffect } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-fresh.css";

import { mhwdb } from "../../services";
import axios from "axios";

const onFirstDataRendered = (params) => {
  params.api.sizeColumnsToFit();
};

const SetSkillsCols = [
  {
    headerName: "Skill Name",
    field: "name",
    filter: true,
  },
];

export const SkillsTable = ({
  skills,
  setSkills,
  skillsChosen,
  setSkillsChosen,
}) => {
  useEffect(() => {
    const source = axios.CancelToken.source();
    const handleFetch = async () => {
      try {
        const response = await mhwdb().get("/skills", {
          cancelToken: source.token,
        });
        const data = await response.data;
        setSkills(data);
      } catch (err) {}
    };

    handleFetch();

    return () => {
      source.cancel("cancelled");
    };
  }, []);

  return (
    <div className="ag-theme-fresh set-skills-table">
      <AgGridReact
        onFirstDataRendered={onFirstDataRendered}
        columnDefs={SetSkillsCols}
        alwaysShowVerticalScroll={true}
        rowData={skills}
        onCellClicked={(params) => {
          // Add new field: amount - determine skill amount for set search.
          var newSkillMaxAmount = params.node.data.ranks.length;
          var newSkill = {
            ...params.node.data,
            amount: newSkillMaxAmount,
          };
          // Check to see if skill is already picked.
          if (
            skillsChosen.findIndex((skill) => skill.id === newSkill.id) === -1
          ) {
            setSkillsChosen([...skillsChosen, newSkill]);
          }
        }}
      ></AgGridReact>
    </div>
  );
};
