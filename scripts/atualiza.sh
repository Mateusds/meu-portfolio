#!/usr/bin/env bash
set -euo pipefail

BRANCH_DEV="mateus"
BRANCH_MAIN="main"
COMMIT_MSG="${1:-chore: atualiza portfolio}"

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Erro: execute dentro de um repositorio Git."
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Erro: remote 'origin' nao configurado."
  exit 1
fi

echo ">> Indo para branch ${BRANCH_DEV}"
if git show-ref --verify --quiet "refs/heads/${BRANCH_DEV}"; then
  git checkout "${BRANCH_DEV}"
else
  git checkout -b "${BRANCH_DEV}"
fi

echo ">> Commitando alteracoes em ${BRANCH_DEV}"
git add .
if git diff --cached --quiet; then
  echo "Nenhuma alteracao para commit em ${BRANCH_DEV}."
else
  git commit -m "${COMMIT_MSG}"
fi

echo ">> Enviando ${BRANCH_DEV} para origin"
git push -u origin "${BRANCH_DEV}"

echo ">> Indo para ${BRANCH_MAIN}"
git checkout "${BRANCH_MAIN}"

echo ">> Atualizando ${BRANCH_MAIN} local"
git pull origin "${BRANCH_MAIN}"

echo ">> Fazendo merge de ${BRANCH_DEV} em ${BRANCH_MAIN}"
git merge --no-ff "${BRANCH_DEV}" -m "merge: ${BRANCH_DEV} -> ${BRANCH_MAIN}" || {
  echo "Conflito de merge detectado. Resolva manualmente."
  exit 1
}

echo ">> Enviando ${BRANCH_MAIN} para origin"
git push origin "${BRANCH_MAIN}"

echo ">> Processo concluido com sucesso."
