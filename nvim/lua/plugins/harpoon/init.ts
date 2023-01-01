import { CURRENT_BUFNR_HANDLE } from "../../niveth/constants";
import { parsePath } from "../../utils/path";

const DEBUG = true;

const log = (value : unknown) => {
    if (DEBUG) {
        vim.inspect(value)
    }  
}

const harpoonState: Record<string, { fileMarks: string[] }> = {};


const getProject = (cwd: string) => {
  if (harpoonState[cwd] === undefined) {
    harpoonState[cwd] = { fileMarks: [] };
  }

  return harpoonState[cwd];
};

const markFileForCWD = (cwd: string, file: string) => {
  const marks = getProject(cwd);
  marks.fileMarks.push(file);
};

const isFileAlreadyMarked = (cwd: string, file: string) => {
  const marks = getProject(cwd);
  return marks.fileMarks.includes(file);
};

const getFileAtIndex = (cwd: string, fileIndex: number) => {
  const marks = getProject(cwd);
  const file = marks.fileMarks[fileIndex];

  if (file === undefined) {
    return null;
  }

  return file;
};

const unMarkFile = (cwd: string, file: string) => {
  const marks = getProject(cwd);
  const fileIndex = marks.fileMarks.findIndex((fileName) => fileName === file);
   marks.fileMarks.splice(fileIndex, 1);
};

export const toggleMarkFile = () => {
  const curFileName = vim.api.nvim_buf_get_name(CURRENT_BUFNR_HANDLE);
  const fileAbsolutePath = parsePath(curFileName).absolutePath;
  const cwd = vim.loop.cwd();

  if (isFileAlreadyMarked(cwd, fileAbsolutePath)) {
    unMarkFile(cwd, fileAbsolutePath);
    return;
  }

  markFileForCWD(cwd, fileAbsolutePath);
};

export const goToFile = (fileIndex: number) => {
  if (fileIndex <= 0) {
    print(
      "Expected only positive number on goToFile but instead got " + fileIndex
    );
    return;
  }

  const cwd = vim.loop.cwd();
  const file = getFileAtIndex(cwd, fileIndex - 1);

  if (file === null || file === "") {
    return;
  }

  const bufNr = vim.fn.bufadd(file);

  if (bufNr === 0) {
    print("Some error while creating buffer for file " + file);
    return;
  }

  vim.api.nvim_set_current_buf(bufNr);
  vim.api.nvim_buf_set_option(bufNr, "buflisted", true);
};

vim.keymap.set("n", "<space>ll", toggleMarkFile);
vim.keymap.set("n", "<space>l1", () => goToFile(1));
vim.keymap.set("n", "<space>l2", () => goToFile(2));

