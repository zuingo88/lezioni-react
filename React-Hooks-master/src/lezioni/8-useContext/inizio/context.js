import React, { useState, useContext } from "react";
import { data } from "../../../data";

const AppContext = React.createContext();

const MainComponent = () => {

  const [people, setPeople] = useState(data);

  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));

  return (
    <AppContext.Provider
      value={{
        people,
        removePeople
      }}
    >
      <div>
        <h3>useContext</h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  const info = useContext(AppContext)
  console.log(info);

  return (
    <div>
      {
        info.people.map((el, index) => {
          return (
            <Persona
              key={index}
              {...el}
            />
          );
        })
      }
    </div>
  );
};

const Persona = ({ id, name }) => {
  const { removePeople } = useContext(AppContext);

  return (
    <div className="item shadow">
      <h5> {name} </h5>
      <button
        className="button delete-button"
        onClick={() => removePeople(id)}
      >
        Elimina
      </button>
    </div>
  );
};

export default MainComponent;
