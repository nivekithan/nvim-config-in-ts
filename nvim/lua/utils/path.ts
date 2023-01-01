export const parsePath = (path: string) => {
  const absolutePath = getAbsolutePath(path);
  const fileName = getFileNameFromPath(absolutePath);
  const dirName = getDirNameFromPath(absolutePath);

  return { fileName, dirName, absolutePath };
};

const getFileNameFromPath = (path: string) => {
  if (path === "") {
    print("Path provided on getFileNameFromPath is empty");
    return path;
  }

  const fileName = vim.fn.fnamemodify(path, ":t");

  return vim.fs.normalize(fileName);
};

const getDirNameFromPath = (path: string) => {
  if (path === "") {
    print("Path provided on getDirNameFromPath is empty");
    return path;
  }

  const dirName = vim.fn.fnamemodify(path, ":h");
  return vim.fs.normalize(dirName);
};

const getAbsolutePath = (path: string) => {
  if (path === "") {
    print("Path provided on getAbsolutePath is empty");
    return path;
  }

  const absolutePath = vim.fn.fnamemodify(path, ":p");
  return vim.fs.normalize(absolutePath);
};
