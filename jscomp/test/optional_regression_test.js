'use strict';

var Mt = require("./mt.js");
var Caml_option = require("../../lib/js/caml_option.js");

var suites = /* record */[/* contents : [] */0];

var test_id = /* record */[/* contents */0];

function eq(loc, x, y) {
  return Mt.eq_suites(test_id, suites, loc, x, y);
}

function make(s, b, i) {
  return (function (param) {
      var tmp = { };
      if (s !== undefined) {
        tmp.s = Caml_option.valFromOption(s);
      }
      if (b !== undefined) {
        tmp.b = Caml_option.valFromOption(b);
      }
      if (i !== undefined) {
        tmp.i = Caml_option.valFromOption(i);
      }
      return tmp;
    });
}

var hh = make("", false, 0)(/* () */0);

eq("File \"test/optional_regression_test.ml\", line 21, characters 6-13", Caml_option.undefined_to_opt(hh.s), "");

eq("File \"test/optional_regression_test.ml\", line 22, characters 6-13", Caml_option.undefined_to_opt(hh.b), false);

eq("File \"test/optional_regression_test.ml\", line 23, characters 6-13", Caml_option.undefined_to_opt(hh.i), 0);

console.log(hh);

Mt.from_pair_suites("test/optional_regression_test.ml", suites[0]);

exports.suites = suites;
exports.test_id = test_id;
exports.eq = eq;
exports.make = make;
exports.hh = hh;
/* hh Not a pure module */
