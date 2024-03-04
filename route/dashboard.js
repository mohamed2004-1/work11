const express = require('express');
const dashboardRouter = express.Router();
const app = express();

/* ------------- controllers ------------------- */

const bannerController = require('../controllers/dashboard/bannerController');
const contactformController = require('../controllers/dashboard/contactformController');
const workCategoriesController = require('../controllers/dashboard/workCategoriesController');
const workProjectsController = require('../controllers/dashboard/workProjectsController');

/* -------------- parse of form ------------------- */
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploades/");
    },
    filename: (req, file, cb) => {
        if (file) {
            cb(null, Date.now() + path.extname(file.originalname))
        }
    }
});

const upload = multer({
    storage: storage
});


/* ---------------------------------------------------- */
/* -------------- route roles ------------------------ */
/* ------------------------------------------------------ */
const authController = require("../controllers/dashboard/authController");

/* -------------- not auth pages ------------------- */
dashboardRouter.get('/signup', (req, res) => {
    authController.signup(req, res);
});

dashboardRouter.post('/storeUser', (req, res) => {
    authController.storeUser(req, res);
});

dashboardRouter.get('/signin', (req, res) => {
    authController.signin(req, res);
});

dashboardRouter.post('/verifySignin', (req, res) => {
    authController.verifySignin(req, res);
});

dashboardRouter.get('/logout', (req, res) => {
    authController.logout(req, res);
});

/* ------- auth --------- */
dashboardRouter.use(authController.isAthu);

/* ********** dashboard ************* */
dashboardRouter.get('/dashboard', (req, res) => {
    res.render("../views/dashboard/pages/index.ejs");
});

/* ---------------------banner------------------------- */

dashboardRouter.get('/dashboard/banner', (req, res) => {
    bannerController.index(req, res);
});
dashboardRouter.get('/dashboard/banner/show/:id', (req, res) => {
    bannerController.show(req, res);
});
dashboardRouter.get('/dashboard/banner/createForm', (req, res) => {
    bannerController.createForm(req, res);});

dashboardRouter.post('/bannerSto', (req, res) => {
    bannerController.bannerSto(req, res);
});
dashboardRouter.get('/dashboard/banner/bannerUpdate/:id', (req, res) => {
    bannerController.bannerUpdate(req, res);
});
dashboardRouter.post('/dashboard/banner/update', upload.single('photo'),(req, res) => {
    bannerController.update(req, res);
});
dashboardRouter.get('/dashboard/banner/destroy/:id', (req, res) => {
    bannerController.destroy(req, res);
});
/* ---------------------contact form------------------------- */

dashboardRouter.get('/dashboard/contactform', (req, res) => {
    contactformController.index(req, res);
});
dashboardRouter.get('/dashboard/contactform/show/:id', (req, res) => {
    contactformController.show(req, res);
});
dashboardRouter.get('/dashboard/contactform/destroy/:id', (req, res) => {
    contactformController.destroy(req, res);
});

/* -----------------------Work Categories------------------------ */

dashboardRouter.get('/dashboard/workCategories', (req, res) => {
    workCategoriesController.index(req, res);
});
dashboardRouter.get('/dashboard/workCategories/show/:id', (req, res) => {
    workCategoriesController.show(req, res);
});
dashboardRouter.get('/dashboard/workCategories/createForm', (req, res) => {
    workCategoriesController.createForm(req, res);
});
dashboardRouter.get('/', (req, res) => {
    workCategoriesController.index(req, res);
});
dashboardRouter.post('/workCateg', (req, res) => {
    workCategoriesController.workCateg(req, res);
});
dashboardRouter.get('/dashboard/workCategories/updateCateg/:id', (req, res) => {
    workCategoriesController.updateCateg(req, res);
});
dashboardRouter.post('/dashboard/workCategories/update', upload.single('photo'), (req, res) => {
    workCategoriesController.update(req, res);
});
dashboardRouter.get('/dashboard/workCategories/destroy/:id', (req, res) => {
    workCategoriesController.destroy(req, res);
});
/* -------------Work Projects------------------ */

dashboardRouter.get('/dashboard/workProjects', (req, res) => {
    workProjectsController.index(req, res);
});
dashboardRouter.get('/dashboard/workProjects/show/:id', (req, res) => {
    workProjectsController.show(req, res);
})
dashboardRouter.get('/dashboard/workProjects/createForm', (req, res) => {
    workProjectsController.createForm(req, res);
});
dashboardRouter.post('/workProjects', (req, res) => {
    workProjectsController.workProjects(req, res);
});
dashboardRouter.get('/dashboard/workProjects/updateProject/:id', (req, res) => {
    workProjectsController.updateProject(req, res);
});
dashboardRouter.post('/dashboard/workProjects/update', upload.single('photo'), (req, res) => {
    workProjectsController.update(req, res);
});
dashboardRouter.get('/dashboard/workProjects/destroy/:id', (req, res) => {
    workProjectsController.destroy(req, res);
});
dashboardRouter.get('/dashboard/workProjects/projectCategory1/:id', (req, res) => {
    workProjectsController.projectCategory1(req, res);
})
dashboardRouter.post('/selectCategory', (req, res) => {
    workProjectsController.selectCategory(req, res);
});
dashboardRouter.post('/deleteCategory', (req, res) => {
    workProjectsController.deleteCategory(req, res);
});
module.exports = dashboardRouter;