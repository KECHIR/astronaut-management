import { Request, Response } from "express";
import { Astronaut } from "../models";
import { AstronautType } from "../types";

export function create() {
  async function getAstronauts(req: Request, res: Response) {
    try {
      const data = await Astronaut.find({});
      console.log("Successfully retrieved all astronauts!");
      res.status(200).json(data);
    } catch (e) {
      console.log("Error occured while retrieving astronauts: ", e);
      res.status(400).json({ error: e });
    }
  }

  async function addAstronaut(req: Request, res: Response) {
    const astronautInfo: AstronautType = req.body;
    try {
      const data = await Astronaut.create(astronautInfo);
      console.log("A new astronaut has been added to database succuessfully!");
      res.status(200).json(data);
    } catch (e) {
      console.log("Error occured while saving astronaut to database: ", e);
      res.status(400).json({ error: e });
    }
  }

  async function updateAstronaut(req: Request, res: Response) {
    const id: string = req.params.id;
    const newAstronautInfo: Partial<AstronautType> = req.body;
    try {
      const data = await Astronaut.findByIdAndUpdate(id, newAstronautInfo);
      res.status(200).json(data);
    } catch (e) {
      console.log("Error occured while updating astronaut to database: ", e);
      res.status(400).json({ error: e });
    }
  }

  async function deleteAstronaut(req: Request, res: Response) {
    const id: string = req.params.id;
    try {
      const data = await Astronaut.deleteOne({ _id: id});
      res.status(200).json(data);
    } catch (e) {
      console.log("Error occured while deleting  astronaut to database: ", e);
      res.status(400).json({ error: e });
    }
  }

  return { getAstronauts, addAstronaut, updateAstronaut, deleteAstronaut };
}
