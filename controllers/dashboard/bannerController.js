const bannerModel = require("../../models/dashboard/bannerModel");
const path = require("path");
const multer = require("multer");
const {unlink} = require("fs");
const index = (req, res) => {
    bannerModel.index()
        .then(slides => {
            res.render("dashboard/pages/banner/index", {
                slides
            });
        });
}
const show = (req, res) => {
    const id = req.params['id'];
    bannerModel.show(id)
        .then(oneSlide => {
            res.render("dashboard/pages/banner/show", {oneSlide});
        });
}
const createForm = (req, res) => {
    res.render("dashboard/pages/banner/createForm");
}
const bannerSto = (req, res) => {
    bannerModel.bannerStore(req.body)
        .then(err => {});
    res.redirect("dashboard/banner/createForm");
}
const destroy = (req, res) => {
    const id = req.params['id'];
    bannerModel.destroy(id)
        .then(error => {});
    res.redirect("/dashboard/banner");
}
const bannerUpdate = (req, res) => {
    const id = req.params['id'];
    bannerModel.bannerUpdate(id)
        .then(oneSlide => {
            res.render("dashboard/pages/banner/bannerUpdate", {oneSlide});
        });
}
const update = (req, res) => {
    const id = req.body.id;
    bannerModel.bannerUpdate(id)
        .then(oneSlide => {
            if (oneSlide.length != 0) {
                if (req.file != undefined) {
                    if (oneSlide[0].photo != "") {
                        const publicPath = path.resolve("./", "public/uploads");
                        unlink(path.join(publicPath, oneSlide[0].photo), (err) => {
                            if (err) {
                                throw err;
                            }
                        });
                    }
                    req.body.photo = req.file.filename;
                    bannerModel.update(req.body)
                        .then(error => {
                        });
                    res.redirect("/dashboard/banner");
                } else {
                    req.body.photo = "";
                    bannerModel.update(req.body)
                        .then(error => {
                            //
                        });
                    res.redirect("/dashboard/banner");
                }
            }
        });
}
module.exports = {
    index,
    show,
    createForm,
    bannerSto,
    destroy,
    bannerUpdate,
    update
}