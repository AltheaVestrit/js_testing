# Solo Developer Git Workflow for Keeping History Clean

## ✅ 1. Start with a Feature Branch
Always create a branch for new work:
```bash
git checkout -b feature/my-new-feature
```

## ✅ 2. Commit Frequently, But Meaningfully
Use small, logical commits:
```bash
git add -p
git commit -m "Implement parser for X"
```
If you need a WIP commit:
```bash
git commit -m "WIP: working on parser"
```

## ✅ 3. Push at End of Day (Backup)
Even if messy:
```bash
git push origin feature/my-new-feature
```

## ✅ 4. Next Day: Finish Work & Clean Up
**Option A: Amend last commit:**
```bash
git add -A
git commit --amend -m "Complete parser implementation"
git push --force-with-lease
```

**Option B: Squash multiple commits:**
```bash
git rebase -i origin/main
```
Mark WIP commits as `squash` or `fixup`.
Or use autosquash:
```bash
git rebase -i --autosquash origin/main
```

## ✅ 5. Review History Before Merge
```bash
git log --graph --decorate --oneline
```

## ✅ 6. Merge Cleanly
If using GitHub PR: choose **Squash and Merge**.
If merging locally:
```bash
git checkout main
git merge --ff-only feature/my-new-feature
```

## ✅ 7. Delete Feature Branch
After merging:
```bash
git branch -d feature/my-new-feature
git push origin --delete feature/my-new-feature
```

---

### 🔑 Key Principles
- **Feature branches** = freedom to rewrite history.
- **Force-push is safe** when solo, but always use `--force-with-lease`.
- **Interactive rebase** = your best friend for cleanup.
- **Squash before merging** for one coherent commit per feature.
