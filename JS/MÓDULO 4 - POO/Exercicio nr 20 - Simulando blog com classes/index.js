const Comment = require("./comment.js");
const Post = require("./post.js");
const Author = require("./author.js");

const john = new Author("Jhon Doe");

const post = john.writePost("Titulo do post", "lorem nada");

post.addComment("Isaac Pontes", "Muito bom!");
post.addComment("Lucas", "Achei interessante.");
