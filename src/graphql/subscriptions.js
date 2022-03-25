/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateList = /* GraphQL */ `
  subscription OnCreateList($owner: String!) {
    onCreateList(owner: $owner) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateList = /* GraphQL */ `
  subscription OnUpdateList($owner: String!) {
    onUpdateList(owner: $owner) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteList = /* GraphQL */ `
  subscription OnDeleteList($owner: String!) {
    onDeleteList(owner: $owner) {
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
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($owner: String!) {
    onCreateItem(owner: $owner) {
      id
      cognitoUserId
      listId
      title
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($owner: String!) {
    onUpdateItem(owner: $owner) {
      id
      cognitoUserId
      listId
      title
      notes
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($owner: String!) {
    onDeleteItem(owner: $owner) {
      id
      cognitoUserId
      listId
      title
      notes
      createdAt
      updatedAt
    }
  }
`;
