import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import restaurant from "./restaurants";
import addOn from "./addOn";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restaurant,
    addOn,
  ]),
});