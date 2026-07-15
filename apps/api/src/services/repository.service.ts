import {
  type Repository,
  type CreateRepositoryRequest,
} from "../types/repository.js";

class RepositoryService {
  private repositories: Repository[] = [];

  public getAll(): Repository[] {
    return this.repositories;
  }

  public create(repository: CreateRepositoryRequest): Repository {
    const new_repo: Repository = {
      id: crypto.randomUUID(),
      status: "pending",
      ...repository,
    };
    this.repositories.push(new_repo);

    return new_repo;
  }

  public getById(id: string): Repository | undefined {
    return this.repositories.find((repo) => repo.id === id);
  }

  public deleteById(id: string): boolean {
    const index = this.repositories.findIndex((repo) => repo.id === id);
    if (index === -1) {
      return false;
    } else {
      this.repositories.splice(index, 1);

      return true;
    }
  }
}

export default RepositoryService;
