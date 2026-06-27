param(
    [Parameter(Mandatory=$true)]
    [string]$FilePath
)

$orgId       = $env:SIGNPATH_ORGANIZATION_ID
$apiToken    = $env:SIGNPATH_API_TOKEN
$project     = "winscript"
$policy      = "release-signing"
$artifactCfg = "single-exe"

if (-not (Get-Module -ListAvailable -Name SignPath)) {
    Install-Module SignPath -MinimumVersion 4.0.0 -MaximumVersion 4.999.999 -Force -Scope CurrentUser
}
Import-Module SignPath

Submit-SigningRequest `
    -InputArtifactPath  $FilePath `
    -OutputArtifactPath $FilePath `
    -OrganizationId     $orgId `
    -ApiToken           $apiToken `
    -ProjectSlug        $project `
    -SigningPolicySlug  $policy `
    -ArtifactConfigurationSlug $artifactCfg `
    -WaitForCompletion

if ($LASTEXITCODE -ne 0) {
    Write-Error "SignPath signing failed for: $FilePath"
    exit 1
}

Write-Host "Signed successfully: $FilePath"
