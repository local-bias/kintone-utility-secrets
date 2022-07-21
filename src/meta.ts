export namespace cx {
  export type Schema =
    | typeof cybozu.data.page.SCHEMA_DATA
    | typeof cybozu.data.page.FORM_DATA.schema;
  export type Field = typeof cybozu.data.page.SCHEMA_DATA.table.fieldList[string];
}

const getSchema = (): cx.Schema | null =>
  cybozu?.data?.page?.SCHEMA_DATA || cybozu?.data?.page?.FORM_DATA?.schema || null;

/**
 * **この関数は非公式のAPIを使用しています。kintoneのアップデートにより使用できなくなる可能性があります**
 *
 * 内部的に使用されている、フィールドのメタデータを取得します
 *
 * @returns フィールドのメタデータ一覧、またはnull
 */
export const getMetaFields_UNSTABLE = (): cx.Field[] | null => {
  const schema = getSchema();
  const fieldList = schema?.table?.fieldList;
  if (!fieldList) {
    return null;
  }

  return Object.values(fieldList);
};

/**
 * **この関数は非公式のAPIを使用しています。kintoneのアップデートにより使用できなくなる可能性があります**
 *
 * フィールドコードから、紐づくフィールドの内部的に使用されている一意なフィールドIDを返却します
 *
 * @param code フィールドコード
 * @returns フィールドID、またはnull
 */
export const getMetaFieldId_UNSTABLE = <T = any>(code: keyof T) => {
  const fields = getMetaFields_UNSTABLE();
  if (!fields) {
    return null;
  }

  for (const field of fields) {
    if (field?.var === code) {
      return field?.id || null;
    }
  }
  return null;
};

/**
 * **この関数は非公式のAPIを使用しています。kintoneのアップデートにより使用できなくなる可能性があります**
 *
 * @param subtableCode サブテーブルのフィールドコード
 * @returns サブテーブル内に存在するフィールドのメタデータ一覧、またはnull
 */
export const getMetaSubtableFields_UNSTABLE = (subtableCode: string): cx.Field[] | null => {
  const schema = getSchema();
  const subtable = schema?.subTable;
  if (!subtable) {
    return null;
  }

  const subtableList = Object.values(subtable);

  for (const subtable of subtableList) {
    const fieldList = subtable?.fieldList;
    if (!fieldList) {
      continue;
    }
    if (subtable?.var === subtableCode) {
      return Object.values(fieldList);
    }
  }

  return null;
};
