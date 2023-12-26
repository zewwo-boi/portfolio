export type Route = string;

export type RouteOptions =
    | {
          blobs: {
              hidden: false;
              overflow_hidden: boolean;
          };
      }
    | {
          blobs: {
              hidden: true;
              overflow_hidden?: boolean;
          };
      };
