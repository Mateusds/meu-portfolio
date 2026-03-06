param(
  [string]$CommitMessage = "chore: atualiza branch",
  [string]$TargetBranch = "mateus"
)

$ErrorActionPreference = "Stop"

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

$SourceBranch = (git branch --show-current).Trim()
if ([string]::IsNullOrWhiteSpace($SourceBranch)) {
  throw "Nao foi possivel identificar a branch atual."
}

if ($SourceBranch -eq $TargetBranch) {
  throw "Voce ja esta na branch '$TargetBranch'. Rode este script na sua branch de trabalho."
}

Write-Host ">> Branch de origem: $SourceBranch"
Write-Host ">> Commitando alteracoes em $SourceBranch"
Run-Git -Args @("add", ".")
git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
  Write-Host "Nenhuma alteracao para commit em $SourceBranch."
} else {
  Run-Git -Args @("commit", "-m", $CommitMessage)
}

Write-Host ">> Enviando $SourceBranch para origin"
Run-Git -Args @("push", "-u", "origin", $SourceBranch)

Write-Host ">> Indo para $TargetBranch"
git show-ref --verify --quiet "refs/heads/$TargetBranch"
if ($LASTEXITCODE -eq 0) {
  Run-Git -Args @("checkout", $TargetBranch)
} else {
  Run-Git -Args @("checkout", "-b", $TargetBranch)
}

Write-Host ">> Atualizando $TargetBranch local"
Run-Git -Args @("pull", "origin", $TargetBranch)

Write-Host ">> Merge de $SourceBranch em $TargetBranch"
& git merge --no-ff $SourceBranch -m "merge: $SourceBranch -> $TargetBranch"
if ($LASTEXITCODE -ne 0) {
  throw "Conflito de merge detectado. Resolva manualmente."
}

Write-Host ">> Enviando $TargetBranch para origin"
Run-Git -Args @("push", "origin", $TargetBranch)

Write-Host ">> Voltando para $SourceBranch"
Run-Git -Args @("checkout", $SourceBranch)

Write-Host ">> Processo concluido com sucesso."
