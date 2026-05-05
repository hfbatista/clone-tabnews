function status(request, response) {
  response.status(200).json({
    status: "200",
    chave: "Eu sou acima da média segundo o Decampeões",
  });
}

export default status;
