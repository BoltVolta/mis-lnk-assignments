import React from 'react';
import './Jokes.css'

function TableData() {
  const Jokes = [
	{
		id: 1,
		setup: "What's the best thing about a Boolean?",
		punchline: "Even if you're wrong, you're only off by a bit"
	},
	{
		id: 2,
		setup: "Why do programmers wear glasses?",
		punchline: "Because they need to C#"
	}
]


  return (
      <div className='card-body'>
          <tbody>
              {Jokes.map((item, i) => (
                  <tr key={i}>
                      <th>{item.setup}</th>
                      <td>{item.punchline}</td>
                  </tr>
              ))}
          </tbody>
      </div>
  );
}

export default TableData
