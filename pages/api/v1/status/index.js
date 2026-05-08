import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 as sum");
  console.log(result.rows);
  response.status(200).json({
    status: "200",
    chave: "Eu sou acima da média segundo o Decampeões",
  });
}

export default status;
