/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getList = /* GraphQL */ `
  query GetList($id: ID!) {
    getList(id: $id) {
      id
      cognitoUserId
      title
      createdAt
      updatedAt
      items {
        items {
          id
          cognitoUserId
          listId
          title
          notes
          completed
          remindAt
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listLists = /* GraphQL */ `
  query ListLists(
    $filter: ModelListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoUserId
        title
        createdAt
        updatedAt
        items {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      cognitoUserId
      listId
      title
      notes
      completed
      remindAt
      createdAt
      updatedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cognitoUserId
        listId
        title
        notes
        completed
        remindAt
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      cognitoUserId
      notificationConfig {
        email
        inApp
      }
      createdAt
      updatedAt
    }
  }
`;
