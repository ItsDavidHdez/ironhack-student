**What is the purpose of the Feature Branch Workflow in Git?**

_To have better control in the different auxiliary workflows that can be presented, such as a feature, a bug, a bugfix or an entire project:_

**How do you set up a new Git repository for your project?**
_First we start git in our project with `git init`.
The next step is to create a .gitignore file where we will tell git which files NOT to upload to the remote repository.
To add a new change we add in staging the file that we want with `git add ./index.html`.
That file will be in staging, to commit that file we will do it with the command `git commit -m "initial commit"`.
To upload it to the remote repository, just do a `git push origin_name branch_name`, without first doing a `git pull` of the branch._

**What is the main branch in the Feature Branch Workflow?**
_Master or Main_

**How do you create a new branch for a specific feature or task?**
_`git branch new_branch y git checkout new_branch` || `git checkout -b nueva_rama`_

**How do you switch to a different branch in Git?**
_`git checkout`_

**How do you make changes and track your progress in the feature branch?**
_`git add ./index.js` and `git status`_

**How do you merge a feature branch into the main branch?**

- `git checkout master`
- `git pull origin master`
- `git merge feature/TICKET1234`

**What should you do if there are merge conflicts during the merge process?**
_The first thing is to open the file and resolve the conflicts, it can be done manually (recommended) or with the help of Visual Studio Code, after resolving the conflicts we add the changes with git add . and upload to the remote repository the merge._

**Why is it important to test the merged codebase after completing the merge?**
_Because involuntary changes that we have not paid attention to can be included and they have gone into the merge_

**What are some additional challenges you can undertake to enhance your understanding of the Feature Branch Workflow?**
_Create branches of the subbranches of the main branch performing some action as a solution to a bug, or a small feature, in order not to affect the Feature Branch_

**How do you delete a feature branch after merging it into the main branch?**
_`git branch -d my_local_branch`_
_`git push origin --delete remoteBranchName`_
_Also in the GitHub or Bitbucket PRs it gives you the option to delete the branch after the merge_

**What is the purpose of code reviews in the Feature Branch Workflow?**

- _Code Quality Review_
- _Do not affect other functionalities_
- _Good practices_
- _clean code_
- _Avoid bugs_

**How do you push your feature branch to a remote repository?**
_`git push origin remote_branch`_

**What is the recommended approach for naming feature branches in the Feature Branch Workflow?**
_A good practice would be feature/F3342 (issue ticket number or feature name)_

**How can you keep your feature branch up to date with the latest changes from the main branch?**
_`git fetch`_
