import { faker } from "@faker-js/faker";
import type { Issue } from "../MSWord/pages/RfpFlagPage";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

//Get flagged issues
export async function getFlaggedIssues(): Promise<Issue[]> {
  await delay(1000);
  return JSON.parse(localStorage.getItem("issues") || "[]");
}

//Get a flagged issue
export async function getFlaggedIssue(id: string): Promise<Issue>  {
  await delay(1000);
  const issues = await getFlaggedIssues();
  const issue = issues.find((issue) => issue.id === id);
  if (issue) {
    return issue;
  } else {
    throw new Error("Did not find Issue");
  }
}

//Delete flagged issue
export async function deleteFlaggedIssue(id: string): Promise<void> {
  await delay(1000);
  const issues = await getFlaggedIssues();
  const filteredIssue = issues.filter((issue) => issue.id !== id);
  localStorage.setItem("issues", JSON.stringify(filteredIssue));
}

//Add flagged issue
export async function addFlaggedIssue(issue: Issue): Promise<void> {
  await delay(1000);
  const issues =  await getFlaggedIssues();
  issues.push({ ...issue, id: faker.string.uuid() });
  localStorage.setItem("issues", JSON.stringify(issues));
}

//Edit/Update flagged issue
export async function editFlaggedIssue(editedIssue: Issue): Promise<void> {
  await delay(1000);
  const issues = await getFlaggedIssues();
  const issue = issues.find((issue) => issue.id === editedIssue.id);
  if (!issue) {
    throw new Error("Did not find Issue");
  } else {
    issue.title = editedIssue.title;
    issue.category = editedIssue.category;
    issue.description = editedIssue.description;
    issue.risk = editedIssue.risk;
    issue.resolve = editedIssue.resolve;
  }
  localStorage.setItem("issues", JSON.stringify(issues));
}

//Delete all
export async function deleteAllFlaggedIssues(): Promise<void> {
  await delay(1000);
  localStorage.setItem("issues", JSON.stringify([]));
}