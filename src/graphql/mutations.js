/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const processQueue = /* GraphQL */ `
  mutation ProcessQueue($input: ProcessQueueInput!) {
    processQueue(input: $input)
  }
`;
export const createList = /* GraphQL */ `
  mutation CreateList(
    $input: CreateListInput!
    $condition: ModelListConditionInput
  ) {
    createList(input: $input, condition: $condition) {
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
export const updateList = /* GraphQL */ `
  mutation UpdateList(
    $input: UpdateListInput!
    $condition: ModelListConditionInput
  ) {
    updateList(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
