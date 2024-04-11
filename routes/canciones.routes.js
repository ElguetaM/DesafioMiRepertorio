import { Router } from "express";
import {
  nuevaCancion,
  prepararCancion,
  editarCancion,
  eliminarCancion,
} from "../controllers/canciones.controllers.js";
import path from "path";

const router = Router();
const __dirname = import.meta.dirname;

router.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.post("/cancion", async (req, res) => {
  const data = Object.values(req.body);
  const canciones = await nuevaCancion(data);
  res.json(canciones);
});

router.get("/canciones", async (req, res) => {
  const canciones = await prepararCancion();
  res.json(canciones);
});

router.put("/cancion/:id", async (req, res) => {
  //const { id } = req.params;
  const data = Object.values(req.body);
  const canciones = await editarCancion(data);
  res.json(canciones);
});

router.delete("/cancion", async (req, res) => {
  const { id } = req.query;
  const canciones = await eliminarCancion(id);
  res.json(canciones);
});

router.get("*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../views/404.html"));
});

export default router;
