const test=require('node:test');const assert=require('node:assert/strict');const jwt=require('jsonwebtoken');const {authenticate}=require('../src/middleware/authenticate');
process.env.JWT_SECRET='test-secret-that-is-long-enough-for-local-tests';
function run(req={get:()=>undefined}){let code;const res={status:c=>{code=c;return res},json:body=>({code,body})};let nextCalled=false;authenticate(req,res,()=>nextCalled=true);return {code,nextCalled,req}}
test('rejects a missing bearer token',()=>{const r=run();assert.equal(r.code,401);assert.equal(r.nextCalled,false)});
test('accepts a valid bearer token',()=>{const req={get:()=>`Bearer ${jwt.sign({sub:'00000000-0000-4000-8000-000000000001'},process.env.JWT_SECRET)}`};const r=run(req);assert.equal(r.nextCalled,true);assert.equal(req.user.sub,'00000000-0000-4000-8000-000000000001')});
