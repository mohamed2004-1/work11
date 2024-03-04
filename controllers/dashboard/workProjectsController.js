const workProjectsModel = require("../../models/dashboard/workProjectsModel");
const path = require("path");
const {
    unlink
} = require("fs");
const index = (req, res) => {
    workProjectsModel.index()
        .then(Projects => {
            res.render("dashboard/pages/workProjects/index", {
                Projects
            });
        });
}
const show = (req, res) => {
    const id = req.params['id'];
    workProjectsModel.show(id)
        .then(oneProject => {
            res.render("dashboard/pages/workProjects/show", {
                oneProject
            });
        });
}
const createForm = (req, res) => {
    res.render("dashboard/pages/workProjects/createForm");
}
const workProjects = (req, res) => {
    workProjectsModel.workProjectStore(req.body)
        .then(err => {

        });
    res.redirect("dashboard/workProjects/createForm");
}
const destroy = (req, res) => {
    const id = req.params['id'];
    workProjectsModel.destroy(id)
        .then(error => {
            //
        });
    res.redirect("/dashboard/workProjects");
}
const updateProject = (req, res) => {
    const id = req.params['id'];
    workProjectsModel.updateProject(id)
        .then(oneProject => {
            res.render("dashboard/pages/workProjects/updateProject", {
                oneProject
            });
        });
}
const update = (req, res) => {
    const id = req.body.id;
    workProjectsModel.updateProject(id)
        .then(oneProject => {
            if (oneProject.length != 0) {
                if (req.file != undefined) {
                    if (oneProject[0].photo != "") {
                        const publicPath = path.resolve("./", "public/uploades");
                        unlink(path.join(publicPath, oneProject[0].photo), (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                    req.body.photo = req.file.filename;
                    workProjectsModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/dashboard/workProjects");
                } else {
                    req.body.photo = "";
                    workProjectsModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/dashboard/workProjects");
                }
            }
        });
}
const projectCategory1 = (req, res) => {
    const id = req.params['id'];
    workProjectsModel.projectCategory1(id)
        .then(oneProject => {
            res.render("dashboard/pages/workProjects/projectCategory1", {
                oneProject
            });
        });
}
const selectCategory = (req, res) => {
    workProjectsModel.selectCategory(req.body)
        .then(err => {});
    res.redirect("dashboard/workProjects");
}
const deleteCategory = (req, res) => {
    workProjectsModel.deleteCategory(req.body)
        .then(err => {});
    res.redirect("dashboard/workProjects");
}
module.exports = {
    index,
    show,
    createForm,
    workProjects,
    destroy,
    updateProject,
    update,
    projectCategory1,
    selectCategory,
    deleteCategory
}