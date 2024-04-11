import pool from "../config/db.js";
const nuevaCancion = async (data) => {
  try {
    const query = {
      text: "INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) RETURNING *",
      values: data,
    };
    const res = await pool.query(query);
    return res.rows;
  } catch (error) {
    console.log(error.message);
  }
};

const prepararCancion = async (req, res) => {
  try {
    const res = await pool.query("SELECT * FROM canciones");
    return res.rows;
  } catch (error) {
    console.log(error.message);
  }
};

const editarCancion = async (data) => {
  try {
    const query = {
      text: `UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE titulo = $1 RETURNING *`,
      values: data,
    };
    const res = await pool.query(query);
    console.log(res.rows);
    return res;
  } catch (error) {
    console.log(error);
  }
};

const eliminarCancion = async (id) => {
  try {
    const res = await pool.query(`DELETE FROM canciones WHERE id = ${id}`);
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

export { nuevaCancion, prepararCancion, editarCancion, eliminarCancion };
