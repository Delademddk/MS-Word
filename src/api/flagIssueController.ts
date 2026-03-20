import { faker } from "@faker-js/faker";
import type { Issue } from "../MSWord/pages/RfpFlagPage";

//Get flagged issues
export function getFlaggedIssues(): Issue[] {
  return JSON.parse(localStorage.getItem("issues") || "[]");

}

//Get a flagged issue
export function getFlaggedIssue(id: string): Issue | string {
  const issues = getFlaggedIssues();
  const issue = issues.find((issue) => issue.id === id);
  if (issue) {
    return issue;
  } else {
    return "Did not find Issue";
  }
}

//Delete flagged issue
export function deleteFlaggedIssue(id: string) {
  const issues = getFlaggedIssues();
  const filteredIssue = issues.filter((issue) => issue.id !== id);
  localStorage.setItem("issues", JSON.stringify(filteredIssue));
}

//Add flagged issue
export function addFlaggedIssue(issue: Issue) {
  const issues = getFlaggedIssues();
  issues.push({...issue, id: faker.string.uuid()});
  localStorage.setItem("issues", JSON.stringify(issues));
  
}

//Edit/Update flagged issue
export function editFlaggedIssue(editedIssue: Issue) {
  const issues = getFlaggedIssues();
  const issue = issues.find((issue) => issue.id === editedIssue.id);
  if (!issue) {
    return "Did not find Issue";
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
export function deleteAllFlaggedIssues(){
    localStorage.setItem("issues", JSON.stringify([]))
}