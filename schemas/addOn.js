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
    title: 'Price',
    name: 'price',
    description: "Enter the amount in USD",
    type: 'number',
    hidden: ({document}) => !document?.Price
  },
  {
    title: "Priority",
    name: "priority",
    type: "number", // Required
    description: "Enter a Number between 1-10 to define the priority of appeareance of the element",
    validation: Rule => Rule.required().max(10)
  },
  {
    title: 'Description',
    name: 'description',
    type: 'text'
  }
],
}