export async function getRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 }, // cache 1h
  });

  if (!res.ok) throw new Error("Failed to fetch repos");
  return res.json();
}
