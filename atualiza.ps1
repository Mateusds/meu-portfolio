param(
  [string]$CommitMessage = "chore: atualiza portfolio"
)

$ErrorActionPreference = "Stop"

$BranchDev = "mateus"
$BranchMain = "main"

function Run-Git {
  param(
    [Parameter(Mandatory = $true)]
    [string[]]$Args
  )

  & git @Args
  if ($LASTEXITCODE -ne 0) {
    throw "Falha ao executar: git $($Args -join ' ')"
  }
}

git rev-parse --is-inside-work-tree *> $null
if ($LASTEXITCODE -ne 0) {
  throw "Erro: execute dentro de um repositorio Git."
}

git remote get-url origin *> $null
if ($LASTEXITCODE -ne 0) {
  throw "Erro: remote 'origin' nao configurado."
}

Write-Host ">> Indo para branch $BranchDev"
git show-ref --verify --quiet "refs/heads/$BranchDev"
if ($LASTEXITCODE -eq 0) {
  Run-Git -Args @("checkout", $BranchDev)
} else {
  Run-Git -Args @("checkout", "-b", $BranchDev)
}

Write-Host ">> Commitando alteracoes em $BranchDev"
Run-Git -Args @("add", ".")
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "Nenhuma alteracao para commit em $BranchDev."
} else {
  Run-Git -Args @("commit", "-m", $CommitMessage)
}

Write-Host ">> Enviando $BranchDev para origin"
Run-Git -Args @("push", "-u", "origin", $BranchDev)

Write-Host ">> Indo para $BranchMain"
Run-Git -Args @("checkout", $BranchMain)

Write-Host ">> Atualizando $BranchMain local"
Run-Git -Args @("pull", "origin", $BranchMain)

Write-Host ">> Fazendo merge de $BranchDev em $BranchMain"
& git merge --no-ff $BranchDev -m "merge: $BranchDev -> $BranchMain"
if ($LASTEXITCODE -ne 0) {
  throw "Conflito de merge detectado. Resolva manualmente."
}

Write-Host ">> Enviando $BranchMain para origin"
Run-Git -Args @("push", "origin", $BranchMain)

Write-Host ">> Processo concluido com sucesso."
