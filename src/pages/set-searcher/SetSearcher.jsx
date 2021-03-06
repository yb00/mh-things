import React, { useState, useEffect } from "react";

import "./SetSearcher.css";

import { Layout } from "../../components/Layout";

import * as subset from "./actions/subset";
import * as map from "./actions/map";

import { mhwdb } from "../../services";
import axios from "axios";

import { SkillsTable, PickedTable } from "./";

import { TEXT, CONFIG } from "./constants";

const SetSearcher = () => {
  const [config, setConfig] = useState(() => {
    var obj = {};
    for (var key in CONFIG) {
      obj[key] = CONFIG[key];
    }
    return obj;
  });

  const [charms, setCharms] = useState(null);
  const [armor, setArmor] = useState(null);
  const [decorations, setDecorations] = useState(null);
  const [skills, setSkills] = useState(null);
  const [skillsChosen, setSkillsChosen] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const handleCharmsFetch = async () => {
      try {
        const response = await mhwdb().get("/charms", {
          cancelToken: source.token,
        });
        const data = await response.data;
        setCharms(data);
      } catch (err) {}
    };
    const handleDecorationsFetch = async () => {
      try {
        const response = await mhwdb().get("/decorations", {
          cancelToken: source.token,
        });
        const data = response.data;
        setDecorations(data);
      } catch (err) {}
    };
    const handleArmorFetch = async () => {
      try {
        const response = await mhwdb().get("/armor", {
          cancelToken: source.token,
        });
        const data = response.data;
        setArmor(data);
      } catch (err) {}
    };

    handleCharmsFetch();
    handleDecorationsFetch();
    handleArmorFetch();

    return () => {
      source.cancel();
    };
  }, []);

  useEffect(() => {
    if (armor && skills && decorations && charms) {
      setReady(true);
      console.log("all good");
    } else {
      if (ready !== false) setReady(false);
    }
  }, [armor, skills, decorations, charms]);

  const search = () => {
    const skillMap = map.mapSkills(skills, armor, charms, decorations);
    const charmMap = map.mapCharms(charms);
    const armorMap = map.mapArmor(armor);
    // console.log(
    //   "skill-map: ",
    //   skillMap,
    //   "\ncharm-map: ",
    //   charmMap,
    //   "\narmorMap: ",
    //   armorMap
    // );
    subset.find(skillsChosen, skillMap);
  };

  return (
    <Layout>
      <div className="container">
        <div className="info-section">
          <p>{TEXT.INFO}</p>
        </div>
        <div className="set-searcher-area">
          <SkillsTable
            skills={skills}
            setSkills={setSkills}
            skillsChosen={skillsChosen}
            setSkillsChosen={setSkillsChosen}
          />
          <span className="sep" />
          <PickedTable
            skillsChosen={skillsChosen}
            setSkillsChosen={setSkillsChosen}
          />
        </div>
        <button
          className={ready ? "search-set" : "search-set loading"}
          disabled={!ready}
          onClick={search}
        >
          Search for set
        </button>
      </div>
    </Layout>
  );
};

export default SetSearcher;
