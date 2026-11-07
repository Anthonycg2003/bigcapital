# Webapp static bundle (Cursor hosting)

This folder is a **copy** of `packages/webapp/dist` after `pnpm run build:webapp` from the repository root. It exists so Cursor’s publish step can pack a small set of files (the full `packages/webapp` tree exceeds the hosting pack file limit).

**Update before publishing:** from the repo root, run `pnpm run build:webapp` then:

```bash
rm -rf packages/webapp-publish/*
cp -a packages/webapp/dist/. packages/webapp-publish/
```

Do not edit built assets here by hand; regenerate from the Vite build.
