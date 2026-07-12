# 710演習問題 学習クイズ

PDFの60問をランダムに学習するローカルWebアプリです。問題順と選択肢順を毎回変更し、正解した問題では解説に基づく理解チェックが出題されます。

## 起動

```bash
npm install
npm run dev -- --host 127.0.0.1
```

表示された `http://127.0.0.1:5173/` をPCのブラウザで開きます。

## 検証

```bash
npm test
npm run build
```

## GitHubへ登録するファイル

このフォルダ内をすべて登録してください。`node_modules`、`dist`、`work` は `.gitignore` により除外されます。

PDFから抽出データを再生成する補助スクリプトは、Popplerと`pdfplumber`を用意したうえで次のように実行します。通常のアプリ起動には不要です。

```bash
python scripts/extract_pdf.py /path/to/source.pdf
```
