module.exports = function (app) {
    app.get('/', function (req, res, next) {
        res.render('index', { title: 'Select a Product' });
    });

    app.get('/product/:product_id', function (req, res, next) {
        var product_id = req.params.product_id;
        res.render('index', { title: 'Product ' + product_id });
    });
};
