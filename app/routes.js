module.exports = {
  bind : function (app, assetPath) {

    var version = 'sprint-5';

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+version+'/landing', function (req, res) {
        res.render('alpha/'+version+'/landing', {'assetPath' : assetPath, 'verify' : req.query.verify, 'auth' : req.query.auth})
    });

    /*-----------------------------------------------------*/
    app.get('/Verify/Verify_1', function (req, res) {
        res.render('Verify/Verify_1', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_2', function (req, res) {
        res.render('Verify/Verify_2', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_3', function (req, res) {
        res.render('Verify/Verify_3', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_4', function (req, res) {
        res.render('Verify/Verify_4', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_5', function (req, res) {
        res.render('Verify/Verify_5', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_6', function (req, res) {
        res.render('Verify/Verify_6', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    app.get('/Verify/Verify_7', function (req, res) {
        res.render('Verify/Verify_7', {'assetPath' : assetPath, 'auth' : req.query.auth})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+version+'/diabetes-start', function (req, res) {
        res.render('alpha/'+version+'/diabetes-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/hypoglycaemia-episodes', function (req, res) {
        res.render('alpha/'+version+'/hypoglycaemia-episodes', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/diabetes-symptoms', function (req, res) {
        res.render('alpha/'+version+'/diabetes-symptoms', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-----------------------------------------------------*/
    app.get('/alpha/'+version+'/glaucoma-start', function (req, res) {
        res.render('alpha/'+version+'/glaucoma-start', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/double-vision', function (req, res) {
        res.render('alpha/'+version+'/double-vision', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/vision-control', function (req, res) {
        res.render('alpha/'+version+'/vision-control', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/eyesight-standard', function (req, res) {
        res.render('alpha/'+version+'/eyesight-standard', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/vision-condition', function (req, res) {
        res.render('alpha/'+version+'/vision-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    app.get('/alpha/'+version+'/another-condition', function (req, res) {
        res.render('alpha/'+version+'/another-condition', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions})
    });

    /*-------- Medical Consent ---------------------------*/
    app.get('/alpha/'+version+'/medical-consent', function (req, res) {
        res.render('alpha/'+version+'/medical-consent', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });
    
    app.get('/alpha/'+version+'/medical-care-1', function (req, res) {
        res.render('alpha/'+version+'/medical-care-1', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/medical-care-2', function (req, res) {
        res.render('alpha/'+version+'/medical-care-2', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/medical-care-3', function (req, res) {
        res.render('alpha/'+version+'/medical-care-3', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/medical-care-4', function (req, res) {
        res.render('alpha/'+version+'/medical-care-4', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/eyesight-treatment', function (req, res) {
        res.render('alpha/'+version+'/eyesight-treatment', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/insulin-declaration', function (req, res) {
        res.render('alpha/'+version+'/insulin-declaration', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/diabetic-care', function (req, res) {
        res.render('alpha/'+version+'/diabetic-care', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/eyesight-dystrophies', function (req, res) {
        res.render('alpha/'+version+'/eyesight-dystrophies', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/catmac-details', function (req, res) {
        res.render('alpha/'+version+'/catmac-details', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/special-adaptations', function (req, res) {
        res.render('alpha/'+version+'/special-adaptations', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

    app.get('/alpha/'+version+'/D497', function (req, res) {
        res.render('alpha/'+version+'/D497', {'assetPath' : assetPath, 'flow': req.query.flow, 'conditions' : req.query.conditions, 'path' : req.query.path})
    });

  }

};


/* for getting lots of variables out of a string...
String[] str_array = "name:score".split(":");
String stringa = str_array[0]; 
String stringb = str_array[1];
*/
