const git = {
    init: {
        fxn: "initialize git repo"
    },
    remote: {
        cmd: "git remote add origin <- link -> || add remote origin",
        cmd1: "git remove -v || to verify remote",
        cmd2: "git branch -M <- branch_name -> || to rename branch",
        "-u": "to set upstream || same branch push",
        branch: {
            "git branch": "to check branch",
            "git branch -M main": "to rename branch",
            "git checkout <- branch_name ->": "to navigate",
            "git checkout -b <- branch_name ->": "create new branch",
            "git branch -d <- branch_name ->": "delete branch",
            "mosh hamedani": "Reactjs",
            "academind": ""
        }
    },
    "untracked": "new files that git doesn't yet track",
    "modified": "changed",
    "stagged": "file is ready to be committed",
    "unmodified": "unchanged",
    add: {
        fxn: "adds new or changed files in your working directory to the git staging area",
        cmd: "git add <- filename -> OR git add . "
    },
    commit: {
        fxn: "It is the record of change",
        cmd: "git commit -m 'commit message'"
    },
    push: {
        fxn: "unload local repo to remote repo",
        cmd: "git push origin main",
        origin: "github repo",
    },
    merge: {
        "git diff <- b_name ->": "to compare commits, branches, files and more",
        "git merge <- b_name ->": "to merge 2 branches"
    },
    undo: {
     case1: "stagged chnages | git reset <- file_name -> | git reset",
     case2: "commited changes | git reset HEAD~1 (for one commit)",
     case3: "commited changes | git reset <- commit hash -> / git reset --hard <- commit hash ->"
    }
}