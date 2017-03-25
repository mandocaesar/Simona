
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var assert = require('assert');

chai.use(chaiHttp);
 describe('/ Root', function(){
      it('it should return 200', function(done) {
        chai.request("http://localhost:3000")
            .get('/')
            .end(function (err, res) {
                console.log(res);
                res.should.have.status(200);
              done();
            });
      });
  });

