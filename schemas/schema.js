import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import restaurants from "./restaurants";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    restaurants, // add the document type to this array
  ]),
});