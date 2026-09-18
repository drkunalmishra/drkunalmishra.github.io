#!/usr/bin/env bash
# ==============================================================================
# Deployment Script for Kunal Mishra Portfolio to GitHub Pages
# ==============================================================================
set -e

echo "🚀 [1/3] Building static production bundle with Vite..."
npm run build

echo "📦 [2/3] Verifying dist directory and assets..."
if [ ! -d "dist" ]; then
  echo "❌ Error: dist directory was not created!"
  exit 1
fi

echo "🌐 [3/3] Deploying 'dist' bundle to GitHub Pages via gh-pages..."
# Ensure remote repository exists before running gh-pages
if git remote -v | grep -q 'origin'; then
  npx gh-pages -d dist
  echo "✅ Successfully deployed to GitHub Pages!"
  echo "🔗 Your portfolio is live at your GitHub Pages URL (e.g. https://<username>.github.io/<repo-name>/)"
else
  echo "⚠️ Note: No git remote 'origin' found."
  echo "To link your GitHub repository and deploy, run:"
  echo "  git init"
  echo "  git remote add origin https://github.com/<your-username>/<your-repo-name>.git"
  echo "  git add ."
  echo "  git commit -m 'Initial release of Kunal Mishra Enterprise AI Portfolio'"
  echo "  git branch -M main"
  echo "  git push -u origin main"
  echo "  npm run deploy"
fi
