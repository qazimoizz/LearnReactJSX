
function PraticetTwo() {
let fruits = ["apple", "mango", "banana", "leechy"];

  return (
    <div>
      <h1> Fruits </h1>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            {" "}
            {index} - {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PraticetTwo