import { readJSON } from "..utils/readJson.js"
import { movieModel } from "../models/movieModel.js"
import { validatePartialMovie, validateMovie } from "../model/movieSchema.js"
const movies = readJSON("../../movies.json")
export const getMovies = async (req, res) => {
    const { name } = req.query;
    const movies = await movieModel.getAll({ genre });
    res.json(movies);
};