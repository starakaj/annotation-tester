const assert = require("assert");
const path = require("path");
const request = require("supertest");

describe("loading express", function () {
	let server;

	beforeEach(function () {
		const serverPath = "../lib/server.js";
		delete require.cache[require.resolve(serverPath)];
		server = require(serverPath);
	});

	afterEach(function (done) {
		server.close(done);
	});

	it("responds to /", function testSlash(done) {
		request(server)
			.get("/")
			.expect(200, done);
	});

	it("counts objects in a patch", function testHisto(done) {
		request(server)
			.post("/histo")
			.attach("patch", path.resolve(__dirname, "test.maxpat"))
			.expect('Content-Type', /json/)
			.expect(200)
			.then(response => {
				assert(response.body["hi"] === 1, "hi");
				assert(response.body["jit.world"] === 1, "jit.world");
				done();
			})
	});

	it("404 everything else", function testPath(done) {
		request(server)
			.get("/foo/bar")
			.expect(404, done);
	});
});