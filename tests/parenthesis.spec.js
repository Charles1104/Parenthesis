/*jshint esversion: 6 */

const chai = require('chai');
const expect=chai.expect;
const parenthesis = require('../app.js');

describe('Parenthesis function', () => {

  it('should be function', () => {
    expect(parenthesis).to.be.a('function');
  });

});


describe('check for true or false according to matching parenthesis', () => {

  it('should verify that the search is circularly included in the word', () => {
    expect(parenthesis('{}([])')).to.be.equal(true);
    expect(parenthesis('{{')).to.be.equal(false);
    expect(parenthesis('[(])')).to.be.equal(false);
    expect(parenthesis("{}([])")).to.be.equal(true);
    expect(parenthesis("([}])")).to.be.equal(false);
    expect(parenthesis("([])")).to.be.equal(true);
    expect(parenthesis("()[]{}[][]")).to.be.equal(true);
    expect(parenthesis("(((<>[])()))")).to.be.equal(true);
  });
});

