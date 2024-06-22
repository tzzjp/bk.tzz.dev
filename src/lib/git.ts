import simpleGit from 'simple-git';

type GitInfo = {
  author: string,
  pubDate: Date,
  lastModified: Date,
}
export async function getGitInfo(filePath: string): Promise<GitInfo | null> {
  const log = await simpleGit().log({ file: filePath });
  if(log.total === 0) {
    return null;
  }

  const firstCommit = log.all[log.total - 1];
  const lastCommit = log.latest;
  const gitInfo: GitInfo = {
    author: firstCommit.author_name,
    pubDate: new Date(firstCommit.date),
    lastModified: lastCommit?.date ? new Date(lastCommit.date) : new Date(firstCommit.date),
  }
  
  return gitInfo;
}
