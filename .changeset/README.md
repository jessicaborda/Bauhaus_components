# Changesets

This project uses **Changesets** to manage versioning and releases.

## Create a changeset (in a PR)

```bash
npm run changeset
```

Choose the bump type (patch/minor/major) and write a short summary of the change.
Commit the generated file in `.changeset/` along with your code changes.

## What happens after merge

When PRs with changesets are merged into `main`, GitHub Actions will:

1. Open (or update) a **"Version Packages"** PR that bumps versions and updates `CHANGELOG.md`.
2. When that PR is merged, it will publish to npm and create a GitHub Release/tag.


