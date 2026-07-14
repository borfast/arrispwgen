# Security Policy

## Supported Versions

Only the latest published version of `@borfast/arrispwgen` is supported with
security updates.

## Reporting a Vulnerability

Please report vulnerabilities privately via GitHub's
[private vulnerability reporting](https://github.com/borfast/arrispwgen/security/advisories/new)
for this repository. Do not open a public issue for security problems.

## Scope note

This library intentionally implements the publicly documented Arris
"password of the day" algorithm, including its default seed. The weakness of
that algorithm is the reason this project exists and is not a vulnerability
in this library. Reports should concern the code, its dependencies, or the
release pipeline — not the vendor algorithm itself.
