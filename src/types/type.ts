import { IncomingMessage, ServerResponse } from 'http';

export type contextType = {
  req: IncomingMessage;
  res: ServerResponse;
  query: {
    [key: string]: string;
  };
  resolvedUrl: string;
};
