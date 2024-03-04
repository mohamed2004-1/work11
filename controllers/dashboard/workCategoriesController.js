const workCategoriesModel = require("../../models/dashboard/workCategoriesModel");
const path = require("path");
const {
    unlink
} = require("fs");
const index = (req, res) => {
    workCategoriesModel.index()
        .then(Categories => {
            res.render("dashboard/pages/workCategories/index", {
                Categories
            });
        });
}
const show = (req, res) => {
    const id = req.params['id'];
    workCategoriesModel.show(id)
        .then(oneCategory => {
            res.render("dashboard/pages/workCategories/show", {
                oneCategory
            });
        });
}
const createForm = (req, res) => {
    res.render("dashboard/pages/workCategories/createForm");
}
const workCateg = (req, res) => {
    workCategoriesModel.workCategStore(req.body)
        .then(err => {

        });
    res.redirect("/dashboard/workCategories/createForm");
}
const updateCateg = (req, res) => {
    const id = req.params['id'];
    workCategoriesModel.updateCateg(id)
        .then(oneCategory => {
            res.render("dashboard/pages/workCategories/updateCateg", {
                oneCategory
            });
        });
}
const update = (req, res) => {
    const id = req.body.id;
    workCategoriesModel.updateCateg(id)
        .then(oneCategory => {
            if(oneCategory.length != 0){
                workCategoriesModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/dashboard/workCategories");
                }
            }
    )};
const destroy = (req, res) => {
    const id = req.params['id'];
    workCategoriesModel.destroy(id)
        .then(error => {
            //
        });
    res.redirect("/dashboard/workCategories");
}
module.exports = {
    index,
    show,
    createForm,
    workCateg,
    destroy,
    updateCateg,
    update
}