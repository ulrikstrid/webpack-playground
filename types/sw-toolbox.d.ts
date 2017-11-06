declare module "sw-toolbox" {
  interface RouterRequest {
    url: string;
  }

  const toolbox: {
    router: {
      get: (
        path: string,
        handler: (req: RouterRequest, values: any) => Response
      ) => any;
    };
  };

  export default toolbox;
}
