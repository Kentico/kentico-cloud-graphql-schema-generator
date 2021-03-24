# Kentico Kontent GraphQL schema generator

[![Build](https://github.com/Kentico/kontent-schema-generator-graphql/actions/workflows/build.yml/badge.svg)](https://github.com/Kentico/kontent-schema-generator-graphql/actions/workflows/build.yml)
[![npm version](https://badge.fury.io/js/%40kentico%2Fkontent-schema-generator-graphql.svg)](https://badge.fury.io/js/%40kentico%2Fkontent-schema-generator-graphql)
[![codecov](https://codecov.io/gh/Kentico/kontent-schema-generator-graphql/branch/master/graph/badge.svg?token=Dl8u1wtJ0T)](https://codecov.io/gh/Kentico/kontent-schema-generator-graphql)

[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kentico-kontent)
[![GitHub Discussions](https://img.shields.io/badge/GitHub-Discussions-FE7A16.svg?style=popout&logo=github)](https://github.com/Kentico/Home/discussions)

[GraphQL schema](https://graphql.org/learn/schema/) generator is used to generate schema based on specified project.

This schema could be used when creating [GraphQL](https://graphql.org) endpoint from [Kentico Kontent Delivery API REST endpoint](https://docs.kontent.ai/reference/kentico-kontent-apis-overview#delivery-api).

This schema is primarily meant to be used in combination with the [Official JavaScript SDK](https://github.com/Kentico/kentico-kontent-js/tree/master/packages/delivery) on the top of the Kentico Kontent REST API. If you are using REST API directly, you won't get all elements' properties set, because some of them are set by the JS SDK.

**Showcase** could be seen on [Apollo Express boilerplate](https://github.com/Kentico/kontent-boilerplate-express-apollo).

## Get started

### Prerequisites

* [Node](https://nodejs.org/en/download/) installed

### Installation

`npm i @kentico/kontent-schema-generator-graphql -g`

### Generating schema with NPM script

Provide a [project ID](https://docs.kontent.ai/reference/delivery-api#operation/list-content-items) of your project.

Write  type definition to the standard output

* `kontent-generate-gql-schema --projectId xxx`

Generate file with definition exported as a constant fo file `config.js`

* `kontent-generate-gql-schema --projectId xxx --createModule --outputFile "config.js"`

### Configuration

* `projectId` - represents the Kentico Kontent Project Id from which schema will be generated
* `secureAccessKey` - Secure access key required to authenticate requests with enabled secure access in Kentico Kontent project
* `outputFile` - specifies output file name (possible with the path), if not specified - output is written to standard output
* `createModule` - output is defined as a constant and exported as a module (see [Example Output](#example-output))

## Versions

Version 1.X.X is compatible with npm package [`kentico-cloud-delivery`](https://www.npmjs.com/package/kentico-cloud-delivery) version 5.X.X.

Version 2.X.X is compatible with npm package [`@kentico/kontent-delivery`](https://www.npmjs.com/package/@kentico/kontent-delivery) version 8.X.X.

## Development

1. Clone the repository
2. Run `npm install` to install all required dependencies
3. Run `npm run build` to build the solution

### Run

Run `node ./_commonjs/index.js --projectId xxx`

### Test

* Run `npm test` to run all tests

### Run watch mode

* Run `npm run watch` to run the watch mode

## Example output

* More complex showcase could be also retrieved by running

`npm run run:sample`

<details>
<summary>Without module encapsulation (w/o `createModule`)</summary>

```gql
type SystemInfo {
  id: String!
  name: String!
  codename: String!
  language: String!
  type: String!
  lastModified: String!
}
interface ContentItem {
  system: SystemInfo!
}
type MultipleChoiceElementOption {
  name: String!
  codename: String
}
type TaxonomyTerm {
  name: String!
  codename: String
}
type Asset {
  name: String
  type: String
  size: Int
  description: String
  url: String
  width: Int
  height: Int
}
type Link {
  codename: String
  itemID: String
  urlSlug: String
  type: String
}
type RichTextImage {
  imageId: String!
  url: String!
  description: String
  width: Int
  height: Int
}
type TextElement {
  type: String!
  name: String!
  value: String
}
type NumberElement {
  type: String!
  name: String!
  value: Int
}
type DateTimeElement {
  type: String!
  name: String!
  value: String
}
type MultipleChoiceElement {
  type: String!
  name: String!
  value: [MultipleChoiceElementOption]
}
type UrlSlugElement {
  type: String!
  name: String!
  value: String
}
type TaxonomyElement {
  type: String!
  name: String!
  value: [TaxonomyTerm]
  taxonomyGroup: String
}
type AssetElement {
  type: String!
  name: String!
  value: [Asset]
}
type RichTextElement {
  type: String!
  name: String!
  value: String
  linkedItemCodenames: [String]
  links: [Link]
  images: [RichTextImage]
  resolvedHtml: String
}
type LinkedItemsElement {
  type: String!
  name: String!
  value: [ContentItem]
  itemCodenames: [String]
}
type CustomElement {
  type: String!
  name: String!
  value: String
}

type AboutUsContentType implements ContentItem {
  system: SystemInfo!
  metadata__og_description: TextElement
  metadata__meta_title: TextElement
  metadata__og_title: TextElement
  metadata__meta_description: TextElement
  metadata__twitter_site: TextElement
  url_pattern: UrlSlugElement
  metadata__twitter_image: AssetElement
  metadata__twitter_creator: TextElement
  metadata__twitter_title: TextElement
  metadata__twitter_description: TextElement
  metadata__og_image: AssetElement
  facts: LinkedItemsElement
}

```

</details>

<details>
<summary>With module encapsulation</summary>

```js
const TYPE_DEFINITION = `type SystemInfo {
  id: String!
  name: String!
  codename: String!
  language: String!
  type: String!
  lastModified: String!
}
interface ContentItem {
  system: SystemInfo!
}
type MultipleChoiceElementOption {
  name: String!
  codename: String
}
type TaxonomyTerm {
  name: String!
  codename: String
}
type Asset {
  name: String
  type: String
  size: Int
  description: String
  url: String
  width: Int
  height: Int
}
type Link {
  codename: String
  itemID: String
  urlSlug: String
  type: String
}
type RichTextImage {
  imageId: String!
  url: String!
  description: String
  width: Int
  height: Int
}
type TextElement {
  type: String!
  name: String!
  value: String
}
type NumberElement {
  type: String!
  name: String!
  value: Int
}
type DateTimeElement {
  type: String!
  name: String!
  value: String
}
type MultipleChoiceElement {
  type: String!
  name: String!
  value: [MultipleChoiceElementOption]
}
type UrlSlugElement {
  type: String!
  name: String!
  value: String
}
type TaxonomyElement {
  type: String!
  name: String!
  value: [TaxonomyTerm]
  taxonomyGroup: String
}
type AssetElement {
  type: String!
  name: String!
  value: [Asset]
}
type RichTextElement {
  type: String!
  name: String!
  value: String
  linkedItemCodenames: [String]
  links: [Link]
  images: [RichTextImage]
  resolvedHtml: String
}
type LinkedItemsElement {
  type: String!
  name: String!
  value: [ContentItem]
  itemCodenames: [String]
}
type CustomElement {
  type: String!
  name: String!
  value: String
}

type AboutUsContentType implements ContentItem {
  system: SystemInfo!
  metadata__og_description: TextElement
  metadata__meta_title: TextElement
  metadata__og_title: TextElement
  metadata__meta_description: TextElement
  metadata__twitter_site: TextElement
  url_pattern: UrlSlugElement
  metadata__twitter_image: AssetElement
  metadata__twitter_creator: TextElement
  metadata__twitter_title: TextElement
  metadata__twitter_description: TextElement
  metadata__og_image: AssetElement
  facts: LinkedItemsElement
}`;

module.exports = {
  TYPE_DEFINITION
}
```

</details>

