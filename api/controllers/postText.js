const { response } = require("express");

const postText = async (req, res = response) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ msg: `Error please add some text` });
  }

  const reverseText = text.split("").reverse().join("");

  const normalText = text
    .normalize("NFD")
    .split("")
    .map((e) => e.toLowerCase())
    .join("")
    .replace(/\W/g, "");

  const compareText = text
    .normalize("NFD")
    .toLowerCase()
    .split("")
    .reverse()
    .join("")
    .replace(/\W/g, "");

  const palindrome = normalText === compareText ? "Palindrome" : null;

  return res.status(200).json({
    reverseText,
    palindrome,
  });
};

module.exports = postText;
