import { query } from './query';

const errorMocks = (message: string) => {
  return [
    {
      request: {
        query,
      },
      error: new Error(message)
    }
  ]
}

export { errorMocks };
