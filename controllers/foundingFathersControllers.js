const fathers = require("../data.json");
const capitalize = require('../helpers/capitalize')

// try&catch implemented for future better use if connected to a database - functions will be updated to async

const displayAll = (req, res) => {
  try {
    const result = fathers.map((el) => el.name);
    res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const displayPresidents = (req, res) => {
  try {
    const result = fathers.filter((el) => el.isPresident).map((el) => el.name);
    res.status(200).json({
      Presidents: result,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

const addEntry = (req, res) => {
  try {
    if (req.body.name) {
      const newFather = {
        name: req.body.name,
        isPresident: req.body.isPresident,
        born: req.body.born,
        died: req.body.died,
      };
      fathers.push(newFather);
      return res.status(201).json(fathers);
    } else {
      return res.status(201).json(fathers);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateEntry = (req, res) => {
  try {
    const paramName = req.params.name.split("-").join(" ");
    const nameCapitalized = capitalize(paramName);
    const father = fathers.find((el) => el.name == nameCapitalized);
    if (father) {
      {
        father.name = req.body.name ? req.body.name : father.name; // does not remove the key if no name provided
        father.isPresident = req.body.isPresident
          ? req.body.isPresident
          : father.isPresident;
      }
      res.status(200).json(fathers);
    } else {
      res.status(404).json("Can't update, Founding Father not found");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteEntry = (req, res) => {
  try {
    const paramName = req.params.name.split("-").join(" ");
    const nameCapitalized = capitalize(paramName);
    const father = fathers.find((el) => el.name == nameCapitalized);
    if (father) {
      fathers.splice(fathers.indexOf(father), 1);
      res.status(200).json(`${nameCapitalized} deleted.`);
    } else {
      res.status(404).json("Can't delete, Founding Father not found");
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  displayAll,
  displayPresidents,
  addEntry,
  updateEntry,
  deleteEntry,
};
