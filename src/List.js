import React from "react";
export default function List({ persons }) {
  return (
    <>
      {persons.map((person) => {
        return (
          <article key={person.id} className="profile">
            <img src={person.img} alt="people" className="images" />
            <div className="content">
              <h4>{person.name}</h4>
              <p>Age:{person.age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
}
