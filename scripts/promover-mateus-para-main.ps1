param(
  [string]$SourceBranch = "mateus",
  [string]$TargetBranch = "main"
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

$StartBranch = (git branch --show-current).Trim()

Write-Host ">> Indo para $SourceBranch"
Run-Git -Args @("checkout", $SourceBranch)
Write-Host ">> Atualizando $SourceBranch local"
Run-Git -Args @("pull", "origin", $SourceBranch)

Write-Host ">> Indo para $TargetBranch"
Run-Git -Args @("checkout", $TargetBranch)
Write-Host ">> Atualizando $TargetBranch local"
Run-Git -Args @("pull", "origin", $TargetBranch)

Write-Host ">> Merge de $SourceBranch em $TargetBranch"
& git merge --no-ff $SourceBranch -m "merge: $SourceBranch -> $TargetBranch"
if ($LASTEXITCODE -ne 0) {
  throw "Conflito de merge detectado. Resolva manualmente."
}

Write-Host ">> Enviando $TargetBranch para origin"
Run-Git -Args @("push", "origin", $TargetBranch)

if (-not [string]::IsNullOrWhiteSpace($StartBranch)) {
  Write-Host ">> Voltando para $StartBranch"
  Run-Git -Args @("checkout", $StartBranch)
}

Write-Host ">> Processo concluido com sucesso."
