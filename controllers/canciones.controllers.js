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
    console.log(error);
  }
};
const prepararCancion = async (req, res) => {
  try {
    const query = {
      text: "SELECT * FROM canciones",
    };
    const res = await pool.query(query);
    return res.rows;
  } catch (error) {
    console.log(error.message);
  }
};

const editarCancion = async (datos) => {
  try {
    const query = {
      text: "UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = `${id}` RETURNING *",
      values: datos,
    };
    const res = await pool.query(query);
    return res.rows;
  } catch (error) {
    console.log(error.message);
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
