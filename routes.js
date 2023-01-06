import Router from "express";

import { addCharacter, getCharacters, deleteCharacterById, getCharactersById } from "./Controllers/characterControllers";

const router = Router();

router.get("/", (req, res) => {
  getCharacters
})

router.get("/:id", (req, res) => {
  getCharactersById
})

router.post("/", (req, res) => {
  addCharacter(req, res)
})

router.delete("/:id", (req, res) => {
  deleteCharacterById(req, res)
})

export default router;