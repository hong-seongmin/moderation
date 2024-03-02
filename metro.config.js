const { getDefaultConfig } = require("@expo/metro-config");
const path = require("path");

// 프로젝트 루트 디렉토리의 절대 경로를 설정합니다.
const projectRootPath = path.resolve(__dirname);

// 'assets' 폴더의 절대 경로를 설정합니다.
const assetsFolderPath = path.resolve(projectRootPath, "assets");

// Expo의 기본 Metro 설정을 가져옵니다.
const defaultConfig = getDefaultConfig(__dirname);

// Metro가 처리할 수 있는 자산 유형에 .mp3 파일 확장자를 추가합니다.
defaultConfig.resolver.assetExts.push("mp3");

// 'assets' 폴더를 절대 경로로 해석하기 위해 resolver의 extraNodeModules 설정을 수정합니다.
defaultConfig.resolver.extraNodeModules = new Proxy(
  {},
  {
    get: (target, name) => {
      if (name === "assets") {
        return assetsFolderPath;
      }
      return path.join(projectRootPath, "node_modules", name);
    },
  }
);

// Metro가 'assets' 폴더의 변경사항을 감지할 수 있도록 watchFolders 배열에 추가합니다.
if (!defaultConfig.watchFolders.includes(assetsFolderPath)) {
  defaultConfig.watchFolders.push(assetsFolderPath);
}

module.exports = defaultConfig;
