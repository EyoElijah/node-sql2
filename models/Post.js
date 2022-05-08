import db from "../config/db.js";

class Post {
  constructor(title, body) {
    (this.title = title), (this.body = body);
  }

  async save() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    let createdAtDate = `${year}-${month}-${day}`;

    let sql = `
    INSERT INTO posts(
        title, body, created_at
    )
    VALUES(
        '${this.title}','${this.body}','${createdAtDate}'
    )
    `;

    const [newPost, _] = await db.execute(sql);
    return newPost;
  }

  static findAll() {
    let sql = `SELECT * FROM posts`;

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM posts WHERE id = ${id}`;
    return db.execute(sql);
  }
}

export default Post;
