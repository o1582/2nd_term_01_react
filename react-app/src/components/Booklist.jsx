// Booklist.jsx
//import React from "react";
import React, { useState, useEffect } from "react";

const Booklist = (props) => {
/*
  const result = props.getData?.(props.language);
  return (
    <div>
      <p>this is {result} list component</p>
    </div>
  );
*/

  const [bookData, setBookData] = useState(null);
  useEffect(() => {
    const result = props
      .getData?.(props.language)
      .then((response) => setBookData(response));
  }, [props]);

  return (
    <div>
      <ul>
        {
          // このあたり編集
          bookData === null ? (
            <p>now loading...</p>
          ) : (
            bookData.data.items.map((x, index) => (
              <li key={index}>{x.volumeInfo.title}</li>
            ))
          )
        }
      </ul>
    </div>
  );

/*
  return (
    <div>
      <ul>
        {bookData.data.items.map((x) => (
          <li>{x.volumeInfo.title}</li>
        ))}
      </ul>
    </div>
  );
*/
/*
  return (
    <div>
      <p>this is {JSON.stringify(bookData)} list component</p> //
      編集（オブジェクトはそのまま表示できないのでJSON.stringify()する）
    </div>
  );
*/

};
export default Booklist;
