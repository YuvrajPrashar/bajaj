const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const user = "Yuvraj Prashar";
    const userEmail = "yuvraj1598.be21@chitkara.edu.in";
    const collegeRollNumber = "2110991598";

    // Updated error handling for inputArray
    const inputArray = req.body.array || [];
    const evenNumbers = inputArray.filter((num) => num % 2 === 0);
    const oddNumbers = inputArray.filter((num) => num % 2 !== 0);
    const alphabetArray = inputArray
      .filter((char) => /[a-zA-Z]/.test(char))
      .map((char) => char.toUpperCase());

    const response = {
      user_id: user,
      is_success: true,
      email_id: userEmail,
      college_roll_number: collegeRollNumber,
      array_for_even_numbers: evenNumbers,
      array_for_odd_numbers: oddNumbers,
      array_for_alphabets: alphabetArray,
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
