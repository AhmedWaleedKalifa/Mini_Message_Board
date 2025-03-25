const pool=require("./pool");

async function getAllMessages() {
    const {rows}=await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(text,username,date){
    await pool.query(" INSERT INTO messages (text,username,date) VALUES ($1,$2,$3) ",[text,username,date])
}
async function getMessageById(id) {
    const {rows}=await pool.query("SELECT * FROM messages WHERE id = $1",[id]);
    return rows[0];
}
async function deleteMessageById(id) {
    await pool.query("DELETE FROM messages WHERE id = $1",[id])
}
module.exports={
    getAllMessages,
    insertMessage,
    getMessageById,
    deleteMessageById
}