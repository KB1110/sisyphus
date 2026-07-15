interface Repository {
  id: string;
  name: string;
  github_url: string;
  default_branch: string;
  status: "pending" | "analysing" | "ready";
}

interface CreateRepositoryRequest {
  name: string;
  github_url: string;
  default_branch: string;
}

export { type Repository, type CreateRepositoryRequest };
