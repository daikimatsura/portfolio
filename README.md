# Daiki Matsuura ポートフォリオサイト

このリポジトリは、私のポートフォリオサイトのソースコードです。<br/>
Next.js、Shadcn UI、Tailwind CSSを使用して構築されており、私の経歴、スキルなどを紹介しています。

## 🌟 特徴

- **モダンなUI/UX**: Shadcn UIとTailwind CSSを使用した美しく、レスポンシブなデザイン
- **パフォーマンス最適化**: Next.jsのApp Routerを活用した高速なページロード
- **アニメーション**: Framer Motionによる滑らかなアニメーション効果
- **ダークモード対応**: システム設定に連動するダークモード/ライトモードの切り替え
- **タイプセーフ**: TypeScriptによる型安全な開発環境

## 🛠️ 技術スタック

- **フレームワーク**: [Next.js](https://nextjs.org/) (App Router)
- **言語**: [TypeScript](https://www.typescriptlang.org/)
- **スタイリング**: [Tailwind CSS](https://tailwindcss.com/)
- **UIコンポーネント**: [Shadcn UI](https://ui.shadcn.com/)
- **アニメーション**: [Framer Motion](https://www.framer.com/motion/)
- **デプロイ**: [Vercel](https://vercel.com/)

## 📋 プロジェクト構造

プロジェクトはアトミックデザインパターンに基づいて構築されています：

```
src/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # ルートレイアウト
│   ├── page.tsx          # ホームページ
│   └── ...               # その他のページ
├── components/           # コンポーネント
│   ├── atoms/            # 基本的なUI要素
│   ├── molecules/        # 複数のatomsを組み合わせた要素
│   ├── organisms/        # 複数のmoleculesを組み合わせた機能的なセクション
│   ├── templates/        # ページのレイアウト構造
│   └── ui/               # Shadcn UIコンポーネント
├── lib/                  # ユーティリティ関数
├── styles/               # グローバルスタイル
└── types/                # TypeScript型定義
```

## 🚀 始め方

### 前提条件

- Node.js 18.x以上
- Yarn または npm

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/daikimatsura/portfolio.git
cd portfolio

# 依存関係をインストール
yarn install
# または
npm install
```

### 開発サーバーの起動

```bash
# 開発サーバーを起動
yarn dev
# または
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてサイトを確認できます。

### ビルドと本番環境での実行

```bash
# 本番用にビルド
yarn build
# または
npm run build

# 本番サーバーを起動
yarn start
# または
npm start
```

## 📝 主な機能

- **ホームページ**: 自己紹介と主要なナビゲーション
- **職務経歴**: これまでの職務経歴と実績
- **スキル**: 技術スタックと専門知識
- **プロジェクト**: 過去のプロジェクト実績
- **ブログ**: 技術記事やナレッジシェア
- **お問い合わせ**: コンタクトフォーム

## 📐 開発ガイドライン

### コーディング規約

このプロジェクトでは以下のコーディング規約に従っています：

1. **コンポーネント設計**:

   - アトミックデザインパターンを採用
   - 再利用可能なコンポーネントの抽出と共通化
   - 単一責任の原則に従ったコンポーネント設計

2. **TypeScript**:

   - 厳格な型付けを実施
   - インターフェースと型エイリアスの適切な使い分け
   - 型定義は`src/types`ディレクトリで集中管理

3. **スタイリング**:

   - Tailwind CSSのユーティリティクラスを優先使用
   - 条件付きクラス名には`cn()`ユーティリティ関数を使用
   - カラーパレットはダークテーマベースで統一

4. **状態管理**:
   - ローカル状態にはReactフック（useState, useReducer）を使用
   - サーバーコンポーネントでのサーバーサイド状態管理
   - 必要に応じてコンテキストを使用したグローバル状態管理

### コードレビュー基準

プルリクエストのレビュー時には以下の点を確認します：

- コードの可読性と保守性
- パフォーマンスへの影響
- アクセシビリティ対応
- セキュリティ上の問題
- テストカバレッジ
- ブラウザ互換性

## 🧪 テスト

このプロジェクトではJestとReact Testing Libraryを使用してテストを実装しています。

```bash
# すべてのテストを実行
yarn test
# または
npm test

# 監視モードでテストを実行（ファイル変更時に自動的に再実行）
yarn test:watch
# または
npm run test:watch

# カバレッジレポートを生成
yarn test:coverage
# または
npm run test:coverage
```

### テスト環境の設定

- **Jest**: テストランナーとして使用
- **React Testing Library**: コンポーネントのテストに使用
- **JSX変換**: 新しいReact JSX変換を使用（高速なパフォーマンス）
- **モック**: 外部依存関係（API、アイコンなど）は適切にモック化

テストファイルは各コンポーネントと同じディレクトリ構造で `src/__tests__` ディレクトリに配置されています。

```
src/__tests__/
├── unit/                 # 単体テスト
│   ├── components/       # コンポーネントテスト
│   │   ├── atoms/        # 基本的なUI要素のテスト
│   │   ├── molecules/    # 複合コンポーネントのテスト
│   │   └── organisms/    # 機能的なセクションのテスト
│   └── hooks/            # カスタムフックのテスト
└── integration/          # 統合テスト
```

## 🔍 パフォーマンス最適化

このプロジェクトでは以下のパフォーマンス最適化を実施しています：

- **画像最適化**: Next.jsの`Image`コンポーネントを使用
- **コード分割**: 動的インポートによるバンドルサイズの削減
- **サーバーサイドレンダリング**: 初期ロード時間の短縮
- **キャッシュ戦略**: 適切なキャッシュヘッダーの設定
- **Web Vitals**: Core Web Vitalsの継続的なモニタリングと改善

## 👨‍💻 作者

- **daiki matsura** - [GitHub](https://github.com/daikimatsura)

## 🙏 謝辞

- [Next.js Team](https://nextjs.org/): 素晴らしいフレームワークの提供
- [Shadcn UI](https://ui.shadcn.com/): 美しいUIコンポーネント
- [Vercel](https://vercel.com/): ホスティングとデプロイ環境の提供

---

© 2025 Daiki Matsuura. All Rights Reserved.
