# kintone-utility-secrets

kintone の非公式 API や内部パラメータを取り扱うためのパッケージです。

**このパッケージから提供される各関数・クラスは、kintone のアップデートにより動作しなくなる可能性があります。**

[ホームページ](https://ribbit.konomi.app)

[お問い合わせ](https://form.konomi.app)

## 非公式 API の型定義を使用する

`tsconfig.json`の`files`に以下のパスを追加することで、`cybozu`から始まる非公式 API の型を参照できます。

```json
{
  //...

  "files": ["./node_modules/@lb-ribbit/kintone-secrets/cybozu.d.ts"]
}
```
