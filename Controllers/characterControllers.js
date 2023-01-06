const charactersArray = ["Wednesday", "Enid", "Principal Weems", "Tyler", "Beanca", "Xavier"]

export const getCharacters = (req, res) => {
  res.status(200).send({
    message: "Here are all the characters",
    characters: charactersArray
  })
}

export const getCharactersById = (req, res) => {
  const ID = parseInt(req.params.id)

  res.status(200).send({
    character: charactersArray[id] || "Character not found"
  })
}

export const addCharacter = (req, res) => {
  charactersArray.push(req.body.charactrer)
  res.status(201).send({
    message: "Character Created"
  })
}

export const deleteCharacterById = (req, res) => {
  const id = parseInt(req.params.id)
  students.splice(id, 1)
  res.status(204).send("Deleted")
}