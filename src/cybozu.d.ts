namespace cx {
  type BooleanAsString = 'ture' | 'false';

  type BaseFieldProperty = {
    id: string;
    var: string;
    label: string;
  };

  type Field = BaseFieldProperty & {
    type: string;
    properties: {
      defaultValue: string;
      expression: string;
      hideExpression: BooleanAsString;
      isLookup: boolean;
      lookup?: unknown;
      max: unknown;
      min: unknown;
      noLabel: BooleanAsString;
      required: BooleanAsString;
      unique: BooleanAsString;
    };
  };

  type Table = BaseFieldProperty & {
    fieldList: Record<string, Field>;
    properties: { noLabel: BooleanAsString };
    type: 'TABLE';
  };

  type Schema = {
    groups: any[];
    revision: string;
    subTable: Record<string, Table>;
    table: Table;
  };
}

declare namespace cybozu {
  namespace data {
    export const IS_MOBILE_DEVICE: boolean;
    export const APP_DEPLOYED: boolean;
    export const APP_ID: string;
    export const APP_NAME: string;
    export const VIEW_ID: string;

    namespace page {
      namespace SCHEMA_DATA {
        export const groups: Array<any>;
        export const revision: string;
        export const subTable: Record<string, cx.Table>;
        export const table: cx.Table;
      }
      namespace FORM_DATA {
        namespace schema {
          export const groups: Array<any>;
          export const revision: string;
          export const subTable: Record<string, cx.Table>;
          export const table: cx.Table;
        }
      }
    }
  }
}
