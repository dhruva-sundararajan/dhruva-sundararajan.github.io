# Generate Lock File (Optional)

If you want to generate the `package-lock.json` file locally (which can speed up future deployments), follow these steps:

## Install Node.js First

Follow the instructions in `setup.md` to install Node.js on your system.

## Generate Lock File

Once Node.js is installed, run:

```bash
npm install
```

This will:
1. Install all dependencies listed in `package.json`
2. Generate a `package-lock.json` file
3. Create a `node_modules` folder (which is ignored by git)

## Commit the Lock File

After running `npm install`, commit the generated lock file:

```bash
git add package-lock.json
git commit -m "Add package-lock.json for faster builds"
git push origin main
```

## Benefits

- **Faster builds**: GitHub Actions can use `npm ci` instead of `npm install`
- **Consistent dependencies**: Lock file ensures exact same versions are installed
- **Better caching**: GitHub Actions can cache dependencies more effectively

## Note

This is completely optional! The website will deploy successfully without the lock file, but having it makes builds faster and more reliable. 