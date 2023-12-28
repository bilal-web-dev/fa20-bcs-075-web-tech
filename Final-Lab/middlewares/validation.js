export const validate = (req, res, title, description) => {

  if (!title || !description) {
    
    return res.status(400).redirect("/home");
  }
};
