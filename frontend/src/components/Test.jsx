import React, { useEffect } from "react";

function TestAPI() {
  useEffect(() => {
    fetch('http://localhost:5000/api/google-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return <div>Testing API...</div>;
}

export default TestAPI;

