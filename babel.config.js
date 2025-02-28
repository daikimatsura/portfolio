module.exports = function (api) {
  // キャッシュを有効化（パフォーマンス向上）
  api.cache(true);

  // 共通のBabel設定
  const presets = [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
        },
      },
    ],
  ];

  // すべての環境で同じ設定を使用
  return {
    presets,
  };
};
