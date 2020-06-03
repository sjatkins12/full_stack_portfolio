export function modelizeRepositories(repositories) {
  return repositories.map((repository) => ({
    name: repository.name,
    url: repository.url,
    language: repository.language,
  }));
}
