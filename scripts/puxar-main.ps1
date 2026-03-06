param(
  [string]$Branch = "main"
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

Write-Host ">> Indo para branch $Branch"
Run-Git -Args @("checkout", $Branch)

Write-Host ">> Puxando atualizacoes de origin/$Branch"
Run-Git -Args @("pull", "origin", $Branch)

Write-Host ">> Concluido."
