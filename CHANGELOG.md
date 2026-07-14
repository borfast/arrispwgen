# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [6.0.0] - 2026-07-14

### Breaking

- Node.js >= 24.18.0 (current LTS) is now required. The library itself is
  unchanged, but older runtimes are no longer supported.

### Changed

- Complete toolchain modernization:
  - Build: ttypescript + custom import transformer replaced by plain `tsc`
    (TypeScript 7) with `module: nodenext`.
  - Tests: Jest + ts-jest replaced by Vitest; tests are now co-located with
    the source and type-checked.
  - Lint/format: ESLint replaced by Biome.
  - CI: Travis CI replaced by GitHub Actions (Node 24 + latest, optional Bun job).
- Package metadata: added an `exports` map with a `types` condition and
  `sideEffects: false`; build output moved from `lib/` to `dist/`. Deep imports
  into package internals are no longer possible — import from
  `@borfast/arrispwgen` only.

## [5.0.1] and earlier

See the git history.
