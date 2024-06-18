import simpleGit from 'simple-git';

type GitInfo = {
  author: string,
  pubDate: string,
  lastModified: string,
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
    pubDate: firstCommit.date,
    lastModified: lastCommit?.date ? lastCommit.date : firstCommit.date,
  }
  
  return gitInfo;
}
