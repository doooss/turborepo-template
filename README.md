# MONOREPO 템플릿 (with turborepo)

> 해당 템플릿은 pnpm 의 사용에 최적화 되어있습니다.

## Env

pnpm 7.27.0
vscode
node 16.9.0

## 개별 패키지별 라이브러리 관리

```zsh
    pnpm add <dependency-name> --filter <workspace>
```

## 모든 프로젝트의 해당 라이브러리 한꺼번에 업데이트

```zsh
    pnpm recursive upgrade <dependency-name>
```

> 공통 devdependency로 사용되는 라이브러리의 경우 recursive 로 관리하는 것을 강력 추천합니다.

## 컨벤션

- app 디렉토리 에서는 pages 에 직접적으로 사용되는 것만 사용합니다.

- packages 디렉토리 는 src/index.ts 를 통해 모두 export 해서 받아옵니다.

- test는 \_\_test\_\_ 폴더를 권장합니다. (빌드시 예외처리 설정되어있습니다.)
