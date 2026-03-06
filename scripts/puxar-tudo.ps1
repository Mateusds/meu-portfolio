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

Write-Host ">> Atualizando referencias remotas"
Run-Git -Args @("fetch", "--all")

Write-Host ">> Atualizando mateus"
Run-Git -Args @("checkout", "mateus")
Run-Git -Args @("pull", "origin", "mateus")

Write-Host ">> Atualizando main"
Run-Git -Args @("checkout", "main")
Run-Git -Args @("pull", "origin", "main")

if (-not [string]::IsNullOrWhiteSpace($StartBranch)) {
  Write-Host ">> Voltando para $StartBranch"
  Run-Git -Args @("checkout", $StartBranch)
}

Write-Host ">> Concluido."
