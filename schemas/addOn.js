export default {
  name: 'addOn',
  type: 'document',
	title: 'Add-on',
  fields: [{
    title: 'Name',
    name: 'name',
    type: 'string',
  },
  {
    title: 'Icon',
    name: 'icon',
    type: 'image',
  },
  {
    title: 'Free',
    name: 'free',
    type: 'boolean',
  },
  {
    title: 'Price in USD',
    name: 'usdPrice',
    description: "Enter the amount in USD",
    type: 'number',
    hidden: ({document}) => document?.free
  },
  {
    title: 'Price in MXN',
    name: 'mxnPrice',
    description: "Enter the amount in MXN",
    type: 'number',
    hidden: ({document}) => document?.free,
  },
  {
    title: "Priority",
    name: "priority",
    type: "number", // Required
    description: "Define the priority of appeareance of the element",
    validation: Rule => Rule.required().max(10),
    options: {
      layout: 'radio',
      list:[{
        value: 1,
        title:'Low Priority'
      },
      {
        value: 5,
        title:'Medium Priority',
      },
      {
        value: 10,
        title:'High Priority',
      }
    ]},
  },
  {
    title: 'Description',
    name: 'description',
    type: 'text'
  }
],
}