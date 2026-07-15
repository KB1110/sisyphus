class IndexService {
  public getIndex(): { name: string; version: string } {
    return {
      name: "Sisyphus API",
      version: "0.1.0",
    };
  }
}

export default IndexService;
