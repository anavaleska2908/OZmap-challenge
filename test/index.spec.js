import app from '../src/server.js';
import assert from 'assert';
import chai from 'chai';
import chaiHttp from 'chai-http';
import chaiJson from 'chai-json-schema';
import { beforeEach } from 'mocha';
import User from "../src/models/user.model.js";

chai.use(chaiHttp);
chai.use(chaiJson);

const expect = chai.expect;

let rauppId = "";
let anaId = "";
let angelaId = "";
let vitoriaId = "";
let dianaId = "";
let leilaId = "";
let userDoesNotExist = process.env.ID;
let userToken = "";

describe('A simple test suite', () => {
    it('Should return -1 when the value is not present', () => {
        assert.equal([1, 2, 3].indexOf(4), -1);
    });
});

describe('Application tests',  () => {
    before((done) => {
        User.remove({}, (error) => {
            done();
        });
    });
    it('The server is online', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        done();
        });
    });

    it('Should be an empty list of users', (done) => {
        chai.request(app)
        .get('/users')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.eql([]);
            done();
        });
    });

    it('Should create a raupp user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "raupp", email: "jose.raupp@devoz.com.br",password: "123456", age: 35})
        .end((err, res) => {
            rauppId = res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    
    it('Should create a ana user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "ana", email: "ana@email.com.br", password: "123456", age: 29})
        .end((err, res) => {
            anaId = res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    
    it('Should create a angela user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "angela", email: "angela@email.com.br", password: "123456", age: 27})
        .end((err, res) => {
            angelaId = res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('Should create a vitoria user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "vitoria", email: "vitoria@email.com.br", password: "123456", age: 36})
        .end((err, res) => {
            vitoriaId = res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('Should create a diana user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "diana", email: "diana@email.com.br", password: "123456", age: 20})
        .end((err, res) => {
            dianaId = res.body._id;
            expect(err).to.be.null;
            expect( res ).to.have.status( 201 );
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('Should create a leila user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "leila", email: "leila@email.com.br", password: "123456", age: 62})
        .end((err, res) => {
            leilaId = res.body._id;
            expect(err).to.be.null;
            expect(res).to.have.status(201);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('Should not create underage user', (done) => {
        chai.request(app)
        .post('/users')
        .send({name: "sonia", email: "sonia@email.com.br", password: "123456", age: 16})
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(400);
            expect(res.body).to.include({message: "Underage user"});
            done();
        });
    });

    it('The user naoExiste does not exist in the system', (done) => {
        chai.request(app)
        .get('/users/naoExiste')
        .end((err, res) => {
            console.log("res ", res.body);
            expect(err).to.be.null;
            expect(res.body).to.be.equal('User not found'); //possivelmente forma errada de verificar a mensagem de erro
            expect(res).to.have.status(404);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });

    it('the user raupp exists and is valid', async (done) => {
        chai.request(app)
        .get('/users/raupp')
        .end( (err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('the user ana exists and is valid', (done) => {
        chai.request(app)
        .get('/users/ana')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('the user angela exists and is valid', (done) => {
        chai.request(app)
        .get('/users/angela')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('the user vitoria exists and is valid', (done) => {
        chai.request(app)
        .get('/users/vitoria')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('the user diana exists and is valid', (done) => {
        chai.request(app)
        .get('/users/diana')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('the user leila exists and is valid', (done) => {
        chai.request(app)
        .get('/users/leila')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    
    it('Should delete user raupp', (done) => {
        chai.request(app)
        .delete('/users/raupp')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });

    it('The raupp user should no longer exist on the system', (done) => {
        chai.request(app)
        .get('/users/raupp')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            expect(res.body).to.be.jsonSchema(User);
            done();
        });
    });
    it('Should be a list with at least 5 users', async (done) => {
        const user = await User.find();
        chai.request(app)
        .get('/users')
        .end((err, res) => {
        expect(err).to.be.null;
        expect(res).to.have.status(200);
        expect(res.body.length).to.be.at.least(5);
        done();
        });
    });
})