import db from "../config/db.js";

export async function createPost(title, body) {
  const year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const day = new Date().getDate();

  const createdAtDate = `${year}-${month}-${day}`;

  const sql = `
    INSERT INTO posts(
        title, body, created_at
    )
    VALUES(
        '${title}','${body}','${createdAtDate}'
    )
    `;

  const [newPost, _] = await db.execute(sql);
  return newPost;
}

export async function findAll() {
  const sql = `SELECT * FROM posts`;

  return db.execute(sql);
}

export async function findById(id) {
  let sql = `SELECT * FROM posts WHERE id = ${id}`;
  return db.execute(sql);
}
