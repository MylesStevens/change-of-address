module.exports = {
  bind : function (app, assetPath) {

    var version = 'sprint-5';

    /*-----------------------------------------------------*/
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    /*-----------------------------------------------------*/
    

    /*-----------------------------------------------------*/



       app.get('/COA_Direct_v3/find-postcode2', function (req, res) {
     

      var postcode = req.query.postcode;



      var idealPostcodes = require("ideal-postcodes")("ak_ibah3xqei01TCHgxRQqH36ilJkiqX")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        // console.log(results); 
        res.render('COA_Direct_v3/Address_dropdown', {'assetPath' : assetPath, 'postcode' : postcode, 'result' : results})

      });
        
    });



     app.get('/COA_Direct_v3/find-confirm', function (req, res) {
     

      var addressall = req.query.udprn;

      if (addressall == "My address is not here"){
        
        res.render('COA_Direct_v3/Address_manual', {'assetPath' : assetPath})

    } else{



      var addressalllist = addressall.split(",");
 

      var line1= addressalllist[0];
      var line2 = addressalllist[1];
      var line3= addressalllist[2];
      var line4 = addressalllist[3];
      var line5 = addressalllist[4];
      

      

     
        res.render('COA_Direct_v3/Address_confirm', {'assetPath' : assetPath, 'addressall1' : addressalllist, 'address1' : line1, 'address2' : line2, 'address3' : line3, 'address4' : line4, 'address5' : line5 })

}
    
        
    });

     app.get('/COA_Direct_v3/send_address', function (req, res) {

      var addressall1 = req.query.newconf;

        res.render('COA_Direct_v3/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})

      });



    app.get('/COA_Direct_v3/send_address2', function (req, res) {

      var addressall1 = req.query.sub;

      var email1 = req.query.email;

      var re = /\S+@\S+\.\S+/;

 if (email1  == ""){
              res.render('COA_Direct_v3/your-details-mobile', {'assetPath' : assetPath, 'addressall1' : addressall1, 'email' : email1});
                  }    



if (re.test(email1) == false){
  
  res.render('COA_Direct_v3/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1, 'email' : email1})

} else {

        res.render('COA_Direct_v3/your-details-mobile', {'assetPath' : assetPath, 'addressall1' : addressall1, 'email' : email1})
}
      });
    

    app.get('/COA_Direct_v3/send_address3', function (req, res) {

      var addressall1 = req.query.sub;

      var addressalllist = addressall1.split(",");
 

      var line1= addressalllist[0];
      var line2 = addressalllist[1];
      var line3= addressalllist[2];
      var line4 = addressalllist[3];
      var line5 = addressalllist[4];
      var email1 = addressalllist[5];

      var mobile = req.query.mobilenumber;

        res.render('COA_Direct_v3/summary', {'assetPath' : assetPath, 'address1' : line1, 'address2' : line2, 'address3' : line3, 'address4' : line4, 'address5' : line5,  'mobilenum' : mobile, 'email' : email1})

      });

      app.get('/COA_Direct_v3/sendaddress_freekey1', function (req, res) {

      

      var line1= req.query.A1;
      if (line1 == "undefined"){
        line1=" ";
      }
      var line2 = req.query.A2;
      if (line2 == "undefined"){
        line2=" ";
      }
      var line3= req.query.A3;
      if (line3 == "undefined"){
        line3="";
      }
      var line4 = req.query.A4;
      if (line4 == "undefined"){
        line4=" ";
      }
      var line5 = req.query.PC;
      if (line5 == "undefined"){
        line5=" ";
      }

      var addressall1 = line1+","+line2+","+line3+","+line4+","+line5

      
  res.render('COA_Direct_v3/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})
        

      });  
///





////////////////////////////////////////////////////////////////////









//////////////////////////////////////////////////////////////////////
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
    
    app.get('/COA_3v2/find-postcode', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
     

      var postcode = req.query.postcode;


      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        // console.log(results); 
        res.render('COA_3v2/evl-paydd-postcode', {'assetPath' : assetPath, 'postcode' : postcode, 'result' : results})

      });
        
    });
    ////////////
    app.get('/COA_3v2/find-postcode2', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
     

      var postcode = req.query.postcode;

// ak_i0ze7k03RQwMtjncypybi4nQOE97T-- pauls
// ak_ibah3xqei01TCHgxRQqH36ilJkiqX-- mine
      var idealPostcodes = require("ideal-postcodes")("ak_ibah3xqei01TCHgxRQqH36ilJkiqX")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        // console.log(results); 
        res.render('COA_3v2/Postcodeonly', {'assetPath' : assetPath, 'postcode' : postcode, 'result' : results})

      });
        
    });
    
     app.get('/COA_2v2/find-postcode2', function (req, res) {

      /*var Handlebars = require('Handlebars');*/
     

      var postcode = req.query.postcode;

// ak_i0ze7k03RQwMtjncypybi4nQOE97T

      var idealPostcodes = require("ideal-postcodes")("ak_ibah3xqei01TCHgxRQqH36ilJkiqX")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        // console.log(results); 
        res.render('COA_2v2/Postcodeonly', {'assetPath' : assetPath, 'postcode' : postcode, 'result' : results})

      });
        
    });
//////////////////////

     app.get('/COA_2v2/send_address', function (req, res) {

      var addressall1 = req.query.newconf;

        res.render('COA_2v2/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})

      });

     app.get('/COA_2v2/send_address2', function (req, res) {

      var addressall1 = req.query.sub;

      var email1 = req.query.email;



        res.render('COA_2v2/your-details-mobile', {'assetPath' : assetPath, 'addressall1' : addressall1, 'email' : email1})

      });

      app.get('/COA_2v2/send_address3', function (req, res) {

      var addressall1 = req.query.sub;

      var addressalllist = addressall1.split(",");
 

      var line1= addressalllist[0];
      var line2 = addressalllist[1];
      var line3= addressalllist[2];
      var line4 = addressalllist[3];
      var line5 = addressalllist[4];
      var email1 = addressalllist[5];

      var mobile = req.query.mobilenumber;

        res.render('COA_2v2/summary', {'assetPath' : assetPath, 'address1' : line1, 'address2' : line2, 'address3' : line3, 'address4' : line4, 'address5' : line5,  'mobilenum' : mobile, 'email' : email1})

      });
        
    
///////////////////////
 app.get('/COA_3v2/send_address', function (req, res) {

      var addressall1 = req.query.newconf;

        res.render('COA_3v2/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})

      });


  app.get('/COA_3v2/send_address2', function (req, res) {

      var addressall1 = req.query.sub;

      var email1 = req.query.email;



        res.render('COA_3v2/your-details-mobile', {'assetPath' : assetPath, 'addressall1' : addressall1, 'email' : email1})

      });

      app.get('/COA_3v2/send_address3', function (req, res) {

      var addressall1 = req.query.sub;

      var addressalllist = addressall1.split(",");
 

      var line1= addressalllist[0];
      var line2 = addressalllist[1];
      var line3= addressalllist[2];
      var line4 = addressalllist[3];
      var line5 = addressalllist[4];
      var email1 = addressalllist[5];

      var mobile = req.query.mobilenumber;

        res.render('COA_3v2/summary', {'assetPath' : assetPath, 'address1' : line1, 'address2' : line2, 'address3' : line3, 'address4' : line4, 'address5' : line5,  'mobilenum' : mobile, 'email' : email1})

      });


       app.get('/COA_2v2/sendaddress_freekey1', function (req, res) {

      

      var line1= req.query.A1;
      if (line1 == "undefined"){
        line1=" ";
      }
      var line2 = req.query.A2;
      if (line2 == "undefined"){
        line2=" ";
      }
      var line3= req.query.A3;
      if (line3 == "undefined"){
        line3="";
      }
      var line4 = req.query.A4;
      if (line4 == "undefined"){
        line4=" ";
      }
      var line5 = req.query.PC;
      if (line5 == "undefined"){
        line5=" ";
      }

      var addressall1 = line1+","+line2+","+line3+","+line4+","+line5

      
  res.render('COA_2v2/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})
        

      });

      app.get('/COA_3v2/sendaddress_freekey1', function (req, res) {

      

      var line1= req.query.A1;
      if (line1 == "undefined"){
        line1=" ";
      }
      var line2 = req.query.A2;
      if (line2 == "undefined"){
        line2=" ";
      }
      var line3= req.query.A3;
      if (line3 == "undefined"){
        line3="";
      }
      var line4 = req.query.A4;
      if (line4 == "undefined"){
        line4=" ";
      }
      var line5 = req.query.PC;
      if (line5 == "undefined"){
        line5=" ";
      }

      var addressall1 = line1+","+line2+","+line3+","+line4+","+line5

      
  res.render('COA_3v2/your-details-email', {'assetPath' : assetPath, 'addressall1' : addressall1})
        

      });  



   
        

  }

};


