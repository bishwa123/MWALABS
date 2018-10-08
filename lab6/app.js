const express = require("express");
const Joi = require("joi");
const gradeValidation = require("./gradesvalidation");
var bodyParser = require('body-parser');
const responseObj = require("./apiresponse");
const app = express();

var jsonParser = bodyParser.json()

let grades = [
    { id: 1, name: "bishwa", course: "CS572", grade: "95" },
    { id: 2, name: "sunil", course: "CS572", grade: "94" },
    { id: 3, name: "peshal", course: "CS572", grade: "90" },
    { id: 4, name: "arun", course: "CS572", grade: "85" },
    { id: 5, name: "kiran", course: "CS572", grade: "92" },
]

// GET api/grades
app.get("/api/grades", (req, res) => {
    res.status(200).json(gererateResponseObj(grades,""));
});

// GET api/grades/id
app.get("/api/grades/:id", (req, res) => {
    const grade = grades.filter(grade => grade.id === parseInt(req.params.id));
    if (grade.length > 0) {
        res.status(200).json(gererateResponseObj(grade,""));
    }
    else {
        res.status(404).json(gererateResponseObj("","Data not found"));
    }
});

//POST api/grades
app.post("/api/grades", jsonParser, (req, res) => {
    const { error, value } = Joi.validate(req.body, gradeValidation.schema);
    if (error) {
        res.status(304).json(gererateResponseObj("",error.details[0].message));
    }
    else {
        const grade = {
            id: grades.length + 1,
            name: req.body.name,
            course: req.body.course,
            grade: req.body.grade
        }
        grades.push(grade);
        res.status(200).json(gererateResponseObj(grade,""));
    }

});

//PUT api/grades/id
app.put("/api/grades/:id", jsonParser, (req, res) => {
    oldGrade = grades.filter(g => g.id === parseInt(req.params.id));
    console.log(oldGrade);
    if (oldGrade.length > 0) {
        const { error } = Joi.validate(req.body, gradeValidation.schema);
        if (!error) {
            const { name, course, grade } = req.body;
            oldGrade[0].name = name;
            oldGrade[0].course = course;
            oldGrade[0].grade = grade;

            grades[oldGrade.id] = oldGrade[0];
            console.log(oldGrade[0]);
            res.status(200).json(gererateResponseObj(oldGrade[0],""));
        }
        else {
            res.status(304).json(gererateResponseObj("","Bad request"));
        }
    }
    else {
        res.status(404).json(gererateResponseObj("","data not found"));
    }
});

//DELETE api/grades/:id
app.delete("/api/grades/:id", (req, res) => {
    grade = grades.filter(g => g.id === parseInt(req.params.id));
    if (grade.length > 0) {
        grades.splice(grade.id, 1);
        res.status(200).json(gererateResponseObj(grade,""));
    }
    else {
        req.status(404).json(gererateResponseObj("","No data"));
    }
});

function gererateResponseObj(data, error){
    let obj = responseObj();
    obj.data = data;
    obj.error = error;

    return obj;
}
app.listen(3000, () => console.log("listening to port 3000"));